function y({xNodes:n=10,yNodes:r=10,isCustom:o=!1,isRandomLinked:i=!0}){const t=[],d=[];let e=1,s=null;for(let a=0;a<r;a++)for(let c=0;c<n;c++){const l={x:Math.random()*3e3,y:Math.random()*3e3},p={label:`Node ${e}`},g=`stress-${e.toString()}`,f={id:g,style:{width:50,fontSize:11},data:p,position:l,type:o&&"customNode",key:g,attributes:{...p,...l},text:p.label,loc:`${l.x} ${l.y}`,color:"orange",dependencies:s&&e<=n*r?[`stress-${s.toString()}`]:[],width:150,height:36,...l};if(t.push(f),s&&e<=n*r){const h=`${c}-${a}`,u=i?Math.ceil(Math.random()*s):s;d.push({id:h,source:`stress-${u.toString()}`,target:`stress-${e.toString()}`,sourcePosition:t[u].position,targetPosition:l,key:h,from:`stress-${u.toString()}`,to:`stress-${e.toString()}`})}s=e,e++}return{nodes:t,edges:d}}function $(n=10,r=10){const o=[],i=[];let t=1,d=null;for(let e=0;e<r;e++)for(let s=0;s<n;s++){const a={x:s*250,y:e*100};`${t.toString()}`;const c={id:t,type:"basic/object_property",pos:[a.x,a.y],size:[140,30],flags:{},order:0,mode:0,inputs:[{name:"obj",type:"object",link:t,slot_index:0}],outputs:[{name:"property",type:0,links:[1],slot_index:0}],properties:{value:"8"}};o.push(c),d&&t<=n*r&&i.push([t,d,0,t,0,"object"]),d=t,t++}return{nodes:o,links:i}}const S=(n,r=100)=>n.reduce((o,i)=>(o[o.length-1].length==r&&o.push([]),o[o.length-1].push(i),o),[[]]);export{$ as a,y as c,S as s};
