import{j as c}from"./jsx-runtime-29545a09.js";import{r as n}from"./index-76fb7be0.js";import{M as h,a as y,G as w}from"./index-af6b0eaa.js";import"./_commonjsHelpers-de833af9.js";import"./string-5ef85f87.js";import"./index-b7949e8c.js";import"./asyncToGenerator-e43f4a97.js";import"./toConsumableArray-3cd4081e.js";import"./_getPrototype-de793928.js";import"./isPlainObject-d333cf03.js";const C=(e,t,s)=>{const a=[],f=[];let l=null;for(let o=0;o<e;o++)for(let r=0;r<t;r++){const d={id:`node-${r}-${o}`,x:s?Math.random()*5e3:350*r,y:s?Math.random()*5e3:100*o,type:"modelRect",label:"Step 1"};if(a.push(d),l){const g={id:`edge-${r}-${o}`,label:`Status-${r}-${o}`,source:l.id,target:d.id};f.push(g)}l=d}return{nodes:a,edges:f}},b=new h({size:[150,100]}),v=new y({getContent(e){let t;return e.target&&e.target.isCanvas&&e.target.isCanvas()?t="Canvas ContextMenu":e.item&&(console.log("evt.item",e.item),t=`${e.item.getType().toUpperCase()} ContextMenu`),`
    <h3>${t}</h3>
    <ul>
      <li id="menu-del" title='1'>Удалить</li>
      <li title='2'>li 2</li>
      <li>li 3</li>
      <li>li 4</li>
      <li>li 5</li>
    </ul>`},handleMenuClick:(e,t)=>{console.log(e,t),e.id==="menu-del"&&(t.getEdges().forEach(s=>s.destroy()),t.destroy())},offsetX:16+10,offsetY:0,itemTypes:["node","edge","canvas"]}),x=e=>{const[t,s]=n.useState(null);return n.useEffect(()=>{const a=new w({container:e.current,width:800,height:500,modes:{default:["drag-node","drag-canvas","zoom-canvas",{type:"create-edge",key:"shift"}]},plugins:[v,b],defaultNode:{type:"modelRect",size:[270,80],style:{radius:5,stroke:"#69c0ff",fill:"#ffffff",lineWidth:1,fillOpacity:1},labelCfg:{style:{fill:"#595959",fontSize:14},offset:30},preRect:{show:!0,width:4,fill:"#40a9ff",radius:2},linkPoints:{top:!1,right:!1,bottom:!1,left:!1,size:10,lineWidth:1,fill:"#72CC4A",stroke:"#72CC4A"},logoIcon:{show:!0,x:0,y:0,img:"https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg",width:16,height:16,offset:0},stateIcon:{show:!0,x:0,y:0,img:"https://gw.alipayobjects.com/zos/basement_prod/300a2523-67e0-4cbf-9d4a-67c077b40395.svg",width:16,height:16,offset:-5}},defaultEdge:{style:{radius:10,offset:30,endArrow:!0}}});return s(a),()=>a.destroy()},[]),{graph:t}},M=()=>{const e=n.useRef(null),{graph:t}=x(e);return n.useEffect(()=>{if(!t)return;const s=C(3,2);t.data(s),t.render()},[t]),c("div",{style:{height:"70vh"},children:c("div",{ref:e})})},P={title:"AntvG6/Simple example",component:M,tags:["autodocs"]},i={args:{}};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const R=["Primary"];export{i as Primary,R as __namedExportsOrder,P as default};
