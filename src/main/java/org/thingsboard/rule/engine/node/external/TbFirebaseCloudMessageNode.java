/**
 * Copyright © 2018 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.thingsboard.rule.engine.node.external;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.thingsboard.rule.engine.api.*;
import org.thingsboard.rule.engine.api.util.TbNodeUtils;
import org.thingsboard.rule.engine.node.transform.TbCalculateSumNodeConfiguration;
import org.thingsboard.server.common.data.DataConstants;
import org.thingsboard.server.common.data.kv.AttributeKvEntry;
import org.thingsboard.server.common.data.plugin.ComponentType;
import org.thingsboard.server.common.msg.TbMsg;
import org.thingsboard.server.dao.attributes.AttributesService;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ExecutionException;

import static org.thingsboard.server.common.data.msg.TbNodeConnectionType.SUCCESS;


@Slf4j
@RuleNode(
        type = ComponentType.EXTERNAL,
        name = "firebase cloud message",
        configClazz = TbFirebaseCloudMessageNodeConfiguration.class,
        nodeDescription = "Send firebase cloud message",
        nodeDetails = "",
        uiResources = {"static/rulenode/custom-nodes-config.js"},
        configDirective = "tbExternalNodeFirebaseConfig")
public class TbFirebaseCloudMessageNode implements TbNode {
    private static final Logger LOG = LogManager.getLogger(TbFirebaseCloudMessageNode.class);

    private static final ObjectMapper mapper = new ObjectMapper();

    TbFirebaseCloudMessageNodeConfiguration config;
    String credential;

    private AttributesService attributesService;
    private FirebaseApp firebaseApp;
    private AndroidConfig androidConfig;

    @Override
    public void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbFirebaseCloudMessageNodeConfiguration.class);
        credential = config.getCredential();

        attributesService = ctx.getAttributesService();
        FirebaseOptions options;
        try (
                InputStream key = new ByteArrayInputStream(credential.getBytes(StandardCharsets.UTF_8))
        ) {
            options = FirebaseOptions.builder().setCredentials(GoogleCredentials.fromStream(key)).build();
        } catch (IOException e) {
            throw new TbNodeException(e);
        }
        try {
            firebaseApp = FirebaseApp.initializeApp(options);
        } catch (IllegalStateException alreadyExists) {
            firebaseApp = FirebaseApp.getInstance();
        }
        androidConfig = AndroidConfig.builder()
                .setTtl(3600 * 1000)
                .setNotification(AndroidNotification.builder().build())
                .setPriority(AndroidConfig.Priority.HIGH).build();
    }

    @Override
    public void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException {
        try {
            Optional<AttributeKvEntry> attr = attributesService.find(ctx.getTenantId(), msg.getOriginator(), DataConstants.SERVER_SCOPE, "registrationToken").get();
            if (attr.isPresent() && attr.get().getValueAsString().split(",").length > 0) {
                Message.Builder messageBuilder = Message.builder().setAndroidConfig(androidConfig);
                ObjectNode json = (ObjectNode) mapper.readTree(msg.getData());
                JsonNode fbMessage = json.get("message");
                JsonNode notification = fbMessage.get("notification");
                if (notification != null) {
                    messageBuilder.setNotification(Notification.builder()
                            .setTitle(notification.get("title").textValue())
                            .setBody(notification.get("body").textValue()).build());
                }

                JsonNode data = fbMessage.get("data");
                if (data != null) {
                    for (Iterator<Map.Entry<String, JsonNode>> it = data.fields(); it.hasNext(); ) {
                        Map.Entry<String, JsonNode> elt = it.next();
                        messageBuilder.putData(elt.getKey(), elt.getValue().textValue());
                    }
                }
                for (String token : attr.get().getValueAsString().split(",")) {
                    messageBuilder.setToken(token.trim());
                    FirebaseMessaging.getInstance().send(messageBuilder.build());
                }
                ctx.tellNext(msg, SUCCESS);
            } else {
                ctx.tellFailure(msg, new Exception("registrationToken server attribute is required"));
            }
        } catch (FirebaseMessagingException | JsonProcessingException e) {
            ctx.tellFailure(msg, new Exception());
        }
    }

    @Override
    public void destroy() {
        firebaseApp.delete();
    }
}
