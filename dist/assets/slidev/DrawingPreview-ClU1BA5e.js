import{t as C,y as b,z,d as G,at as Ht,au as Bt,av as K,b as X,e as mt,f as wt,h as dt,o as Y,ac as Ft,F as Gt,g as Tt,a8 as Xt,aw as Yt,l as Zt,i as Qt,v as Jt,T as Wt,Q as ut,ax as te,J as ee,ay as se,n as ne,D as re}from"../modules/vue-BkL03IZP.js";import{S as ie,a as Kt,W as St,O as bt,x as Pt,y as Et,T as oe,X as ae,_ as et,Y as le,Z as ue,$ as he,a0 as ce,a1 as de,o as ft,a2 as fe,a3 as ht,a4 as Mt,a5 as pe,M as ge}from"../index-puaWvb-Q.js";function ve(t){var e;return{info:C(((e=ie(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const ct={};function as(t){function e(s){return ct[s]??(ct[s]=ve(s))}return{info:b({get(){return e(z(t)).info.value},set(s){e(z(t)).info.value=s}}),update:async(s,n)=>{const i=e(n??z(t)),r=await i.update(s);return r&&(i.info.value=r),r}}}const me=["id"],ye=["id"],_e=G({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{isPrintMode:s}=Kt(),n=C(null),i=Ht(n),r=C(null),a=b(()=>e.width??i.width.value),o=b(()=>e.width?e.width/St.value:i.height.value),l=b(()=>bt.value&&!s.value?+bt.value:Math.min(a.value/Pt.value,o.value/Et.value)),d=b(()=>({height:`${Et.value}px`,width:`${Pt.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),v=b(()=>e.width?{width:`${e.width}px`,height:`${e.width/St.value}px`}:{});return e.isMain&&Bt(b(()=>`:root { --slidev-slide-scale: ${l.value}; }`)),K(oe,l),K(ae,r),(y,S)=>(Y(),X("div",{id:t.isMain?"slide-container":void 0,ref_key:"container",ref:n,class:"slidev-slide-container",style:dt(v.value)},[mt("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:r,class:"slidev-slide-content",style:dt(d.value)},[wt(y.$slots,"default",{},void 0,!0)],12,ye),wt(y.$slots,"controls",{},void 0,!0)],12,me))}}),ls=et(_e,[["__scopeId","data-v-255ef4a1"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideContainer.vue"]]),xe={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},we=mt("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),Se=mt("div",null,"Loading slide...",-1),be=G({__name:"SlideLoading",setup(t){const e=C(!1);return Ft(()=>{setTimeout(()=>{e.value=!0},200)}),(s,n)=>(Y(),X("div",xe,[e.value?(Y(),X(Gt,{key:0},[we,Se],64)):Tt("v-if",!0)]))}}),Pe=et(be,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideLoading.vue"]]),Ee=["data-slidev-no"],Me=G({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=b(()=>{var a,o;return((o=(a=e.route.meta)==null?void 0:a.slide)==null?void 0:o.frontmatter.zoom)??1});K(le,e.route),K(ue,C(e.route.no)),K(he,C(e.renderContext)),K(ce,Xt(e,"clicksContext")),K(de,s);const n=b(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),i=b(()=>({...n.value,"user-select":ft.selectable?void 0:"none"})),r=b(()=>e.route&&Yt({loader:async()=>{const a=await e.route.component();return G({setup(o,{attrs:l}){return Ft(()=>{var d,v;return(v=(d=e.clicksContext)==null?void 0:d.onMounted)==null?void 0:v.call(d)}),()=>Jt(a.default,l)}})},delay:300,loadingComponent:Pe}));return(a,o)=>(Y(),X("div",{"data-slidev-no":e.route.no,class:Qt(z(fe)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:dt(i.value)},[Zt(z(r))],14,Ee))}}),us=et(Me,[["__scopeId","data-v-6fe37b3a"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideWrapper.vue"]]);var Le=Object.defineProperty,Lt=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,Ct=(t,e,s)=>e in t?Le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,pt=(t,e)=>{for(var s in e||(e={}))Ce.call(e,s)&&Ct(t,s,e[s]);if(Lt)for(var s of Lt(e))ke.call(e,s)&&Ct(t,s,e[s]);return t},De=()=>({emit(t,...e){for(let s=0,n=this.events[t]||[],i=n.length;s<i;s++)n[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}});function kt(t,e,s,n=i=>i){return t*n(.5-e*(.5-s))}function Ne(t){return[-t[0],-t[1]]}function L(t,e){return[t[0]+e[0],t[1]+e[1]]}function P(t,e){return[t[0]-e[0],t[1]-e[1]]}function M(t,e){return[t[0]*e,t[1]*e]}function $e(t,e){return[t[0]/e,t[1]/e]}function q(t){return[t[1],-t[0]]}function Dt(t,e){return t[0]*e[0]+t[1]*e[1]}function Ie(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ae(t){return Math.hypot(t[0],t[1])}function Fe(t){return t[0]*t[0]+t[1]*t[1]}function Nt(t,e){return Fe(P(t,e))}function zt(t){return $e(t,Ae(t))}function Te(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function H(t,e,s){let n=Math.sin(s),i=Math.cos(s),r=t[0]-e[0],a=t[1]-e[1],o=r*i-a*n,l=r*n+a*i;return[o+e[0],l+e[1]]}function gt(t,e,s){return L(t,M(P(e,t),s))}function $t(t,e,s){return L(t,M(e,s))}var{min:j,PI:Ke}=Math,It=.275,B=Ke+1e-4;function ze(t,e={}){let{size:s=16,smoothing:n=.5,thinning:i=.5,simulatePressure:r=!0,easing:a=h=>h,start:o={},end:l={},last:d=!1}=e,{cap:v=!0,easing:y=h=>h*(2-h)}=o,{cap:S=!0,easing:p=h=>--h*h*h+1}=l;if(t.length===0||s<=0)return[];let f=t[t.length-1].runningLength,c=o.taper===!1?0:o.taper===!0?Math.max(s,f):o.taper,E=l.taper===!1?0:l.taper===!0?Math.max(s,f):l.taper,R=Math.pow(s*n,2),D=[],u=[],_=t.slice(0,10).reduce((h,w)=>{let g=w.pressure;if(r){let m=j(1,w.distance/s),ot=j(1,1-m);g=j(1,h+(ot-h)*(m*It))}return(h+g)/2},t[0].pressure),x=kt(s,i,t[t.length-1].pressure,a),st,nt=t[0].vector,U=t[0].point,Z=U,A=U,F=Z,rt=!1;for(let h=0;h<t.length;h++){let{pressure:w}=t[h],{point:g,vector:m,distance:ot,runningLength:V}=t[h];if(h<t.length-1&&f-V<3)continue;if(i){if(r){let I=j(1,ot/s),lt=j(1,1-I);w=j(1,_+(lt-_)*(I*It))}x=kt(s,i,w,a)}else x=s/2;st===void 0&&(st=x);let Ut=V<c?y(V/c):1,Vt=f-V<E?p((f-V)/E):1;x=Math.max(.01,x*Math.min(Ut,Vt));let yt=(h<t.length-1?t[h+1]:t[h]).vector,at=h<t.length-1?Dt(m,yt):1,qt=Dt(m,nt)<0&&!rt,_t=at!==null&&at<0;if(qt||_t){let I=M(q(nt),x);for(let lt=1/13,J=0;J<=1;J+=lt)A=H(P(g,I),g,B*J),D.push(A),F=H(L(g,I),g,B*-J),u.push(F);U=A,Z=F,_t&&(rt=!0);continue}if(rt=!1,h===t.length-1){let I=M(q(m),x);D.push(P(g,I)),u.push(L(g,I));continue}let xt=M(q(gt(yt,m,at)),x);A=P(g,xt),(h<=1||Nt(U,A)>R)&&(D.push(A),U=A),F=L(g,xt),(h<=1||Nt(Z,F)>R)&&(u.push(F),Z=F),_=w,nt=m}let N=t[0].point.slice(0,2),$=t.length>1?t[t.length-1].point.slice(0,2):L(t[0].point,[1,1]),it=[],Q=[];if(t.length===1){if(!(c||E)||d){let h=$t(N,zt(q(P(N,$))),-(st||x)),w=[];for(let g=1/13,m=g;m<=1;m+=g)w.push(H(h,N,B*2*m));return w}}else{if(!(c||E&&t.length===1))if(v)for(let w=1/13,g=w;g<=1;g+=w){let m=H(u[0],N,B*g);it.push(m)}else{let w=P(D[0],u[0]),g=M(w,.5),m=M(w,.51);it.push(P(N,g),P(N,m),L(N,m),L(N,g))}let h=q(Ne(t[t.length-1].vector));if(E||c&&t.length===1)Q.push($);else if(S){let w=$t($,h,x);for(let g=1/29,m=g;m<1;m+=g)Q.push(H(w,$,B*3*m))}else Q.push(L($,M(h,x)),L($,M(h,x*.99)),P($,M(h,x*.99)),P($,M(h,x)))}return D.concat(Q,u.reverse(),it)}function Re(t,e={}){var s;let{streamline:n=.5,size:i=16,last:r=!1}=e;if(t.length===0)return[];let a=.15+(1-n)*.85,o=Array.isArray(t[0])?t:t.map(({x:p,y:f,pressure:c=.5})=>[p,f,c]);if(o.length===2){let p=o[1];o=o.slice(0,-1);for(let f=1;f<5;f++)o.push(gt(o[0],p,f/4))}o.length===1&&(o=[...o,[...L(o[0],[1,1]),...o[0].slice(2)]]);let l=[{point:[o[0][0],o[0][1]],pressure:o[0][2]>=0?o[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,v=0,y=l[0],S=o.length-1;for(let p=1;p<o.length;p++){let f=r&&p===S?o[p].slice(0,2):gt(y.point,o[p],a);if(Ie(y.point,f))continue;let c=Te(f,y.point);if(v+=c,p<S&&!d){if(v<i)continue;d=!0}y={point:f,pressure:o[p][2]>=0?o[p][2]:.5,vector:zt(P(y.point,f)),distance:c,runningLength:v},l.push(y)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function je(t,e={}){return ze(Re(t,e),e)}function W(t,e){return t-e}function Oe(t){return t<0?-1:1}function tt(t){return[Math.abs(t),Oe(t)]}function Rt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Ue=2,k=Ue,O=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n;const i=this.drauu.el,r=(e=this.drauu.options.coordinateScale)!=null?e:1,a=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-o.left+a.x)*r,y:(t.pageY-o.top+a.y)*r,pressure:t.pressure}}else{const o=this.drauu.svgPoint;o.x=t.clientX+a.x,o.y=t.clientY+a.y;const l=o.matrixTransform((n=i.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*r,y:l.y*r,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),i=e?pt(pt({},this.brush),e):this.brush;return n.setAttribute("fill",(s=i.fill)!=null?s:"transparent"),n.setAttribute("stroke",i.color),n.setAttribute("stroke-width",i.size.toString()),n.setAttribute("stroke-linecap","round"),i.dasharray&&n.setAttribute("stroke-dasharray",i.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(k))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Ve=class jt extends O{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return jt.getSvgData(e,this.brush)}static getSvgData(e,s){const n=je(e,pt({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const i=n.reduce((r,[a,o],l,d)=>{const[v,y]=d[(l+1)%d.length];return r.push(a,o,(a+v)/2,(o+y)/2),r},["M",...n[0],"Q"]);return i.push("Z"),i.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},qe=class extends O{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=tt(t.x-this.start.x),[n,i]=tt(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(e,n);e=r,n=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[r,a]=[this.start.x,this.start.x+e*s].sort(W),[o,l]=[this.start.y,this.start.y+n*i].sort(W);this.attr("cx",(r+a)/2),this.attr("cy",(o+l)/2),this.attr("rx",(a-r)/2),this.attr("ry",(l-o)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ot(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(i),s.appendChild(n),s}var He=class extends O{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Rt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Ot(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,i=t.y-this.start.y;if(i!==0){let r=n/i;r=Math.round(r),Math.abs(r)<=1?(e=this.start.x+i*r,s=this.start.y+i):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},Be=class extends O{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=tt(t.x-this.start.x),[n,i]=tt(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(e,n);e=r,n=r}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[r,a]=[this.start.x,this.start.x+e*s].sort(W),[o,l]=[this.start.y,this.start.y+n*i].sort(W);this.attr("x",r),this.attr("y",o),this.attr("width",a-r),this.attr("height",l-o)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ge(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function Xe(t,e,s){let n=e.x,i=e.y,r=s.x-n,a=s.y-i;if(r!==0||a!==0){const o=((t.x-n)*r+(t.y-i)*a)/(r*r+a*a);o>1?(n=s.x,i=s.y):o>0&&(n+=r*o,i+=a*o)}return r=t.x-n,a=t.y-i,r*r+a*a}function Ye(t,e){let s=t[0];const n=[s];let i;for(let r=1,a=t.length;r<a;r++)i=t[r],Ge(i,s)>e&&(n.push(i),s=i);return s!==i&&i&&n.push(i),n}function vt(t,e,s,n,i){let r=n,a=0;for(let o=e+1;o<s;o++){const l=Xe(t[o],t[e],t[s]);l>r&&(a=o,r=l)}r>n&&(a-e>1&&vt(t,e,a,n,i),i.push(t[a]),s-a>1&&vt(t,a,s,n,i))}function Ze(t,e){const s=t.length-1,n=[t[0]];return vt(t,0,s,e,n),n.push(t[s]),n}function At(t,e,s=!1){if(t.length<=2)return t;const n=e*e;return t=s?t:Ye(t,n),t=Ze(t,n),t}var Qe=class T extends O{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Rt();const s=Ot(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=At(this.points,1,!0),this.count=0),this.attr("d",T.toSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",T.toSvgData(At(this.points,1,!0))),!e.getTotalLength()))}static line(e,s){const n=s.x-e.x,i=s.y-e.y;return{length:Math.sqrt(n**2+i**2),angle:Math.atan2(i,n)}}static controlPoint(e,s,n,i){const r=s||e,a=n||e,o=.2,l=T.line(r,a),d=l.angle+(i?Math.PI:0),v=l.length*o,y=e.x+Math.cos(d)*v,S=e.y+Math.sin(d)*v;return{x:y,y:S}}static bezierCommand(e,s,n){const i=T.controlPoint(n[s-1],n[s-2],e),r=T.controlPoint(e,n[s-1],n[s+1],!0);return`C ${i.x.toFixed(k)},${i.y.toFixed(k)} ${r.x.toFixed(k)},${r.y.toFixed(k)} ${e.x.toFixed(k)},${e.y.toFixed(k)}`}static toSvgData(e){return e.reduce((s,n,i,r)=>i===0?`M ${n.x.toFixed(k)},${n.y.toFixed(k)}`:`${s} ${T.bezierCommand(n,i,r)}`,"")}},Je=class extends O{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const r=s[i];if(r.getTotalLength){const a=r.getTotalLength();for(let o=0;o<this.pathSubFactor;o++){const l=r.getPointAtLength(a*o/this.pathSubFactor),d=r.getPointAtLength(a*(o+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:d.x,y1:l.y,y2:d.y,segment:o,element:n||r})}}else r.children&&e(r.children,r)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,i=e.x1,r=e.x2,a=t.y1,o=t.y2,l=e.y1,d=e.y2,v=(s-n)*(l-d)-(a-o)*(i-r),y=(s*o-a*n)*(i-r)-(s-n)*(i*d-l*r),S=(s*o-a*n)*(l-d)-(a-o)*(i*d-l*r),p=(f,c,E)=>f>=c&&f<=E?!0:f>=E&&f<=c;if(v===0)return!1;{const f={x:y/v,y:S/v};return p(f.x,s,n)&&p(f.y,a,o)&&p(f.x,i,r)&&p(f.y,l,d)}}};function We(t){return{draw:new Qe(t),stylus:new Ve(t),line:new He(t),rectangle:new Be(t),ellipse:new qe(t),eraseLine:new Je(t)}}var ts=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=De(),this._originalPointerId=null,this._models=We(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,i=this.eventStart.bind(this),r=this.eventMove.bind(this),a=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",i,{passive:!1}),s.addEventListener("pointermove",r,{passive:!1}),s.addEventListener("pointerup",a,{passive:!1}),s.addEventListener("pointercancel",a,{passive:!1}),s.addEventListener("keydown",o,!1),s.addEventListener("keyup",o,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",i),s.removeEventListener("pointermove",r),s.removeEventListener("pointerup",a),s.removeEventListener("pointercancel",a),s.removeEventListener("keydown",o,!1),s.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function es(t){return new ts(t)}const ss=Wt(()=>{const{currentSlideNo:t,isPresenter:e}=Kt(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=ut("slidev-drawing-enabled",!1),i=ut("slidev-drawing-pinned",!1),r=te(ut("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),a=C(!1),o=C(!1),l=C(!1),d=C(!1),v=C("stylus"),y=b(()=>ft.drawings.syncAll||e.value);let S=!1;const p=b({get(){return v.value},set(u){v.value=u,u==="arrow"?(c.mode="line",r.arrowEnd=!0):(c.mode=u,r.arrowEnd=!1)}}),f=ee({brush:r,acceptsInputTypes:b(()=>n.value&&(!ft.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=se(es(f));function E(){c.clear(),y.value&&Mt(t.value,"")}function R(){var u;l.value=c.canRedo(),o.value=c.canUndo(),d.value=!!((u=c.el)!=null&&u.children.length)}function D(u){S=!0;const _=ht[u||t.value];_!=null?c.load(_):c.clear(),R(),S=!1}return c.on("changed",()=>{if(R(),!S){const u=c.dump(),_=t.value;(ht[_]||"")!==u&&y.value&&Mt(_,c.dump())}}),pe(u=>{S=!0,u[t.value]!=null&&c.load(u[t.value]||""),S=!1,R()}),ne(()=>{re(t,()=>{c.mounted&&D()},{immediate:!0})}),c.on("start",()=>a.value=!0),c.on("end",()=>a.value=!1),window.addEventListener("keydown",u=>{if(!n.value||ge.value)return;const _=!u.ctrlKey&&!u.altKey&&!u.shiftKey&&!u.metaKey;let x=!0;u.code==="KeyZ"&&(u.ctrlKey||u.metaKey)?u.shiftKey?c.redo():c.undo():u.code==="Escape"?n.value=!1:u.code==="KeyL"&&_?p.value="line":u.code==="KeyA"&&_?p.value="arrow":u.code==="KeyS"&&_?p.value="stylus":u.code==="KeyR"&&_?p.value="rectangle":u.code==="KeyE"&&_?p.value="ellipse":u.code==="KeyC"&&_?E():u.code.startsWith("Digit")&&_&&+u.code[5]<=s.length?r.color=s[+u.code[5]-1]:x=!1,x&&(u.preventDefault(),u.stopPropagation())},!1),{brush:r,brushColors:s,canClear:d,canRedo:l,canUndo:o,clear:E,drauu:c,drauuOptions:f,drawingEnabled:n,drawingMode:p,drawingPinned:i,drawingState:ht,isDrawing:a,loadCanvas:D}}),ns=["innerHTML"],rs=G({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){const{drawingState:e}=ss();return(s,n)=>z(e)[s.page]?(Y(),X("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:z(e)[s.page]},null,8,ns)):Tt("v-if",!0)}}),hs=et(rs,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/DrawingPreview.vue"]]);export{hs as D,us as S,ls as a,ve as b,ss as c,as as u};
