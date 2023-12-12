System.register(["@angular/core","@shared/public-api","@angular/forms","@ngrx/store","@angular/material/input","@angular/material/form-field","@angular/flex-layout/flex","@ngx-translate/core","@angular/common","@home/components/public-api"],(function(t){"use strict";var e,o,r,n,a,i,l,m,s,u,p,c,d,f;return{setters:[function(t){e=t,o=t.Component,r=t.NgModule},function(t){n=t.RuleNodeConfigurationComponent,a=t.SharedModule},function(t){i=t.Validators,l=t},function(t){m=t},function(t){s=t},function(t){u=t},function(t){p=t},function(t){c=t},function(t){d=t.CommonModule},function(t){f=t.HomeComponentsModule}],execute:function(){class y extends n{constructor(t,e){super(t),this.store=t,this.fb=e}configForm(){return this.getSumIntoMetadataConfigForm}onConfigurationSet(t){this.getSumIntoMetadataConfigForm=this.fb.group({inputKey:[t?t.inputKey:null,[i.required]],outputKey:[t?t.outputKey:null,[i.required]]})}}t("GetSumIntoMetadataConfigComponent",y),y.ɵfac=e.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:y,deps:[{token:m.Store},{token:l.FormBuilder}],target:e.ɵɵFactoryTarget.Component}),y.ɵcmp=e.ɵɵngDeclareComponent({minVersion:"14.0.0",version:"15.2.10",type:y,selector:"tb-enrichment-node-sum-into-metadata-config",usesInheritance:!0,ngImport:e,template:'<section [formGroup]="getSumIntoMetadataConfigForm" fxLayout="column">\n    <mat-form-field class="mat-block">\n        <mat-label translate>tb.rulenode.input-key</mat-label>\n        <input matInput formControlName="inputKey" required>\n    </mat-form-field>\n    <mat-form-field class="mat-block">\n        <mat-label translate>tb.rulenode.output-key</mat-label>\n        <input matInput formControlName="outputKey" required>\n    </mat-form-field>\n</section>\n',dependencies:[{kind:"directive",type:s.MatInput,selector:"input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",inputs:["disabled","id","placeholder","name","required","type","errorStateMatcher","aria-describedby","value","readonly"],exportAs:["matInput"]},{kind:"component",type:u.MatFormField,selector:"mat-form-field",inputs:["hideRequiredMarker","color","floatLabel","appearance","subscriptSizing","hintLabel"],exportAs:["matFormField"]},{kind:"directive",type:u.MatLabel,selector:"mat-label"},{kind:"directive",type:p.DefaultLayoutDirective,selector:"  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]",inputs:["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"]},{kind:"directive",type:l.DefaultValueAccessor,selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"},{kind:"directive",type:l.NgControlStatus,selector:"[formControlName],[ngModel],[formControl]"},{kind:"directive",type:l.NgControlStatusGroup,selector:"[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]"},{kind:"directive",type:l.RequiredValidator,selector:":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",inputs:["required"]},{kind:"directive",type:l.FormGroupDirective,selector:"[formGroup]",inputs:["formGroup"],outputs:["ngSubmit"],exportAs:["ngForm"]},{kind:"directive",type:l.FormControlName,selector:"[formControlName]",inputs:["formControlName","disabled","ngModel"],outputs:["ngModelChange"]},{kind:"directive",type:c.TranslateDirective,selector:"[translate],[ngx-translate]",inputs:["translate","translateParams"]}]}),e.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:y,decorators:[{type:o,args:[{selector:"tb-enrichment-node-sum-into-metadata-config",template:'<section [formGroup]="getSumIntoMetadataConfigForm" fxLayout="column">\n    <mat-form-field class="mat-block">\n        <mat-label translate>tb.rulenode.input-key</mat-label>\n        <input matInput formControlName="inputKey" required>\n    </mat-form-field>\n    <mat-form-field class="mat-block">\n        <mat-label translate>tb.rulenode.output-key</mat-label>\n        <input matInput formControlName="outputKey" required>\n    </mat-form-field>\n</section>\n'}]}],ctorParameters:function(){return[{type:m.Store},{type:l.FormBuilder}]}});class g{}t("CustomNodesConfigEnrichmentModule",g),g.ɵfac=e.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:g,deps:[],target:e.ɵɵFactoryTarget.NgModule}),g.ɵmod=e.ɵɵngDeclareNgModule({minVersion:"14.0.0",version:"15.2.10",ngImport:e,type:g,declarations:[y],imports:[d,a],exports:[y]}),g.ɵinj=e.ɵɵngDeclareInjector({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:g,imports:[d,a]}),e.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:g,decorators:[{type:r,args:[{declarations:[y],imports:[d,a],exports:[y]}]}]});class x extends n{constructor(t,e){super(t),this.store=t,this.fb=e}configForm(){return this.checkKeyConfigForm}onConfigurationSet(t){this.checkKeyConfigForm=this.fb.group({key:[t?t.key:null,[i.required]]})}}t("CheckKeyConfigComponent",x),x.ɵfac=e.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:x,deps:[{token:m.Store},{token:l.FormBuilder}],target:e.ɵɵFactoryTarget.Component}),x.ɵcmp=e.ɵɵngDeclareComponent({minVersion:"14.0.0",version:"15.2.10",type:x,selector:"tb-filter-node-check-key-config",usesInheritance:!0,ngImport:e,template:'<section [formGroup]="checkKeyConfigForm" fxLayout="column">\n    <mat-form-field class="mat-block">\n        <mat-label translate>tb.rulenode.msg-key</mat-label>\n        <input matInput formControlName="key" required>\n    </mat-form-field>\n</section>\n',dependencies:[{kind:"directive",type:s.MatInput,selector:"input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",inputs:["disabled","id","placeholder","name","required","type","errorStateMatcher","aria-describedby","value","readonly"],exportAs:["matInput"]},{kind:"component",type:u.MatFormField,selector:"mat-form-field",inputs:["hideRequiredMarker","color","floatLabel","appearance","subscriptSizing","hintLabel"],exportAs:["matFormField"]},{kind:"directive",type:u.MatLabel,selector:"mat-label"},{kind:"directive",type:p.DefaultLayoutDirective,selector:"  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]",inputs:["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"]},{kind:"directive",type:l.DefaultValueAccessor,selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"},{kind:"directive",type:l.NgControlStatus,selector:"[formControlName],[ngModel],[formControl]"},{kind:"directive",type:l.NgControlStatusGroup,selector:"[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]"},{kind:"directive",type:l.RequiredValidator,selector:":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",inputs:["required"]},{kind:"directive",type:l.FormGroupDirective,selector:"[formGroup]",inputs:["formGroup"],outputs:["ngSubmit"],exportAs:["ngForm"]},{kind:"directive",type:l.FormControlName,selector:"[formControlName]",inputs:["formControlName","disabled","ngModel"],outputs:["ngModelChange"]},{kind:"directive",type:c.TranslateDirective,selector:"[translate],[ngx-translate]",inputs:["translate","translateParams"]}]}),e.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:x,decorators:[{type:o,args:[{selector:"tb-filter-node-check-key-config",template:'<section [formGroup]="checkKeyConfigForm" fxLayout="column">\n    <mat-form-field class="mat-block">\n        <mat-label translate>tb.rulenode.msg-key</mat-label>\n        <input matInput formControlName="key" required>\n    </mat-form-field>\n</section>\n'}]}],ctorParameters:function(){return[{type:m.Store},{type:l.FormBuilder}]}});class C{}t("CustomNodesConfigFilterModule",C),C.ɵfac=e.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:C,deps:[],target:e.ɵɵFactoryTarget.NgModule}),C.ɵmod=e.ɵɵngDeclareNgModule({minVersion:"14.0.0",version:"15.2.10",ngImport:e,type:C,declarations:[x],imports:[d,a],exports:[x]}),C.ɵinj=e.ɵɵngDeclareInjector({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:C,imports:[d,a]}),e.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:C,decorators:[{type:r,args:[{declarations:[x],imports:[d,a],exports:[x]}]}]});class b extends n{constructor(t,e){super(t),this.store=t,this.fb=e}configForm(){return this.getSumConfigForm}onConfigurationSet(t){this.getSumConfigForm=this.fb.group({inputKey:[t?t.inputKey:null,[i.required]],outputKey:[t?t.outputKey:null,[i.required]]})}}t("GetSumConfigComponent",b),b.ɵfac=e.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:b,deps:[{token:m.Store},{token:l.FormBuilder}],target:e.ɵɵFactoryTarget.Component}),b.ɵcmp=e.ɵɵngDeclareComponent({minVersion:"14.0.0",version:"15.2.10",type:b,selector:"tb-transformation-node-sum-config",usesInheritance:!0,ngImport:e,template:'<section [formGroup]="getSumConfigForm" fxLayout="column">\n    <mat-form-field class="mat-block">\n        <mat-label translate>tb.rulenode.input-key</mat-label>\n        <input matInput formControlName="inputKey" required>\n    </mat-form-field>\n    <mat-form-field class="mat-block">\n        <mat-label translate>tb.rulenode.output-key</mat-label>\n        <input matInput formControlName="outputKey" required>\n    </mat-form-field>\n</section>\n',dependencies:[{kind:"directive",type:s.MatInput,selector:"input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",inputs:["disabled","id","placeholder","name","required","type","errorStateMatcher","aria-describedby","value","readonly"],exportAs:["matInput"]},{kind:"component",type:u.MatFormField,selector:"mat-form-field",inputs:["hideRequiredMarker","color","floatLabel","appearance","subscriptSizing","hintLabel"],exportAs:["matFormField"]},{kind:"directive",type:u.MatLabel,selector:"mat-label"},{kind:"directive",type:p.DefaultLayoutDirective,selector:"  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]",inputs:["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"]},{kind:"directive",type:l.DefaultValueAccessor,selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"},{kind:"directive",type:l.NgControlStatus,selector:"[formControlName],[ngModel],[formControl]"},{kind:"directive",type:l.NgControlStatusGroup,selector:"[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]"},{kind:"directive",type:l.RequiredValidator,selector:":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",inputs:["required"]},{kind:"directive",type:l.FormGroupDirective,selector:"[formGroup]",inputs:["formGroup"],outputs:["ngSubmit"],exportAs:["ngForm"]},{kind:"directive",type:l.FormControlName,selector:"[formControlName]",inputs:["formControlName","disabled","ngModel"],outputs:["ngModelChange"]},{kind:"directive",type:c.TranslateDirective,selector:"[translate],[ngx-translate]",inputs:["translate","translateParams"]}]}),e.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:b,decorators:[{type:o,args:[{selector:"tb-transformation-node-sum-config",template:'<section [formGroup]="getSumConfigForm" fxLayout="column">\n    <mat-form-field class="mat-block">\n        <mat-label translate>tb.rulenode.input-key</mat-label>\n        <input matInput formControlName="inputKey" required>\n    </mat-form-field>\n    <mat-form-field class="mat-block">\n        <mat-label translate>tb.rulenode.output-key</mat-label>\n        <input matInput formControlName="outputKey" required>\n    </mat-form-field>\n</section>\n'}]}],ctorParameters:function(){return[{type:m.Store},{type:l.FormBuilder}]}});class L{}t("CustomNodesConfigTransformModule",L),L.ɵfac=e.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:L,deps:[],target:e.ɵɵFactoryTarget.NgModule}),L.ɵmod=e.ɵɵngDeclareNgModule({minVersion:"14.0.0",version:"15.2.10",ngImport:e,type:L,declarations:[b],imports:[d,a],exports:[b]}),L.ɵinj=e.ɵɵngDeclareInjector({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:L,imports:[d,a]}),e.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:L,decorators:[{type:r,args:[{declarations:[b],imports:[d,a],exports:[b]}]}]});class k extends n{constructor(t,e){super(t),this.store=t,this.fb=e}configForm(){return this.firebaseConfigForm}onConfigurationSet(t){this.firebaseConfigForm=this.fb.group({credential:[t?t.credential:null,[i.required]]})}}t("FirebaseConfigComponent",k),k.ɵfac=e.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:k,deps:[{token:m.Store},{token:l.FormBuilder}],target:e.ɵɵFactoryTarget.Component}),k.ɵcmp=e.ɵɵngDeclareComponent({minVersion:"14.0.0",version:"15.2.10",type:k,selector:"tb-external-node-firebase-config",usesInheritance:!0,ngImport:e,template:'<section [formGroup]="firebaseConfigForm" fxLayout="column">\n    <mat-form-field class="mat-block">\n        <mat-label translate>Service Account Credential</mat-label>\n        <textarea matInput formControlName="credential" required style="white-space: pre; overflow-wrap: normal; overflow-x: scroll;" rows="10"></textarea>\n    </mat-form-field>\n</section>\n',dependencies:[{kind:"directive",type:s.MatInput,selector:"input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",inputs:["disabled","id","placeholder","name","required","type","errorStateMatcher","aria-describedby","value","readonly"],exportAs:["matInput"]},{kind:"component",type:u.MatFormField,selector:"mat-form-field",inputs:["hideRequiredMarker","color","floatLabel","appearance","subscriptSizing","hintLabel"],exportAs:["matFormField"]},{kind:"directive",type:u.MatLabel,selector:"mat-label"},{kind:"directive",type:p.DefaultLayoutDirective,selector:"  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]",inputs:["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"]},{kind:"directive",type:l.DefaultValueAccessor,selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"},{kind:"directive",type:l.NgControlStatus,selector:"[formControlName],[ngModel],[formControl]"},{kind:"directive",type:l.NgControlStatusGroup,selector:"[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]"},{kind:"directive",type:l.RequiredValidator,selector:":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",inputs:["required"]},{kind:"directive",type:l.FormGroupDirective,selector:"[formGroup]",inputs:["formGroup"],outputs:["ngSubmit"],exportAs:["ngForm"]},{kind:"directive",type:l.FormControlName,selector:"[formControlName]",inputs:["formControlName","disabled","ngModel"],outputs:["ngModelChange"]},{kind:"directive",type:c.TranslateDirective,selector:"[translate],[ngx-translate]",inputs:["translate","translateParams"]}]}),e.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:k,decorators:[{type:o,args:[{selector:"tb-external-node-firebase-config",template:'<section [formGroup]="firebaseConfigForm" fxLayout="column">\n    <mat-form-field class="mat-block">\n        <mat-label translate>Service Account Credential</mat-label>\n        <textarea matInput formControlName="credential" required style="white-space: pre; overflow-wrap: normal; overflow-x: scroll;" rows="10"></textarea>\n    </mat-form-field>\n</section>\n'}]}],ctorParameters:function(){return[{type:m.Store},{type:l.FormBuilder}]}});class v{}t("CustomNodesConfigExternalModule",v),v.ɵfac=e.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:v,deps:[],target:e.ɵɵFactoryTarget.NgModule}),v.ɵmod=e.ɵɵngDeclareNgModule({minVersion:"14.0.0",version:"15.2.10",ngImport:e,type:v,declarations:[k],imports:[d,a],exports:[k]}),v.ɵinj=e.ɵɵngDeclareInjector({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:v,imports:[d,a]}),e.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:v,decorators:[{type:r,args:[{declarations:[k],imports:[d,a],exports:[k]}]}]});class N{constructor(t){!function(t){t.setTranslation("en_US",{tb:{rulenode:{"msg-key":"Message key","input-key":"Input key","output-key":"Output key"}}},!0)}(t)}}t("CustomNodesConfigModule",N),N.ɵfac=e.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:N,deps:[{token:c.TranslateService}],target:e.ɵɵFactoryTarget.NgModule}),N.ɵmod=e.ɵɵngDeclareNgModule({minVersion:"14.0.0",version:"15.2.10",ngImport:e,type:N,imports:[d,a,f],exports:[C,g,L,v]}),N.ɵinj=e.ɵɵngDeclareInjector({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:N,imports:[d,a,f,C,g,L,v]}),e.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:e,type:N,decorators:[{type:r,args:[{imports:[d,a,f],exports:[C,g,L,v]}]}],ctorParameters:function(){return[{type:c.TranslateService}]}})}}}));//# sourceMappingURL=custom-nodes-config.js.map
