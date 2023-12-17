/**
 * Copyright © 2018 The Thingsboard Authors
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.thingsboard.rule.engine.node.external;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.web.client.RestTemplate;
import org.thingsboard.rule.engine.api.*;
import org.thingsboard.rule.engine.api.util.TbNodeUtils;
import org.thingsboard.server.common.data.EntityType;
import org.thingsboard.server.common.data.id.DeviceId;
import org.thingsboard.server.common.data.plugin.ComponentType;
import org.thingsboard.server.common.data.security.DeviceCredentials;
import org.thingsboard.server.common.msg.TbMsg;

import java.util.concurrent.ExecutionException;

import static org.thingsboard.server.common.data.msg.TbNodeConnectionType.SUCCESS;


@Slf4j
@RuleNode(
        type = ComponentType.EXTERNAL,
        name = "thingsboard",
        configClazz = TbFirebaseCloudMessageNodeConfiguration.class,
        nodeDescription = "Send message to another ThingsBoard instance",
        nodeDetails = "",
        uiResources = {"static/rulenode/custom-nodes-config.js"},
        configDirective = "tb-external-node-things-board-config")
public class TbThingsBoardNode implements TbNode {
    private static final Logger LOG = LogManager.getLogger(TbThingsBoardNode.class);

    private static final ObjectMapper mapper = new ObjectMapper();

    TbThingsBoardNodeConfiguration config;
    String host;
    RestTemplate restTemplate;

    @Override
    public void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbThingsBoardNodeConfiguration.class);
        host = config.getHost();
        restTemplate = new RestTemplate();
    }

    @Override
    public void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException {
        try {
            if (msg.getOriginator().getEntityType() == EntityType.DEVICE) {
                for (String h : host.split(",")) {
                    DeviceCredentials credentials = ctx.getDeviceCredentialsService().findDeviceCredentialsByDeviceId(ctx.getTenantId(), (DeviceId) msg.getOriginator());
                    String telemetry = String.format("{\"ts\":%d, \"values\":%s}", msg.getTs(), msg.getData());
                    restTemplate.postForLocation(String.format("%s/api/v1/%s/telemetry", h, credentials.getCredentialsId()), telemetry);
                }
            }
            ctx.tellNext(msg, SUCCESS);
        } catch (Exception e) {
            ctx.tellFailure(msg, e);
        }
    }

    @Override
    public void destroy() {
    }
}
