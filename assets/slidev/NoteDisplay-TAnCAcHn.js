import{d as N,y as q,t as M,D as H,ac as B,b as m,i as p,e as L,x as b,n as T,o as d}from"../modules/vue-BkL03IZP.js";import{C as w,_ as $}from"../index-puaWvb-Q.js";const I=["innerHTML"],P=["textContent"],K=["textContent"],k="slidev-note-fade",r="slidev-note-click-mark",R=N({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1},clicksContext:{type:null,required:!1},autoScroll:{type:Boolean,required:!1}},emits:["markerDblclick","markerClick"],setup(A,{emit:D}){const n=A,v=D,h=q(()=>{var s;return n.clicksContext!=null&&((s=n.noteHtml)==null?void 0:s.includes("slidev-note-click-mark"))}),a=M(null);function y(){var S;if(!a.value||!h.value)return;const s=Array.from(a.value.querySelectorAll(`.${r}`)),l=+(((S=n.clicksContext)==null?void 0:S.current)??w),c=l<0||l>=w,g=new Set;function C(e){!e||e===a.value||(g.add(e),e.parentElement&&C(e.parentElement))}const _=new Map;for(const e of s){const t=e.parentElement,o=Number(e.dataset.clicks);_.set(o,e),C(t),Array.from(t.childNodes).forEach(f=>{if(f.nodeType===3){const x=document.createElement("span");x.textContent=f.textContent,t.insertBefore(x,f),f.remove()}})}const E=Array.from(a.value.querySelectorAll("*"));let i=0;const u=new Map;for(const e of E)u.has(i)||u.set(i,[]),u.get(i).push(e),e.classList.contains(r)&&(i=Number(e.dataset.clicks)||i+1);for(const[e,t]of u)c?t.forEach(o=>o.classList.remove(k)):t.forEach(o=>o.classList.toggle(k,g.has(o)?!1:e!==l));for(const[e,t]of _)t.classList.remove(k),t.classList.toggle(`${r}-past`,c?!1:e<l),t.classList.toggle(`${r}-active`,c?!1:e===l),t.classList.toggle(`${r}-next`,c?!1:e===l+1),t.classList.toggle(`${r}-future`,c?!1:e>l+1),t.ondblclick=o=>{v("markerDblclick",o,e),!o.defaultPrevented&&(n.clicksContext.current=e,o.stopPropagation(),o.stopImmediatePropagation())},t.onclick=o=>{v("markerClick",o,e)},n.autoScroll&&e===l&&t.scrollIntoView({block:"center",behavior:"smooth"})}return H(()=>{var s;return[n.noteHtml,(s=n.clicksContext)==null?void 0:s.current]},()=>{T(()=>{y()})},{immediate:!0}),B(()=>{y()}),(s,l)=>s.noteHtml?(d(),m("div",{key:0,ref_key:"noteDisplay",ref:a,class:p(["prose overflow-auto outline-none slidev-note",[n.class,h.value?"slidev-note-with-clicks":""]]),innerHTML:s.noteHtml},null,10,I)):s.note?(d(),m("div",{key:1,class:p(["prose overflow-auto outline-none slidev-note",n.class])},[L("p",{textContent:b(s.note)},null,8,P)],2)):(d(),m("div",{key:2,class:p(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",n.class])},[L("p",{textContent:b(n.placeholder||"No notes.")},null,8,K)],2))}}),F=$(R,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{F as N};
