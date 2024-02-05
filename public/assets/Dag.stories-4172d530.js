import{a as A,j as a}from"./jsx-runtime-29545a09.js";import{r as f}from"./index-76fb7be0.js";import{P as b,E as F,u as w,G as E,m as h,n as R}from"./html-7ecd7282.js";import{S as z}from"./index-9bef578c.js";import{T as v,D as $,r as j}from"./view-a4012fb1.js";import{c as H}from"./gapSize-176db3ef.js";import"./_commonjsHelpers-de833af9.js";import"./isNativeReflectConstruct-4d4208e5.js";import"./toConsumableArray-3cd4081e.js";import"./index-f3b9022e.js";import"./asyncToGenerator-e43f4a97.js";import"./client-e9cc230c.js";const J={nodes:[{id:"node-0",shape:"data-processing-dag-node",x:0,y:100,ports:[{id:"node-0-out",group:"out"}],data:{name:"ввод данных_1",type:"INPUT",checkStatus:"sucess"}},{id:"node-1",shape:"data-processing-dag-node",x:250,y:100,ports:[{id:"node-1-in",group:"in"},{id:"node-1-out",group:"out"}],data:{name:"Фильтрация данных_1",type:"FILTER"}},{id:"node-2",shape:"data-processing-dag-node",x:250,y:200,ports:[{id:"node-2-out",group:"out"}],data:{name:"ввод данных_2",type:"INPUT"}},{id:"node-3",shape:"data-processing-dag-node",x:500,y:100,ports:[{id:"node-3-in",group:"in"},{id:"node-3-out",group:"out"}],data:{name:"Подключения к данным_1",type:"JOIN"}},{id:"node-4",shape:"data-processing-dag-node",x:750,y:100,ports:[{id:"node-4-in",group:"in"}],data:{name:"вывод данных_1",type:"OUTPUT"}}],edges:[{id:"edge-0",source:{cell:"node-0",port:"node-0-out"},target:{cell:"node-1",port:"node-1-in"},shape:"data-processing-curve",zIndex:-1,data:{source:"node-0",target:"node-1"}},{id:"edge-1",source:{cell:"node-2",port:"node-2-out"},target:{cell:"node-3",port:"node-3-in"},shape:"data-processing-curve",zIndex:-1,data:{source:"node-2",target:"node-3"}},{id:"edge-2",source:{cell:"node-1",port:"node-1-out"},target:{cell:"node-3",port:"node-3-in"},shape:"data-processing-curve",zIndex:-1,data:{source:"node-1",target:"node-3"}},{id:"edge-3",source:{cell:"node-3",port:"node-3-out"},target:{cell:"node-4",port:"node-4-in"},shape:"data-processing-curve",zIndex:-1,data:{source:"node-3",target:"node-4"}}]};var P=(e=>(e.INPUT="INPUT",e.FILTER="FILTER",e.JOIN="JOIN",e.UNION="UNION",e.AGG="AGG",e.OUTPUT="OUTPUT",e))(P||{}),x=(e=>(e.DEFAULT="default",e.SUCCESS="success",e.ERROR="error",e))(x||{});const Q={panning:{enabled:!0,eventTypes:["leftMouseDown","mouseWheel"]},mousewheel:{enabled:!0,modifiers:"ctrl",factor:1.1,maxScale:1.5,minScale:.5},highlighting:{magnetAdsorbed:{name:"stroke",args:{attrs:{fill:"#fff",stroke:"#31d0c6",strokeWidth:4}}}},connecting:{snap:!0,allowBlank:!1,allowLoop:!1,highlight:!0,sourceAnchor:{name:"left",args:{dx:b.IS_SAFARI?4:8}},targetAnchor:{name:"right",args:{dx:b.IS_SAFARI?4:-8}},createEdge(){return new F({shape:"data-processing-curve",attrs:{line:{strokeDasharray:"5 5"}},zIndex:-1})},validateConnection({sourceMagnet:e,targetMagnet:t}){return!(!e||e.getAttribute("port-group")==="in"||!t||t.getAttribute("port-group")!=="in")}}},N=[{type:"FILTER",name:"Фильтрация данных"},{type:"JOIN",name:"Подключения к данным"},{type:"UNION",name:"Объединение данных"},{type:"AGG",name:"Агрегация данных"},{type:"OUTPUT",name:"вывод данных"}],D={INPUT:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*RXnuTpQ22xkAAAAAAAAAAAAADtOHAQ/original",FILTER:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*ZJ6qToit8P4AAAAAAAAAAAAADtOHAQ/original",JOIN:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*EHqyQoDeBvIAAAAAAAAAAAAADtOHAQ/original",UNION:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*k4eyRaXv8gsAAAAAAAAAAAAADtOHAQ/original",AGG:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*TKG8R6nfYiAAAAAAAAAAAAAADtOHAQ/original",OUTPUT:"https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*zUgORbGg1HIAAAAAAAAAAAAADtOHAQ/original"},B=(e,t,s=250,n=100)=>{const g=[];t.getEdges().forEach(c=>{var u;console.log("graph.getEdges()",t.getEdges());const r=(u=c.toJSON())==null?void 0:u.data;console.log("originEdge",r),r.source===e.id&&g.push(r.target)});const o=e.getPosition();let d=1/0,l=-1/0;return t.getNodes().forEach(c=>{if(g.indexOf(c.id)>-1){const r=c.getPosition();r.x<d&&(d=r.x),r.y>l&&(l=r.y)}}),{x:d!==1/0?d:o.x+s,y:l!==-1/0?l+n:o.y}},W=(e,t)=>{let s=[];switch(e){case"INPUT":s=[{id:`${t}-out`,group:"out"}];break;case"OUTPUT":s=[{id:`${t}-in`,group:"in"}];break;default:s=[{id:`${t}-in`,group:"in"},{id:`${t}-out`,group:"out"}];break}return s},X=(e,t,s)=>{var c;if(!t)return{};let n={};const g=t.getNodes().filter(r=>{var u;return((u=r.getData())==null?void 0:u.type)===e}),o=(c=N==null?void 0:N.find(r=>r.type===e))==null?void 0:c.name,d=w(),l={id:d,shape:"data-processing-dag-node",x:s==null?void 0:s.x,y:s==null?void 0:s.y,ports:W(e,d),data:{name:`${o}_${g.length+1}`,type:e}};return n=t.addNode(l),n},q=(e,t,s)=>{const n={id:w(),shape:"data-processing-curve",source:{cell:e,port:`${e}-out`},target:{cell:t,port:`${t}-in`},zIndex:-1,data:{source:e,target:t}};s&&s.addEdge(n)},Y=[{id:"node-0",status:"success"},{id:"node-1",status:"success"},{id:"node-2",status:"success"},{id:"node-3",status:"success"},{id:"node-4",status:"error",statusMsg:"错误信息示例"}],K=[{id:"edge-0",status:"success"},{id:"edge-1",status:"success"},{id:"edge-2",status:"success"},{id:"edge-3",status:"success"}],Z={padding:{left:10,right:10}},V=e=>{var O;console.log("DataProcessingDagNode");const[t,s]=f.useState(!1),n=i=>{const{node:m}=e,{graph:p}=m.model||{};if(p){const G=B(m,p),L=X(i,p,G),C=m.id,M=L.id;q(C,M,p)}},g=()=>a("ul",{children:N.map(i=>{const m=A("a",{onClick:()=>o(i.type),children:[a("i",{className:"node-mini-logo",style:{backgroundImage:`url(${D[i.type]})`}}),a("span",{children:i.name})]});return a("li",{className:"each-sub-menu",children:m},i.type)})}),o=i=>{n(i),s(!1)},d=i=>{s(i)},l=()=>{const{node:i}=e;(i.getPorts()||[]).forEach(p=>{i.setPortProp(p.id,"attrs/circle",{fill:"#fff",stroke:"#85A5FF"})})},c=()=>{const{node:i}=e;(i.getPorts()||[]).forEach(p=>{i.setPortProp(p.id,"attrs/circle",{fill:"transparent",stroke:"transparent"})})},r=(O=e.node)==null?void 0:O.getData(),{name:u,type:I,status:k,statusMsg:_}=r;return A("div",{className:"data-processing-dag-node",children:[A("div",{className:"main-area",onMouseEnter:l,onMouseLeave:c,children:[A("div",{className:"main-info",children:[a("i",{className:"node-logo",style:{backgroundImage:`url(${D[I]})`}}),a(v,{title:u,mouseEnterDelay:.8,children:a("div",{className:"ellipsis-row node-name",children:u})})]}),A("div",{className:"status-action",children:[k===x.ERROR&&a(v,{title:_,children:a("i",{className:"status-icon status-icon-error"})}),k===x.SUCCESS&&a("i",{className:"status-icon status-icon-success"}),a("div",{className:"more-action-container",children:a("i",{className:"more-action"})})]})]}),I!==P.OUTPUT&&a("div",{className:"plus-dag",children:a($,{dropdownRender:g,overlayClassName:"processing-node-menu",trigger:["click"],placement:"bottom",open:t,onOpenChange:d,children:a("i",{className:H("plus-action",{"plus-action-selected":t})})})})]})};j({shape:"data-processing-dag-node",width:212,height:48,component:V,ports:{groups:{in:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"transparent",strokeWidth:1,fill:"transparent"}}},out:{position:{name:"right",args:{dx:-32}},attrs:{circle:{r:4,magnet:!0,stroke:"transparent",strokeWidth:1,fill:"transparent"}}}}}});E.registerConnector("curveConnector",(e,t)=>{const s=Math.abs(t.x-e.x),n=new h;return n.appendSegment(h.createSegment("M",e.x-4,e.y)),n.appendSegment(h.createSegment("L",e.x+12,e.y)),n.appendSegment(h.createSegment("C",e.x<t.x?e.x+s/2:e.x-s/2,e.y,e.x<t.x?t.x-s/2:t.x+s/2,t.y,t.x-6,t.y)),n.appendSegment(h.createSegment("L",t.x+2,t.y)),n.serialize()},!0);R.config({markup:[{tagName:"path",selector:"wrap",attrs:{fill:"none",cursor:"pointer",stroke:"transparent",strokeLinecap:"round"}},{tagName:"path",selector:"line",attrs:{fill:"none",pointerEvents:"none"}}],connector:{name:"curveConnector"},attrs:{wrap:{connection:!0,strokeWidth:10,strokeLinejoin:"round"},line:{connection:!0,stroke:"#A2B1C3",strokeWidth:1,targetMarker:{name:"classic",size:6}}}});E.registerEdge("data-processing-curve",R,!0);const ee=e=>{const[t,s]=f.useState(null);return f.useEffect(()=>{const n=new E({container:e.current,...Q});s(n),n.use(new z({multiple:!0,rubberEdge:!0,rubberNode:!0,modifiers:"shift",rubberband:!0}))},[]),{graph:t}};const te=()=>{const e=f.useRef(null),{graph:t}=ee(e);f.useEffect(()=>{t&&(t.fromJSON(J),t.zoomToFit(Z),setTimeout(()=>{n()},2e3),setTimeout(()=>{s(),g()},3e3))},[t]);const s=()=>{Y.forEach(o=>{const{id:d,status:l,statusMsg:c}=o,r=t.getCellById(d),u=r.getData();r.setData({...u,status:l,statusMsg:c})})},n=()=>{t.getEdges().forEach(o=>{o.attr({line:{stroke:"#3471F9"}}),o.attr("line/strokeDasharray",5),o.attr("line/style/animation","running-line 30s infinite linear")})},g=()=>{t.getEdges().forEach(o=>{o.attr("line/strokeDasharray",0),o.attr("line/style/animation","")}),K.forEach(o=>{const{id:d,status:l}=o,c=t.getCellById(d);l==="success"&&c.attr("line/stroke","#52c41a"),l==="error"&&c.attr("line/stroke","#ff4d4f")}),t.select("node-2")};return a("div",{children:a("div",{className:"container",style:{height:"100vh"},children:a("div",{ref:e,className:"graph-container",style:{height:"100vh"}})})})},me={title:"AntvX6/Dag",component:te,tags:["autodocs"]},y={args:{}};var T,S,U;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {}
}`,...(U=(S=y.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};const Ae=["Primary"];export{y as Primary,Ae as __namedExportsOrder,me as default};
