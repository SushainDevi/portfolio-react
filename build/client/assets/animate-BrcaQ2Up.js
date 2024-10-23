import{n as tt,p,d as M,s as z,b as U,c as pt,e as Ct,i as w,a as G,f as X,g as K,h as $,j as oe,k as v,M as ae,l as le,v as ue,o as ce,m as D,q,r as Pt,S as fe,t as he,u as de,w as pe,x as me,y as ge,z as ye,A as Ve,B as be,C as Te}from"./index-GhhXowCo.js";import{k as N,j as O,l as Y,o as Ae,p as we,q as Se,r as ve}from"./heading-CpFj42vI.js";const et=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),xe="framerAppearId",Ce="data-"+et(xe);function Pe(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Mt(e){return typeof e=="string"||Array.isArray(e)}function Me(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Fe=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],nt=["initial",...Fe];function Ft(e){return Me(e.animate)||nt.some(t=>Mt(e[t]))}function Be(e){return!!(Ft(e)||e.variants)}const mt={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},rt={};for(const e in mt)rt[e]={isEnabled:t=>mt[e].some(n=>!!t[n])};const Oe={},W=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],F=new Set(W);function De(e,{layout:t,layoutId:n}){return F.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Oe[e]||e==="opacity")}const Ie={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Re=W.length;function je(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,s){let i="";for(let o=0;o<Re;o++){const c=W[o];if(e[c]!==void 0){const a=Ie[c]||c;i+=`${a}(${e[c]}) `}}return t&&!e.z&&(i+="translateZ(0)"),i=i.trim(),s?i=s(e,r?"":i):n&&r&&(i="none"),i}const Le=(e,t)=>t&&typeof e=="number"?t.transform(e):e,gt={...tt,transform:Math.round},Bt={borderWidth:p,borderTopWidth:p,borderRightWidth:p,borderBottomWidth:p,borderLeftWidth:p,borderRadius:p,radius:p,borderTopLeftRadius:p,borderTopRightRadius:p,borderBottomRightRadius:p,borderBottomLeftRadius:p,width:p,maxWidth:p,height:p,maxHeight:p,size:p,top:p,right:p,bottom:p,left:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,rotate:M,rotateX:M,rotateY:M,rotateZ:M,scale:z,scaleX:z,scaleY:z,scaleZ:z,skew:M,skewX:M,skewY:M,distance:p,translateX:p,translateY:p,translateZ:p,x:p,y:p,z:p,perspective:p,transformPerspective:p,opacity:U,originX:pt,originY:pt,originZ:p,zIndex:gt,fillOpacity:U,strokeOpacity:U,numOctaves:gt};function Ot(e,t,n,r){const{style:s,vars:i,transform:o,transformOrigin:c}=e;let a=!1,l=!1,u=!0;for(const h in t){const d=t[h];if(Ct(h)){i[h]=d;continue}const f=Bt[h],m=Le(d,f);if(F.has(h)){if(a=!0,o[h]=m,!u)continue;d!==(f.default||0)&&(u=!1)}else h.startsWith("origin")?(l=!0,c[h]=m):s[h]=m}if(t.transform||(a||r?s.transform=je(e.transform,n,u,r):s.transform&&(s.transform="none")),l){const{originX:h="50%",originY:d="50%",originZ:f=0}=c;s.transformOrigin=`${h} ${d} ${f}`}}function yt(e,t,n){return typeof e=="string"?e:p.transform(t+n*e)}function Ke(e,t,n){const r=yt(t,e.x,e.width),s=yt(n,e.y,e.height);return`${r} ${s}`}const Ne={offset:"stroke-dashoffset",array:"stroke-dasharray"},ke={offset:"strokeDashoffset",array:"strokeDasharray"};function $e(e,t,n=1,r=0,s=!0){e.pathLength=1;const i=s?Ne:ke;e[i.offset]=p.transform(-r);const o=p.transform(t),c=p.transform(n);e[i.array]=`${o} ${c}`}function We(e,{attrX:t,attrY:n,attrScale:r,originX:s,originY:i,pathLength:o,pathSpacing:c=1,pathOffset:a=0,...l},u,h,d){if(Ot(e,l,u,d),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:m,dimensions:g}=e;f.transform&&(g&&(m.transform=f.transform),delete f.transform),g&&(s!==void 0||i!==void 0||m.transform)&&(m.transformOrigin=Ke(g,s!==void 0?s:.5,i!==void 0?i:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),o!==void 0&&$e(f,o,c,a,!1)}const ze=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Dt(e,{style:t,vars:n},r,s){Object.assign(e.style,t,s&&s.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const It=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function He(e,t,n,r){Dt(e,t,void 0,r);for(const s in t.attrs)e.setAttribute(It.has(s)?s:et(s),t.attrs[s])}function Rt(e,t){const{style:n}=e,r={};for(const s in n)(w(n[s])||t.style&&w(t.style[s])||De(s,e))&&(r[s]=n[s]);return r}function Ge(e,t){const n=Rt(e,t);for(const r in e)if(w(e[r])||w(t[r])){const s=W.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=e[r]}return n}function jt(e,t,n,r={},s={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,s)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,s)),t}const Lt=e=>Array.isArray(e),Ye=e=>Lt(e)?e[e.length-1]||0:e;function _e(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Ze(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ue(e,t,n){const r=e.getProps();return jt(r,t,n!==void 0?n:r.custom,_e(e),Ze(e))}const Xe={current:!1},Kt=e=>Array.isArray(e)&&typeof e[0]=="number";function Nt(e){return!!(!e||typeof e=="string"&&kt[e]||Kt(e)||Array.isArray(e)&&e.every(Nt))}const L=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,kt={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:L([0,.65,.55,1]),circOut:L([.55,0,1,.45]),backIn:L([.31,.01,.66,-.59]),backOut:L([.33,1.53,.69,.99])};function $t(e){if(e)return Kt(e)?L(e):Array.isArray(e)?e.map($t):kt[e]}function qe(e,t,n,{delay:r=0,duration:s,repeat:i=0,repeatType:o="loop",ease:c,times:a}={}){const l={[t]:n};a&&(l.offset=a);const u=$t(c);return Array.isArray(u)&&(l.easing=u),e.animate(l,{delay:r,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:i+1,direction:o==="reverse"?"alternate":"normal"})}function Ee(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}function Wt(e){let t;return()=>(t===void 0&&(t=e()),t)}const Je=Wt(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Qe=new Set(["opacity","clipPath","filter","transform"]),H=10,tn=2e4,en=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Nt(t.ease);function nn(e,t,{onUpdate:n,onComplete:r,...s}){if(!(Je()&&Qe.has(t)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let o=!1,c,a,l=!1;const u=()=>{a=new Promise(y=>{c=y})};u();let{keyframes:h,duration:d=300,ease:f,times:m}=s;if(en(t,s)){const y=G({...s,repeat:0,delay:0});let T={done:!1,value:h[0]};const S=[];let C=0;for(;!T.done&&C<tn;)T=y.sample(C),S.push(T.value),C+=H;m=void 0,h=S,d=C-H,f="linear"}const g=qe(e.owner.current,t,h,{...s,duration:d,ease:f,times:m}),V=()=>{l=!1,g.cancel()},b=()=>{l=!0,N.update(V),c(),u()};return g.onfinish=()=>{l||(e.set(Ee(h,s)),r&&r(),b())},{then(y,T){return a.then(y,T)},attachTimeline(y){return g.timeline=y,g.onfinish=null,O},get time(){return X(g.currentTime||0)},set time(y){g.currentTime=K(y)},get speed(){return g.playbackRate},set speed(y){g.playbackRate=y},get duration(){return X(d)},play:()=>{o||(g.play(),Y(V))},pause:()=>g.pause(),stop:()=>{if(o=!0,g.playState==="idle")return;const{currentTime:y}=g;if(y){const T=G({...s,autoplay:!1});e.setWithVelocity(T.sample(y-H).value,T.sample(y).value,H)}b()},complete:()=>{l||g.finish()},cancel:b}}function rn({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const s=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:O,pause:O,stop:O,then:i=>(i(),Promise.resolve()),cancel:O,complete:O});return t?G({keyframes:[0,1],duration:0,delay:t,onComplete:s}):s()}const sn={type:"spring",stiffness:500,damping:25,restSpeed:10},on=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),an={type:"keyframes",duration:.8},ln={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},un=(e,{keyframes:t})=>t.length>2?an:F.has(e)?e.startsWith("scale")?on(t[1]):sn:ln,E=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&($.test(t)||t==="0")&&!t.startsWith("url(")),cn=new Set(["brightness","contrast","saturate","opacity"]);function fn(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(oe)||[];if(!r)return e;const s=n.replace(r,"");let i=cn.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+s+")"}const hn=/([a-z-]*)\(.*?\)/g,J={...$,getAnimatableNone:e=>{const t=e.match(hn);return t?t.map(fn).join(" "):e}},dn={...Bt,color:v,backgroundColor:v,outlineColor:v,fill:v,stroke:v,borderColor:v,borderTopColor:v,borderRightColor:v,borderBottomColor:v,borderLeftColor:v,filter:J,WebkitFilter:J},st=e=>dn[e];function zt(e,t){let n=st(e);return n!==J&&(n=$),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Ht=e=>/^0[^.\s]+$/.test(e);function pn(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Ht(e)}function mn(e,t,n,r){const s=E(t,n);let i;Array.isArray(n)?i=[...n]:i=[null,n];const o=r.from!==void 0?r.from:e.get();let c;const a=[];for(let l=0;l<i.length;l++)i[l]===null&&(i[l]=l===0?o:i[l-1]),pn(i[l])&&a.push(l),typeof i[l]=="string"&&i[l]!=="none"&&i[l]!=="0"&&(c=i[l]);if(s&&a.length&&c)for(let l=0;l<a.length;l++){const u=a[l];i[u]=zt(t,c)}return i}function gn({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:s,repeat:i,repeatType:o,repeatDelay:c,from:a,elapsed:l,...u}){return!!Object.keys(u).length}function Gt(e,t){return e[t]||e.default||e}const Yt=(e,t,n,r={})=>s=>{const i=Gt(r,e)||{},o=i.delay||r.delay||0;let{elapsed:c=0}=r;c=c-K(o);const a=mn(t,e,n,i),l=a[0],u=a[a.length-1],h=E(e,l),d=E(e,u);let f={keyframes:a,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-c,onUpdate:m=>{t.set(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{s(),i.onComplete&&i.onComplete()}};if(gn(i)||(f={...f,...un(e,f)}),f.duration&&(f.duration=K(f.duration)),f.repeatDelay&&(f.repeatDelay=K(f.repeatDelay)),!h||!d||Xe.current||i.type===!1||ae.skipAnimations)return rn(f);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const m=nn(t,e,f);if(m)return m}return G(f)};function _(e){return!!(w(e)&&e.add)}const _t=e=>/^\-?\d*\.?\d+$/.test(e),Zt=e=>t=>t.test(e),yn={test:e=>e==="auto",parse:e=>e},Ut=[tt,p,le,M,ue,ce,yn],j=e=>Ut.find(Zt(e)),Vn=[...Ut,v,$],bn=e=>Vn.find(Zt(e));function Tn(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,D(n))}function An(e,t){const n=Ue(e,t);let{transitionEnd:r={},transition:s={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const o in i){const c=Ye(i[o]);Tn(e,o,c)}}function wn(e,t,n){var r,s;const i=Object.keys(t).filter(c=>!e.hasValue(c)),o=i.length;if(o)for(let c=0;c<o;c++){const a=i[c],l=t[a];let u=null;Array.isArray(l)&&(u=l[0]),u===null&&(u=(s=(r=n[a])!==null&&r!==void 0?r:e.readValue(a))!==null&&s!==void 0?s:t[a]),u!=null&&(typeof u=="string"&&(_t(u)||Ht(u))?u=parseFloat(u):!bn(u)&&$.test(l)&&(u=zt(a,l)),e.addValue(a,D(u,{owner:e})),n[a]===void 0&&(n[a]=u),u!==null&&e.setBaseTarget(a,u))}}function Sn(e,t){return t?(t[e]||t.default||t).from:void 0}function vn(e,t,n){const r={};for(const s in e){const i=Sn(s,t);if(i!==void 0)r[s]=i;else{const o=n.getValue(s);o&&(r[s]=o.get())}}return r}function xn({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Cn(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Pn(e,t,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:i=e.getDefaultTransition(),transitionEnd:o,...c}=e.makeTargetAnimatable(t);const a=e.getValue("willChange");r&&(i=r);const l=[],u=s&&e.animationState&&e.animationState.getState()[s];for(const h in c){const d=e.getValue(h),f=c[h];if(!d||f===void 0||u&&xn(u,h))continue;const m={delay:n,elapsed:0,...Gt(i||{},h)};if(window.HandoffAppearAnimations){const b=e.getProps()[Ce];if(b){const x=window.HandoffAppearAnimations(b,h,d,N);x!==null&&(m.elapsed=x,m.isHandoff=!0)}}let g=!m.isHandoff&&!Cn(d,f);if(m.type==="spring"&&(d.getVelocity()||m.velocity)&&(g=!1),d.animation&&(g=!1),g)continue;d.start(Yt(h,d,f,e.shouldReduceMotion&&F.has(h)?{type:!1}:m));const V=d.animation;_(a)&&(a.add(h),V.then(()=>a.remove(h))),l.push(V)}return o&&Promise.all(l).then(()=>{o&&An(e,o)}),l}const Vt=()=>({min:0,max:0}),Xt=()=>({x:Vt(),y:Vt()});function Mn({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Fn(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Bn(e,t){return Mn(Fn(e.getBoundingClientRect(),t))}function On(e){return e instanceof SVGElement&&e.tagName!=="svg"}function qt(e,t,n){const r=w(e)?e:D(e);return r.start(Yt("",r,t,n)),r.animation}const Dn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function In(e){const t=Dn.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Q(e,t,n=1){const[r,s]=In(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const o=i.trim();return _t(o)?parseFloat(o):o}else return q(s)?Q(s,t,n+1):s}function Rn(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(s=>{const i=s.get();if(!q(i))return;const o=Q(i,r);o&&s.set(o)});for(const s in t){const i=t[s];if(!q(i))continue;const o=Q(i,r);o&&(t[s]=o,n||(n={}),n[s]===void 0&&(n[s]=i))}return{target:t,transitionEnd:n}}const jn=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Et=e=>jn.has(e),Ln=e=>Object.keys(e).some(Et),bt=e=>e===tt||e===p,Tt=(e,t)=>parseFloat(e.split(", ")[t]),At=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const s=r.match(/^matrix3d\((.+)\)$/);if(s)return Tt(s[1],t);{const i=r.match(/^matrix\((.+)\)$/);return i?Tt(i[1],e):0}},Kn=new Set(["x","y","z"]),Nn=W.filter(e=>!Kn.has(e));function kn(e){const t=[];return Nn.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const I={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:At(4,13),y:At(5,14)};I.translateX=I.x;I.translateY=I.y;const $n=(e,t,n)=>{const r=t.measureViewportBox(),s=t.current,i=getComputedStyle(s),{display:o}=i,c={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(l=>{c[l]=I[l](r,i)}),t.render();const a=t.measureViewportBox();return n.forEach(l=>{const u=t.getValue(l);u&&u.jump(c[l]),e[l]=I[l](a,i)}),e},Wn=(e,t,n={},r={})=>{t={...t},r={...r};const s=Object.keys(t).filter(Et);let i=[],o=!1;const c=[];if(s.forEach(a=>{const l=e.getValue(a);if(!e.hasValue(a))return;let u=n[a],h=j(u);const d=t[a];let f;if(Lt(d)){const m=d.length,g=d[0]===null?1:0;u=d[g],h=j(u);for(let V=g;V<m&&d[V]!==null;V++)f?Pt(j(d[V])===f):f=j(d[V])}else f=j(d);if(h!==f)if(bt(h)&&bt(f)){const m=l.get();typeof m=="string"&&l.set(parseFloat(m)),typeof d=="string"?t[a]=parseFloat(d):Array.isArray(d)&&f===p&&(t[a]=d.map(parseFloat))}else h!=null&&h.transform&&(f!=null&&f.transform)&&(u===0||d===0)?u===0?l.set(f.transform(u)):t[a]=h.transform(d):(o||(i=kn(e),o=!0),c.push(a),r[a]=r[a]!==void 0?r[a]:t[a],l.jump(d))}),c.length){const a=c.indexOf("height")>=0?window.pageYOffset:null,l=$n(t,e,c);return i.length&&i.forEach(([u,h])=>{e.getValue(u).set(h)}),e.render(),Ae&&a!==null&&window.scrollTo({top:a}),{target:l,transitionEnd:r}}else return{target:t,transitionEnd:r}};function zn(e,t,n,r){return Ln(t)?Wn(e,t,n,r):{target:t,transitionEnd:r}}const Hn=(e,t,n,r)=>{const s=Rn(e,t,r);return t=s.target,r=s.transitionEnd,zn(e,t,n,r)};function Gn(e,t,n){const{willChange:r}=t;for(const s in t){const i=t[s],o=n[s];if(w(i))e.addValue(s,i),_(r)&&r.add(s);else if(w(o))e.addValue(s,D(i,{owner:e})),_(r)&&r.remove(s);else if(o!==i)if(e.hasValue(s)){const c=e.getValue(s);!c.hasAnimated&&c.set(i)}else{const c=e.getStaticValue(s);e.addValue(s,D(c!==void 0?c:i,{owner:e}))}}for(const s in n)t[s]===void 0&&e.removeValue(s);return t}const k=new WeakMap,Jt=Object.keys(rt),Yn=Jt.length,wt=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],_n=nt.length;class Zn{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:s,visualState:i},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>N.render(this.render,!1,!0);const{latestValues:c,renderState:a}=i;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=a,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.isControllingVariants=Ft(n),this.isVariantNode=Be(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(n,{});for(const h in u){const d=u[h];c[h]!==void 0&&w(d)&&(d.set(c[h],!1),_(l)&&l.add(h))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,k.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),we.current||Se(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ve.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){k.delete(this.current),this.projection&&this.projection.unmount(),Y(this.notifyUpdate),Y(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=F.has(t),s=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&N.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{s(),i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,s,i){let o,c;for(let a=0;a<Yn;a++){const l=Jt[a],{isEnabled:u,Feature:h,ProjectionNode:d,MeasureLayout:f}=rt[l];d&&(o=d),u(n)&&(!this.features[l]&&h&&(this.features[l]=new h(this)),f&&(c=f))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:a,layout:l,drag:u,dragConstraints:h,layoutScroll:d,layoutRoot:f}=n;this.projection.setOptions({layoutId:a,layout:l,alwaysMeasureLayout:!!u||h&&Pe(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof l=="string"?l:"both",initialPromotionConfig:i,layoutScroll:d,layoutRoot:f})}return c}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Xt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<wt.length;r++){const s=wt[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const i=t["on"+s];i&&(this.propEventSubscriptions[s]=this.on(s,i))}this.prevMotionValues=Gn(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<_n;r++){const s=nt[r],i=this.props[s];(Mt(i)||i===!1)&&(n[s]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=D(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,s=typeof r=="string"||typeof r=="object"?(n=jt(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&s!==void 0)return s;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!w(i)?i:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new fe),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Qt extends Zn{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},s){const i=vn(r,t||{},this);if(s){wn(this,r,i);const o=Hn(this,r,i,n);n=o.transitionEnd,r=o.target}return{transition:t,transitionEnd:n,...r}}}function Un(e){return window.getComputedStyle(e)}class Xn extends Qt{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(F.has(n)){const r=st(n);return r&&r.default||0}else{const r=Un(t),s=(Ct(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Bn(t,n)}build(t,n,r,s){Ot(t,n,r,s.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Rt(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;w(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,s){Dt(t,n,r,s)}}class qn extends Qt{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(F.has(n)){const r=st(n);return r&&r.default||0}return n=It.has(n)?n:et(n),t.getAttribute(n)}measureInstanceViewportBox(){return Xt()}scrapeMotionValuesFromProps(t,n){return Ge(t,n)}build(t,n,r,s){We(t,n,r,this.isSVGTag,s.transformTemplate)}renderInstance(t,n,r,s){He(t,n,r,s)}mount(t){this.isSVGTag=ze(t.tagName),super.mount(t)}}function te(e,t,n){var r;if(typeof e=="string"){let s=document;t&&(Pt(!!t.current),s=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=s.querySelectorAll(e)),e=n[e]):e=s.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}function En(e,t){let n;const r=()=>{const{currentTime:s}=t,o=(s===null?0:s.value)/100;n!==o&&e(o),n=o};return N.update(r,!0),()=>Y(r)}const Jn=Wt(()=>window.ScrollTimeline!==void 0);class ee{constructor(t){this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t){const n=this.animations.map(r=>{if(Jn()&&r.attachTimeline)r.attachTimeline(t);else return r.pause(),En(s=>{r.time=r.duration*s},t)});return()=>{n.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Qn(e){return typeof e=="object"&&!Array.isArray(e)}function tr(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=On(e)?new qn(t,{enableHardwareAcceleration:!1}):new Xn(t,{enableHardwareAcceleration:!0});n.mount(e),k.set(e,n)}function er(e,t=100){const n=he({keyframes:[0,t],...e}),r=Math.min(de(n),pe);return{type:"keyframes",ease:s=>n.next(r*s).value/t,duration:X(r)}}function St(e,t,n,r){var s;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?n:(s=r.get(t))!==null&&s!==void 0?s:e}const nr=(e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e};function rr(e,t){return me(e)?e[nr(0,e.length,t)]:e}function sr(e,t,n){for(let r=0;r<e.length;r++){const s=e[r];s.at>t&&s.at<n&&(ye(e,s),r--)}}function ir(e,t,n,r,s,i){sr(e,s,i);for(let o=0;o<t.length;o++)e.push({value:t[o],at:ge(s,i,r[o]),easing:rr(n,o)})}function or(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const ar="easeInOut";function lr(e,{defaultTransition:t={},...n}={},r){const s=t.duration||.3,i=new Map,o=new Map,c={},a=new Map;let l=0,u=0,h=0;for(let d=0;d<e.length;d++){const f=e[d];if(typeof f=="string"){a.set(f,u);continue}else if(!Array.isArray(f)){a.set(f.name,St(u,f.at,l,a));continue}let[m,g,V={}]=f;V.at!==void 0&&(u=St(u,V.at,l,a));let b=0;const x=(y,T,S,C=0,R=0)=>{const A=ur(y),{delay:Z=0,times:B=be(A),type:re="keyframes",...se}=T;let{ease:it=t.ease||"easeOut",duration:P}=T;const ot=typeof Z=="function"?Z(C,R):Z,at=A.length;if(at<=2&&re==="spring"){let ft=100;if(at===2&&hr(A)){const ie=A[1]-A[0];ft=Math.abs(ie)}const ht={...se};P!==void 0&&(ht.duration=K(P));const dt=er(ht,ft);it=dt.ease,P=dt.duration}P??(P=s);const lt=u+ot,ut=lt+P;B.length===1&&B[0]===0&&(B[1]=1);const ct=B.length-A.length;ct>0&&Te(B,ct),A.length===1&&A.unshift(null),ir(S,A,it,B,lt,ut),b=Math.max(ot+P,b),h=Math.max(ut,h)};if(w(m)){const y=vt(m,o);x(g,V,xt("default",y))}else{const y=te(m,r,c),T=y.length;for(let S=0;S<T;S++){g=g,V=V;const C=y[S],R=vt(C,o);for(const A in g)x(g[A],cr(V,A),xt(A,R),S,T)}}l=u,u+=b}return o.forEach((d,f)=>{for(const m in d){const g=d[m];g.sort(or);const V=[],b=[],x=[];for(let T=0;T<g.length;T++){const{at:S,value:C,easing:R}=g[T];V.push(C),b.push(Ve(0,h,S)),x.push(R||"easeOut")}b[0]!==0&&(b.unshift(0),V.unshift(V[0]),x.unshift(ar)),b[b.length-1]!==1&&(b.push(1),V.push(null)),i.has(f)||i.set(f,{keyframes:{},transition:{}});const y=i.get(f);y.keyframes[m]=V,y.transition[m]={...t,duration:h,ease:x,times:b,...n}}}),i}function vt(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function xt(e,t){return t[e]||(t[e]=[]),t[e]}function ur(e){return Array.isArray(e)?e:[e]}function cr(e,t){return e[t]?{...e,...e[t]}:{...e}}const fr=e=>typeof e=="number",hr=e=>e.every(fr);function ne(e,t,n,r){const s=te(e,r),i=s.length,o=[];for(let c=0;c<i;c++){const a=s[c];k.has(a)||tr(a);const l=k.get(a),u={...n};typeof u.delay=="function"&&(u.delay=u.delay(c,i)),o.push(...Pn(l,{...t,transition:u},{}))}return new ee(o)}const dr=e=>Array.isArray(e)&&Array.isArray(e[0]);function pr(e,t,n){const r=[];return lr(e,t,n).forEach(({keyframes:i,transition:o},c)=>{let a;w(c)?a=qt(c,i.default,o.default):a=ne(c,i,o),r.push(a)}),new ee(r)}const mr=e=>{function t(n,r,s){let i;return dr(n)?i=pr(n,r,e):Qn(r)?i=ne(n,r,s,e):i=qt(n,r,s),e&&e.animations.push(i),i}return t},Vr=mr();export{Vr as a};
