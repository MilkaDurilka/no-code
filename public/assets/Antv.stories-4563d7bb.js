import{a as k,j as d}from"./jsx-runtime-29545a09.js";import{r}from"./index-76fb7be0.js";import{A as b}from"./index-d0d2ffef.js";import{G as S}from"./index-af6b0eaa.js";import"./_commonjsHelpers-de833af9.js";import"./gapSize-176db3ef.js";import"./toConsumableArray-3cd4081e.js";import"./isNativeReflectConstruct-4d4208e5.js";import"./index-f3b9022e.js";import"./string-5ef85f87.js";import"./index-b7949e8c.js";import"./asyncToGenerator-e43f4a97.js";import"./_getPrototype-de793928.js";import"./isPlainObject-d333cf03.js";const f=(a,l,t,o)=>{const u=[],e=[];for(let s=0;s<a;s++){let i=null;for(let n=0;n<l;n++){const c={id:`node-${n}-${s}`,x:t?Math.random()*5e3:250*n,y:t?Math.random()*5e3:100*s,type:o?"modelRect":"rect",label:"Step 1",size:[150,50]};if(u.push(c),i){const v={id:`edge-${n}-${s}`,label:`Status-${n}-${s}`,source:i.id,target:c.id};e.push(v)}i=c}i=null}return{nodes:u,edges:e}},y=a=>{const[l,t]=r.useState(null);return r.useEffect(()=>{const o=new S({container:a.current,width:800,height:500,modes:{default:["drag-node","drag-canvas","zoom-canvas"]},plugins:[],defaultNode:{size:[80,40],type:"rect",style:{fill:"#DEE9FF",stroke:"#5B8FF9"}}});t(o)},[]),{graph:l}},E=({isCustom:a})=>{const l=r.useRef(null),t=r.useRef(null),[o,u]=r.useState(!1),{graph:e}=y(l);r.useEffect(()=>{if(!e)return;const c=f(33,30,!1,a);e.data(c),e.render()},[e,a]);const s=r.useCallback(()=>{if(!e)return;const c=f(33,30,!0,a);e.changeData(c)},[e,a]);r.useEffect(()=>{o&&!t.current&&(t.current=setInterval(()=>{s()},1e3)),!o&&t.current&&(clearInterval(t.current),t.current=null)},[o]);const i=r.useCallback(()=>{u(!0)},[]),n=r.useCallback(()=>{u(!1)},[]);return k("div",{style:{height:"70vh"},children:[o&&d(b,{}),d("button",{onClick:i,children:"start"}),d("button",{onClick:n,children:"stop"}),d("button",{onClick:s,children:"change pos"}),d("div",{ref:l})]})},M={title:"AntvG6/stress",component:E,tags:["autodocs"]},p={args:{isCustom:!1}};var m,h,g;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isCustom: false
  }
}`,...(g=(h=p.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const N=["Primary"];export{p as Primary,N as __namedExportsOrder,M as default};
