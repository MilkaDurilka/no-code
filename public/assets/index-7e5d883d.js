import{w as bt,x as mt,y as yt,z as rt,D as lt,F as vt,H as xt,I as Ct,J as St,K as Ot,V as ht,L as it,b as F,A as ot,O as ct,R as Et,P as tt,G as p,Q as J,k as Pt,l as wt,S as _t,j as zt,o as st,T as kt,B as W,U as nt,W as Mt}from"./html-083cb0d0.js";import{g as It}from"./_commonjsHelpers-de833af9.js";function Rt(i){var t=i==null?0:i.length;return t?bt(i,1):[]}function At(i){return mt(yt(i,void 0,Rt),i+"")}function Tt(i,t,e,n){if(!rt(i))return i;t=lt(t,i);for(var s=-1,r=t.length,o=r-1,l=i;l!=null&&++s<r;){var h=vt(t[s]),g=e;if(h==="__proto__"||h==="constructor"||h==="prototype")return i;if(s!=o){var d=l[h];g=n?n(d,h,l):void 0,g===void 0&&(g=rt(d)?d:xt(t[s+1])?[]:{})}Ct(l,h,g),l=l[h]}return i}function Lt(i,t,e){for(var n=-1,s=t.length,r={};++n<s;){var o=t[n],l=St(i,o);e(l,o)&&Tt(r,lt(o,i),l)}return r}function Bt(i,t){return Lt(i,t,function(e,n){return Ot(i,n)})}var jt=At(function(i,t){return i==null?{}:Bt(i,t)});const at=jt;var Kt=globalThis&&globalThis.__decorate||function(i,t,e,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Nt=globalThis&&globalThis.__rest||function(i,t){var e={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&t.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(i);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(i,n[s])&&(e[n[s]]=i[n[s]]);return e};class dt extends ht{get model(){return this.graph.model}get containerClassName(){return this.prefixClassName("widget-snapline")}get verticalClassName(){return`${this.containerClassName}-vertical`}get horizontalClassName(){return`${this.containerClassName}-horizontal`}constructor(t){super();const{graph:e}=t,n=Nt(t,["graph"]);this.graph=e,this.options=Object.assign({},n),this.offset={x:0,y:0},this.render(),this.disabled||this.startListening()}get disabled(){return this.options.enabled!==!0}enable(){this.disabled&&(this.options.enabled=!0,this.startListening())}disable(){this.disabled||(this.options.enabled=!1,this.stopListening())}setFilter(t){this.options.filter=t}render(){const t=this.containerWrapper=new it("svg"),e=this.horizontal=new it("line"),n=this.vertical=new it("line");t.addClass(this.containerClassName),e.addClass(this.horizontalClassName),n.addClass(this.verticalClassName),t.setAttribute("width","100%"),t.setAttribute("height","100%"),e.setAttribute("display","none"),n.setAttribute("display","none"),t.append([e,n]),this.options.className&&t.addClass(this.options.className),this.container=this.containerWrapper.node}startListening(){this.stopListening(),this.graph.on("node:mousedown",this.captureCursorOffset,this),this.graph.on("node:mousemove",this.snapOnMoving,this),this.model.on("batch:stop",this.onBatchStop,this),this.delegateDocumentEvents({mouseup:"hide",touchend:"hide"})}stopListening(){this.graph.off("node:mousedown",this.captureCursorOffset,this),this.graph.off("node:mousemove",this.snapOnMoving,this),this.model.off("batch:stop",this.onBatchStop,this),this.undelegateDocumentEvents()}onBatchStop({name:t,data:e}){t==="resize"&&this.snapOnResizing(e.cell,e)}captureCursorOffset({view:t,x:e,y:n}){const s=t.getDelegatedView();if(s&&this.isNodeMovable(s)){const r=t.cell.getPosition();this.offset={x:e-r.x,y:n-r.y}}}isNodeMovable(t){return t&&t.cell.isNode()&&t.can("nodeMovable")}getRestrictArea(t){const e=this.graph.options.translating.restrict,n=typeof e=="function"?F(e,this.graph,t):e;return typeof n=="number"?this.graph.transform.getGraphArea().inflate(n):n===!0?this.graph.transform.getGraphArea():n||null}snapOnResizing(t,e){if(this.options.resizing&&!e.snapped&&e.ui&&e.direction&&e.trueDirection){const n=this.graph.renderer.findViewByCell(t);if(n&&n.cell.isNode()){const s=t.getBBox(),r=s.bbox(t.getAngle()),o=r.getTopLeft(),l=r.getBottomRight(),h=ot.normalize(t.getAngle()),g=this.options.tolerance||0;let d,m,z,x,B,T;const k={vertical:0,horizontal:0},$=e.direction,j=e.trueDirection,R=e.relativeDirection;j.indexOf("right")!==-1?k.vertical=l.x:k.vertical=o.x,j.indexOf("bottom")!==-1?k.horizontal=l.y:k.horizontal=o.y,this.model.getNodes().some(y=>{if(this.isIgnored(t,y))return!1;const M=y.getBBox().bbox(y.getAngle()),K=M.getTopLeft(),G=M.getBottomRight(),q={vertical:[K.x,G.x],horizontal:[K.y,G.y]},N={};return Object.keys(q).forEach(et=>{const Y=et,Z=q[Y].map(u=>({position:u,distance:Math.abs(u-k[Y])})).filter(u=>u.distance<=g);N[Y]=ct(Z,u=>u.distance)}),d==null&&N.vertical.length>0&&(d=N.vertical[0].position,m=Math.min(r.y,M.y),z=Math.max(l.y,G.y)-m),x==null&&N.horizontal.length>0&&(x=N.horizontal[0].position,B=Math.min(r.x,M.x),T=Math.max(l.x,G.x)-B),d!=null&&x!=null}),this.hide();let A=0,I=0;(x!=null||d!=null)&&(d!=null&&(A=j.indexOf("right")!==-1?d-l.x:o.x-d),x!=null&&(I=j.indexOf("bottom")!==-1?x-l.y:o.y-x));let C=0,a=0;if(h%90===0)h===90||h===270?(C=I,a=A):(C=A,a=I);else{const y=h>=0&&h<90?1:h>=90&&h<180?4:h>=180&&h<270?3:2;x!=null&&d!=null&&(A<I?(I=0,x=void 0):(A=0,d=void 0));const M=ot.toRad(h%90);A&&(C=y===3?A/Math.cos(M):A/Math.sin(M)),I&&(a=y===3?I/Math.cos(M):I/Math.sin(M));const K=y===1||y===3;switch(R){case"top":case"bottom":a=I?I/(K?Math.cos(M):Math.sin(M)):A/(K?Math.sin(M):Math.cos(M));break;case"left":case"right":C=A?A/(K?Math.cos(M):Math.sin(M)):I/(K?Math.sin(M):Math.cos(M));break}}switch(R){case"top":case"bottom":C=0;break;case"left":case"right":a=0;break}const c=this.graph.getGridSize();let f=Math.max(s.width+C,c),b=Math.max(s.height+a,c);e.minWidth&&e.minWidth>c&&(f=Math.max(f,e.minWidth)),e.minHeight&&e.minHeight>c&&(b=Math.max(b,e.minHeight)),e.maxWidth&&(f=Math.min(f,e.maxWidth)),e.maxHeight&&(b=Math.min(b,e.maxHeight)),e.preserveAspectRatio&&(a<C?b=f*(s.height/s.width):f=b*(s.width/s.height)),(f!==s.width||b!==s.height)&&(t.resize(f,b,{direction:$,relativeDirection:R,trueDirection:j,snapped:!0,snaplines:this.cid,restrict:this.getRestrictArea(n)}),z&&(z+=b-s.height),T&&(T+=f-s.width));const O=t.getBBox().bbox(h);d&&Math.abs(O.x-d)>1&&Math.abs(O.width+O.x-d)>1&&(d=void 0),x&&Math.abs(O.y-x)>1&&Math.abs(O.height+O.y-x)>1&&(x=void 0),this.update({verticalLeft:d,verticalTop:m,verticalHeight:z,horizontalTop:x,horizontalLeft:B,horizontalWidth:T})}}}snapOnMoving({view:t,e,x:n,y:s}){const r=t.getEventData(e).delegatedView||t;if(!this.isNodeMovable(r))return;const o=r.cell,l=o.getSize(),h=o.getPosition(),g=new Et(n-this.offset.x,s-this.offset.y,l.width,l.height),d=o.getAngle(),m=g.getCenter(),z=g.bbox(d),x=z.getTopLeft(),B=z.getBottomRight(),T=this.options.tolerance||0;let k,$,j,R,A,I,C=0,a=0;if(this.model.getNodes().some(c=>{if(this.isIgnored(o,c))return!1;const f=c.getBBox().bbox(c.getAngle()),b=f.getCenter(),O=f.getTopLeft(),y=f.getBottomRight();return k==null&&(Math.abs(b.x-m.x)<T?(k=b.x,C=.5):Math.abs(O.x-x.x)<T?(k=O.x,C=0):Math.abs(O.x-B.x)<T?(k=O.x,C=1):Math.abs(y.x-B.x)<T?(k=y.x,C=1):Math.abs(y.x-x.x)<T&&(k=y.x),k!=null&&($=Math.min(z.y,f.y),j=Math.max(B.y,y.y)-$)),R==null&&(Math.abs(b.y-m.y)<T?(R=b.y,a=.5):Math.abs(O.y-x.y)<T?R=O.y:Math.abs(O.y-B.y)<T?(R=O.y,a=1):Math.abs(y.y-B.y)<T?(R=y.y,a=1):Math.abs(y.y-x.y)<T&&(R=y.y),R!=null&&(A=Math.min(z.x,f.x),I=Math.max(B.x,y.x)-A)),k!=null&&R!=null}),this.hide(),R!=null||k!=null){R!=null&&(z.y=R-a*z.height),k!=null&&(z.x=k-C*z.width);const c=z.getCenter(),f=c.x-g.width/2,b=c.y-g.height/2,O=f-h.x,y=b-h.y;(O!==0||y!==0)&&(o.translate(O,y,{snapped:!0,restrict:this.getRestrictArea(r)}),I&&(I+=O),j&&(j+=y)),this.update({verticalLeft:k,verticalTop:$,verticalHeight:j,horizontalTop:R,horizontalLeft:A,horizontalWidth:I})}}isIgnored(t,e){return e.id===t.id||e.isDescendantOf(t)||!this.filter(e)}filter(t){const e=this.options.filter;return Array.isArray(e)?e.some(n=>typeof n=="string"?t.shape===n:t.id===n.id):typeof e=="function"?F(e,this.graph,t):!0}update(t){if(t.horizontalTop){const e=this.graph.localToGraph(new tt(t.horizontalLeft,t.horizontalTop)),n=this.graph.localToGraph(new tt(t.horizontalLeft+t.horizontalWidth,t.horizontalTop));this.horizontal.setAttributes({x1:this.options.sharp?`${e.x}`:"0",y1:`${e.y}`,x2:this.options.sharp?`${n.x}`:"100%",y2:`${n.y}`,display:"inherit"})}else this.horizontal.setAttribute("display","none");if(t.verticalLeft){const e=this.graph.localToGraph(new tt(t.verticalLeft,t.verticalTop)),n=this.graph.localToGraph(new tt(t.verticalLeft,t.verticalTop+t.verticalHeight));this.vertical.setAttributes({x1:`${e.x}`,y1:this.options.sharp?`${e.y}`:"0",x2:`${n.x}`,y2:this.options.sharp?`${n.y}`:"100%",display:"inherit"})}else this.vertical.setAttribute("display","none");this.show()}resetTimer(){this.timer&&(clearTimeout(this.timer),this.timer=null)}show(){return this.resetTimer(),this.container.parentNode==null&&this.graph.container.appendChild(this.container),this}hide(){this.resetTimer(),this.vertical.setAttribute("display","none"),this.horizontal.setAttribute("display","none");const t=this.options.clean,e=typeof t=="number"?t:t!==!1?3e3:0;return e>0&&(this.timer=window.setTimeout(()=>{this.container.parentNode!==null&&this.unmount()},e)),this}onRemove(){this.stopListening(),this.hide()}dispose(){this.remove()}}Kt([ht.dispose()],dt.prototype,"dispose",null);const Dt=`.x6-widget-snapline {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.x6-widget-snapline-vertical,
.x6-widget-snapline-horizontal {
  stroke: #2ecc71;
  stroke-width: 1px;
}
`;p.prototype.isSnaplineEnabled=function(){const i=this.getPlugin("snapline");return i?i.isEnabled():!1};p.prototype.enableSnapline=function(){const i=this.getPlugin("snapline");return i&&i.enable(),this};p.prototype.disableSnapline=function(){const i=this.getPlugin("snapline");return i&&i.disable(),this};p.prototype.toggleSnapline=function(){const i=this.getPlugin("snapline");return i&&i.toggleEnabled(),this};p.prototype.hideSnapline=function(){const i=this.getPlugin("snapline");return i&&i.hide(),this};p.prototype.setSnaplineFilter=function(i){const t=this.getPlugin("snapline");return t&&t.setFilter(i),this};p.prototype.isSnaplineOnResizingEnabled=function(){const i=this.getPlugin("snapline");return i?i.isOnResizingEnabled():!1};p.prototype.enableSnaplineOnResizing=function(){const i=this.getPlugin("snapline");return i&&i.enableOnResizing(),this};p.prototype.disableSnaplineOnResizing=function(){const i=this.getPlugin("snapline");return i&&i.disableOnResizing(),this};p.prototype.toggleSnaplineOnResizing=function(i){const t=this.getPlugin("snapline");return t&&t.toggleOnResizing(i),this};p.prototype.isSharpSnapline=function(){const i=this.getPlugin("snapline");return i?i.isSharp():!1};p.prototype.enableSharpSnapline=function(){const i=this.getPlugin("snapline");return i&&i.enableSharp(),this};p.prototype.disableSharpSnapline=function(){const i=this.getPlugin("snapline");return i&&i.disableSharp(),this};p.prototype.toggleSharpSnapline=function(i){const t=this.getPlugin("snapline");return t&&t.toggleSharp(i),this};p.prototype.getSnaplineTolerance=function(){const i=this.getPlugin("snapline");if(i)return i.getTolerance()};p.prototype.setSnaplineTolerance=function(i){const t=this.getPlugin("snapline");return t&&t.setTolerance(i),this};var Ht=globalThis&&globalThis.__decorate||function(i,t,e,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};class $t extends J{constructor(t={}){super(),this.name="snapline",this.options=Object.assign({enabled:!0,tolerance:10},t),Pt(this.name,Dt)}init(t){this.snaplineImpl=new dt(Object.assign(Object.assign({},this.options),{graph:t}))}isEnabled(){return!this.snaplineImpl.disabled}enable(){this.snaplineImpl.enable()}disable(){this.snaplineImpl.disable()}toggleEnabled(t){if(t!=null)t!==this.isEnabled()&&(t?this.enable():this.disable());else return this.isEnabled()?this.disable():this.enable(),this}hide(){return this.snaplineImpl.hide(),this}setFilter(t){return this.snaplineImpl.setFilter(t),this}isOnResizingEnabled(){return this.snaplineImpl.options.resizing===!0}enableOnResizing(){return this.snaplineImpl.options.resizing=!0,this}disableOnResizing(){return this.snaplineImpl.options.resizing=!1,this}toggleOnResizing(t){return t!=null?t!==this.isOnResizingEnabled()&&(t?this.enableOnResizing():this.disableOnResizing()):this.isOnResizingEnabled()?this.disableOnResizing():this.enableOnResizing(),this}isSharp(){return this.snaplineImpl.options.sharp===!0}enableSharp(){return this.snaplineImpl.options.sharp=!0,this}disableSharp(){return this.snaplineImpl.options.sharp=!1,this}toggleSharp(t){return t!=null?t!==this.isSharp()&&(t?this.enableSharp():this.disableSharp()):this.isSharp()?this.disableSharp():this.enableSharp(),this}getTolerance(){return this.snaplineImpl.options.tolerance}setTolerance(t){return this.snaplineImpl.options.tolerance=t,this}captureCursorOffset(t){this.snaplineImpl.captureCursorOffset(t)}snapOnMoving(t){this.snaplineImpl.snapOnMoving(t)}dispose(){this.snaplineImpl.dispose(),wt(this.name)}}Ht([J.dispose()],$t.prototype,"dispose",null);var pt={exports:{}};(function(i){(function(t,e,n){if(!t)return;for(var s={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},r={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},o={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},l={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},h,g=1;g<20;++g)s[111+g]="f"+g;for(g=0;g<=9;++g)s[g+96]=g.toString();function d(a,c,f){if(a.addEventListener){a.addEventListener(c,f,!1);return}a.attachEvent("on"+c,f)}function m(a){if(a.type=="keypress"){var c=String.fromCharCode(a.which);return a.shiftKey||(c=c.toLowerCase()),c}return s[a.which]?s[a.which]:r[a.which]?r[a.which]:String.fromCharCode(a.which).toLowerCase()}function z(a,c){return a.sort().join(",")===c.sort().join(",")}function x(a){var c=[];return a.shiftKey&&c.push("shift"),a.altKey&&c.push("alt"),a.ctrlKey&&c.push("ctrl"),a.metaKey&&c.push("meta"),c}function B(a){if(a.preventDefault){a.preventDefault();return}a.returnValue=!1}function T(a){if(a.stopPropagation){a.stopPropagation();return}a.cancelBubble=!0}function k(a){return a=="shift"||a=="ctrl"||a=="alt"||a=="meta"}function $(){if(!h){h={};for(var a in s)a>95&&a<112||s.hasOwnProperty(a)&&(h[s[a]]=a)}return h}function j(a,c,f){return f||(f=$()[a]?"keydown":"keypress"),f=="keypress"&&c.length&&(f="keydown"),f}function R(a){return a==="+"?["+"]:(a=a.replace(/\+{2}/g,"+plus"),a.split("+"))}function A(a,c){var f,b,O,y=[];for(f=R(a),O=0;O<f.length;++O)b=f[O],l[b]&&(b=l[b]),c&&c!="keypress"&&o[b]&&(b=o[b],y.push("shift")),k(b)&&y.push(b);return c=j(b,y,c),{key:b,modifiers:y,action:c}}function I(a,c){return a===null||a===e?!1:a===c?!0:I(a.parentNode,c)}function C(a){var c=this;if(a=a||e,!(c instanceof C))return new C(a);c.target=a,c._callbacks={},c._directMap={};var f={},b,O=!1,y=!1,M=!1;function K(u){u=u||{};var S=!1,P;for(P in f){if(u[P]){S=!0;continue}f[P]=0}S||(M=!1)}function G(u,S,P,v,w,D){var E,L,U=[],H=P.type;if(!c._callbacks[u])return[];for(H=="keyup"&&k(u)&&(S=[u]),E=0;E<c._callbacks[u].length;++E)if(L=c._callbacks[u][E],!(!v&&L.seq&&f[L.seq]!=L.level)&&H==L.action&&(H=="keypress"&&!P.metaKey&&!P.ctrlKey||z(S,L.modifiers))){var ut=!v&&L.combo==w,gt=v&&L.seq==v&&L.level==D;(ut||gt)&&c._callbacks[u].splice(E,1),U.push(L)}return U}function q(u,S,P,v){c.stopCallback(S,S.target||S.srcElement,P,v)||u(S,P)===!1&&(B(S),T(S))}c._handleKey=function(u,S,P){var v=G(u,S,P),w,D={},E=0,L=!1;for(w=0;w<v.length;++w)v[w].seq&&(E=Math.max(E,v[w].level));for(w=0;w<v.length;++w){if(v[w].seq){if(v[w].level!=E)continue;L=!0,D[v[w].seq]=1,q(v[w].callback,P,v[w].combo,v[w].seq);continue}L||q(v[w].callback,P,v[w].combo)}var U=P.type=="keypress"&&y;P.type==M&&!k(u)&&!U&&K(D),y=L&&P.type=="keydown"};function N(u){typeof u.which!="number"&&(u.which=u.keyCode);var S=m(u);if(S){if(u.type=="keyup"&&O===S){O=!1;return}c.handleKey(S,x(u),u)}}function et(){clearTimeout(b),b=setTimeout(K,1e3)}function Y(u,S,P,v){f[u]=0;function w(H){return function(){M=H,++f[u],et()}}function D(H){q(P,H,u),v!=="keyup"&&(O=m(H)),setTimeout(K,10)}for(var E=0;E<S.length;++E){var L=E+1===S.length,U=L?D:w(v||A(S[E+1]).action);Z(S[E],U,v,u,E)}}function Z(u,S,P,v,w){c._directMap[u+":"+P]=S,u=u.replace(/\s+/g," ");var D=u.split(" "),E;if(D.length>1){Y(u,D,S,P);return}E=A(u,P),c._callbacks[E.key]=c._callbacks[E.key]||[],G(E.key,E.modifiers,{type:E.action},v,u,w),c._callbacks[E.key][v?"unshift":"push"]({callback:S,modifiers:E.modifiers,action:E.action,seq:v,level:w,combo:u})}c._bindMultiple=function(u,S,P){for(var v=0;v<u.length;++v)Z(u[v],S,P)},d(a,"keypress",N),d(a,"keydown",N),d(a,"keyup",N)}C.prototype.bind=function(a,c,f){var b=this;return a=a instanceof Array?a:[a],b._bindMultiple.call(b,a,c,f),b},C.prototype.unbind=function(a,c){var f=this;return f.bind.call(f,a,function(){},c)},C.prototype.trigger=function(a,c){var f=this;return f._directMap[a+":"+c]&&f._directMap[a+":"+c]({},a),f},C.prototype.reset=function(){var a=this;return a._callbacks={},a._directMap={},a},C.prototype.stopCallback=function(a,c){var f=this;if((" "+c.className+" ").indexOf(" mousetrap ")>-1||I(c,f.target))return!1;if("composedPath"in a&&typeof a.composedPath=="function"){var b=a.composedPath()[0];b!==a.target&&(c=b)}return c.tagName=="INPUT"||c.tagName=="SELECT"||c.tagName=="TEXTAREA"||c.isContentEditable},C.prototype.handleKey=function(){var a=this;return a._handleKey.apply(a,arguments)},C.addKeycodes=function(a){for(var c in a)a.hasOwnProperty(c)&&(s[c]=a[c]);h=null},C.init=function(){var a=C(e);for(var c in a)c.charAt(0)!=="_"&&(C[c]=function(f){return function(){return a[f].apply(a,arguments)}}(c))},C.init(),t.Mousetrap=C,i.exports&&(i.exports=C),typeof n=="function"&&n.amd&&n(function(){return C})})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(pt);var Gt=pt.exports;const Ft=It(Gt);var qt=globalThis&&globalThis.__decorate||function(i,t,e,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};class V extends J{get graph(){return this.options.graph}constructor(t){super(),this.options=t;const e=this.graph.getPlugin("scroller");this.container=e?e.container:this.graph.container,t.global?this.target=document:(this.target=this.container,this.disabled||this.target.setAttribute("tabindex","-1"),this.graph.on("cell:mouseup",this.focus,this),this.graph.on("blank:mouseup",this.focus,this)),this.mousetrap=V.createMousetrap(this)}get disabled(){return this.options.enabled!==!0}enable(){this.disabled&&(this.options.enabled=!0,this.target instanceof HTMLElement&&this.target.setAttribute("tabindex","-1"))}disable(){this.disabled||(this.options.enabled=!1,this.target instanceof HTMLElement&&this.target.removeAttribute("tabindex"))}on(t,e,n){this.mousetrap.bind(this.getKeys(t),e,n)}off(t,e){this.mousetrap.unbind(this.getKeys(t),e)}clear(){this.mousetrap.reset()}trigger(t,e){this.mousetrap.trigger(t,e)}focus(t){if(this.isInputEvent(t.e))return;this.target.focus({preventScroll:!0})}getKeys(t){return(Array.isArray(t)?t:[t]).map(e=>this.formatkey(e))}formatkey(t){const e=t.toLocaleLowerCase().replace(/\s/g,"").replace("delete","del").replace("cmd","command").replace("arrowup","up").replace("arrowright","right").replace("arrowdown","down").replace("arrowleft","left"),n=this.options.format;return n?F(n,this.graph,e):e}isGraphEvent(t){const e=t.target,n=t.currentTarget;return e?e===this.target||n===this.target||e===document.body?!0:_t(this.container,e):!1}isInputEvent(t){var e;const n=t.target,s=(e=n==null?void 0:n.tagName)===null||e===void 0?void 0:e.toLowerCase();let r=["input","textarea"].includes(s);return zt(n,"contenteditable")==="true"&&(r=!0),r}isEnabledForEvent(t){const e=!this.disabled&&this.isGraphEvent(t),n=this.isInputEvent(t);if(e){if(n&&(t.key==="Backspace"||t.key==="Delete"))return!1;if(this.options.guard)return F(this.options.guard,this.graph,t)}return e}dispose(){this.mousetrap.reset()}}qt([J.dispose()],V.prototype,"dispose",null);(function(i){function t(e){const n=new Ft(e.target),s=n.stopCallback;return n.stopCallback=(r,o,l)=>e.isEnabledForEvent(r)?s?s.call(n,r,o,l):!1:!0,n}i.createMousetrap=t})(V||(V={}));p.prototype.isKeyboardEnabled=function(){const i=this.getPlugin("keyboard");return i?i.isEnabled():!1};p.prototype.enableKeyboard=function(){const i=this.getPlugin("keyboard");return i&&i.enable(),this};p.prototype.disableKeyboard=function(){const i=this.getPlugin("keyboard");return i&&i.disable(),this};p.prototype.toggleKeyboard=function(i){const t=this.getPlugin("keyboard");return t&&t.toggleEnabled(i),this};p.prototype.bindKey=function(i,t,e){const n=this.getPlugin("keyboard");return n&&n.bindKey(i,t,e),this};p.prototype.unbindKey=function(i,t){const e=this.getPlugin("keyboard");return e&&e.unbindKey(i,t),this};p.prototype.clearKeys=function(){const i=this.getPlugin("keyboard");return i&&i.clear(),this};p.prototype.triggerKey=function(i,t){const e=this.getPlugin("keyboard");return e&&e.trigger(i,t),this};var Ut=globalThis&&globalThis.__decorate||function(i,t,e,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};class Wt extends J{constructor(t={}){super(),this.name="keyboard",this.options=Object.assign({enabled:!0},t)}init(t){this.keyboardImpl=new V(Object.assign(Object.assign({},this.options),{graph:t}))}isEnabled(){return!this.keyboardImpl.disabled}enable(){this.keyboardImpl.enable()}disable(){this.keyboardImpl.disable()}toggleEnabled(t){return t!=null?t!==this.isEnabled()&&(t?this.enable():this.disable()):this.isEnabled()?this.disable():this.enable(),this}bindKey(t,e,n){return this.keyboardImpl.on(t,e,n),this}trigger(t,e){return this.keyboardImpl.trigger(t,e),this}clear(){return this.keyboardImpl.clear(),this}unbindKey(t,e){return this.keyboardImpl.off(t,e),this}dispose(){this.keyboardImpl.dispose()}}Ut([J.dispose()],Wt.prototype,"dispose",null);class Vt{constructor(){this.cells=[]}copy(t,e,n={}){this.options=Object.assign({},n);const r=(st.isModel(e)?e:e.model).cloneSubGraph(t,n);this.cells=ct(Object.keys(r).map(o=>r[o]),o=>o.isEdge()?2:1),this.serialize(n)}cut(t,e,n={}){this.copy(t,e,n),(p.isGraph(e)?e.model:e).batchUpdate("cut",()=>{t.forEach(r=>r.remove())})}paste(t,e={}){const n=Object.assign(Object.assign({},this.options),e),{offset:s,edgeProps:r,nodeProps:o}=n;let l=20,h=20;s&&(l=typeof s=="number"?s:s.dx,h=typeof s=="number"?s:s.dy),this.deserialize(n);const g=this.cells;g.forEach(m=>{m.model=null,m.removeProp("zIndex"),(l||h)&&m.translate(l,h),o&&m.isNode()&&m.prop(o),r&&m.isEdge()&&m.prop(r)});const d=p.isGraph(t)?t.model:t;return d.batchUpdate("paste",()=>{d.addCells(this.cells)}),this.copy(g,t,e),g}serialize(t){t.useLocalStorage!==!1&&X.save(this.cells)}deserialize(t){if(t.useLocalStorage){const e=X.fetch();e&&(this.cells=e)}}isEmpty(t={}){return t.useLocalStorage&&this.deserialize(t),this.cells.length<=0}clean(){this.options={},this.cells=[],X.clean()}}var X;(function(i){const t=`${kt.prefixCls}.clipboard.cells`;function e(r){if(window.localStorage){const o=r.map(l=>l.toJSON());localStorage.setItem(t,JSON.stringify(o))}}i.save=e;function n(){if(window.localStorage){const r=localStorage.getItem(t),o=r?JSON.parse(r):[];if(o)return st.fromJSON(o)}}i.fetch=n;function s(){window.localStorage&&localStorage.removeItem(t)}i.clean=s})(X||(X={}));p.prototype.isClipboardEnabled=function(){const i=this.getPlugin("clipboard");return i?i.isEnabled():!1};p.prototype.enableClipboard=function(){const i=this.getPlugin("clipboard");return i&&i.enable(),this};p.prototype.disableClipboard=function(){const i=this.getPlugin("clipboard");return i&&i.disable(),this};p.prototype.toggleClipboard=function(i){const t=this.getPlugin("clipboard");return t&&t.toggleEnabled(i),this};p.prototype.isClipboardEmpty=function(i){const t=this.getPlugin("clipboard");return t?t.isEmpty(i):!0};p.prototype.getCellsInClipboard=function(){const i=this.getPlugin("clipboard");return i?i.getCellsInClipboard():[]};p.prototype.cleanClipboard=function(){const i=this.getPlugin("clipboard");return i&&i.clean(),this};p.prototype.copy=function(i,t){const e=this.getPlugin("clipboard");return e&&e.copy(i,t),this};p.prototype.cut=function(i,t){const e=this.getPlugin("clipboard");return e&&e.cut(i,t),this};p.prototype.paste=function(i,t){const e=this.getPlugin("clipboard");return e?e.paste(i,t):[]};var Jt=globalThis&&globalThis.__decorate||function(i,t,e,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},Yt=globalThis&&globalThis.__rest||function(i,t){var e={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&t.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(i);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(i,n[s])&&(e[n[s]]=i[n[s]]);return e};class Xt extends W{get disabled(){return this.options.enabled!==!0}get cells(){return this.clipboardImpl.cells}constructor(t={}){super(),this.name="clipboard",this.options=Object.assign({enabled:!0},t)}init(t){this.graph=t,this.clipboardImpl=new Vt,this.clipboardImpl.deserialize(this.options)}isEnabled(){return!this.disabled}enable(){this.disabled&&(this.options.enabled=!0)}disable(){this.disabled||(this.options.enabled=!1)}toggleEnabled(t){return t!=null?t!==this.isEnabled()&&(t?this.enable():this.disable()):this.isEnabled()?this.disable():this.enable(),this}isEmpty(t={}){return this.clipboardImpl.isEmpty(t)}getCellsInClipboard(){return this.cells}clean(t){return(!this.disabled||t)&&(this.clipboardImpl.clean(),this.notify("clipboard:changed",{cells:[]})),this}copy(t,e={}){return this.disabled||(this.clipboardImpl.copy(t,this.graph,Object.assign(Object.assign({},this.commonOptions),e)),this.notify("clipboard:changed",{cells:t})),this}cut(t,e={}){return this.disabled||(this.clipboardImpl.cut(t,this.graph,Object.assign(Object.assign({},this.commonOptions),e)),this.notify("clipboard:changed",{cells:t})),this}paste(t={},e=this.graph){return this.disabled?[]:this.clipboardImpl.paste(e,Object.assign(Object.assign({},this.commonOptions),t))}get commonOptions(){const t=this.options;return Yt(t,["enabled"])}notify(t,e){this.trigger(t,e),this.graph.trigger(t,e)}dispose(){this.clean(!0),this.off()}}Jt([W.dispose()],Xt.prototype,"dispose",null);p.prototype.isHistoryEnabled=function(){const i=this.getPlugin("history");return i?i.isEnabled():!1};p.prototype.enableHistory=function(){const i=this.getPlugin("history");return i&&i.enable(),this};p.prototype.disableHistory=function(){const i=this.getPlugin("history");return i&&i.disable(),this};p.prototype.toggleHistory=function(i){const t=this.getPlugin("history");return t&&t.toggleEnabled(i),this};p.prototype.undo=function(i){const t=this.getPlugin("history");return t&&t.undo(i),this};p.prototype.redo=function(i){const t=this.getPlugin("history");return t&&t.redo(i),this};p.prototype.undoAndCancel=function(i){const t=this.getPlugin("history");return t&&t.cancel(i),this};p.prototype.canUndo=function(){const i=this.getPlugin("history");return i?i.canUndo():!1};p.prototype.canRedo=function(){const i=this.getPlugin("history");return i?i.canRedo():!1};p.prototype.cleanHistory=function(i){const t=this.getPlugin("history");return t&&t.clean(i),this};p.prototype.getHistoryStackSize=function(){return this.getPlugin("history").getSize()};p.prototype.getUndoStackSize=function(){return this.getPlugin("history").getUndoSize()};p.prototype.getRedoStackSize=function(){return this.getPlugin("history").getRedoSize()};p.prototype.getUndoRemainSize=function(){return this.getPlugin("history").getUndoRemainSize()};var ft=globalThis&&globalThis.__decorate||function(i,t,e,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r};class Q extends W{constructor(t={}){super(),this.name="history",this.batchCommands=null,this.batchLevel=0,this.lastBatchIndex=-1,this.freezed=!1,this.stackSize=0,this.handlers=[];const{stackSize:e=0}=t;this.stackSize=e,this.options=_.getOptions(t),this.validator=new Q.Validator({history:this,cancelInvalid:this.options.cancelInvalid})}init(t){this.graph=t,this.model=this.graph.model,this.clean(),this.startListening()}isEnabled(){return!this.disabled}enable(){this.disabled&&(this.options.enabled=!0)}disable(){this.disabled||(this.options.enabled=!1)}toggleEnabled(t){return t!=null?t!==this.isEnabled()&&(t?this.enable():this.disable()):this.isEnabled()?this.disable():this.enable(),this}undo(t={}){if(!this.disabled){const e=this.undoStack.pop();e&&(this.revertCommand(e,t),this.redoStack.push(e),this.notify("undo",e,t))}return this}redo(t={}){if(!this.disabled){const e=this.redoStack.pop();e&&(this.applyCommand(e,t),this.undoStackPush(e),this.notify("redo",e,t))}return this}cancel(t={}){if(!this.disabled){const e=this.undoStack.pop();e&&(this.revertCommand(e,t),this.redoStack=[],this.notify("cancel",e,t))}return this}getSize(){return this.stackSize}getUndoRemainSize(){const t=this.undoStack.length;return this.stackSize-t}getUndoSize(){return this.undoStack.length}getRedoSize(){return this.redoStack.length}canUndo(){return!this.disabled&&this.undoStack.length>0}canRedo(){return!this.disabled&&this.redoStack.length>0}clean(t={}){return this.undoStack=[],this.redoStack=[],this.notify("clean",null,t),this}get disabled(){return this.options.enabled!==!0}validate(t,...e){return this.validator.validate(t,...e),this}startListening(){this.model.on("batch:start",this.initBatchCommand,this),this.model.on("batch:stop",this.storeBatchCommand,this),this.options.eventNames&&this.options.eventNames.forEach((t,e)=>{this.handlers[e]=this.addCommand.bind(this,t),this.model.on(t,this.handlers[e])}),this.validator.on("invalid",t=>this.trigger("invalid",t))}stopListening(){this.model.off("batch:start",this.initBatchCommand,this),this.model.off("batch:stop",this.storeBatchCommand,this),this.options.eventNames&&(this.options.eventNames.forEach((t,e)=>{this.model.off(t,this.handlers[e])}),this.handlers.length=0),this.validator.off("invalid")}createCommand(t){return{batch:t?t.batch:!1,data:{}}}revertCommand(t,e){this.freezed=!0;const n=Array.isArray(t)?_.sortBatchCommands(t):[t];for(let s=n.length-1;s>=0;s-=1){const r=n[s],o=Object.assign(Object.assign({},e),at(r.options,this.options.revertOptionsList||[]));this.executeCommand(r,!0,o)}this.freezed=!1}applyCommand(t,e){this.freezed=!0;const n=Array.isArray(t)?_.sortBatchCommands(t):[t];for(let s=0;s<n.length;s+=1){const r=n[s],o=Object.assign(Object.assign({},e),at(r.options,this.options.applyOptionsList||[]));this.executeCommand(r,!1,o)}this.freezed=!1}executeCommand(t,e,n){const s=this.model,r=s.getCell(t.data.id),o=t.event;if(_.isAddEvent(o)&&e||_.isRemoveEvent(o)&&!e)r&&r.remove(n);else if(_.isAddEvent(o)&&!e||_.isRemoveEvent(o)&&e){const l=t.data;l.node?s.addNode(l.props,n):l.edge&&s.addEdge(l.props,n)}else if(_.isChangeEvent(o)){const l=t.data,h=l.key;if(h&&r){const g=e?l.prev[h]:l.next[h];l.key==="attrs"&&this.ensureUndefinedAttrs(g,e?l.next[h]:l.prev[h])&&(n.dirty=!0),r.prop(h,g,n)}}else{const l=this.options.executeCommand;l&&F(l,this,t,e,n)}}addCommand(t,e){if(this.freezed||this.disabled)return;const n=e,s=n.options||{};if(s.dryrun||_.isAddEvent(t)&&this.options.ignoreAdd||_.isRemoveEvent(t)&&this.options.ignoreRemove||_.isChangeEvent(t)&&this.options.ignoreChange)return;const r=this.options.beforeAddCommand;if(r!=null&&F(r,this,t,e)===!1)return;t==="cell:change:*"&&(t=`cell:change:${n.key}`);const o=n.cell,l=st.isModel(o);let h;if(this.batchCommands){h=this.batchCommands[Math.max(this.lastBatchIndex,0)];const d=l&&!h.modelChange||h.data.id!==o.id,m=h.event!==t;if(this.lastBatchIndex>=0&&(d||m)){const z=this.batchCommands.findIndex(x=>(l&&x.modelChange||x.data.id===o.id)&&x.event===t);z<0||_.isAddEvent(t)||_.isRemoveEvent(t)?h=this.createCommand({batch:!0}):(h=this.batchCommands[z],this.batchCommands.splice(z,1)),this.batchCommands.push(h),this.lastBatchIndex=this.batchCommands.length-1}}else h=this.createCommand({batch:!1});if(_.isAddEvent(t)||_.isRemoveEvent(t)){const d=h.data;return h.event=t,h.options=s,d.id=o.id,d.props=nt(o.toJSON()),o.isEdge()?d.edge=!0:o.isNode()&&(d.node=!0),this.push(h,s)}if(_.isChangeEvent(t)){const d=e.key,m=h.data;return(!h.batch||!h.event)&&(h.event=t,h.options=s,m.key=d,m.prev==null&&(m.prev={}),m.prev[d]=nt(o.previous(d)),l?h.modelChange=!0:m.id=o.id),m.next==null&&(m.next={}),m.next[d]=nt(o.prop(d)),this.push(h,s)}const g=this.options.afterAddCommand;g&&F(g,this,t,e,h),this.push(h,s)}initBatchCommand(t){this.freezed||(this.batchCommands?this.batchLevel+=1:(this.batchCommands=[this.createCommand({batch:!0})],this.batchLevel=0,this.lastBatchIndex=-1))}storeBatchCommand(t){if(!this.freezed)if(this.batchCommands&&this.batchLevel<=0){const e=this.filterBatchCommand(this.batchCommands);e.length>0&&(this.redoStack=[],this.undoStackPush(e),this.consolidateCommands(),this.notify("add",e,t)),this.batchCommands=null,this.lastBatchIndex=-1,this.batchLevel=0}else this.batchCommands&&this.batchLevel>0&&(this.batchLevel-=1)}filterBatchCommand(t){let e=t.slice();const n=[];for(;e.length>0;){const s=e.shift(),r=s.event,o=s.data.id;if(r!=null&&(o!=null||s.modelChange)){if(_.isAddEvent(r)){const l=e.findIndex(h=>_.isRemoveEvent(h.event)&&h.data.id===o);if(l>=0){e=e.filter((h,g)=>l<g||h.data.id!==o);continue}}else if(_.isRemoveEvent(r)){const l=e.findIndex(h=>_.isAddEvent(h.event)&&h.data.id===o);if(l>=0){e.splice(l,1);continue}}else if(_.isChangeEvent(r)){const l=s.data;if(Mt(l.prev,l.next))continue}n.push(s)}}return n}notify(t,e,n){const s=e==null?null:Array.isArray(e)?e:[e];this.emit(t,{cmds:s,options:n}),this.graph.trigger(`history:${t}`,{cmds:s,options:n}),this.emit("change",{cmds:s,options:n}),this.graph.trigger("history:change",{cmds:s,options:n})}push(t,e){this.redoStack=[],t.batch?(this.lastBatchIndex=Math.max(this.lastBatchIndex,0),this.emit("batch",{cmd:t,options:e})):(this.undoStackPush(t),this.consolidateCommands(),this.notify("add",t,e))}consolidateCommands(){var t;const e=this.undoStack[this.undoStack.length-1],n=this.undoStack[this.undoStack.length-2];if(!Array.isArray(e))return;const s=new Set(e.map(o=>o.event));if(s.size!==2||!s.has("cell:change:parent")||!s.has("cell:change:children")||!e.every(o=>{var l;return o.batch&&((l=o.options)===null||l===void 0?void 0:l.ui)})||!Array.isArray(n)||n.length!==1)return;const r=n[0];r.event!=="cell:change:position"||!(!((t=r.options)===null||t===void 0)&&t.ui)||(n.push(...e),this.undoStack.pop())}undoStackPush(t){if(this.stackSize===0){this.undoStack.push(t);return}this.undoStack.length>=this.stackSize&&this.undoStack.shift(),this.undoStack.push(t)}ensureUndefinedAttrs(t,e){let n=!1;return t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"&&Object.keys(e).forEach(s=>{t[s]===void 0&&e[s]!==void 0?(t[s]=void 0,n=!0):typeof t[s]=="object"&&typeof e[s]=="object"&&(n=this.ensureUndefinedAttrs(t[s],e[s]))}),n}dispose(){this.validator.dispose(),this.clean(),this.stopListening(),this.off()}}ft([W.dispose()],Q.prototype,"dispose",null);(function(i){class t extends W{constructor(n){super(),this.map={},this.command=n.history,this.cancelInvalid=n.cancelInvalid!==!1,this.command.on("add",this.onCommandAdded,this)}onCommandAdded({cmds:n}){return Array.isArray(n)?n.every(s=>this.isValidCommand(s)):this.isValidCommand(n)}isValidCommand(n){if(n.options&&n.options.validation===!1)return!0;const s=n.event&&this.map[n.event]||[];let r=null;return s.forEach(o=>{let l=0;const h=g=>{const d=o[l];l+=1;try{if(d)d(g,n,h);else{r=g;return}}catch(m){h(m)}};h(r)}),r?(this.cancelInvalid&&this.command.cancel(),this.emit("invalid",{err:r}),!1):!0}validate(n,...s){const r=Array.isArray(n)?n:n.split(/\s+/);return s.forEach(o=>{if(typeof o!="function")throw new Error(`${r.join(" ")} requires callback functions.`)}),r.forEach(o=>{this.map[o]==null&&(this.map[o]=[]),this.map[o].push(s)}),this}dispose(){this.command.off("add",this.onCommandAdded,this)}}ft([W.dispose()],t.prototype,"dispose",null),i.Validator=t})(Q||(Q={}));var _;(function(i){function t(o){return o==="cell:added"}i.isAddEvent=t;function e(o){return o==="cell:removed"}i.isRemoveEvent=e;function n(o){return o!=null&&o.startsWith("cell:change:")}i.isChangeEvent=n;function s(o){const l=["cell:added","cell:removed","cell:change:*"],h=["batch:start","batch:stop"],g=o.eventNames?o.eventNames.filter(d=>!(i.isChangeEvent(d)||l.includes(d)||h.includes(d))):l;return Object.assign(Object.assign({enabled:!0},o),{eventNames:g,applyOptionsList:o.applyOptionsList||["propertyPath"],revertOptionsList:o.revertOptionsList||["propertyPath"]})}i.getOptions=s;function r(o){const l=[];for(let h=0,g=o.length;h<g;h+=1){const d=o[h];let m=null;if(i.isAddEvent(d.event)){const z=d.data.id;for(let x=0;x<h;x+=1)if(o[x].data.id===z){m=x;break}}m!==null?l.splice(m,0,d):l.push(d)}return l}i.sortBatchCommands=r})(_||(_={}));export{Xt as C,Q as H,Wt as K,$t as S};