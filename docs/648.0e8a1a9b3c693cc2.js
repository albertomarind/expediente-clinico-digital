"use strict";(self.webpackChunkexp_clinico_gui=self.webpackChunkexp_clinico_gui||[]).push([[648],{2648:(q,u,r)=>{r.r(u),r.d(u,{PrivateModule:()=>G});var d=r(6895),p=r(4736),e=r(8256),g=r(805),l=r(9592),m=r(982);let b=(()=>{class n{constructor(t){this.el=t,this.iconPos="left",this._disabled=!1}get disabled(){return this._disabled}set disabled(t){this._disabled=t}ngAfterViewInit(){this.id=(0,m.Th)()+"_badge";let t=-1!=this.el.nativeElement.nodeName.indexOf("-")?this.el.nativeElement.firstChild:this.el.nativeElement;if(this._disabled)return null;let a=document.createElement("span");a.id=this.id,a.className="p-badge p-component",this.severity&&l.p.addClass(a,"p-badge-"+this.severity),null!=this.value?(a.appendChild(document.createTextNode(this.value)),1===String(this.value).length&&l.p.addClass(a,"p-badge-no-gutter")):l.p.addClass(a,"p-badge-dot"),l.p.addClass(t,"p-overlay-badge"),t.appendChild(a),this.initialized=!0}get value(){return this._value}set value(t){if(t!==this._value&&(this._value=t,this.initialized)){let a=document.getElementById(this.id);this._value?(l.p.hasClass(a,"p-badge-dot")&&l.p.removeClass(a,"p-badge-dot"),1===String(this._value).length?l.p.addClass(a,"p-badge-no-gutter"):l.p.removeClass(a,"p-badge-no-gutter")):!this._value&&!l.p.hasClass(a,"p-badge-dot")&&l.p.addClass(a,"p-badge-dot"),a.innerHTML="",a.appendChild(document.createTextNode(this._value))}}ngOnDestroy(){this.initialized=!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","pBadge",""]],hostAttrs:[1,"p-element"],inputs:{iconPos:"iconPos",disabled:["badgeDisabled","disabled"],value:"value",severity:"severity"}}),n})(),v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,g.m8]}),n})();var f=r(5593),h=r(1795),c=r(7340);function _(n,i){1&n&&e.GkF(0)}function y(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(s){e.CHM(t);const o=e.oxw(2);return e.KtG(o.close(s))})("keydown.enter",function(s){e.CHM(t);const o=e.oxw(2);return e.KtG(o.close(s))}),e._UZ(1,"span",9),e.qZA()}if(2&n){const t=e.oxw(2);e.uIk("aria-label",t.ariaCloseLabel)}}function C(n,i){1&n&&e.GkF(0)}function x(n,i){1&n&&e.GkF(0)}const M=function(n,i,t,a,s,o){return{"p-sidebar":!0,"p-sidebar-active":n,"p-sidebar-left":i,"p-sidebar-right":t,"p-sidebar-top":a,"p-sidebar-bottom":s,"p-sidebar-full":o}},S=function(n,i){return{transform:n,transition:i}},T=function(n){return{value:"visible",params:n}};function w(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",1,2),e.NdJ("@panelState.start",function(s){e.CHM(t);const o=e.oxw();return e.KtG(o.onAnimationStart(s))})("@panelState.done",function(s){e.CHM(t);const o=e.oxw();return e.KtG(o.onAnimationEnd(s))}),e.TgZ(2,"div",3),e.YNc(3,_,1,0,"ng-container",4),e.YNc(4,y,2,1,"button",5),e.qZA(),e.TgZ(5,"div",6),e.Hsn(6),e.YNc(7,C,1,0,"ng-container",4),e.qZA(),e.TgZ(8,"div",7),e.YNc(9,x,1,0,"ng-container",4),e.qZA()()}if(2&n){const t=e.oxw();e.Tol(t.styleClass),e.Q6J("ngClass",e.HTZ(10,M,t.visible,"left"===t.position&&!t.fullScreen,"right"===t.position&&!t.fullScreen,"top"===t.position&&!t.fullScreen,"bottom"===t.position&&!t.fullScreen,t.fullScreen))("@panelState",e.VKq(20,T,e.WLB(17,S,t.transformOptions,t.transitionOptions)))("ngStyle",t.style),e.uIk("aria-modal",t.modal),e.xp6(3),e.Q6J("ngTemplateOutlet",t.headerTemplate),e.xp6(1),e.Q6J("ngIf",t.showCloseIcon),e.xp6(3),e.Q6J("ngTemplateOutlet",t.contentTemplate),e.xp6(2),e.Q6J("ngTemplateOutlet",t.footerTemplate)}}const k=["*"],P=(0,c.oQ)([(0,c.oB)({transform:"{{transform}}",opacity:0}),(0,c.jt)("{{transition}}")]),O=(0,c.oQ)([(0,c.jt)("{{transition}}",(0,c.oB)({transform:"{{transform}}",opacity:0}))]);let Z=(()=>{class n{constructor(t,a,s,o){this.el=t,this.renderer=a,this.cd=s,this.config=o,this.blockScroll=!1,this.autoZIndex=!0,this.baseZIndex=0,this.modal=!0,this.dismissible=!0,this.showCloseIcon=!0,this.closeOnEscape=!0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.onShow=new e.vpe,this.onHide=new e.vpe,this.visibleChange=new e.vpe,this._position="left",this._fullScreen=!1,this.transformOptions="translate3d(-100%, 0px, 0px)"}ngAfterViewInit(){this.initialized=!0}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}get visible(){return this._visible}set visible(t){this._visible=t}get position(){return this._position}set position(t){switch(this._position=t,t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)"}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t&&(this.transformOptions="none")}show(){this.autoZIndex&&m.P9.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(){this.onHide.emit({}),this.modal&&this.disableModality()}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}enableModality(){this.mask||(this.mask=document.createElement("div"),this.mask.style.zIndex=String(parseInt(this.container.style.zIndex)-1),l.p.addMultipleClasses(this.mask,"p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",t=>{this.dismissible&&this.close(t)})),document.body.appendChild(this.mask),this.blockScroll&&l.p.addClass(document.body,"p-overflow-hidden"))}disableModality(){this.mask&&(l.p.addClass(this.mask,"p-component-overlay-leave"),this.animationEndListener=this.destroyModal.bind(this),this.mask.addEventListener("animationend",this.animationEndListener))}destroyModal(){this.unbindMaskClickListener(),this.mask&&document.body.removeChild(this.mask),this.blockScroll&&l.p.removeClass(document.body,"p-overflow-hidden"),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(t){"visible"===t.toState&&(this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener())}onAnimationEnd(t){"void"===t.toState&&(this.hide(),m.P9.clear(this.container),this.unbindGlobalListeners())}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.container):l.p.appendChild(this.container,this.appendTo))}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","keydown",a=>{27==a.which&&parseInt(this.container.style.zIndex)===m.P9.get(this.container)&&this.close(a)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.mask.removeEventListener("animationend",this.animationEndListener),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.el.nativeElement.appendChild(this.container),this.container&&this.autoZIndex&&m.P9.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(g.b4))},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-sidebar"]],contentQueries:function(t,a,s){if(1&t&&e.Suo(s,g.jx,4),2&t){let o;e.iGM(o=e.CRH())&&(a.templates=o)}},hostAttrs:[1,"p-element"],inputs:{appendTo:"appendTo",blockScroll:"blockScroll",style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",modal:"modal",dismissible:"dismissible",showCloseIcon:"showCloseIcon",closeOnEscape:"closeOnEscape",transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},ngContentSelectors:k,decls:1,vars:1,consts:[["role","complementary",3,"ngClass","ngStyle","class",4,"ngIf"],["role","complementary",3,"ngClass","ngStyle"],["container",""],[1,"p-sidebar-header"],[4,"ngTemplateOutlet"],["type","button","class","p-sidebar-close p-sidebar-icon p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[1,"p-sidebar-content"],[1,"p-sidebar-footer"],["type","button","pRipple","",1,"p-sidebar-close","p-sidebar-icon","p-link",3,"click","keydown.enter"],[1,"p-sidebar-close-icon","pi","pi-times"]],template:function(t,a){1&t&&(e.F$t(),e.YNc(0,w,10,22,"div",0)),2&t&&e.Q6J("ngIf",a.visible)},dependencies:[d.mk,d.O5,d.tP,d.PC,h.H],styles:[".p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}\n"],encapsulation:2,data:{animation:[(0,c.X$)("panelState",[(0,c.eR)("void => visible",[(0,c._7)(P)]),(0,c.eR)("visible => void",[(0,c._7)(O)])])]},changeDetection:0}),n})(),A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,h.T]}),n})();function I(n,i){if(1&n&&(e.TgZ(0,"span",4),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.label)}}function D(n,i){if(1&n&&e._UZ(0,"span",6),2&n){const t=e.oxw(2);e.Tol(t.icon),e.Q6J("ngClass","p-avatar-icon")}}function E(n,i){if(1&n&&e.YNc(0,D,1,3,"span",5),2&n){const t=e.oxw(),a=e.MAs(6);e.Q6J("ngIf",t.icon)("ngIfElse",a)}}function B(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"img",8),e.NdJ("error",function(s){e.CHM(t);const o=e.oxw(2);return e.KtG(o.imageError(s))}),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("src",t.image,e.LSH)}}function L(n,i){if(1&n&&e.YNc(0,B,1,1,"img",7),2&n){const t=e.oxw();e.Q6J("ngIf",t.image)}}const z=["*"];let J=(()=>{class n{constructor(){this.size="normal",this.shape="square",this.onImageError=new e.vpe}containerClass(){return{"p-avatar p-component":!0,"p-avatar-image":null!=this.image,"p-avatar-circle":"circle"===this.shape,"p-avatar-lg":"large"===this.size,"p-avatar-xl":"xlarge"===this.size}}imageError(t){this.onImageError.emit(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-avatar"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass"},outputs:{onImageError:"onImageError"},ngContentSelectors:z,decls:7,vars:6,consts:[[3,"ngClass","ngStyle"],["class","p-avatar-text",4,"ngIf","ngIfElse"],["iconTemplate",""],["imageTemplate",""],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"src","error"]],template:function(t,a){if(1&t&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.YNc(2,I,2,1,"span",1),e.YNc(3,E,1,2,"ng-template",null,2,e.W1O),e.YNc(5,L,1,1,"ng-template",null,3,e.W1O),e.qZA()),2&t){const s=e.MAs(4);e.Tol(a.styleClass),e.Q6J("ngClass",a.containerClass())("ngStyle",a.style),e.xp6(2),e.Q6J("ngIf",a.label)("ngIfElse",s)}},dependencies:[d.mk,d.O5,d.PC],styles:[".p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}\n"],encapsulation:2,changeDetection:0}),n})(),H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,A,H,f.hJ,h.T]}),n})(),N=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,p.Bz,F,v]}),n})(),Q=(()=>{class n{constructor(t){this.router=t,this.display=!1}ngOnInit(){}closeSession(){this.router.navigate(["/"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sidebar-profile-doctor"]],decls:25,vars:1,consts:[[1,"hamburger",3,"click"],[1,"hamburger-line"],[3,"visible","visibleChange"],[1,"sidebar","flex","flex-column","h-full"],[1,"flex","align-items-center","flex-column","flex-grow-1"],["image","assets/images/avatar.png","styleClass","mr-2","size","xlarge","shape","circle",1,"avatar","my-4"],[1,"mt-2"],[1,"block","mt-4"],[1,"block","font-semibold"],["styleClass","mt-4 p-button-sm","label","Account settings"],[1,"flex","justify-content-center"],["pRipple","","icon","pi pi-sign-out","styleClass","p-button-rounded p-button-danger p-button-outlined",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return a.display=!0}),e._UZ(1,"span",1)(2,"span",1)(3,"span",1),e.qZA(),e.TgZ(4,"p-sidebar",2),e.NdJ("visibleChange",function(o){return a.display=o}),e.TgZ(5,"div",3)(6,"div",4),e._UZ(7,"p-avatar",5),e.TgZ(8,"h3",6),e._uU(9,"Dr Shehin de Silva"),e.qZA(),e.TgZ(10,"span",7),e._uU(11,"Username:"),e.qZA(),e.TgZ(12,"span",8),e._uU(13,"shehinsilva"),e.qZA(),e.TgZ(14,"span",7),e._uU(15,"Email:"),e.qZA(),e.TgZ(16,"span",8),e._uU(17,"shehinsilva@hangeles.com"),e.qZA(),e.TgZ(18,"span",7),e._uU(19,"Phone:"),e.qZA(),e.TgZ(20,"span",8),e._uU(21,"(425) 555-1212"),e.qZA(),e._UZ(22,"p-button",9),e.qZA(),e.TgZ(23,"div",10)(24,"p-button",11),e.NdJ("click",function(){return a.closeSession()}),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("visible",a.display))},dependencies:[Z,J,f.zx,h.H],styles:['[_nghost-%COMP%]{cursor:pointer;display:inline-flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .hamburger[_ngcontent-%COMP%]{position:relative;display:inline-block;width:40px;height:40px}[_nghost-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]{position:absolute;background-color:var(--primary-color);content:"";width:24px;height:3px;top:50%;left:50%;transition:.25s ease-in-out}[_nghost-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:nth-child(1){transform:translate(-50%,-300%)}[_nghost-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:nth-child(2){transform:translate(-50%,-50%)}[_nghost-%COMP%]   .hamburger[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:nth-child(3){transform:translate(-50%,200%)}[_nghost-%COMP%]   .hamburger.activo[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:nth-child(1){transform:translate(-50%,-50%) rotate(45deg)}[_nghost-%COMP%]   .hamburger.activo[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:nth-child(2){opacity:0;transform:translate(-50%,-50%)}[_nghost-%COMP%]   .hamburger.activo[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:nth-child(3){transform:translate(-50%,-50%) rotate(-45deg)}.avatar[_ngcontent-%COMP%]{display:block;transform:scale(1.5)}[_nghost-%COMP%]     .p-sidebar-content{height:100%}']}),n})(),U=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-info-doctor-header"]],decls:11,vars:1,consts:[[1,"info-doctor","p-3"],[1,"flex","align-items-center"],[1,"flex","flex-column"],[1,"text-primary","text-sm","md:text-xl"],[1,"flex","align-items-center","justify-content-end","gap-4","mr-2"],[1,"flex","flex-wrap","gap-2","icons"],["pBadge","","value","2",1,"pi","pi-bell","mr-4","p-text-secondary","text-2xl"],["pBadge","","severity","danger",1,"pi","pi-envelope","mr-4","p-text-secondary","text-2xl",3,"value"],[1,"pi","pi-calendar","mr-4","p-text-secondary","text-2xl"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-sidebar-profile-doctor"),e.TgZ(3,"div",2)(4,"h2",3),e._uU(5,"Dr. Shehin de Silva"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5),e._UZ(8,"i",6)(9,"i",7)(10,"i",8),e.qZA()()()),2&t&&(e.xp6(9),e.Q6J("value","9+"))},dependencies:[Q,b],styles:[".info-doctor[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto;gap:1rem;background-color:var(--surface-card);box-shadow:0 3px 5px #00000005,0 0 2px #0000000d,0 1px 4px #00000014}@media screen and (min-width: 1px){.info-doctor[_ngcontent-%COMP%]{grid-template-columns:1fr .6fr}}@media screen and (min-width: 1440px){.info-doctor[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media screen and (min-width: 1600px){.info-doctor[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media screen and (min-width: 1900px){.info-doctor[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}[_nghost-%COMP%]     .p-overlay-badge .p-badge{transform:translate(50%,-50%) scale(.8)}"]}),n})();const j=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-private"]],decls:3,vars:0,template:function(t,a){1&t&&(e._UZ(0,"app-info-doctor-header"),e.TgZ(1,"main"),e._UZ(2,"router-outlet"),e.qZA())},dependencies:[p.lC,U]}),n})(),children:[{path:"",redirectTo:"hospitals",pathMatch:"full"},{path:"home",loadChildren:()=>r.e(824).then(r.bind(r,6824)).then(n=>n.HomeModule)},{path:"hospitals",loadChildren:()=>r.e(531).then(r.bind(r,1531)).then(n=>n.HospitalsModule)}]}];let Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(j),p.Bz]}),n})(),G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,Y,N]}),n})()}}]);