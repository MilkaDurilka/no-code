import{a as c,j as e}from"./jsx-runtime-29545a09.js";import{r as o}from"./index-76fb7be0.js";import{H as m,h as p,j as T,k as V,l as j,R as $}from"./style-d32ca51a.js";import{P as f}from"./index-8d47fad6.js";import{c as C}from"./utils-0b1df067.js";import{c as q,A}from"./index.es-11be6eab.js";import{M as H}from"./index-59b1f5f7.js";import{C as W,B as X}from"./index-f824aacc.js";import"./_commonjsHelpers-de833af9.js";import"./string-5ef85f87.js";import"./index-f3b9022e.js";import"./gapSize-176db3ef.js";import"./toConsumableArray-3cd4081e.js";import"./isNativeReflectConstruct-4d4208e5.js";const Y={left:10};function E({data:s}){const t=o.useCallback(n=>{console.log(n.target.value)},[]);return c("div",{className:"text-updater-node",children:[e(m,{type:"target",position:p.Top}),c("div",{children:[e("label",{htmlFor:"text",children:"Text:"}),e("input",{id:"text",name:"text",onChange:t,className:"nodrag"})]}),e(m,{type:"source",position:p.Bottom,id:"a"}),e(m,{type:"source",position:p.Bottom,id:"b",style:Y})]})}E.__docgenInfo={description:"",methods:[],displayName:"CustomNode"};const u=({countNodesX:s,countNodesY:t,isCustom:n})=>{const a=o.useRef(null),[l,g]=o.useState(!1),{nodes:v,edges:S}=o.useMemo(()=>C({xNodes:s,yNodes:t,isCustom:n}),[s,t]),[w,h,M]=T(v),[P,N,_]=V(S),I=o.useCallback(r=>N(d=>j(r,d)),[]),y=o.useCallback(()=>{h(r=>r.map(d=>({...d,position:{x:Math.random()*1500,y:Math.random()*1500}})))},[]);o.useEffect(()=>{const{nodes:r,edges:d}=C({xNodes:s,yNodes:t,isCustom:n});h(r),N(d)},[s,t,n]);const B=o.useMemo(()=>({customNode:E}),[]);o.useEffect(()=>{l&&!a.current&&(a.current=setInterval(()=>{y()},1e3)),!l&&a.current&&(clearInterval(a.current),a.current=null)},[l]);const F=o.useCallback(()=>{g(!0)},[]),R=o.useCallback(()=>{g(!1)},[]);return c("div",{style:{height:"100vh"},children:[e(q,{top:"80%"}),l&&e(A,{}),e("button",{onClick:F,children:"start"}),e("button",{onClick:R,children:"stop"}),e("button",{onClick:y,children:"change pos"}),c($,{nodes:w,edges:P,nodeTypes:B,onNodesChange:M,onEdgesChange:_,onConnect:I,onlyRenderVisibleElements:!1,fitView:!0,minZoom:0,children:[e(H,{}),e(W,{}),e(X,{})]})]})};u.propTypes={countNodesX:f.number,countNodesY:f.number,isCustom:f.bool};u.defaultProps={countNodesX:10,countNodesY:10,isCustom:!1};u.__docgenInfo={description:"",methods:[],displayName:"StressFlow",props:{countNodesX:{defaultValue:{value:"10",computed:!1},description:"Count of graph nodes",type:{name:"number"},required:!1},countNodesY:{defaultValue:{value:"10",computed:!1},description:"",type:{name:"number"},required:!1},isCustom:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}};const ne={title:"Reactflow/StressFlow",component:u,tags:["autodocs"]},i={args:{countNodesX:33,countNodesY:30,isCustom:!1}};var b,x,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    countNodesX: 33,
    countNodesY: 30,
    isCustom: false
  }
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const ae=["Primary"];export{i as Primary,ae as __namedExportsOrder,ne as default};
