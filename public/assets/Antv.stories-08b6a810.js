import{a as C,j as u}from"./jsx-runtime-29545a09.js";import{r as n}from"./index-76fb7be0.js";import{A as v}from"./index-d0d2ffef.js";import{M as y,a as k,G as x}from"./index-af6b0eaa.js";import"./_commonjsHelpers-de833af9.js";import"./gapSize-176db3ef.js";import"./toConsumableArray-3cd4081e.js";import"./isNativeReflectConstruct-4d4208e5.js";import"./index-f3b9022e.js";import"./string-5ef85f87.js";import"./index-b7949e8c.js";import"./asyncToGenerator-e43f4a97.js";import"./_getPrototype-de793928.js";import"./isPlainObject-d333cf03.js";const p=(t,e,r)=>{const o=[],s=[];for(let a=0;a<t;a++){let c=null;for(let i=0;i<e;i++){const l={id:`node-${i}-${a}`,x:r?Math.random()*5e3:250*i,y:r?Math.random()*5e3:100*a,type:"modelRect",label:"Step 1",size:[150,50]};if(o.push(l),c){const h={id:`edge-${i}-${a}`,label:`Status-${i}-${a}`,source:c.id,target:l.id};s.push(h)}c=l}c=null}return{nodes:o,edges:s}},M=new y({size:[150,100]}),b=new k({getContent(t){let e;return t.target&&t.target.isCanvas&&t.target.isCanvas()?e="Canvas ContextMenu":t.item&&(e=`${t.item.getType().toUpperCase()} ContextMenu`),`
    <h3>${e}</h3>
    <ul>
      <li title='1'>li 1</li>
      <li title='2'>li 2</li>
      <li>li 3</li>
      <li>li 4</li>
      <li>li 5</li>
    </ul>`},handleMenuClick:(t,e)=>{console.log(t,e)},offsetX:16+10,offsetY:0,itemTypes:["node","edge","canvas"]}),S=t=>{const[e,r]=n.useState(null);return n.useEffect(()=>{const o=new x({container:t.current,width:800,height:500,modes:{default:["drag-node","drag-canvas","zoom-canvas"]},plugins:[b,M],defaultNode:{size:[80,40],type:"rect",style:{fill:"#DEE9FF",stroke:"#5B8FF9"}}});return r(o),()=>o.destroy()},[]),{graph:e}},$=()=>{const t=n.useRef(null),e=n.useRef(null),[r,o]=n.useState(!1),{graph:s}=S(t);n.useEffect(()=>{if(!s)return;const l=p(33,30);s.data(l),s.render()},[s]);const a=n.useCallback(()=>{if(!s)return;const l=p(33,30,!0);s.changeData(l)},[s]);n.useEffect(()=>{r&&!e.current&&(e.current=setInterval(()=>{a()},1e3)),!r&&e.current&&(clearInterval(e.current),e.current=null)},[r]);const c=n.useCallback(()=>{o(!0)},[]),i=n.useCallback(()=>{o(!1)},[]);return C("div",{style:{height:"70vh"},children:[r&&u(v,{}),u("button",{onClick:c,children:"start"}),u("button",{onClick:i,children:"stop"}),u("button",{onClick:a,children:"change pos"}),u("div",{ref:t})]})},R={title:"AntvG6/stress",component:$,tags:["autodocs"]},d={args:{}};var m,f,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const W=["Primary"];export{d as Primary,W as __namedExportsOrder,R as default};
