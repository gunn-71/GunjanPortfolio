import './polyfills.server.mjs';
import{c as M}from"./chunk-B2MM7O4R.mjs";import{e as P,f as F,g as I,h as x,k as D}from"./chunk-Y6AX7KFK.mjs";import{Ja as C,K as d,O as p,Oa as b,T as h,_ as m,ba as c,db as A,ga as u,hb as R,qb as w,ta as g,ua as f,va as y,za as v}from"./chunk-43LQUUWZ.mjs";var S=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[b],decls:1,vars:0,template:function(o,n){o&1&&C(0,"router-outlet")},dependencies:[x,w]});let i=e;return i})();var N=[{path:"portfolio-website",loadChildren:()=>import("./chunk-BC42KFP2.mjs").then(i=>i.PortfolioWebsiteModule)}];var k="@",B=(()=>{let e=class e{constructor(r,o,n,s,a){this.doc=r,this.delegate=o,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=c(f,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-OU3AU6FY.mjs")).catch(o=>{throw new d(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,o){let n=this.delegate.createRenderer(r,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new l(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let _=a.createRenderer(r,o);s.use(_)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){g()},e.\u0275prov=h({token:e,factory:e.\u0275fac});let i=e;return i})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(k)}};function E(i="animations"){return u([{provide:y,useFactory:(e,t,r)=>new B(e,t,r,i),deps:[R,P,v]},{provide:m,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var O={providers:[D(N),I(),E()]};var V={providers:[M()]},T=A(O,V);var z=()=>F(S,T),le=z;export{le as a};
