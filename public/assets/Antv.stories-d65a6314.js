import{a as v,j as d}from"./jsx-runtime-29545a09.js";import{r}from"./index-76fb7be0.js";import{A as k}from"./index-d0d2ffef.js";import{G as S}from"./index-af6b0eaa.js";import"./_commonjsHelpers-de833af9.js";import"./gapSize-176db3ef.js";import"./toConsumableArray-3cd4081e.js";import"./isNativeReflectConstruct-4d4208e5.js";import"./index-f3b9022e.js";import"./string-5ef85f87.js";import"./index-b7949e8c.js";import"./asyncToGenerator-e43f4a97.js";import"./_getPrototype-de793928.js";import"./isPlainObject-d333cf03.js";const y=(s,o,a,n)=>{const t=[],i=[];for(let e=0;e<s;e++){let l=null;for(let c=0;c<o;c++){const u={id:`node-${c}-${e}`,x:a?Math.random()*5e3:250*c,y:a?Math.random()*5e3:100*e,type:n?"modelRect":"rect",label:"Step 1",size:[150,50]};if(t.push(u),l){const g={id:`edge-${c}-${e}`,label:`Status-${c}-${e}`,source:l.id,target:u.id};i.push(g)}l=u}l=null}return{nodes:t,edges:i}},b=s=>{const[o,a]=r.useState(null);return r.useEffect(()=>{const n=new S({container:s.current,width:800,height:500,modes:{default:["drag-node","drag-canvas","zoom-canvas"]},plugins:[],defaultNode:{size:[80,40],type:"rect",style:{fill:"#DEE9FF",stroke:"#5B8FF9"}}});a(n)},[]),{graph:o}},x=({isCustom:s})=>{const o=r.useRef(null);r.useRef(null);const[a,n]=r.useState(!1),{graph:t}=b(o);r.useEffect(()=>{if(console.log("mounted graph",t),!t)return;const l=y(33,30,!1,s);t.data(l),t.render()},[t,s]);const i=r.useCallback(()=>{n(!0)},[]),e=r.useCallback(()=>{n(!1)},[]);return v("div",{style:{height:"70vh"},children:[a&&d(k,{}),d("button",{onClick:i,children:"start"}),d("button",{onClick:e,children:"stop"}),d("div",{ref:o})]})},P={title:"AntvG6/stress",component:x,tags:["autodocs"]},p={args:{isCustom:!1}};var m,f,h;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isCustom: false
  }
}`,...(h=(f=p.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const R=["Primary"];export{p as Primary,R as __namedExportsOrder,P as default};
