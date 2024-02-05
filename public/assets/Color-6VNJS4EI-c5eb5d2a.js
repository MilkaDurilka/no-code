import{n as M,d as ce,T as Ee,F as ke,I as Me,g as Ce}from"./index-362a4c68.js";import{R as h,r as v}from"./index-76fb7be0.js";import{g as le}from"./_commonjsHelpers-de833af9.js";import{c as $e}from"./index-b7949e8c.js";import{i as ie}from"./mapValues-a2ff26fb.js";import{t as Ne,n as Oe}from"./now-8c1789cd.js";import"./iframe-9953bcce.js";import"../sb-preview/runtime.js";import"./cloneDeep-2f7d3618.js";import"./_getPrototype-de793928.js";import"./index-f3b9022e.js";import"./index-11d98b33.js";import"./isNativeReflectConstruct-4d4208e5.js";import"./index-356e4a49.js";import"./index-60db4c95.js";function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){if(e==null)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}function q(e){var t=v.useRef(e),n=v.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}var R=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},j=function(e){return"touches"in e},V=function(e){return e&&e.ownerDocument.defaultView||self},te=function(e,t,n){var r=e.getBoundingClientRect(),o=j(t)?function(a,s){for(var c=0;c<a.length;c++)if(a[c].identifier===s)return a[c];return a[0]}(t.touches,n):t;return{left:R((o.pageX-(r.left+V(e).pageXOffset))/r.width),top:R((o.pageY-(r.top+V(e).pageYOffset))/r.height)}},ne=function(e){!j(e)&&e.preventDefault()},Q=h.memo(function(e){var t=e.onMove,n=e.onKey,r=J(e,["onMove","onKey"]),o=v.useRef(null),a=q(t),s=q(n),c=v.useRef(null),l=v.useRef(!1),i=v.useMemo(function(){var _=function(p){ne(p),(j(p)?p.touches.length>0:p.buttons>0)&&o.current?a(te(o.current,p,c.current)):E(!1)},N=function(){return E(!1)};function E(p){var m=l.current,y=V(o.current),C=p?y.addEventListener:y.removeEventListener;C(m?"touchmove":"mousemove",_),C(m?"touchend":"mouseup",N)}return[function(p){var m=p.nativeEvent,y=o.current;if(y&&(ne(m),!function(D,I){return I&&!j(D)}(m,l.current)&&y)){if(j(m)){l.current=!0;var C=m.changedTouches||[];C.length&&(c.current=C[0].identifier)}y.focus(),a(te(y,m,c.current)),E(!0)}},function(p){var m=p.which||p.keyCode;m<37||m>40||(p.preventDefault(),s({left:m===39?.05:m===37?-.05:0,top:m===40?.05:m===38?-.05:0}))},E]},[s,a]),d=i[0],f=i[1],g=i[2];return v.useEffect(function(){return g},[g]),h.createElement("div",$({},r,{onTouchStart:d,onMouseDown:d,className:"react-colorful__interactive",ref:o,onKeyDown:f,tabIndex:0,role:"slider"}))}),z=function(e){return e.filter(Boolean).join(" ")},Z=function(e){var t=e.color,n=e.left,r=e.top,o=r===void 0?.5:r,a=z(["react-colorful__pointer",e.className]);return h.createElement("div",{className:a,style:{top:100*o+"%",left:100*n+"%"}},h.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},x=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},Se={grad:.9,turn:360,rad:360/(2*Math.PI)},Re=function(e){return he(G(e))},G=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?x(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?x(parseInt(e.substring(6,8),16)/255,2):1}},Ie=function(e,t){return t===void 0&&(t="deg"),Number(e)*(Se[t]||1)},Te=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?je({h:Ie(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},je=function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},Fe=function(e){return He(fe(e))},ue=function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:x(e.h),s:x(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:x(o/2),a:x(r,2)}},A=function(e){var t=ue(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},X=function(e){var t=ue(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},fe=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var a=Math.floor(t),s=r*(1-n),c=r*(1-(t-a)*n),l=r*(1-(1-t+a)*n),i=a%6;return{r:x(255*[r,c,s,s,l,r][i]),g:x(255*[l,r,r,c,s,s][i]),b:x(255*[s,s,l,r,r,c][i]),a:x(o,2)}},ze=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?he({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},H=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},He=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=o<1?H(x(255*o)):"";return"#"+H(t)+H(n)+H(r)+a},he=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=Math.max(t,n,r),s=a-Math.min(t,n,r),c=s?a===t?(n-r)/s:a===n?2+(r-t)/s:4+(t-n)/s:0;return{h:x(60*(c<0?c+6:c)),s:x(a?s/a*100:0),v:x(a/255*100),a:o}},de=h.memo(function(e){var t=e.hue,n=e.onChange,r=z(["react-colorful__hue",e.className]);return h.createElement("div",{className:r},h.createElement(Q,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:R(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":x(t),"aria-valuemax":"360","aria-valuemin":"0"},h.createElement(Z,{className:"react-colorful__hue-pointer",left:t/360,color:A({h:t,s:100,v:100,a:1})})))}),ge=h.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:A({h:t.h,s:100,v:100,a:1})};return h.createElement("div",{className:"react-colorful__saturation",style:r},h.createElement(Q,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:R(t.s+100*o.left,0,100),v:R(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+x(t.s)+"%, Brightness "+x(t.v)+"%"},h.createElement(Z,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:A(t)})))}),me=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},ve=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},Pe=function(e,t){return e.toLowerCase()===t.toLowerCase()||me(G(e),G(t))};function be(e,t,n){var r=q(n),o=v.useState(function(){return e.toHsva(t)}),a=o[0],s=o[1],c=v.useRef({color:t,hsva:a});v.useEffect(function(){if(!e.equal(t,c.current.color)){var i=e.toHsva(t);c.current={hsva:i,color:t},s(i)}},[t,e]),v.useEffect(function(){var i;me(a,c.current.hsva)||e.equal(i=e.fromHsva(a),c.current.color)||(c.current={hsva:a,color:i},r(i))},[a,e,r]);var l=v.useCallback(function(i){s(function(d){return Object.assign({},d,i)})},[]);return[a,l]}var Le=typeof window<"u"?v.useLayoutEffect:v.useEffect,Xe=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},re=new Map,pe=function(e){Le(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!re.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,re.set(t,n);var r=Xe();r&&n.setAttribute("nonce",r),t.head.appendChild(n)}},[])},We=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,s=J(e,["className","colorModel","color","onChange"]),c=v.useRef(null);pe(c);var l=be(n,o,a),i=l[0],d=l[1],f=z(["react-colorful",t]);return h.createElement("div",$({},s,{ref:c,className:f}),h.createElement(ge,{hsva:i,onChange:d}),h.createElement(de,{hue:i.h,onChange:d,className:"react-colorful__last-control"}))},Be={defaultColor:"000",toHsva:Re,fromHsva:function(e){return Fe({h:e.h,s:e.s,v:e.v,a:1})},equal:Pe},De=function(e){return h.createElement(We,$({},e,{colorModel:Be}))},Ke=function(e){var t=e.className,n=e.hsva,r=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+X(Object.assign({},n,{a:0}))+", "+X(Object.assign({},n,{a:1}))+")"},a=z(["react-colorful__alpha",t]),s=x(100*n.a);return h.createElement("div",{className:a},h.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),h.createElement(Q,{onMove:function(c){r({a:c.left})},onKey:function(c){r({a:R(n.a+c.left)})},"aria-label":"Alpha","aria-valuetext":s+"%","aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100"},h.createElement(Z,{className:"react-colorful__alpha-pointer",left:n.a,color:X(n)})))},xe=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,s=J(e,["className","colorModel","color","onChange"]),c=v.useRef(null);pe(c);var l=be(n,o,a),i=l[0],d=l[1],f=z(["react-colorful",t]);return h.createElement("div",$({},s,{ref:c,className:f}),h.createElement(ge,{hsva:i,onChange:d}),h.createElement(de,{hue:i.h,onChange:d}),h.createElement(Ke,{hsva:i,onChange:d,className:"react-colorful__last-control"}))},qe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Te,fromHsva:X,equal:ve},Ve=function(e){return h.createElement(xe,$({},e,{colorModel:qe}))},Ge={defaultColor:"rgba(0, 0, 0, 1)",toHsva:ze,fromHsva:function(e){var t=fe(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:ve},Ae=function(e){return h.createElement(xe,$({},e,{colorModel:Ge}))};const F=$e,ye={};for(const e of Object.keys(F))ye[F[e]]=e;const u={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var we=u;for(const e of Object.keys(u)){if(!("channels"in u[e]))throw new Error("missing channels property: "+e);if(!("labels"in u[e]))throw new Error("missing channel labels property: "+e);if(u[e].labels.length!==u[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=u[e];delete u[e].channels,delete u[e].labels,Object.defineProperty(u[e],"channels",{value:t}),Object.defineProperty(u[e],"labels",{value:n})}u.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),s=a-o;let c,l;a===o?c=0:t===a?c=(n-r)/s:n===a?c=2+(r-t)/s:r===a&&(c=4+(t-n)/s),c=Math.min(c*60,360),c<0&&(c+=360);const i=(o+a)/2;return a===o?l=0:i<=.5?l=s/(a+o):l=s/(2-a-o),[c,l*100,i*100]};u.rgb.hsv=function(e){let t,n,r,o,a;const s=e[0]/255,c=e[1]/255,l=e[2]/255,i=Math.max(s,c,l),d=i-Math.min(s,c,l),f=function(g){return(i-g)/6/d+1/2};return d===0?(o=0,a=0):(a=d/i,t=f(s),n=f(c),r=f(l),s===i?o=r-n:c===i?o=1/3+t-r:l===i&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,i*100]};u.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=u.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,a*100,r*100]};u.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r),a=(1-t-o)/(1-o)||0,s=(1-n-o)/(1-o)||0,c=(1-r-o)/(1-o)||0;return[a*100,s*100,c*100,o*100]};function Ue(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}u.rgb.keyword=function(e){const t=ye[e];if(t)return t;let n=1/0,r;for(const o of Object.keys(F)){const a=F[o],s=Ue(e,a);s<n&&(n=s,r=o)}return r};u.keyword.rgb=function(e){return F[e]};u.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=t*.4124+n*.3576+r*.1805,a=t*.2126+n*.7152+r*.0722,s=t*.0193+n*.1192+r*.9505;return[o*100,a*100,s*100]};u.rgb.lab=function(e){const t=u.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*r-16,s=500*(n-r),c=200*(r-o);return[a,s,c]};u.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,s;if(n===0)return s=r*255,[s,s,s];r<.5?o=r*(1+n):o=r+n-r*n;const c=2*r-o,l=[0,0,0];for(let i=0;i<3;i++)a=t+1/3*-(i-1),a<0&&a++,a>1&&a--,6*a<1?s=c+(o-c)*6*a:2*a<1?s=o:3*a<2?s=c+(o-c)*(2/3-a)*6:s=c,l[i]=s*255;return l};u.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;const s=(r+n)/2,c=r===0?2*o/(a+o):2*n/(r+n);return[t,c*100,s*100]};u.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),s=255*r*(1-n),c=255*r*(1-n*a),l=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,l,s];case 1:return[c,r,s];case 2:return[s,r,l];case 3:return[s,c,r];case 4:return[l,s,r];case 5:return[r,s,c]}};u.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,s;s=(2-n)*r;const c=(2-n)*o;return a=n*o,a/=c<=1?c:2-c,a=a||0,s/=2,[t,a*100,s*100]};u.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const s=Math.floor(6*t),c=1-r;a=6*t-s,s&1&&(a=1-a);const l=n+a*(c-n);let i,d,f;switch(s){default:case 6:case 0:i=c,d=l,f=n;break;case 1:i=l,d=c,f=n;break;case 2:i=n,d=c,f=l;break;case 3:i=n,d=l,f=c;break;case 4:i=l,d=n,f=c;break;case 5:i=c,d=n,f=l;break}return[i*255,d*255,f*255]};u.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100,a=1-Math.min(1,t*(1-o)+o),s=1-Math.min(1,n*(1-o)+o),c=1-Math.min(1,r*(1-o)+o);return[a*255,s*255,c*255]};u.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,s;return o=t*3.2406+n*-1.5372+r*-.4986,a=t*-.9689+n*1.8758+r*.0415,s=t*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),s=Math.min(Math.max(0,s),1),[o*255,a*255,s*255]};u.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(t-n),s=200*(n-r);return[o,a,s]};u.lab.xyz=function(e){const t=e[0],n=e[1],r=e[2];let o,a,s;a=(t+16)/116,o=n/500+a,s=a-r/200;const c=a**3,l=o**3,i=s**3;return a=c>.008856?c:(a-16/116)/7.787,o=l>.008856?l:(o-16/116)/7.787,s=i>.008856?i:(s-16/116)/7.787,o*=95.047,a*=100,s*=108.883,[o,a,s]};u.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const s=Math.sqrt(n*n+r*r);return[t,s,o]};u.lch.lab=function(e){const t=e[0],n=e[1],o=e[2]/360*2*Math.PI,a=n*Math.cos(o),s=n*Math.sin(o);return[t,a,s]};u.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let a=t===null?u.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let s=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(s+=60),s};u.hsv.ansi16=function(e){return u.rgb.ansi16(u.hsv.rgb(e),e[2])};u.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};u.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,r=(t&1)*n*255,o=(t>>1&1)*n*255,a=(t>>2&1)*n*255;return[r,o,a]};u.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let t;const n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,r,o]};u.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};u.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(c=>c+c).join(""));const r=parseInt(n,16),o=r>>16&255,a=r>>8&255,s=r&255;return[o,a,s]};u.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),s=o-a;let c,l;return s<1?c=a/(1-s):c=0,s<=0?l=0:o===t?l=(n-r)/s%6:o===n?l=2+(r-t)/s:l=4+(t-n)/s,l/=6,l%=1,[l*360,s*100,c*100]};u.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],r*100,o*100]};u.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};u.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],a=t%1*6,s=a%1,c=1-s;let l=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=c,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=c,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=c}return l=(1-n)*r,[(n*o[0]+l)*255,(n*o[1]+l)*255,(n*o[2]+l)*255]};u.hcg.hsv=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);let o=0;return r>0&&(o=t/r),[e[0],o*100,r*100]};u.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let o=0;return r>0&&r<.5?o=t/(2*r):r>=.5&&r<1&&(o=t/(2*(1-r))),[e[0],o*100,r*100]};u.hcg.hwb=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};u.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,o=r-t;let a=0;return o<1&&(a=(r-o)/(1-o)),[e[0],o*100,a*100]};u.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};u.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};u.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};u.gray.hsl=function(e){return[0,0,e[0]]};u.gray.hsv=u.gray.hsl;u.gray.hwb=function(e){return[0,100,e[0]]};u.gray.cmyk=function(e){return[0,0,0,e[0]]};u.gray.lab=function(e){return[e[0],0,0]};u.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};u.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const W=we;function Ye(){const e={},t=Object.keys(W);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}function Je(e){const t=Ye(),n=[e];for(t[e].distance=0;n.length;){const r=n.pop(),o=Object.keys(W[r]);for(let a=o.length,s=0;s<a;s++){const c=o[s],l=t[c];l.distance===-1&&(l.distance=t[r].distance+1,l.parent=r,n.unshift(c))}}return t}function Qe(e,t){return function(n){return t(e(n))}}function Ze(e,t){const n=[t[e].parent,e];let r=W[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=Qe(W[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}var et=function(e){const t=Je(e),n={},r=Object.keys(t);for(let o=r.length,a=0;a<o;a++){const s=r[a];t[s].parent!==null&&(n[s]=Ze(s,t))}return n};const U=we,tt=et,O={},nt=Object.keys(U);function rt(e){const t=function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))};return"conversion"in e&&(t.conversion=e.conversion),t}function ot(e){const t=function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=e(n);if(typeof o=="object")for(let a=o.length,s=0;s<a;s++)o[s]=Math.round(o[s]);return o};return"conversion"in e&&(t.conversion=e.conversion),t}nt.forEach(e=>{O[e]={},Object.defineProperty(O[e],"channels",{value:U[e].channels}),Object.defineProperty(O[e],"labels",{value:U[e].labels});const t=tt(e);Object.keys(t).forEach(r=>{const o=t[r];O[e][r]=ot(o),O[e][r].raw=rt(o)})});var at=O;const w=le(at);var st=ie,K=Oe,oe=Ne,ct="Expected a function",lt=Math.max,it=Math.min;function ut(e,t,n){var r,o,a,s,c,l,i=0,d=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(ct);t=oe(t)||0,st(n)&&(d=!!n.leading,f="maxWait"in n,a=f?lt(oe(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g);function _(b){var k=r,T=o;return r=o=void 0,i=b,s=e.apply(T,k),s}function N(b){return i=b,c=setTimeout(m,t),d?_(b):s}function E(b){var k=b-l,T=b-i,ee=t-k;return f?it(ee,a-T):ee}function p(b){var k=b-l,T=b-i;return l===void 0||k>=t||k<0||f&&T>=a}function m(){var b=K();if(p(b))return y(b);c=setTimeout(m,E(b))}function y(b){return c=void 0,g&&r?_(b):(r=o=void 0,s)}function C(){c!==void 0&&clearTimeout(c),i=0,r=l=o=c=void 0}function D(){return c===void 0?s:y(K())}function I(){var b=K(),k=p(b);if(r=arguments,o=this,l=b,k){if(c===void 0)return N(l);if(f)return clearTimeout(c),c=setTimeout(m,t),_(l)}return c===void 0&&(c=setTimeout(m,t)),s}return I.cancel=C,I.flush=D,I}var ft=ut,ht=ft,dt=ie,gt="Expected a function";function mt(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(gt);return dt(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ht(e,t,{leading:r,maxWait:t,trailing:o})}var vt=mt;const bt=le(vt);var pt=M.div({position:"relative",maxWidth:250}),xt=M(ce)({position:"absolute",zIndex:1,top:4,left:4}),yt=M.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),wt=M(Ee)(({theme:e})=>({fontFamily:e.typography.fonts.base})),_t=M.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Et=M.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),kt=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,ae=({value:e,active:t,onClick:n,style:r,...o})=>{let a=`linear-gradient(${e}, ${e}), ${kt}, linear-gradient(#fff, #fff)`;return h.createElement(Et,{...o,active:t,onClick:n,style:{...r,backgroundImage:a}})},Mt=M(ke.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Ct=M(Me)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),_e=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(_e||{}),P=Object.values(_e),$t=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Nt=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Ot=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,Y=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,St=/^\s*#?([0-9a-f]{3})\s*$/i,Rt={hex:De,rgb:Ae,hsl:Ve},L={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},se=e=>{let t=e==null?void 0:e.match($t);if(!t)return[0,0,0,1];let[,n,r,o,a=1]=t;return[n,r,o,a].map(Number)},S=e=>{if(!e)return;let t=!0;if(Nt.test(e)){let[s,c,l,i]=se(e),[d,f,g]=w.rgb.hsl([s,c,l])||[0,0,0];return{valid:t,value:e,keyword:w.rgb.keyword([s,c,l]),colorSpace:"rgb",rgb:e,hsl:`hsla(${d}, ${f}%, ${g}%, ${i})`,hex:`#${w.rgb.hex([s,c,l]).toLowerCase()}`}}if(Ot.test(e)){let[s,c,l,i]=se(e),[d,f,g]=w.hsl.rgb([s,c,l])||[0,0,0];return{valid:t,value:e,keyword:w.hsl.keyword([s,c,l]),colorSpace:"hsl",rgb:`rgba(${d}, ${f}, ${g}, ${i})`,hsl:e,hex:`#${w.hsl.hex([s,c,l]).toLowerCase()}`}}let n=e.replace("#",""),r=w.keyword.rgb(n)||w.hex.rgb(n),o=w.rgb.hsl(r),a=e;if(/[^#a-f0-9]/i.test(e)?a=n:Y.test(e)&&(a=`#${n}`),a.startsWith("#"))t=Y.test(a);else try{w.keyword.hex(a)}catch{t=!1}return{valid:t,value:a,keyword:w.rgb.keyword(r),colorSpace:"hex",rgb:`rgba(${r[0]}, ${r[1]}, ${r[2]}, 1)`,hsl:`hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,hex:a}},It=(e,t,n)=>{if(!e||!(t!=null&&t.valid))return L[n];if(n!=="hex")return(t==null?void 0:t[n])||L[n];if(!t.hex.startsWith("#"))try{return`#${w.keyword.hex(t.hex)}`}catch{return L.hex}let r=t.hex.match(St);if(!r)return Y.test(t.hex)?t.hex:L.hex;let[o,a,s]=r[1].split("");return`#${o}${o}${a}${a}${s}${s}`},Tt=(e,t)=>{let[n,r]=v.useState(e||""),[o,a]=v.useState(()=>S(n)),[s,c]=v.useState((o==null?void 0:o.colorSpace)||"hex");v.useEffect(()=>{let f=e||"",g=S(f);r(f),a(g),c((g==null?void 0:g.colorSpace)||"hex")},[e]);let l=v.useMemo(()=>It(n,o,s).toLowerCase(),[n,o,s]),i=v.useCallback(f=>{let g=S(f),_=(g==null?void 0:g.value)||f||"";r(_),_===""&&(a(void 0),t(void 0)),g&&(a(g),c(g.colorSpace),t(g.value))},[t]),d=v.useCallback(()=>{let f=P.indexOf(s)+1;f>=P.length&&(f=0),c(P[f]);let g=(o==null?void 0:o[P[f]])||"";r(g),t(g)},[o,s,t]);return{value:n,realValue:l,updateValue:i,color:o,colorSpace:s,cycleColorSpace:d}},B=e=>e.replace(/\s*/,"").toLowerCase(),jt=(e,t,n)=>{let[r,o]=v.useState(t!=null&&t.valid?[t]:[]);v.useEffect(()=>{t===void 0&&o([])},[t]);let a=v.useMemo(()=>(e||[]).map(c=>typeof c=="string"?S(c):c.title?{...S(c.color),keyword:c.title}:S(c.color)).concat(r).filter(Boolean).slice(-27),[e,r]),s=v.useCallback(c=>{c!=null&&c.valid&&(a.some(l=>B(l[n])===B(c[n]))||o(l=>l.concat(c)))},[n,a]);return{presets:a,addPreset:s}},Ft=({name:e,value:t,onChange:n,onFocus:r,onBlur:o,presetColors:a,startOpen:s=!1})=>{let c=v.useCallback(bt(n,200),[n]),{value:l,realValue:i,updateValue:d,color:f,colorSpace:g,cycleColorSpace:_}=Tt(t,c),{presets:N,addPreset:E}=jt(a,f,g),p=Rt[g];return h.createElement(pt,null,h.createElement(xt,{startOpen:s,closeOnOutsideClick:!0,onVisibleChange:()=>E(f),tooltip:h.createElement(yt,null,h.createElement(p,{color:i==="transparent"?"#000000":i,onChange:d,onFocus:r,onBlur:o}),N.length>0&&h.createElement(_t,null,N.map((m,y)=>h.createElement(ce,{key:`${m.value}-${y}`,hasChrome:!1,tooltip:h.createElement(wt,{note:m.keyword||m.value})},h.createElement(ae,{value:m[g],active:f&&B(m[g])===B(f[g]),onClick:()=>d(m.value)})))))},h.createElement(ae,{value:i,style:{margin:4}})),h.createElement(Mt,{id:Ce(e),value:l,onChange:m=>d(m.target.value),onFocus:m=>m.target.select(),placeholder:"Choose color..."}),l?h.createElement(Ct,{icon:"markup",onClick:_}):null)},Jt=Ft;export{Ft as ColorControl,Jt as default};
