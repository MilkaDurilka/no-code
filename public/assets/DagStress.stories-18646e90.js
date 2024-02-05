import{a as N,j as g}from"./jsx-runtime-29545a09.js";import{r as p}from"./index-76fb7be0.js";import{P as C,E as q,u as F,G as R,m as k,n as z}from"./html-7ecd7282.js";import{S as V}from"./index-9bef578c.js";import{T as U,D as X,r as Y}from"./index-e9872536.js";import{c as K}from"./gapSize-0f168ba5.js";import{A as L}from"./index-5a5beda9.js";import{s as $}from"./utils-0b1df067.js";import"./_commonjsHelpers-de833af9.js";import"./index-f3b9022e.js";import"./client-e9cc230c.js";import"./isNativeReflectConstruct-4d4208e5.js";const M=(e,t,s)=>{const r=[],i=[],c=[{id:"node-0",shape:"data-processing-dag-node",x:-250,y:0,ports:[{id:"node-0-out",group:"out"}],data:{name:"ввод данных_0",type:"INPUT",checkStatus:"success"}}],a=[];for(let n=0;n<e;n++){let d=null;for(let o=0;o<t;o++){const u={id:`node-${o}-${n}`,shape:"data-processing-dag-node",x:s?Math.random()*5e3:250*o,y:s?Math.random()*5e3:100*n,ports:[{id:`node-${o}-${n}-in`,group:"in"},{id:`node-${o}-${n}-out`,group:"out"}],data:{name:`Фильтрация данных_${o}-${n}`,type:"FILTER"}};if(c.push(u),r.push({id:u.id,status:"success"}),d){const f={id:`edge-${o}-${n}`,source:{cell:u.id,port:u.ports[1]},target:{cell:d.id,port:d.ports[0]},shape:"data-processing-curve",zIndex:-1,data:{source:u.id,target:d.id}};a.push(f),i.push({id:f.id,status:"success"})}d=u}d=null}return{nodes:c,edges:a,nodeStatusList:r,edgeStatusList:i}};var W=(e=>(e.INPUT="INPUT",e.FILTER="FILTER",e.JOIN="JOIN",e.UNION="UNION",e.AGG="AGG",e.OUTPUT="OUTPUT",e))(W||{}),w=(e=>(e.DEFAULT="default",e.SUCCESS="success",e.ERROR="error",e))(w||{});const Z={panning:{enabled:!0,eventTypes:["leftMouseDown","mouseWheel"]},mousewheel:{enabled:!0,modifiers:"ctrl",maxScale:7,minScale:0},highlighting:{magnetAdsorbed:{name:"stroke",args:{attrs:{fill:"#fff",stroke:"#31d0c6",strokeWidth:4}}}},connecting:{snap:!0,allowBlank:!1,allowLoop:!1,highlight:!0,sourceAnchor:{name:"left",args:{dx:C.IS_SAFARI?4:8}},targetAnchor:{name:"right",args:{dx:C.IS_SAFARI?4:-8}},createEdge(){return new q({shape:"data-processing-curve",attrs:{line:{strokeDasharray:"5 5"}},zIndex:-1})},validateConnection({sourceMagnet:e,targetMagnet:t}){return!(!e||e.getAttribute("port-group")==="in"||!t||t.getAttribute("port-group")!=="in")}}},D=[{type:"FILTER",name:"Фильтрация данных"},{type:"JOIN",name:"Подключения к данным"},{type:"UNION",name:"Объединение данных"},{type:"AGG",name:"Агрегация данных"},{type:"OUTPUT",name:"вывод данных"}],_={INPUT:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*RXnuTpQ22xkAAAAAAAAAAAAADtOHAQ/original",FILTER:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*ZJ6qToit8P4AAAAAAAAAAAAADtOHAQ/original",JOIN:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*EHqyQoDeBvIAAAAAAAAAAAAADtOHAQ/original",UNION:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*k4eyRaXv8gsAAAAAAAAAAAAADtOHAQ/original",AGG:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*TKG8R6nfYiAAAAAAAAAAAAAADtOHAQ/original",OUTPUT:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*zUgORbGg1HIAAAAAAAAAAAAADtOHAQ/original"},ee=(e,t,s=250,r=100)=>{const i=[];t.getEdges().forEach(d=>{var u;console.log("graph.getEdges()",t.getEdges());const o=(u=d.toJSON())==null?void 0:u.data;console.log("originEdge",o),o.source===e.id&&i.push(o.target)});const c=e.getPosition();let a=1/0,n=-1/0;return t.getNodes().forEach(d=>{if(i.indexOf(d.id)>-1){const o=d.getPosition();o.x<a&&(a=o.x),o.y>n&&(n=o.y)}}),{x:a!==1/0?a:c.x+s,y:n!==-1/0?n+r:c.y}},te=(e,t)=>{let s=[];switch(e){case"INPUT":s=[{id:`${t}-out`,group:"out"}];break;case"OUTPUT":s=[{id:`${t}-in`,group:"in"}];break;default:s=[{id:`${t}-in`,group:"in"},{id:`${t}-out`,group:"out"}];break}return s},se=(e,t,s)=>{var d;if(!t)return{};let r={};const i=t.getNodes().filter(o=>{var u;return((u=o.getData())==null?void 0:u.type)===e}),c=(d=D==null?void 0:D.find(o=>o.type===e))==null?void 0:d.name,a=F(),n={id:a,shape:"data-processing-dag-node",x:s==null?void 0:s.x,y:s==null?void 0:s.y,ports:te(e,a),data:{name:`${c}_${i.length+1}`,type:e}};return r=t.addNode(n),r},ne=(e,t,s)=>{const r={id:F(),shape:"data-processing-curve",source:{cell:e,port:`${e}-out`},target:{cell:t,port:`${t}-in`},zIndex:-1,data:{source:e,target:t}};s&&s.addEdge(r)},re={padding:{left:10,right:10}},ae=(e,t)=>{t.forEach(s=>{const{id:r,status:i,statusMsg:c}=s,a=e.getCellById(r),n=a.getData();a.setData({...n,status:i,statusMsg:c})})},oe=e=>{e.getEdges().forEach(t=>{t.attr({line:{stroke:"#3471F9"}}),t.attr("line/strokeDasharray",5),t.attr("line/style/animation","running-line 30s infinite linear")})},ie=(e,t)=>{e.getEdges().forEach(s=>{s.attr("line/strokeDasharray",0),s.attr("line/style/animation","")}),t.forEach(s=>{const{id:r,status:i}=s,c=e.getCellById(r);i==="success"&&c.attr("line/stroke","#52c41a"),i==="error"&&c.attr("line/stroke","#ff4d4f")})};var T=new Map,x=new WeakMap,G=0,ce=void 0;function de(e){return e?(x.has(e)||(G+=1,x.set(e,G.toString())),x.get(e)):"0"}function le(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?de(e.root):e[t]}`).toString()}function ue(e){let t=le(e),s=T.get(t);if(!s){const r=new Map;let i;const c=new IntersectionObserver(a=>{a.forEach(n=>{var d;const o=n.isIntersecting&&i.some(u=>n.intersectionRatio>=u);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=o),(d=r.get(n.target))==null||d.forEach(u=>{u(o,n)})})},e);i=c.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),s={id:t,observer:c,elements:r},T.set(t,s)}return s}function ge(e,t,s={},r=ce){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const d=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:i,observer:c,elements:a}=ue(s);let n=a.get(e)||[];return a.has(e)||a.set(e,n),n.push(t),c.observe(e),function(){n.splice(n.indexOf(t),1),n.length===0&&(a.delete(e),c.unobserve(e)),a.size===0&&(c.disconnect(),T.delete(i))}}function pe({threshold:e,delay:t,trackVisibility:s,rootMargin:r,root:i,triggerOnce:c,skip:a,initialInView:n,fallbackInView:d,onChange:o}={}){var u;const[f,E]=p.useState(null),b=p.useRef(),[v,S]=p.useState({inView:!!n,entry:void 0});b.current=o,p.useEffect(()=>{if(a||!f)return;let m;return m=ge(f,(A,I)=>{S({inView:A,entry:I}),b.current&&b.current(A,I),I.isIntersecting&&c&&m&&(m(),m=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:s,delay:t},d),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,f,i,r,c,a,s,d,t]);const h=(u=v.entry)==null?void 0:u.target,y=p.useRef();!f&&h&&!c&&!a&&y.current!==h&&(y.current=h,S({inView:!!n,entry:void 0}));const l=[E,v.inView,v.entry];return l.ref=l[0],l.inView=l[1],l.entry=l[2],l}const me=e=>{var y;const[t,s]=p.useState(!1),{ref:r,inView:i,entry:c}=pe({threshold:0}),a=l=>{const{node:m}=e,{graph:A}=m.model||{};if(A){const I=ee(m,A),H=se(l,A,I),Q=m.id,J=H.id;ne(Q,J,A)}},n=()=>g("ul",{children:D.map(l=>{const m=N("a",{onClick:()=>d(l.type),children:[g("i",{className:"node-mini-logo",style:{backgroundImage:`url(${_[l.type]})`}}),g("span",{children:l.name})]});return g("li",{className:"each-sub-menu",children:m},l.type)})}),d=l=>{a(l),s(!1)},o=l=>{s(l)},u=()=>{const{node:l}=e;(l.getPorts()||[]).forEach(A=>{l.setPortProp(A.id,"attrs/circle",{fill:"#fff",stroke:"#85A5FF"})})},f=()=>{const{node:l}=e;(l.getPorts()||[]).forEach(A=>{l.setPortProp(A.id,"attrs/circle",{fill:"transparent",stroke:"transparent"})})},E=(y=e.node)==null?void 0:y.getData(),{name:b,type:v,status:S,statusMsg:h}=E;return N("div",{ref:r,className:"data-processing-dag-node",children:[i?N("div",{className:"main-area",onMouseEnter:u,onMouseLeave:f,children:[N("div",{className:"main-info",children:[g("i",{className:"node-logo",style:{backgroundImage:`url(${_[v]})`}}),g(U,{title:b,mouseEnterDelay:.8,children:g("div",{className:"ellipsis-row node-name",children:b})})]}),N("div",{className:"status-action",children:[S===w.ERROR&&g(U,{title:h,children:g("i",{className:"status-icon status-icon-error"})}),S===w.SUCCESS&&g("i",{className:"status-icon status-icon-success"}),g("div",{className:"more-action-container",children:g("i",{className:"more-action"})})]})]}):null,v!==W.OUTPUT&&i&&g("div",{className:"plus-dag",children:g(X,{dropdownRender:n,overlayClassName:"processing-node-menu",trigger:["click"],placement:"bottom",open:t,onOpenChange:o,children:g("i",{className:K("plus-action",{"plus-action-selected":t})})})})]})};Y({shape:"data-processing-dag-node",width:212,height:48,component:me,ports:{groups:{in:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"transparent",strokeWidth:1,fill:"transparent"}}},out:{position:{name:"right",args:{dx:-32}},attrs:{circle:{r:4,magnet:!0,stroke:"transparent",strokeWidth:1,fill:"transparent"}}}}}});R.registerConnector("curveConnector",(e,t)=>{const s=Math.abs(t.x-e.x),r=new k;return r.appendSegment(k.createSegment("M",e.x-4,e.y)),r.appendSegment(k.createSegment("L",e.x+12,e.y)),r.appendSegment(k.createSegment("C",e.x<t.x?e.x+s/2:e.x-s/2,e.y,e.x<t.x?t.x-s/2:t.x+s/2,t.y,t.x-6,t.y)),r.appendSegment(k.createSegment("L",t.x+2,t.y)),r.serialize()},!0);z.config({markup:[{tagName:"path",selector:"wrap",attrs:{fill:"none",cursor:"pointer",stroke:"transparent",strokeLinecap:"round"}},{tagName:"path",selector:"line",attrs:{fill:"none",pointerEvents:"none"}}],connector:{name:"curveConnector"},attrs:{wrap:{connection:!0,strokeWidth:10,strokeLinejoin:"round"},line:{connection:!0,stroke:"#A2B1C3",strokeWidth:1,targetMarker:{name:"classic",size:6}}}});R.registerEdge("data-processing-curve",z,!0);const fe=e=>{const[t,s]=p.useState(null);return p.useEffect(()=>{const r=new R({container:e.current,...Z});s(r),r.use(new V({multiple:!0,rubberEdge:!0,rubberNode:!0,modifiers:"shift",rubberband:!0}))},[]),{graph:t}};const he=()=>{const e=p.useRef(null),{graph:t}=fe(e),[s,r]=p.useState({edgeStatusList:[],nodeStatusList:[]}),i=p.useRef(null),c=p.useRef([]),[a,n]=p.useState(!1);p.useEffect(()=>{if(!t)return;const{nodes:E,edges:b,nodeStatusList:v,edgeStatusList:S}=M(33,30);r({nodeStatusList:v,edgeStatusList:S}),t.fromJSON({nodes:E,edges:b}),t.zoomToFit(re)},[t]);const d=p.useCallback(()=>{!s.edgeStatusList||!s.nodeStatusList||(oe(t),setTimeout(()=>{ae(t,s.nodeStatusList),ie(t,s.edgeStatusList)},1e4))},[t,s]),o=()=>{c.current.forEach(h=>{cancelIdleCallback(h)}),c.current=[];const{nodes:E,edges:b}=M(33,30,!0);t.clearCells(),$(E).forEach(h=>{const y=requestIdleCallback(()=>{t.addNodes(h)},{timeout:500});c.current.push(y)}),$(b).forEach(h=>{const y=requestIdleCallback(()=>{t.addEdges(h)},{timeout:500});c.current.push(y)})};p.useEffect(()=>{a&&!i.current&&(i.current=setInterval(()=>{o()},2e3)),!a&&i.current&&(clearInterval(i.current),i.current=null)},[a]);const u=p.useCallback(()=>{n(!0)},[]),f=p.useCallback(()=>{n(!1)},[]);return N("div",{children:[g(L,{}),a&&g(L,{}),g("button",{onClick:u,children:"start"}),g("button",{onClick:f,children:"stop"}),g("button",{onClick:o,children:"change pos"}),g("button",{onClick:d,children:"animate"}),g("div",{className:"container",style:{height:"100vh"},children:g("div",{ref:e,className:"graph-container",style:{height:"100vh"}})})]})},we={title:"Antv/DagStress",component:he,tags:["autodocs"]},O={args:{}};var P,B,j;O.parameters={...O.parameters,docs:{...(P=O.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {}
}`,...(j=(B=O.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const Te=["Primary"];export{O as Primary,Te as __namedExportsOrder,we as default};
