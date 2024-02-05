import{j as Z,a as ut}from"./jsx-runtime-29545a09.js";import{r as L}from"./index-76fb7be0.js";import{V as k,k as Q,g as x,G as D,i as T,e as U,a as V,o as ft,f as G,r as q,R as mt,q as B,t as xt,l as tt,s as P,v as bt,w as H,j,x as E,N as ot,b as K,A,y as J,z as nt,B as ht,E as wt}from"./html-7ecd7282.js";import{o as yt,S as vt}from"./index-9bef578c.js";import{S as zt,K as Nt,C as Ct,H as Ot}from"./index-ce826101.js";import"./_commonjsHelpers-de833af9.js";const Et=`.x6-widget-dnd {
  position: absolute;
  top: -10000px;
  left: -10000px;
  z-index: 999999;
  display: none;
  cursor: move;
  opacity: 0.7;
  pointer-events: 'cursor';
}
.x6-widget-dnd.dragging {
  display: inline-block;
}
.x6-widget-dnd.dragging * {
  pointer-events: none !important;
}
.x6-widget-dnd .x6-graph {
  background: transparent;
  box-shadow: none;
}
`;var Gt=globalThis&&globalThis.__decorate||function(a,t,e,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,t,e,i);else for(var r=a.length-1;r>=0;r--)(n=a[r])&&(s=(o<3?n(s):o>3?n(t,e,s):n(t,e))||s);return o>3&&s&&Object.defineProperty(t,e,s),s};class M extends k{get targetScroller(){return this.options.target.getPlugin("scroller")}get targetGraph(){return this.options.target}get targetModel(){return this.targetGraph.model}get snapline(){return this.options.target.getPlugin("snapline")}constructor(t){super(),this.name="dnd",this.options=Object.assign(Object.assign({},M.defaults),t),this.init()}init(){Q(this.name,Et),this.container=document.createElement("div"),x(this.container,this.prefixClassName("widget-dnd")),this.draggingGraph=new D(Object.assign(Object.assign({},this.options.delegateGraphOptions),{container:document.createElement("div"),width:1,height:1,async:!1})),T(this.container,this.draggingGraph.container)}start(t,e){const i=e;i.preventDefault(),this.targetModel.startBatch("dnd"),x(this.container,"dragging"),U(this.container,this.options.draggingContainer||document.body),this.sourceNode=t,this.prepareDragging(t,i.clientX,i.clientY);const o=this.updateNodePosition(i.clientX,i.clientY);this.isSnaplineEnabled()&&(this.snapline.captureCursorOffset({e:i,node:t,cell:t,view:this.draggingView,x:o.x,y:o.y}),this.draggingNode.on("change:position",this.snap,this)),this.delegateDocumentEvents(M.documentEvents,i.data)}isSnaplineEnabled(){return this.snapline&&this.snapline.isEnabled()}prepareDragging(t,e,i){const o=this.draggingGraph,s=o.model,n=this.options.getDragNode(t,{sourceNode:t,draggingGraph:o,targetGraph:this.targetGraph});n.position(0,0);let r=5;if(this.isSnaplineEnabled()&&(r+=this.snapline.options.tolerance||0),this.isSnaplineEnabled()||this.options.scaled){const f=this.targetGraph.transform.getScale();o.scale(f.sx,f.sy),r*=Math.max(f.sx,f.sy)}else o.scale(1,1);this.clearDragging(),s.resetCells([n]);const c=o.findViewByCell(n);c.undelegateEvents(),c.cell.off("changed"),o.fitToContent({padding:r,allowNewOrigin:"any",useCellGeometry:!1});const d=c.getBBox();this.geometryBBox=c.getBBox({useCellGeometry:!0}),this.delta=this.geometryBBox.getTopLeft().diff(d.getTopLeft()),this.draggingNode=n,this.draggingView=c,this.draggingBBox=n.getBBox(),this.padding=r,this.originOffset=this.updateGraphPosition(e,i)}updateGraphPosition(t,e){const i=document.body.scrollTop||document.documentElement.scrollTop,o=document.body.scrollLeft||document.documentElement.scrollLeft,s=this.delta,n=this.geometryBBox,r=this.padding||5,c={left:t-s.x-n.width/2-r+o,top:e-s.y-n.height/2-r+i};return this.draggingGraph&&V(this.container,{left:`${c.left}px`,top:`${c.top}px`}),c}updateNodePosition(t,e){const i=this.targetGraph.clientToLocal(t,e),o=this.draggingBBox;return i.x-=o.width/2,i.y-=o.height/2,this.draggingNode.position(i.x,i.y),i}snap({cell:t,current:e,options:i}){const o=t;if(i.snapped){const s=this.draggingBBox;o.position(s.x+i.tx,s.y+i.ty,{silent:!0}),this.draggingView.translate(),o.position(e.x,e.y,{silent:!0}),this.snapOffset={x:i.tx,y:i.ty}}else this.snapOffset=null}onDragging(t){const e=this.draggingView;if(e){t.preventDefault();const i=this.normalizeEvent(t),o=i.clientX,s=i.clientY;this.updateGraphPosition(o,s);const n=this.updateNodePosition(o,s),r=this.targetGraph.options.embedding.enabled,c=(r||this.isSnaplineEnabled())&&this.isInsideValidArea({x:o,y:s});if(r){e.setEventData(i,{graph:this.targetGraph,candidateEmbedView:this.candidateEmbedView});const d=e.getEventData(i);c?e.processEmbedding(i,d):e.clearEmbedding(d),this.candidateEmbedView=d.candidateEmbedView}this.isSnaplineEnabled()&&(c?this.snapline.snapOnMoving({e:i,view:e,x:n.x,y:n.y}):this.snapline.hide())}}onDragEnd(t){const e=this.draggingNode;if(e){const i=this.normalizeEvent(t),o=this.draggingView,s=this.draggingBBox,n=this.snapOffset;let r=s.x,c=s.y;n&&(r+=n.x,c+=n.y),e.position(r,c,{silent:!0});const d=this.drop(e,{x:i.clientX,y:i.clientY}),f=w=>{w?(this.onDropped(e),this.targetGraph.options.embedding.enabled&&o&&(o.setEventData(i,{cell:w,graph:this.targetGraph,candidateEmbedView:this.candidateEmbedView}),o.finalizeEmbedding(i,o.getEventData(i)))):this.onDropInvalid(),this.candidateEmbedView=null,this.targetModel.stopBatch("dnd")};ft(d)?(this.undelegateDocumentEvents(),d.then(f)):f(d)}}clearDragging(){this.draggingNode&&(this.sourceNode=null,this.draggingNode.remove(),this.draggingNode=null,this.draggingView=null,this.delta=null,this.padding=null,this.snapOffset=null,this.originOffset=null,this.undelegateDocumentEvents())}onDropped(t){this.draggingNode===t&&(this.clearDragging(),G(this.container,"dragging"),q(this.container))}onDropInvalid(){const t=this.draggingNode;t&&this.onDropped(t)}isInsideValidArea(t){let e,i=null;const o=this.targetGraph,s=this.targetScroller;this.options.dndContainer&&(i=this.getDropArea(this.options.dndContainer));const n=i&&i.containsPoint(t);if(s)if(s.options.autoResize)e=this.getDropArea(s.container);else{const r=this.getDropArea(s.container);e=this.getDropArea(o.container).intersectsWithRect(r)}else e=this.getDropArea(o.container);return!n&&e&&e.containsPoint(t)}getDropArea(t){const e=yt(t),i=document.body.scrollTop||document.documentElement.scrollTop,o=document.body.scrollLeft||document.documentElement.scrollLeft;return mt.create({x:e.left+parseInt(V(t,"border-left-width"),10)-o,y:e.top+parseInt(V(t,"border-top-width"),10)-i,width:t.clientWidth,height:t.clientHeight})}drop(t,e){if(this.isInsideValidArea(e)){const i=this.targetGraph,o=i.model,s=i.clientToLocal(e),n=this.sourceNode,r=this.options.getDropNode(t,{sourceNode:n,draggingNode:t,targetGraph:this.targetGraph,draggingGraph:this.draggingGraph}),c=r.getBBox();s.x+=c.x-c.width/2,s.y+=c.y-c.height/2;const d=this.snapOffset?1:i.getGridSize();r.position(B.snapToGrid(s.x,d),B.snapToGrid(s.y,d)),r.removeZIndex();const f=this.options.validateNode,w=f?f(r,{sourceNode:n,draggingNode:t,droppingNode:r,targetGraph:i,draggingGraph:this.draggingGraph}):!0;return typeof w=="boolean"?w?(o.addCell(r,{stencil:this.cid}),r):null:xt(w).then(l=>l?(o.addCell(r,{stencil:this.cid}),r):null)}return null}onRemove(){this.draggingGraph&&(this.draggingGraph.view.remove(),this.draggingGraph.dispose())}dispose(){this.remove(),tt(this.name)}}Gt([k.dispose()],M.prototype,"dispose",null);(function(a){a.defaults={getDragNode:t=>t.clone(),getDropNode:t=>t.clone()},a.documentEvents={mousemove:"onDragging",touchmove:"onDragging",mouseup:"onDragEnd",touchend:"onDragEnd",touchcancel:"onDragEnd"}})(M||(M={}));function Dt(a,t={}){const e=P.isModel(a)?a:new P().resetCells(a,{sort:!1,dryrun:!0}),i=e.getNodes(),o=t.columns||1,s=Math.ceil(i.length/o),n=t.dx||0,r=t.dy||0,c=t.center!==!1,d=t.resizeToFit===!0,f=t.marginX||0,w=t.marginY||0,l=[];let h=t.columnWidth;if(h==="compact")for(let p=0;p<o;p+=1){const z=O.getNodesInColumn(i,p,o);l.push(O.getMaxDim(z,"width")+n)}else{(h==null||h==="auto")&&(h=O.getMaxDim(i,"width")+n);for(let p=0;p<o;p+=1)l.push(h)}const y=O.accumulate(l,f),g=[];let u=t.rowHeight;if(u==="compact")for(let p=0;p<s;p+=1){const z=O.getNodesInRow(i,p,o);g.push(O.getMaxDim(z,"height")+r)}else{(u==null||u==="auto")&&(u=O.getMaxDim(i,"height")+r);for(let p=0;p<s;p+=1)g.push(u)}const v=O.accumulate(g,w);e.startBatch("layout"),i.forEach((p,z)=>{const m=z%o,S=Math.floor(z/o),F=l[m],_=g[S];let et=0,it=0,C=p.getSize();if(d){let Y=F-2*n,X=_-2*r;const st=C.height*(C.width?Y/C.width:1),pt=C.width*(C.height?X/C.height:1);_<st?Y=pt:X=st,C={width:Y,height:X},p.setSize(C,t)}c&&(et=(F-C.width)/2,it=(_-C.height)/2),p.position(y[m]+n+et,v[S]+r+it,t)}),e.stopBatch("layout")}var O;(function(a){function t(s,n){return s.reduce((r,c)=>Math.max(c==null?void 0:c.getSize()[n],r),0)}a.getMaxDim=t;function e(s,n,r){const c=[];for(let d=r*n,f=d+r;d<f;d+=1)s[d]&&c.push(s[d]);return c}a.getNodesInRow=e;function i(s,n,r){const c=[];for(let d=n,f=s.length;d<f;d+=r)s[d]&&c.push(s[d]);return c}a.getNodesInColumn=i;function o(s,n){return s.reduce((r,c,d)=>(r.push(r[d]+c),r),[n||0])}a.accumulate=o})(O||(O={}));const Mt=`.x6-widget-dnd {
  position: absolute;
  top: -10000px;
  left: -10000px;
  z-index: 999999;
  display: none;
  cursor: move;
  opacity: 0.7;
  pointer-events: 'cursor';
}
.x6-widget-dnd.dragging {
  display: inline-block;
}
.x6-widget-dnd.dragging * {
  pointer-events: none !important;
}
.x6-widget-dnd .x6-graph {
  background: transparent;
  box-shadow: none;
}
.x6-widget-stencil {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.x6-widget-stencil::after {
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: 20px;
  padding: 8px 0;
  line-height: 20px;
  text-align: center;
  opacity: 0;
  transition: top 0.1s linear, opacity 0.1s linear;
  content: ' ';
  pointer-events: none;
}
.x6-widget-stencil-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
.x6-widget-stencil .x6-node [magnet]:not([magnet='passive']) {
  pointer-events: none;
}
.x6-widget-stencil-group {
  padding: 0;
  padding-bottom: 8px;
  overflow: hidden;
  user-select: none;
}
.x6-widget-stencil-group.collapsed {
  height: auto;
  padding-bottom: 0;
}
.x6-widget-stencil-group-title {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding: 4px;
  cursor: pointer;
}
.x6-widget-stencil-title,
.x6-widget-stencil-group > .x6-widget-stencil-group-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
}
.x6-widget-stencil .unmatched {
  opacity: 0.3;
}
.x6-widget-stencil .x6-node.unmatched {
  display: none;
}
.x6-widget-stencil-group.unmatched {
  display: none;
}
.x6-widget-stencil-search-text {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  max-height: 30px;
  line-height: 30px;
  outline: 0;
}
.x6-widget-stencil.not-found::after {
  opacity: 1;
  content: attr(data-not-found-text);
}
.x6-widget-stencil.not-found.searchable::after {
  top: 30px;
}
.x6-widget-stencil.not-found.searchable.collapsable::after {
  top: 50px;
}
.x6-widget-stencil {
  color: #333;
  background: #f5f5f5;
}
.x6-widget-stencil-content {
  position: absolute;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-content {
  top: 32px;
}
.x6-widget-stencil.searchable > .x6-widget-stencil-content {
  top: 80px;
}
.x6-widget-stencil.not-found::after {
  position: absolute;
}
.x6-widget-stencil.not-found.searchable.collapsable::after {
  top: 80px;
}
.x6-widget-stencil.not-found.searchable::after {
  top: 60px;
}
.x6-widget-stencil-group {
  height: auto;
  margin-bottom: 1px;
  padding: 0;
  transition: none;
}
.x6-widget-stencil-group .x6-graph {
  background: transparent;
  box-shadow: none;
}
.x6-widget-stencil-group.collapsed {
  height: auto;
  max-height: 31px;
}
.x6-widget-stencil-title,
.x6-widget-stencil-group > .x6-widget-stencil-group-title {
  position: relative;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  padding: 0 5px 0 8px;
  color: #666;
  font-weight: 700;
  font-size: 12px;
  line-height: 32px;
  cursor: default;
  transition: all 0.3;
}
.x6-widget-stencil-title:hover,
.x6-widget-stencil-group > .x6-widget-stencil-group-title:hover {
  color: #444;
}
.x6-widget-stencil-title {
  background: #e9e9e9;
}
.x6-widget-stencil-group > .x6-widget-stencil-group-title {
  background: #ededed;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title {
  padding-left: 32px;
  cursor: pointer;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title::before,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title::before {
  position: absolute;
  top: 6px;
  left: 8px;
  display: block;
  width: 18px;
  height: 18px;
  margin: 0;
  padding: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 0 0;
  border: none;
  content: ' ';
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title::before,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title::before {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNOS4zNzUuNUM0LjY4Ny41Ljg3NSA0LjMxMy44NzUgOWMwIDQuNjg4IDMuODEyIDguNSA4LjUgOC41IDQuNjg3IDAgOC41LTMuODEyIDguNS04LjUgMC00LjY4Ny0zLjgxMy04LjUtOC41LTguNXptMCAxNS44ODZDNS4zMDMgMTYuMzg2IDEuOTkgMTMuMDcyIDEuOTkgOXMzLjMxMi03LjM4NSA3LjM4NS03LjM4NVMxNi43NiA0LjkyOCAxNi43NiA5YzAgNC4wNzItMy4zMTMgNy4zODYtNy4zODUgNy4zODZ6Ii8+PHBhdGggZD0iTTEyLjc1MyA4LjQ0M0g1Ljk5N2EuNTU4LjU1OCAwIDAwMCAxLjExNmg2Ljc1NmEuNTU4LjU1OCAwIDAwMC0xLjExNnoiLz48L2c+PC9zdmc+');
  opacity: 0.4;
  transition: all 0.3s;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title:hover::before,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title:hover::before {
  opacity: 0.6;
}
.x6-widget-stencil.collapsable.collapsed > .x6-widget-stencil-title::before,
.x6-widget-stencil-group.collapsable.collapsed > .x6-widget-stencil-group-title::before {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNOS4zNzUuNUM0LjY4Ny41Ljg3NSA0LjMxMy44NzUgOWMwIDQuNjg4IDMuODEyIDguNSA4LjUgOC41IDQuNjg3IDAgOC41LTMuODEyIDguNS04LjUgMC00LjY4Ny0zLjgxMy04LjUtOC41LTguNXptMCAxNS44ODZDNS4zMDMgMTYuMzg2IDEuOTkgMTMuMDcyIDEuOTkgOXMzLjMxMi03LjM4NSA3LjM4NS03LjM4NVMxNi43NiA0LjkyOCAxNi43NiA5YzAgNC4wNzItMy4zMTMgNy4zODYtNy4zODUgNy4zODZ6Ii8+PHBhdGggZD0iTTEyLjc1MyA4LjQ0M0g1Ljk5N2EuNTU4LjU1OCAwIDAwMCAxLjExNmg2Ljc1NmEuNTU4LjU1OCAwIDAwMC0xLjExNnoiLz48cGF0aCBkPSJNOC44MTcgNS42MjN2Ni43NTZhLjU1OC41NTggMCAwMDEuMTE2IDBWNS42MjNhLjU1OC41NTggMCAxMC0xLjExNiAweiIvPjwvZz48L3N2Zz4=');
  opacity: 0.4;
}
.x6-widget-stencil.collapsable.collapsed > .x6-widget-stencil-title:hover::before,
.x6-widget-stencil-group.collapsable.collapsed > .x6-widget-stencil-group-title:hover::before {
  opacity: 0.6;
}
.x6-widget-stencil input[type='search'] {
  appearance: textfield;
}
.x6-widget-stencil input[type='search']::-webkit-search-cancel-button,
.x6-widget-stencil input[type='search']::-webkit-search-decoration {
  appearance: none;
}
.x6-widget-stencil-search-text {
  display: block;
  width: 90%;
  margin: 8px 5%;
  padding-left: 8px;
  color: #333;
  background: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 12px;
  outline: 0;
}
.x6-widget-stencil-search-text:focus {
  outline: 0;
}
.x6-widget-stencil::after {
  color: #808080;
  font-weight: 600;
  font-size: 12px;
  background: 0 0;
}
`;var St=globalThis&&globalThis.__decorate||function(a,t,e,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,t,e,i);else for(var r=a.length-1;r>=0;r--)(n=a[r])&&(s=(o<3?n(s):o>3?n(t,e,s):n(t,e))||s);return o>3&&s&&Object.defineProperty(t,e,s),s};class R extends k{get targetScroller(){return this.options.target.getPlugin("scroller")}get targetGraph(){return this.options.target}get targetModel(){return this.targetGraph.model}constructor(t={}){super(),this.name="stencil",Q(this.name,Mt),this.graphs={},this.groups={},this.options=Object.assign(Object.assign({},R.defaultOptions),t),this.init()}init(){this.dnd=new M(this.options),this.onSearch=bt(this.onSearch,200),this.initContainer(),this.initSearch(),this.initContent(),this.initGroups(),this.setTitle(),this.startListening()}load(t,e){return Array.isArray(t)?this.loadGroup(t,e):this.options.groups&&Object.keys(this.options.groups).forEach(i=>{t[i]&&this.loadGroup(t[i],i)}),this}unload(t,e){return Array.isArray(t)?this.loadGroup(t,e,!0):this.options.groups&&Object.keys(this.options.groups).forEach(i=>{t[i]&&this.loadGroup(t[i],i,!0)}),this}toggleGroup(t){return this.isGroupCollapsed(t)?this.expandGroup(t):this.collapseGroup(t),this}collapseGroup(t){if(this.isGroupCollapsable(t)){const e=this.groups[t];e&&!this.isGroupCollapsed(t)&&(this.trigger("group:collapse",{name:t}),x(e,"collapsed"))}return this}expandGroup(t){if(this.isGroupCollapsable(t)){const e=this.groups[t];e&&this.isGroupCollapsed(t)&&(this.trigger("group:expand",{name:t}),G(e,"collapsed"))}return this}isGroupCollapsable(t){const e=this.groups[t];return H(e,"collapsable")}isGroupCollapsed(t){const e=this.groups[t];return e&&H(e,"collapsed")}collapseGroups(){return Object.keys(this.groups).forEach(t=>this.collapseGroup(t)),this}expandGroups(){return Object.keys(this.groups).forEach(t=>this.expandGroup(t)),this}resizeGroup(t,e){const i=this.graphs[t];return i&&i.resize(e.width,e.height),this}addGroup(t){const e=Array.isArray(t)?t:[t];this.options.groups?this.options.groups.push(...e):this.options.groups=e,e.forEach(i=>this.initGroup(i))}removeGroup(t){const e=Array.isArray(t)?t:[t];this.options.groups&&(this.options.groups=this.options.groups.filter(i=>!e.includes(i.name)),e.forEach(i=>{const o=this.graphs[i];this.unregisterGraphEvents(o),o.dispose(),delete this.graphs[i];const s=this.groups[i];q(s),delete this.groups[i]}))}initContainer(){this.container=document.createElement("div"),x(this.container,this.prefixClassName(N.base)),j(this.container,"data-not-found-text",this.options.notFoundText||"No matches found")}initContent(){this.content=document.createElement("div"),x(this.content,this.prefixClassName(N.content)),U(this.content,this.container)}initSearch(){this.options.search&&(x(this.container,"searchable"),T(this.container,this.renderSearch()))}initGroup(t){const e=this.options.stencilGraphOptions||{},i=document.createElement("div");x(i,this.prefixClassName(N.group)),j(i,"data-name",t.name),(t.collapsable==null&&this.options.collapsable||t.collapsable!==!1)&&x(i,"collapsable"),E(i,"collapsed",t.collapsed===!0);const o=document.createElement("h3");x(o,this.prefixClassName(N.groupTitle)),o.innerHTML=t.title||t.name;const s=document.createElement("div");x(s,this.prefixClassName(N.groupContent));const n=t.graphOptions,r=new D(Object.assign(Object.assign(Object.assign({},e),n),{container:document.createElement("div"),model:e.model||new P,width:t.graphWidth||this.options.stencilGraphWidth,height:t.graphHeight||this.options.stencilGraphHeight,interacting:!1,preventDefaultBlankAction:!1}));this.registerGraphEvents(r),T(s,r.container),T(i,[o,s]),U(i,this.content),this.groups[t.name]=i,this.graphs[t.name]=r}initGroups(){if(this.clearGroups(),this.setCollapsableState(),this.options.groups&&this.options.groups.length)this.options.groups.forEach(t=>{this.initGroup(t)});else{const t=this.options.stencilGraphOptions||{},e=new D(Object.assign(Object.assign({},t),{container:document.createElement("div"),model:t.model||new P,width:this.options.stencilGraphWidth,height:this.options.stencilGraphHeight,interacting:!1,preventDefaultBlankAction:!1}));T(this.content,e.container),this.graphs[W.defaultGroupName]=e}}setCollapsableState(){this.options.collapsable=this.options.collapsable&&this.options.groups&&this.options.groups.some(t=>t.collapsable!==!1),this.options.collapsable?(x(this.container,"collapsable"),this.options.groups&&this.options.groups.every(e=>e.collapsed||e.collapsable===!1)?x(this.container,"collapsed"):G(this.container,"collapsed")):G(this.container,"collapsable")}setTitle(){const t=document.createElement("div");x(t,this.prefixClassName(N.title)),t.innerHTML=this.options.title,U(t,this.container)}renderSearch(){const t=document.createElement("div");x(t,this.prefixClassName(N.search));const e=document.createElement("input");return j(e,{type:"search",placeholder:this.options.placeholder||"Search"}),x(e,this.prefixClassName(N.searchText)),T(t,e),t}startListening(){const t=this.prefixClassName(N.title),e=this.prefixClassName(N.searchText),i=this.prefixClassName(N.groupTitle);this.delegateEvents({[`click .${t}`]:"onTitleClick",[`touchstart .${t}`]:"onTitleClick",[`click .${i}`]:"onGroupTitleClick",[`touchstart .${i}`]:"onGroupTitleClick",[`input .${e}`]:"onSearch",[`focusin .${e}`]:"onSearchFocusIn",[`focusout .${e}`]:"onSearchFocusOut"})}stopListening(){this.undelegateEvents()}registerGraphEvents(t){t.on("cell:mousedown",this.onDragStart,this)}unregisterGraphEvents(t){t.off("cell:mousedown",this.onDragStart,this)}loadGroup(t,e,i){const o=this.getModel(e);if(o){const c=t.map(d=>ot.isNode(d)?d:ot.create(d));i===!0?o.removeCells(c):o.resetCells(c)}const s=this.getGroup(e);let n=this.options.stencilGraphHeight;s&&s.graphHeight!=null&&(n=s.graphHeight);const r=s&&s.layout||this.options.layout;if(r&&o&&K(r,this,o,s),!n){const c=this.getGraph(e);c.fitToContent({minWidth:c.options.width,gridHeight:1,padding:s&&s.graphPadding||this.options.stencilGraphPadding||10})}return this}onDragStart(t){const{e,node:i}=t,o=this.getGroupByNode(i);o&&o.nodeMovable===!1||this.dnd.start(i,e)}filter(t,e){const i=Object.keys(this.graphs).reduce((o,s)=>{const n=this.graphs[s],r=s===W.defaultGroupName?null:s,c=n.model.getNodes().filter(l=>{let h=!1;typeof e=="function"?h=K(e,this,l,t,r,this):typeof e=="boolean"?h=e:h=this.isCellMatched(l,t,e,t.toLowerCase()!==t);const y=n.renderer.findViewByCell(l);return y&&E(y.container,"unmatched",!h),h}),d=c.length>0,f=this.options,w=new P;return w.resetCells(c),f.layout&&K(f.layout,this,w,this.getGroup(s)),this.groups[s]&&E(this.groups[s],"unmatched",!d),n.fitToContent({gridWidth:1,gridHeight:1,padding:f.stencilGraphPadding||10}),o||d},!1);E(this.container,"not-found",!i)}isCellMatched(t,e,i,o){return e&&i?Object.keys(i).some(s=>{if(s==="*"||t.shape===s){const n=i[s];return typeof n=="boolean"?n:(Array.isArray(n)?n:[n]).some(c=>{let d=t.getPropByPath(c);return d!=null?(d=`${d}`,o||(d=d.toLowerCase()),d.indexOf(e)>=0):!1})}return!1}):!0}onSearch(t){this.filter(t.target.value,this.options.search)}onSearchFocusIn(){x(this.container,"is-focused")}onSearchFocusOut(){G(this.container,"is-focused")}onTitleClick(){this.options.collapsable&&(E(this.container,"collapsed"),H(this.container,"collapsed")?this.collapseGroups():this.expandGroups())}onGroupTitleClick(t){const e=t.target.closest(`.${this.prefixClassName(N.group)}`);e&&this.toggleGroup(j(e,"data-name")||"");const i=Object.keys(this.groups).every(o=>{const s=this.getGroup(o),n=this.groups[o];return s&&s.collapsable===!1||H(n,"collapsed")});E(this.container,"collapsed",i)}getModel(t){const e=this.getGraph(t);return e?e.model:null}getGraph(t){return this.graphs[t||W.defaultGroupName]}getGroup(t){const e=this.options.groups;return t!=null&&e&&e.length?e.find(i=>i.name===t):null}getGroupByNode(t){const e=this.options.groups;return e?e.find(i=>{const o=this.getModel(i.name);return o?o.has(t.id):!1}):null}clearGroups(){Object.keys(this.graphs).forEach(t=>{const e=this.graphs[t];this.unregisterGraphEvents(e),e.dispose()}),Object.keys(this.groups).forEach(t=>{const e=this.groups[t];q(e)}),this.graphs={},this.groups={}}onRemove(){this.clearGroups(),this.dnd.remove(),this.stopListening(),this.undelegateDocumentEvents()}dispose(){this.remove(),tt(this.name)}}St([k.dispose()],R.prototype,"dispose",null);(function(a){a.defaultOptions=Object.assign({stencilGraphWidth:200,stencilGraphHeight:800,title:"Stencil",collapsable:!1,placeholder:"Search",notFoundText:"No matches found",layout(t,e){const i={columnWidth:this.options.stencilGraphWidth/2-10,columns:2,rowHeight:80,resizeToFit:!1,dx:10,dy:10};Dt(t,Object.assign(Object.assign(Object.assign({},i),this.options.layoutOptions),e?e.layoutOptions:{}))}},M.defaults)})(R||(R={}));var N;(function(a){a.base="widget-stencil",a.title=`${a.base}-title`,a.search=`${a.base}-search`,a.searchText=`${a.search}-text`,a.content=`${a.base}-content`,a.group=`${a.base}-group`,a.groupTitle=`${a.group}-title`,a.groupContent=`${a.group}-content`})(N||(N={}));var W;(function(a){a.defaultGroupName="__default__"})(W||(W={}));var Tt=globalThis&&globalThis.__decorate||function(a,t,e,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,t,e,i);else for(var r=a.length-1;r>=0;r--)(n=a[r])&&(s=(o<3?n(s):o>3?n(t,e,s):n(t,e))||s);return o>3&&s&&Object.defineProperty(t,e,s),s};class dt extends k{get model(){return this.graph.model}get view(){return this.graph.renderer.findViewByCell(this.node)}get containerClassName(){return this.prefixClassName("widget-transform")}get resizeClassName(){return`${this.containerClassName}-resize`}get rotateClassName(){return`${this.containerClassName}-rotate`}constructor(t,e,i){super(),this.node=e,this.graph=i,this.options=Object.assign(Object.assign({},b.defaultOptions),t),this.render(),this.startListening()}startListening(){this.delegateEvents({[`mousedown .${this.resizeClassName}`]:"startResizing",[`touchstart .${this.resizeClassName}`]:"startResizing",[`mousedown .${this.rotateClassName}`]:"startRotating",[`touchstart .${this.rotateClassName}`]:"startRotating"}),this.model.on("*",this.update,this),this.graph.on("scale",this.update,this),this.graph.on("translate",this.update,this),this.node.on("removed",this.remove,this),this.model.on("reseted",this.remove,this),this.view.on("cell:knob:mousedown",this.onKnobMouseDown,this),this.view.on("cell:knob:mouseup",this.onKnobMouseUp,this)}stopListening(){this.undelegateEvents(),this.model.off("*",this.update,this),this.graph.off("scale",this.update,this),this.graph.off("translate",this.update,this),this.node.off("removed",this.remove,this),this.model.off("reseted",this.remove,this),this.view.off("cell:knob:mousedown",this.onKnobMouseDown,this),this.view.off("cell:knob:mouseup",this.onKnobMouseUp,this)}renderHandles(){this.container=document.createElement("div");const t=document.createElement("div");j(t,"draggable","false");const e=t.cloneNode(!0);x(e,this.rotateClassName);const i=b.POSITIONS.map(o=>{const s=t.cloneNode(!0);return x(s,this.resizeClassName),j(s,"data-position",o),s});this.empty(),T(this.container,[...i,e])}render(){return this.renderHandles(),this.view&&this.view.addClass(b.NODE_CLS),x(this.container,this.containerClassName),E(this.container,"no-orth-resize",this.options.preserveAspectRatio||!this.options.orthogonalResizing),E(this.container,"no-resize",!this.options.resizable),E(this.container,"no-rotate",!this.options.rotatable),this.options.className&&x(this.container,this.options.className),this.graph.container.appendChild(this.container),this.update()}update(){const t=this.graph.matrix(),e=this.node.getBBox();e.x*=t.a,e.x+=t.e,e.y*=t.d,e.y+=t.f,e.width*=t.a,e.height*=t.d;const i=A.normalize(this.node.getAngle()),o=i!==0?`rotate(${i}deg)`:"";return V(this.container,{transform:o,width:e.width,height:e.height,left:e.x,top:e.y}),this.updateResizerDirections(),this}remove(){return this.view&&this.view.removeClass(b.NODE_CLS),super.remove()}onKnobMouseDown(){this.startHandle()}onKnobMouseUp(){this.stopHandle()}updateResizerDirections(){const t=A.normalize(this.node.getAngle()),e=Math.floor(t*(b.DIRECTIONS.length/360));if(e!==this.prevShift){const i=b.DIRECTIONS.slice(e).concat(b.DIRECTIONS.slice(0,e)),o=n=>`${this.containerClassName}-cursor-${n}`;this.container.querySelectorAll(`.${this.resizeClassName}`).forEach((n,r)=>{G(n,b.DIRECTIONS.map(c=>o(c)).join(" ")),x(n,o(i[r]))}),this.prevShift=e}}getTrueDirection(t){const e=A.normalize(this.node.getAngle());let i=b.POSITIONS.indexOf(t);return i+=Math.floor(e*(b.POSITIONS.length/360)),i%=b.POSITIONS.length,b.POSITIONS[i]}toValidResizeDirection(t){return{top:"top-left",bottom:"bottom-right",left:"bottom-left",right:"top-right"}[t]||t}startResizing(t){t.stopPropagation(),this.model.startBatch("resize",{cid:this.cid});const e=j(t.target,"data-position");this.prepareResizing(t,e),this.startAction(t)}prepareResizing(t,e){const i=this.getTrueDirection(e);let o=0,s=0;e.split("-").forEach(d=>{o={left:-1,right:1}[d]||o,s={top:-1,bottom:1}[d]||s});const n=this.toValidResizeDirection(e),r={"top-right":"bottomLeft","top-left":"bottomRight","bottom-left":"topRight","bottom-right":"topLeft"}[n],c=A.normalize(this.node.getAngle());this.setEventData(t,{selector:r,direction:n,trueDirection:i,relativeDirection:e,angle:c,resizeX:o,resizeY:s,action:"resizing"})}startRotating(t){t.stopPropagation(),this.model.startBatch("rotate",{cid:this.cid});const e=this.node.getBBox().getCenter(),i=this.normalizeEvent(t),o=this.graph.snapToGrid(i.clientX,i.clientY);this.setEventData(t,{center:e,action:"rotating",angle:A.normalize(this.node.getAngle()),start:J.create(o).theta(e)}),this.startAction(t)}onMouseMove(t){const e=this.graph.findViewByCell(this.node);let i=this.getEventData(t);if(i.action){const o=this.normalizeEvent(t);let s=o.clientX,n=o.clientY;const r=this.graph.getPlugin("scroller"),c=this.options.restrictedResizing;if(c===!0||typeof c=="number"){const h=c===!0?0:c,y=r?Math.max(h,8):h,g=this.graph.container.getBoundingClientRect();s=nt(s,g.left+y,g.right-y),n=nt(n,g.top+y,g.bottom-y)}else this.options.autoScrollOnResizing&&r&&r.autoScroll(s,n);const d=this.graph.snapToGrid(s,n),f=this.graph.getGridSize(),w=this.node,l=this.options;if(i.action==="resizing"){i=i,i.resized||(e&&(e.addClass("node-resizing"),this.notify("node:resize",t,e)),i.resized=!0);const h=w.getBBox(),y=J.create(d).rotate(i.angle,h.getCenter()).diff(h[i.selector]);let g=i.resizeX?y.x*i.resizeX:h.width,u=i.resizeY?y.y*i.resizeY:h.height;const v=g,p=u;if(g=B.snapToGrid(g,f),u=B.snapToGrid(u,f),g=Math.max(g,l.minWidth||f),u=Math.max(u,l.minHeight||f),g=Math.min(g,l.maxWidth||1/0),u=Math.min(u,l.maxHeight||1/0),l.preserveAspectRatio){const m=h.width*u/h.height,S=h.height*g/h.width;g<m?u=S:g=m}const z=i.relativeDirection;if(l.allowReverse&&(v<=-g||p<=-u)){let m;z==="left"?v<=-g&&(m="right"):z==="right"?v<=-g&&(m="left"):z==="top"?p<=-u&&(m="bottom"):z==="bottom"?p<=-u&&(m="top"):z==="top-left"?v<=-g&&p<=-u?m="bottom-right":v<=-g?m="top-right":p<=-u&&(m="bottom-left"):z==="top-right"?v<=-g&&p<=-u?m="bottom-left":v<=-g?m="top-left":p<=-u&&(m="bottom-right"):z==="bottom-left"?v<=-g&&p<=-u?m="top-right":v<=-g?m="bottom-right":p<=-u&&(m="top-left"):z==="bottom-right"&&(v<=-g&&p<=-u?m="top-left":v<=-g?m="bottom-left":p<=-u&&(m="top-right"));const S=m;this.stopHandle();const F=this.container.querySelector(`.${this.resizeClassName}[data-position="${S}"]`);this.startHandle(F),this.prepareResizing(t,S),this.onMouseMove(t)}if(h.width!==g||h.height!==u){const m={ui:!0,direction:i.direction,relativeDirection:i.relativeDirection,trueDirection:i.trueDirection,minWidth:l.minWidth,minHeight:l.minHeight,maxWidth:l.maxWidth,maxHeight:l.maxHeight,preserveAspectRatio:l.preserveAspectRatio===!0};w.resize(g,u,m),this.notify("node:resizing",t,e)}}else if(i.action==="rotating"){i=i,i.rotated||(e&&(e.addClass("node-rotating"),this.notify("node:rotate",t,e)),i.rotated=!0);const h=w.getAngle(),y=i.start-J.create(d).theta(i.center);let g=i.angle+y;l.rotateGrid&&(g=B.snapToGrid(g,l.rotateGrid)),g=A.normalize(g),h!==g&&(w.rotate(g,{absolute:!0}),this.notify("node:rotating",t,e))}}}onMouseUp(t){const e=this.getEventData(t);e.action&&(this.stopAction(t),this.model.stopBatch(e.action==="resizing"?"resize":"rotate",{cid:this.cid}))}startHandle(t){if(this.handle=t||null,x(this.container,`${this.containerClassName}-active`),t){x(t,`${this.containerClassName}-active-handle`);const e=t.getAttribute("data-position");if(e){const i=b.DIRECTIONS[b.POSITIONS.indexOf(e)];x(this.container,`${this.containerClassName}-cursor-${i}`)}}}stopHandle(){if(G(this.container,`${this.containerClassName}-active`),this.handle){G(this.handle,`${this.containerClassName}-active-handle`);const t=this.handle.getAttribute("data-position");if(t){const e=b.DIRECTIONS[b.POSITIONS.indexOf(t)];G(this.container,`${this.containerClassName}-cursor-${e}`)}this.handle=null}}startAction(t){this.startHandle(t.target),this.graph.view.undelegateEvents(),this.delegateDocumentEvents(b.documentEvents,t.data)}stopAction(t){this.stopHandle(),this.undelegateDocumentEvents(),this.graph.view.delegateEvents();const e=this.graph.findViewByCell(this.node),i=this.getEventData(t);e&&(e.removeClass(`node-${i.action}`),i.action==="resizing"&&i.resized?this.notify("node:resized",t,e):i.action==="rotating"&&i.rotated&&this.notify("node:rotated",t,e))}notify(t,e,i,o={}){if(i){const s=i.graph,n=s.view.normalizeEvent(e),r=s.snapToGrid(n.clientX,n.clientY);this.trigger(t,Object.assign({e:n,view:i,node:i.cell,cell:i.cell,x:r.x,y:r.y},o))}}dispose(){this.stopListening(),this.remove(),this.off()}}Tt([k.dispose()],dt.prototype,"dispose",null);var b;(function(a){a.NODE_CLS="has-widget-transform",a.DIRECTIONS=["nw","n","ne","e","se","s","sw","w"],a.POSITIONS=["top-left","top","top-right","right","bottom-right","bottom","bottom-left","left"],a.documentEvents={mousemove:"onMouseMove",touchmove:"onMouseMove",mouseup:"onMouseUp",touchend:"onMouseUp"},a.defaultOptions={minWidth:0,minHeight:0,maxWidth:1/0,maxHeight:1/0,rotateGrid:15,rotatable:!0,preserveAspectRatio:!1,orthogonalResizing:!0,restrictedResizing:!1,autoScrollOnResizing:!0,allowReverse:!0}})(b||(b={}));const jt=`.x6-widget-transform {
  position: absolute;
  box-sizing: content-box !important;
  margin: -5px 0 0 -5px;
  padding: 4px;
  border: 1px dashed #000;
  border-radius: 5px;
  user-select: none;
  pointer-events: none;
}
.x6-widget-transform > div {
  position: absolute;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #000;
  transition: background-color 0.2s;
  pointer-events: auto;
  -webkit-user-drag: none;
  user-drag: none;
  /* stylelint-disable-line */
}
.x6-widget-transform > div:hover {
  background-color: #d3d3d3;
}
.x6-widget-transform-cursor-n {
  cursor: n-resize;
}
.x6-widget-transform-cursor-s {
  cursor: s-resize;
}
.x6-widget-transform-cursor-e {
  cursor: e-resize;
}
.x6-widget-transform-cursor-w {
  cursor: w-resize;
}
.x6-widget-transform-cursor-ne {
  cursor: ne-resize;
}
.x6-widget-transform-cursor-nw {
  cursor: nw-resize;
}
.x6-widget-transform-cursor-se {
  cursor: se-resize;
}
.x6-widget-transform-cursor-sw {
  cursor: sw-resize;
}
.x6-widget-transform-resize {
  width: 10px;
  height: 10px;
  border-radius: 6px;
}
.x6-widget-transform-resize[data-position='top-left'] {
  top: -5px;
  left: -5px;
}
.x6-widget-transform-resize[data-position='top-right'] {
  top: -5px;
  right: -5px;
}
.x6-widget-transform-resize[data-position='bottom-left'] {
  bottom: -5px;
  left: -5px;
}
.x6-widget-transform-resize[data-position='bottom-right'] {
  right: -5px;
  bottom: -5px;
}
.x6-widget-transform-resize[data-position='top'] {
  top: -5px;
  left: 50%;
  margin-left: -5px;
}
.x6-widget-transform-resize[data-position='bottom'] {
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
}
.x6-widget-transform-resize[data-position='left'] {
  top: 50%;
  left: -5px;
  margin-top: -5px;
}
.x6-widget-transform-resize[data-position='right'] {
  top: 50%;
  right: -5px;
  margin-top: -5px;
}
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='top'],
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='bottom'],
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='left'],
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='right'] {
  display: none;
}
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='bottom'],
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='left'],
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='right'],
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='top'] {
  display: none;
}
.x6-widget-transform.no-resize .x6-widget-transform-resize {
  display: none;
}
.x6-widget-transform-rotate {
  top: -20px;
  left: -20px;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  cursor: crosshair;
}
.x6-widget-transform.no-rotate .x6-widget-transform-rotate {
  display: none;
}
.x6-widget-transform-active {
  border-color: transparent;
  pointer-events: all;
}
.x6-widget-transform-active > div {
  display: none;
}
.x6-widget-transform-active > .x6-widget-transform-active-handle {
  display: block;
  background-color: #808080;
}
`;D.prototype.createTransformWidget=function(a){const t=this.getPlugin("transform");return t&&t.createWidget(a),this};D.prototype.clearTransformWidgets=function(){const a=this.getPlugin("transform");return a&&a.clearWidgets(),this};var It=globalThis&&globalThis.__decorate||function(a,t,e,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,t,e,i);else for(var r=a.length-1;r>=0;r--)(n=a[r])&&(s=(o<3?n(s):o>3?n(t,e,s):n(t,e))||s);return o>3&&s&&Object.defineProperty(t,e,s),s};class I extends ht{constructor(t={}){super(),this.name="transform",this.widgets=new Map,this.disabled=!1,this.options=t,Q(this.name,jt)}init(t){this.graph=t,!this.disabled&&this.startListening()}startListening(){this.graph.on("node:click",this.onNodeClick,this),this.graph.on("blank:mousedown",this.onBlankMouseDown,this)}stopListening(){this.graph.off("node:click",this.onNodeClick,this),this.graph.off("blank:mousedown",this.onBlankMouseDown,this)}enable(){this.disabled&&(this.disabled=!1,this.startListening())}disable(){this.disabled||(this.disabled=!0,this.stopListening())}isEnabled(){return!this.disabled}createWidget(t){this.clearWidgets();const e=this.createTransform(t);e&&(this.widgets.set(t,e),e.on("*",(i,o)=>{this.trigger(i,o),this.graph.trigger(i,o)}))}onNodeClick({node:t}){this.createWidget(t)}onBlankMouseDown(){this.clearWidgets()}createTransform(t){const e=this.getTransformOptions(t);return e.resizable||e.rotatable?new dt(e,t,this.graph):null}getTransformOptions(t){this.options.resizing||(this.options.resizing={enabled:!1}),this.options.rotating||(this.options.rotating={enabled:!1}),typeof this.options.resizing=="boolean"&&(this.options.resizing={enabled:this.options.resizing}),typeof this.options.rotating=="boolean"&&(this.options.rotating={enabled:this.options.rotating});const e=I.parseOptionGroup(this.graph,t,this.options.resizing),i=I.parseOptionGroup(this.graph,t,this.options.rotating);return{resizable:!!e.enabled,minWidth:e.minWidth||0,maxWidth:e.maxWidth||Number.MAX_SAFE_INTEGER,minHeight:e.minHeight||0,maxHeight:e.maxHeight||Number.MAX_SAFE_INTEGER,orthogonalResizing:typeof e.orthogonal=="boolean"?e.orthogonal:!0,restrictedResizing:!!e.restrict,autoScrollOnResizing:typeof e.autoScroll=="boolean"?e.autoScroll:!0,preserveAspectRatio:!!e.preserveAspectRatio,allowReverse:typeof e.allowReverse=="boolean"?e.allowReverse:!0,rotatable:!!i.enabled,rotateGrid:i.grid||15}}clearWidgets(){this.widgets.forEach((t,e)=>{this.graph.getCellById(e.id)&&t.dispose()}),this.widgets.clear()}dispose(){this.clearWidgets(),this.stopListening(),this.off(),tt(this.name)}}It([ht.dispose()],I.prototype,"dispose",null);(function(a){function t(e,i,o){const s={};return Object.keys(o||{}).forEach(n=>{const r=o[n];s[n]=typeof r=="function"?r.call(e,i):r}),s}a.parseOptionGroup=t})(I||(I={}));const At={grid:!0,mousewheel:{enabled:!0,zoomAtMousePosition:!0,modifiers:"ctrl",minScale:0,maxScale:7},connecting:{router:"manhattan",connector:{name:"rounded",args:{radius:8}},anchor:"center",connectionPoint:"anchor",allowBlank:!1,snap:{radius:20},createEdge(){return new wt({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2,targetMarker:{name:"block",width:12,height:8}}},tools:[{name:"edge-editor",args:{attrs:{backgroundColor:"#fff"}}}],zIndex:0})},validateConnection({targetMagnet:a}){return!!a}},highlighting:{magnetAdsorbed:{name:"stroke",args:{attrs:{fill:"#5F95FF",stroke:"#5F95FF"}}}}},rt=(a,t)=>{for(let e=0,i=a.length;e<i;e+=1)a[e].style.visibility=t?"visible":"hidden"},gt={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{group:"top"},{group:"right"},{group:"bottom"},{group:"left"}]};D.registerNode("custom-rect",{inherit:"rect",width:66,height:36,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},tools:[{name:"node-editor",args:{attrs:{backgroundColor:"#EFF4FF"}}}],ports:{...gt}},!0);D.registerNode("custom-polygon",{inherit:"polygon",width:66,height:36,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},tools:[{name:"node-editor",args:{attrs:{backgroundColor:"#EFF4FF"}}}],ports:{...gt,items:[{group:"top"},{group:"bottom"}]}},!0);const Lt=(a,t)=>{const[e,i]=L.useState(null),[o,s]=L.useState(null),[n,r]=L.useState({});L.useEffect(()=>{const l=new D({container:a.current,...At}),h=new R({title:"Редактор процессов",target:l,stencilGraphWidth:200,stencilGraphHeight:180,collapsable:!0,groups:[{title:"Блоки процесса",name:"group1"}],layoutOptions:{columns:2,columnWidth:80,rowHeight:55}});t.current.appendChild(h.container),c(l),d(l),f(l),w(l,h),i(l),s(h)},[]);const c=l=>{l.use(new I({resizing:!0,rotating:!0})).use(new vt({rubberband:!0,showNodeSelectionBox:!0})).use(new zt).use(new Nt).use(new Ct).use(new Ot)},d=l=>{l.bindKey(["meta+c","ctrl+c"],()=>{const h=l.getSelectedCells();return h.length&&l.copy(h),!1}),l.bindKey(["meta+x","ctrl+x"],()=>{const h=l.getSelectedCells();return h.length&&l.cut(h),!1}),l.bindKey(["meta+v","ctrl+v"],()=>{if(!l.isClipboardEmpty()){const h=l.paste({offset:32});l.cleanSelection(),l.select(h)}return!1}),l.bindKey(["meta+z","ctrl+z"],()=>(l.canUndo()&&l.undo(),!1)),l.bindKey(["meta+shift+z","ctrl+shift+z"],()=>(l.canRedo()&&l.redo(),!1)),l.bindKey(["meta+a","ctrl+a"],()=>{const h=l.getNodes();h&&l.select(h)}),l.bindKey("backspace",()=>{const h=l.getSelectedCells();h.length&&l.removeCells(h)}),l.bindKey(["ctrl+1","meta+1"],()=>{l.zoom()<1.5&&l.zoom(.1)}),l.bindKey(["ctrl+2","meta+2"],()=>{l.zoom()>.5&&l.zoom(-.1)})},f=l=>{l.on("node:mouseenter",()=>{const h=a.current.querySelectorAll(".x6-port-body");rt(h,!0)}),l.on("node:mouseleave",()=>{const h=a.current.querySelectorAll(".x6-port-body");rt(h,!1)})},w=(l,h)=>{const y=l.createNode({shape:"custom-rect",label:"Системный",attrs:{body:{rx:20,ry:26}}}),g=l.createNode({shape:"custom-rect",label:"Автомат."}),u=l.createNode({shape:"custom-rect",attrs:{body:{rx:6,ry:6}},label:"Ручной"}),v=l.createNode({shape:"custom-polygon",attrs:{body:{refPoints:"0,10 10,0 20,10 10,20"}},label:"Статус"}),p={r1:y,r2:g,r3:u,r4:v};r(p),h.load(Object.values(p),"group1")};return{graph:e,stencil:o,customNodes:n}};const Rt=()=>{const a=L.useRef(null),t=L.useRef(null);return Lt(a,t),Z("div",{children:ut("div",{className:"container",style:{height:"100vh"},children:[Z("div",{ref:t,className:"stencil"}),Z("div",{ref:a,className:"graph-container",style:{height:"100vh"}})]})})},$t={title:"AntvX6/Editor",component:Rt,tags:["autodocs"]},$={args:{}};var at,lt,ct;$.parameters={...$.parameters,docs:{...(at=$.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {}
}`,...(ct=(lt=$.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};const Ut=["Primary"];export{$ as Primary,Ut as __namedExportsOrder,$t as default};
