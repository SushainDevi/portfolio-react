import{r as h,j as se}from"./components-PifdxV0v.js";import{u as ut,i as et,g as dt,c as ct,b as pt,m as mt,L as ht,t as ft}from"./heading-CpFj42vI.js";import{S as gt}from"./meta-BskUTrA3.js";import{u as bt}from"./image-BNAx0xD2.js";import{u as yt}from"./useWindowSize-D6YuMsL7.js";import{R as Et,o as wt,E as _t,l as $,Q as tt,e as De,O as He,p as nt,V as re,q as Te,T as Pe,s as Rt,H as Se,F as Ue,u as Ye,b as ke,v as Tt,w as Pt,x as St,y as Mt,W as xt,h as rt,z as At,S as vt,B as Lt,I as jt,A as Dt,D as kt,r as Ct,c as Ot,a as It,J as Ve,K as Nt,N as Ft,m as zt,X as Ht,t as Yt,Y as Bt,Z as Ut}from"./three-aAhtC9zp.js";import{t as Gt}from"./throttle-BgiUmwhn.js";import{u as _e}from"./use-spring-BQQYofTa.js";import"./config-jEIqSiHV.js";import"./index-GhhXowCo.js";var Vt=Object.defineProperty,Zt=(u,r,g)=>r in u?Vt(u,r,{enumerable:!0,configurable:!0,writable:!0,value:g}):u[r]=g,p=(u,r,g)=>(Zt(u,typeof r!="symbol"?r+"":r,g),g);const Be=new Et,at=new wt,Xt=Math.cos(70*(Math.PI/180)),ot=(u,r)=>(u%r+r)%r;class Wt extends _t{constructor(r,g){super(),p(this,"object"),p(this,"domElement"),p(this,"enabled",!0),p(this,"target",new $),p(this,"minDistance",0),p(this,"maxDistance",1/0),p(this,"minZoom",0),p(this,"maxZoom",1/0),p(this,"minPolarAngle",0),p(this,"maxPolarAngle",Math.PI),p(this,"minAzimuthAngle",-1/0),p(this,"maxAzimuthAngle",1/0),p(this,"enableDamping",!1),p(this,"dampingFactor",.05),p(this,"enableZoom",!0),p(this,"zoomSpeed",1),p(this,"enableRotate",!0),p(this,"rotateSpeed",1),p(this,"enablePan",!0),p(this,"panSpeed",1),p(this,"screenSpacePanning",!0),p(this,"keyPanSpeed",7),p(this,"zoomToCursor",!1),p(this,"autoRotate",!1),p(this,"autoRotateSpeed",2),p(this,"reverseOrbit",!1),p(this,"reverseHorizontalOrbit",!1),p(this,"reverseVerticalOrbit",!1),p(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),p(this,"mouseButtons",{LEFT:Te.ROTATE,MIDDLE:Te.DOLLY,RIGHT:Te.PAN}),p(this,"touches",{ONE:Pe.ROTATE,TWO:Pe.DOLLY_PAN}),p(this,"target0"),p(this,"position0"),p(this,"zoom0"),p(this,"_domElementKeyEvents",null),p(this,"getPolarAngle"),p(this,"getAzimuthalAngle"),p(this,"setPolarAngle"),p(this,"setAzimuthalAngle"),p(this,"getDistance"),p(this,"listenToKeyEvents"),p(this,"stopListenToKeyEvents"),p(this,"saveState"),p(this,"reset"),p(this,"update"),p(this,"connect"),p(this,"dispose"),this.object=r,this.domElement=g,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>w.phi,this.getAzimuthalAngle=()=>w.theta,this.setPolarAngle=t=>{let n=ot(t,2*Math.PI),m=w.phi;m<0&&(m+=2*Math.PI),n<0&&(n+=2*Math.PI);let S=Math.abs(n-m);2*Math.PI-S<S&&(n<m?n+=2*Math.PI:m+=2*Math.PI),C.phi=n-m,e.update()},this.setAzimuthalAngle=t=>{let n=ot(t,2*Math.PI),m=w.theta;m<0&&(m+=2*Math.PI),n<0&&(n+=2*Math.PI);let S=Math.abs(n-m);2*Math.PI-S<S&&(n<m?n+=2*Math.PI:m+=2*Math.PI),C.theta=n-m,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",X),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",X),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(W),e.update(),E=c.NONE},this.update=(()=>{const t=new $,n=new $(0,1,0),m=new tt().setFromUnitVectors(r.up,n),S=m.clone().invert(),Y=new $,le=new tt,be=2*Math.PI;return function(){const Qe=e.object.position;m.setFromUnitVectors(r.up,n),S.copy(m).invert(),t.copy(Qe).sub(e.target),t.applyQuaternion(m),w.setFromVector3(t),e.autoRotate&&E===c.NONE&&q(J()),e.enableDamping?(w.theta+=C.theta*e.dampingFactor,w.phi+=C.phi*e.dampingFactor):(w.theta+=C.theta,w.phi+=C.phi);let ue=e.minAzimuthAngle,de=e.maxAzimuthAngle;isFinite(ue)&&isFinite(de)&&(ue<-Math.PI?ue+=be:ue>Math.PI&&(ue-=be),de<-Math.PI?de+=be:de>Math.PI&&(de-=be),ue<=de?w.theta=Math.max(ue,Math.min(de,w.theta)):w.theta=w.theta>(ue+de)/2?Math.max(ue,w.theta):Math.min(de,w.theta)),w.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,w.phi)),w.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(Q,e.dampingFactor):e.target.add(Q),e.zoomToCursor&&d||e.object.isOrthographicCamera?w.radius=ne(w.radius):w.radius=ne(w.radius*z),t.setFromSpherical(w),t.applyQuaternion(S),Qe.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(C.theta*=1-e.dampingFactor,C.phi*=1-e.dampingFactor,Q.multiplyScalar(1-e.dampingFactor)):(C.set(0,0,0),Q.set(0,0,0));let ve=!1;if(e.zoomToCursor&&d){let Le=null;if(e.object instanceof De&&e.object.isPerspectiveCamera){const je=t.length();Le=ne(je*z);const ze=je-Le;e.object.position.addScaledVector(M,ze),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const je=new $(i.x,i.y,0);je.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/z)),e.object.updateProjectionMatrix(),ve=!0;const ze=new $(i.x,i.y,0);ze.unproject(e.object),e.object.position.sub(ze).add(je),e.object.updateMatrixWorld(),Le=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Le!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Le).add(e.object.position):(Be.origin.copy(e.object.position),Be.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Be.direction))<Xt?r.lookAt(e.target):(at.setFromNormalAndCoplanarPoint(e.object.up,e.target),Be.intersectPlane(at,e.target))))}else e.object instanceof He&&e.object.isOrthographicCamera&&(ve=z!==1,ve&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/z)),e.object.updateProjectionMatrix()));return z=1,d=!1,ve||Y.distanceToSquared(e.object.position)>U||8*(1-le.dot(e.object.quaternion))>U?(e.dispatchEvent(W),Y.copy(e.object.position),le.copy(e.object.quaternion),ve=!1,!0):!1}})(),this.connect=t=>{t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Ae),e.domElement.addEventListener("pointerdown",F),e.domElement.addEventListener("pointercancel",f),e.domElement.addEventListener("wheel",ge)},this.dispose=()=>{var t,n,m,S,Y,le;(t=e.domElement)==null||t.removeEventListener("contextmenu",Ae),(n=e.domElement)==null||n.removeEventListener("pointerdown",F),(m=e.domElement)==null||m.removeEventListener("pointercancel",f),(S=e.domElement)==null||S.removeEventListener("wheel",ge),(Y=e.domElement)==null||Y.ownerDocument.removeEventListener("pointermove",B),(le=e.domElement)==null||le.ownerDocument.removeEventListener("pointerup",R),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",X)};const e=this,W={type:"change"},T={type:"start"},b={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let E=c.NONE;const U=1e-6,w=new nt,C=new nt;let z=1;const Q=new $,x=new re,D=new re,ee=new re,H=new re,k=new re,a=new re,s=new re,_=new re,y=new re,M=new $,i=new re;let d=!1;const o=[],l={};function J(){return 2*Math.PI/60/60*e.autoRotateSpeed}function ae(){return Math.pow(.95,e.zoomSpeed)}function q(t){e.reverseOrbit||e.reverseHorizontalOrbit?C.theta+=t:C.theta-=t}function L(t){e.reverseOrbit||e.reverseVerticalOrbit?C.phi+=t:C.phi-=t}const me=(()=>{const t=new $;return function(m,S){t.setFromMatrixColumn(S,0),t.multiplyScalar(-m),Q.add(t)}})(),V=(()=>{const t=new $;return function(m,S){e.screenSpacePanning===!0?t.setFromMatrixColumn(S,1):(t.setFromMatrixColumn(S,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(m),Q.add(t)}})(),I=(()=>{const t=new $;return function(m,S){const Y=e.domElement;if(Y&&e.object instanceof De&&e.object.isPerspectiveCamera){const le=e.object.position;t.copy(le).sub(e.target);let be=t.length();be*=Math.tan(e.object.fov/2*Math.PI/180),me(2*m*be/Y.clientHeight,e.object.matrix),V(2*S*be/Y.clientHeight,e.object.matrix)}else Y&&e.object instanceof He&&e.object.isOrthographicCamera?(me(m*(e.object.right-e.object.left)/e.object.zoom/Y.clientWidth,e.object.matrix),V(S*(e.object.top-e.object.bottom)/e.object.zoom/Y.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function te(t){e.object instanceof De&&e.object.isPerspectiveCamera||e.object instanceof He&&e.object.isOrthographicCamera?z/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Re(t){e.object instanceof De&&e.object.isPerspectiveCamera||e.object instanceof He&&e.object.isOrthographicCamera?z*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ye(t){if(!e.zoomToCursor||!e.domElement)return;d=!0;const n=e.domElement.getBoundingClientRect(),m=t.clientX-n.left,S=t.clientY-n.top,Y=n.width,le=n.height;i.x=m/Y*2-1,i.y=-(S/le)*2+1,M.set(i.x,i.y,1).unproject(e.object).sub(e.object.position).normalize()}function ne(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function oe(t){x.set(t.clientX,t.clientY)}function ie(t){ye(t),s.set(t.clientX,t.clientY)}function he(t){H.set(t.clientX,t.clientY)}function Ee(t){D.set(t.clientX,t.clientY),ee.subVectors(D,x).multiplyScalar(e.rotateSpeed);const n=e.domElement;n&&(q(2*Math.PI*ee.x/n.clientHeight),L(2*Math.PI*ee.y/n.clientHeight)),x.copy(D),e.update()}function we(t){_.set(t.clientX,t.clientY),y.subVectors(_,s),y.y>0?te(ae()):y.y<0&&Re(ae()),s.copy(_),e.update()}function fe(t){k.set(t.clientX,t.clientY),a.subVectors(k,H).multiplyScalar(e.panSpeed),I(a.x,a.y),H.copy(k),e.update()}function Me(t){ye(t),t.deltaY<0?Re(ae()):t.deltaY>0&&te(ae()),e.update()}function Ce(t){let n=!1;switch(t.code){case e.keys.UP:I(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:I(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:I(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:I(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function Oe(){if(o.length==1)x.set(o[0].pageX,o[0].pageY);else{const t=.5*(o[0].pageX+o[1].pageX),n=.5*(o[0].pageY+o[1].pageY);x.set(t,n)}}function Ie(){if(o.length==1)H.set(o[0].pageX,o[0].pageY);else{const t=.5*(o[0].pageX+o[1].pageX),n=.5*(o[0].pageY+o[1].pageY);H.set(t,n)}}function P(){const t=o[0].pageX-o[1].pageX,n=o[0].pageY-o[1].pageY,m=Math.sqrt(t*t+n*n);s.set(0,m)}function A(){e.enableZoom&&P(),e.enablePan&&Ie()}function j(){e.enableZoom&&P(),e.enableRotate&&Oe()}function G(t){if(o.length==1)D.set(t.pageX,t.pageY);else{const m=Ge(t),S=.5*(t.pageX+m.x),Y=.5*(t.pageY+m.y);D.set(S,Y)}ee.subVectors(D,x).multiplyScalar(e.rotateSpeed);const n=e.domElement;n&&(q(2*Math.PI*ee.x/n.clientHeight),L(2*Math.PI*ee.y/n.clientHeight)),x.copy(D)}function Z(t){if(o.length==1)k.set(t.pageX,t.pageY);else{const n=Ge(t),m=.5*(t.pageX+n.x),S=.5*(t.pageY+n.y);k.set(m,S)}a.subVectors(k,H).multiplyScalar(e.panSpeed),I(a.x,a.y),H.copy(k)}function N(t){const n=Ge(t),m=t.pageX-n.x,S=t.pageY-n.y,Y=Math.sqrt(m*m+S*S);_.set(0,Y),y.set(0,Math.pow(_.y/s.y,e.zoomSpeed)),te(y.y),s.copy(_)}function v(t){e.enableZoom&&N(t),e.enablePan&&Z(t)}function ce(t){e.enableZoom&&N(t),e.enableRotate&&G(t)}function F(t){var n,m;e.enabled!==!1&&(o.length===0&&((n=e.domElement)==null||n.ownerDocument.addEventListener("pointermove",B),(m=e.domElement)==null||m.ownerDocument.addEventListener("pointerup",R)),Fe(t),t.pointerType==="touch"?xe(t):O(t))}function B(t){e.enabled!==!1&&(t.pointerType==="touch"?Ne(t):K(t))}function R(t){var n,m,S;$e(t),o.length===0&&((n=e.domElement)==null||n.releasePointerCapture(t.pointerId),(m=e.domElement)==null||m.ownerDocument.removeEventListener("pointermove",B),(S=e.domElement)==null||S.ownerDocument.removeEventListener("pointerup",R)),e.dispatchEvent(b),E=c.NONE}function f(t){$e(t)}function O(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case Te.DOLLY:if(e.enableZoom===!1)return;ie(t),E=c.DOLLY;break;case Te.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;he(t),E=c.PAN}else{if(e.enableRotate===!1)return;oe(t),E=c.ROTATE}break;case Te.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;oe(t),E=c.ROTATE}else{if(e.enablePan===!1)return;he(t),E=c.PAN}break;default:E=c.NONE}E!==c.NONE&&e.dispatchEvent(T)}function K(t){if(e.enabled!==!1)switch(E){case c.ROTATE:if(e.enableRotate===!1)return;Ee(t);break;case c.DOLLY:if(e.enableZoom===!1)return;we(t);break;case c.PAN:if(e.enablePan===!1)return;fe(t);break}}function ge(t){e.enabled===!1||e.enableZoom===!1||E!==c.NONE&&E!==c.ROTATE||(t.preventDefault(),e.dispatchEvent(T),Me(t),e.dispatchEvent(b))}function X(t){e.enabled===!1||e.enablePan===!1||Ce(t)}function xe(t){switch(Je(t),o.length){case 1:switch(e.touches.ONE){case Pe.ROTATE:if(e.enableRotate===!1)return;Oe(),E=c.TOUCH_ROTATE;break;case Pe.PAN:if(e.enablePan===!1)return;Ie(),E=c.TOUCH_PAN;break;default:E=c.NONE}break;case 2:switch(e.touches.TWO){case Pe.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;A(),E=c.TOUCH_DOLLY_PAN;break;case Pe.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;j(),E=c.TOUCH_DOLLY_ROTATE;break;default:E=c.NONE}break;default:E=c.NONE}E!==c.NONE&&e.dispatchEvent(T)}function Ne(t){switch(Je(t),E){case c.TOUCH_ROTATE:if(e.enableRotate===!1)return;G(t),e.update();break;case c.TOUCH_PAN:if(e.enablePan===!1)return;Z(t),e.update();break;case c.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;v(t),e.update();break;case c.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ce(t),e.update();break;default:E=c.NONE}}function Ae(t){e.enabled!==!1&&t.preventDefault()}function Fe(t){o.push(t)}function $e(t){delete l[t.pointerId];for(let n=0;n<o.length;n++)if(o[n].pointerId==t.pointerId){o.splice(n,1);return}}function Je(t){let n=l[t.pointerId];n===void 0&&(n=new re,l[t.pointerId]=n),n.set(t.pageX,t.pageY)}function Ge(t){const n=t.pointerId===o[0].pointerId?o[1]:o[0];return l[n.pointerId]}g!==void 0&&this.connect(g),this.update()}}class qt extends Rt{constructor(r){super(r),this.type=Se}parse(r){const c=function(a,s){switch(a){case 1:console.error("THREE.RGBELoader Read Error: "+(s||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(s||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(s||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(s||""))}return-1},C=`
`,z=function(a,s,_){s=s||1024;let M=a.pos,i=-1,d=0,o="",l=String.fromCharCode.apply(null,new Uint16Array(a.subarray(M,M+128)));for(;0>(i=l.indexOf(C))&&d<s&&M<a.byteLength;)o+=l,d+=l.length,M+=128,l+=String.fromCharCode.apply(null,new Uint16Array(a.subarray(M,M+128)));return-1<i?(_!==!1&&(a.pos+=d+i+1),o+l.slice(0,i)):!1},Q=function(a){const s=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,y=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*FORMAT=(\S+)\s*$/,i=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,d={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let o,l;if(a.pos>=a.byteLength||!(o=z(a)))return c(1,"no header found");if(!(l=o.match(s)))return c(3,"bad initial token");for(d.valid|=1,d.programtype=l[1],d.string+=o+`
`;o=z(a),o!==!1;){if(d.string+=o+`
`,o.charAt(0)==="#"){d.comments+=o+`
`;continue}if((l=o.match(_))&&(d.gamma=parseFloat(l[1])),(l=o.match(y))&&(d.exposure=parseFloat(l[1])),(l=o.match(M))&&(d.valid|=2,d.format=l[1]),(l=o.match(i))&&(d.valid|=4,d.height=parseInt(l[1],10),d.width=parseInt(l[2],10)),d.valid&2&&d.valid&4)break}return d.valid&2?d.valid&4?d:c(3,"missing image size specifier"):c(3,"missing format specifier")},x=function(a,s,_){const y=s;if(y<8||y>32767||a[0]!==2||a[1]!==2||a[2]&128)return new Uint8Array(a);if(y!==(a[2]<<8|a[3]))return c(3,"wrong scanline width");const M=new Uint8Array(4*s*_);if(!M.length)return c(4,"unable to allocate buffer space");let i=0,d=0;const o=4*y,l=new Uint8Array(4),J=new Uint8Array(o);let ae=_;for(;ae>0&&d<a.byteLength;){if(d+4>a.byteLength)return c(1);if(l[0]=a[d++],l[1]=a[d++],l[2]=a[d++],l[3]=a[d++],l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=y)return c(3,"bad rgbe scanline format");let q=0,L;for(;q<o&&d<a.byteLength;){L=a[d++];const V=L>128;if(V&&(L-=128),L===0||q+L>o)return c(3,"bad scanline data");if(V){const I=a[d++];for(let te=0;te<L;te++)J[q++]=I}else J.set(a.subarray(d,d+L),q),q+=L,d+=L}const me=y;for(let V=0;V<me;V++){let I=0;M[i]=J[V+I],I+=y,M[i+1]=J[V+I],I+=y,M[i+2]=J[V+I],I+=y,M[i+3]=J[V+I],i+=4}ae--}return M},D=function(a,s,_,y){const M=a[s+3],i=Math.pow(2,M-128)/255;_[y+0]=a[s+0]*i,_[y+1]=a[s+1]*i,_[y+2]=a[s+2]*i,_[y+3]=1},ee=function(a,s,_,y){const M=a[s+3],i=Math.pow(2,M-128)/255;_[y+0]=Ye.toHalfFloat(Math.min(a[s+0]*i,65504)),_[y+1]=Ye.toHalfFloat(Math.min(a[s+1]*i,65504)),_[y+2]=Ye.toHalfFloat(Math.min(a[s+2]*i,65504)),_[y+3]=Ye.toHalfFloat(1)},H=new Uint8Array(r);H.pos=0;const k=Q(H);if(k!==-1){const a=k.width,s=k.height,_=x(H.subarray(H.pos),a,s);if(_!==-1){let y,M,i;switch(this.type){case Ue:i=_.length/4;const d=new Float32Array(i*4);for(let l=0;l<i;l++)D(_,l*4,d,l*4);y=d,M=Ue;break;case Se:i=_.length/4;const o=new Uint16Array(i*4);for(let l=0;l<i;l++)ee(_,l*4,o,l*4);y=o,M=Se;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:a,height:s,data:y,header:k.string,gamma:k.gamma,exposure:k.exposure,type:M}}}return null}setDataType(r){return this.type=r,this}load(r,g,e,W){function T(b,c){switch(b.type){case Ue:case Se:"colorSpace"in b?b.colorSpace="srgb-linear":b.encoding=3e3,b.minFilter=ke,b.magFilter=ke,b.generateMipmaps=!1,b.flipY=!0;break}g&&g(b,c)}return super.load(r,T,e,W)}}class Kt extends Tt{constructor(r){super(r),this.hdrLoader=new qt,this.type=Se}load(r,g,e,W){typeof r=="string"?r=[r]:Array.isArray(r)||(console.warn("THREE.HDRCubeTextureLoader signature has changed. Use .setDataType() instead."),this.setDataType(r),r=g,g=e,e=W,W=arguments[4]);const T=new Pt;switch(T.type=this.type,T.type){case Ue:case Se:"colorSpace"in T?T.colorSpace="srgb-linear":T.encoding=3e3,T.minFilter=ke,T.magFilter=ke,T.generateMipmaps=!1;break}const b=this;let c=0;function E(U,w,C,z){new St(b.manager).setPath(b.path).setResponseType("arraybuffer").setWithCredentials(b.withCredentials).load(r[U],function(Q){c++;const x=b.hdrLoader.parse(Q);if(x){if(x.data!==void 0){const D=new Mt(x.data,x.width,x.height);D.type=T.type,"colorSpace"in D?D.colorSpace=T.SRGBColorSpace:D.encoding=T.encoding,D.format=T.format,D.minFilter=T.minFilter,D.magFilter=T.magFilter,D.generateMipmaps=T.generateMipmaps,T.images[U]=D}c===6&&(T.needsUpdate=!0,w&&w(T))}},C,z)}for(let U=0;U<r.length;U++)E(U,g,e,W);return T}setDataType(r){return this.type=r,this.hdrLoader.setDataType(r),this}}const $t="/assets/earth-DvZudj9K.glb",Jt="/assets/milkyway-nx-Ds_hwpSC.hdr",Qt="/assets/milkyway-ny-BqhFvupA.hdr",en="/assets/milkyway-nz-D6l6T-pv.hdr",tn="/assets/milkyway-px-BjIdbMt0.hdr",nn="/assets/milkyway-py-BD6pEbZF.hdr",rn="/assets/milkyway-pz-Bx3WFS88.hdr",an="/assets/milkyway-Vkpv7LbT.jpg",st=(u,r,g)=>{if(g){if(Math.min(u,r)===u)return r;if(Math.max(u,g)===u)return g}else return Math.max(u,r)===r?u:r;return u},on="_earth_4tqjk_1",sn="_loader_4tqjk_15",cn="_viewport_4tqjk_43",ln="_canvas_4tqjk_65",un="_labels_4tqjk_103",dn="_label_4tqjk_103",pn="_vignette_4tqjk_163",mn="_sections_4tqjk_187",hn="_section_4tqjk_187",pe={earth:on,loader:sn,viewport:cn,canvas:ln,labels:un,label:dn,vignette:pn,sections:mn,section:hn},Ke={x:0,y:0,z:2},Ze=(u,r,g)=>u+g*(r-u),it=u=>Object.keys(u).map(r=>parseFloat(Math.round(u[r]*100)/100).toFixed(2)).join(", "),Xe=u=>!u||!u.camera?Ke:{x:u.camera[0],y:u.camera[1],z:u.camera[2]},fn=(u,r)=>{const g=(e=0)=>Math.round((e+Number.EPSILON)*100)/100;return g(u==null?void 0:u.x)===g(r==null?void 0:r.x)&&g(u==null?void 0:u.y)===g(r==null?void 0:r.y)&&g(u==null?void 0:u.z)===g(r==null?void 0:r.z)},We={stiffness:80,damping:40,mass:2,restSpeed:.001,restDelta:.001},qe={stiffness:40,damping:30,mass:2,restSpeed:.001,restDelta:.001},gn={stiffness:40,damping:30},lt=h.createContext({}),An=({position:u=[0,0,0],scale:r=1,hideMeshes:g=[],labels:e=[],className:W,children:T})=>{const[b,c]=h.useState(!1),[E,U]=h.useState(!1),[w,C]=h.useState(!1),[z,Q]=h.useState(!1),x=h.useRef([]),D=h.useRef(),ee=h.useRef(),H=h.useRef(),k=h.useRef(),a=h.useRef(),s=h.useRef(),_=h.useRef(),y=h.useRef(),M=h.useRef(),i=h.useRef(),d=h.useRef(),o=h.useRef(),l=bt(H),J=h.useRef(),ae=h.useRef(Xe(x.current[0])),q=h.useRef([]),L=h.useRef(),me=h.useRef(),V=h.useRef(),I=h.useRef(),{width:te,height:Re}=yt(),ye=ut(),ne=_e(0,We),oe=_e(0,We),ie=_e(0,We),he=_e(0,qe),Ee=_e(0,qe),we=_e(0,qe),fe=_e(0,gn),Me=h.useCallback(()=>{if(!l){cancelAnimationFrame(J.current);return}J.current=requestAnimationFrame(Me);const P=_.current.getDelta();o.current.update(P),L.current.update(),a.current.render(k.current,s.current),q.current.forEach(A=>{const{element:j,position:G,sprite:Z}=A,N=new $(...G),v=s.current.position.distanceTo(i.current.position),F=s.current.position.distanceTo(Z.position)>v;N.project(s.current),N.x=Math.round((.5+N.x/2)*window.innerWidth),N.y=Math.round((.5-N.y/2)*window.innerHeight),j.style.setProperty("--posX",et(N.x)),j.style.setProperty("--posY",et(N.y)),F?j.dataset.occluded=!0:j.dataset.occluded=!1})},[l]);h.useEffect(()=>{I.current=!0;const{innerWidth:P,innerHeight:A}=window;a.current=new xt({canvas:H.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),a.current.setPixelRatio(1),a.current.outputColorSpace=rt,a.current.toneMapping=At,s.current=new De(54,P/A,.1,100),s.current.position.x=ae.current.x,s.current.position.y=ae.current.y,s.current.position.z=ae.current.z,s.current.lookAt(0,0,0),ne.set(s.current.position.x,!1),oe.set(s.current.position.y,!1),ie.set(s.current.position.z,!1),k.current=new vt,_.current=new Lt,M.current=new jt;const j=new Dt(2236962,.05),G=new kt(16777215,1.5);G.position.set(3,0,1);const Z=[j,G];return Z.forEach(N=>k.current.add(N)),L.current=new Wt(s.current,H.current),L.current.enableZoom=!1,L.current.enablePan=!1,L.current.enableDamping=!1,L.current.rotateSpeed=.5,()=>{I.current=!1,cancelAnimationFrame(J.current),Ct(Z),Ot(k.current),It(a.current)}},[]),h.useEffect(()=>{const P=()=>{U(!0),ne.stop(),oe.stop(),ie.stop()},A=()=>{ne.set(s.current.position.x,!1),oe.set(s.current.position.y,!1),ie.set(s.current.position.z,!1),U(!1)};return L.current.addEventListener("start",P),L.current.addEventListener("end",A),()=>{L.current.removeEventListener("start",P),L.current.removeEventListener("end",A)}},[ne,oe,ie]),h.useEffect(()=>{if(!b)return;const P=Ve("Chunk",i.current),A=Ve("Atmosphere",i.current),j=(f,O)=>{s.current.position[f]=O},G=ne.on("change",f=>j("x",f)),Z=oe.on("change",f=>j("y",f)),N=ie.on("change",f=>j("z",f)),v=(f,O)=>{P.position[f]=O},ce=he.on("change",f=>v("x",f)),F=Ee.on("change",f=>v("y",f)),B=we.on("change",f=>v("z",f)),R=fe.on("change",f=>{A.material.opacity=f});return()=>{G(),Z(),N(),ce(),F(),B(),R()}},[ne,oe,ie,he,Ee,we,b,fe]),h.useEffect(()=>{te<=dt.tablet&&(L.current.enabled=!1)},[te]),h.useEffect(()=>{if(b)return;const P=new Kt,A=new Nt(a.current);A.compileCubemapShader();const j=async()=>{const v=await zt.loadAsync($t);i.current=v.scene,d.current=v.animations,o.current=new Ht(i.current),o.current.timeScale=.1,i.current.traverse(async ce=>{const{material:F,name:B}=ce;B==="Atmosphere"&&(F.alphaMap=F.map),F&&await a.current.initTexture(F)}),i.current.position.x=u[0],i.current.position.y=u[1],i.current.position.z=u[2],i.current.scale.x=r,i.current.scale.y=r,i.current.scale.z=r},G=async()=>{const v=await P.loadAsync([Jt,Qt,en,tn,nn,rn]);v.magFilter=ke,me.current=A.fromCubemap(v),A.dispose(),await a.current.initTexture(me.current.texture)},Z=async()=>{const v=await Yt.loadAsync(an);v.mapping=Bt,v.colorSpace=rt,k.current.background=v,await a.current.initTexture(v)},N=async()=>{await Promise.all([Z(),G(),j()]),i.current.traverse(({material:v})=>{v&&(v.envMap=me.current.texture,v.needsUpdate=!0)}),I.current&&c(!0)};h.startTransition(()=>{N(),setTimeout(()=>{Q(!0)},1e3)})},[b,u,r]),h.useEffect(()=>(b&&!V.current&&(k.current.add(i.current),V.current=!0),b&&l&&(C(!0),Me()),()=>{cancelAnimationFrame(J.current)}),[Me,l,b]),h.useEffect(()=>{b&&(ee.current.innerHTML="",q.current=e.map(P=>{const A=document.createElement("div");A.classList.add(pe.label),A.dataset.hidden=!0,A.style.setProperty("--delay",`${P.delay||0}ms`),A.textContent=P.text,ee.current.appendChild(A);const j=new Ft;return j.position.set(...P.position),j.scale.set(60,60,1),{element:A,...P,sprite:j}}))},[e,b]),h.useEffect(()=>{a.current.setSize(te,Re),s.current.aspect=te/Re,s.current.updateProjectionMatrix()},[te,Re]),h.useEffect(()=>{const P=H.current,A=j=>{const{innerWidth:G,innerHeight:Z}=window,N=it(s.current.position);console.info({cameraPosition:N}),y.current=new re(j.clientX/G*2-1,-(j.clientY/Z)*2+1),M.current.setFromCamera(y.current,s.current);const v=M.current.intersectObjects(k.current.children,!0);if(v.length>0){const ce=it(v[0].point);console.info({clickPosition:ce})}};return()=>{P.removeEventListener("click",A)}},[]);const Ce=h.useCallback(()=>{if(!D.current)return;const{offsetTop:P}=D.current,{innerHeight:A}=window,j=window.scrollY-P;let G;const Z=F=>{const B=x.current[F].meshes;i.current.traverse(R=>{const{name:f}=R,O=Ve("Chunk",i.current),K=B==null?void 0:B.includes(f),ge=g==null?void 0:g.includes(f);if(K)if(f==="Atmosphere")R.visible=!0,fe.set(1);else if(f==="Chunk"){const X=new $(-.4,.4,.4);R.visible=!0,ye?R.position.set(...X.toArray()):(he.set(X.x),Ee.set(X.y),we.set(X.z))}else f==="EarthFull"&&O.visible?R.visible=!1:R.visible=!0;else if(ge&&!K)if(f==="Atmosphere")fe.set(0);else if(f==="Chunk"){const X=new $(0,0,0);fn(X,O.position)&&(R.visible=!1),he.set(X.x),Ee.set(X.y),we.set(X.z)}else f==="EarthPartial"&&O.visible?R.visible=!0:R.visible=!1})},N=F=>{const B=x.current[F].animations;ye||(d.current.forEach((R,f)=>{B.find(O=>O.includes(f.toString()))||o.current.clipAction(R).reset().stop()}),d.current.length&&x.current[F].animations&&B.forEach(R=>{const f=R.split(":"),O=d.current[Number(f[0])],K=o.current.clipAction(O);(!f[1]||f[1]!=="loop")&&(K.clampWhenFinished=!0,K.loop=Ut),K.play()}))},v=F=>{q.current.forEach(R=>{R.hidden&&(R.element.dataset.hidden=!0,R.element.setAttribute("aria-hidden",!0))}),x.current[F].labels.forEach(R=>{q.current.filter(O=>O.text===R).forEach(O=>{O.element.dataset.hidden=!1,O.element.setAttribute("aria-hidden",!1)})})};requestAnimationFrame(()=>{const F=x.current.length-1,B=Math.floor(j/A),R=st(B,0,F),f=x.current[R],O=x.current[R+1],K=Xe(f)||Ke,ge=Xe(O)||Ke,X=(j-A*R)/A,xe=st(X,0,1),Ne=Ze(K.x,ge.x,xe),Ae=Ze(K.y,ge.y,xe),Fe=Ze(K.z,ge.z,xe);if(G!==K&&x.current.length&&f&&(Z(R),N(R),v(R)),G=K,!E){if(ye){s.current.position.set(Ne,Ae,Fe);return}ne.set(Ne),oe.set(Ae),ie.set(Fe)}})},[ne,oe,ie,he,Ee,we,E,g,fe,ye]);h.useEffect(()=>{const P=Gt(Ce,100);return b&&l&&window.addEventListener("scroll",P),()=>{window.removeEventListener("scroll",P)}},[Ce,l,b,fe]);const Oe=h.useCallback(P=>{x.current=[...x.current,P]},[]),Ie=h.useCallback(P=>{x.current=x.current.filter(A=>A!==P)},[]);return se.jsx(lt.Provider,{value:{registerSection:Oe,unregisterSection:Ie},children:se.jsxs("div",{className:ct(pe.earth,W),ref:D,children:[se.jsxs("div",{className:pe.viewport,children:[se.jsx("canvas",{className:pe.canvas,"data-visible":b&&w,"data-grabbing":E,ref:H}),se.jsx("div",{className:pe.labels,"aria-live":"polite",ref:ee}),se.jsx("div",{className:pe.vignette})]}),se.jsx("div",{className:pe.sections,children:T}),se.jsx(pt,{unmount:!0,in:!b&&z,timeout:mt(ft.base.durationL),children:P=>se.jsx(gt,{className:pe.loader,"data-visible":P,children:se.jsx(ht,{})})})]})})},vn=h.memo(({children:u,scrim:r,scrimReverse:g,className:e,camera:W=[0,0,0],animations:T=[],meshes:b=[],labels:c=[]})=>{const{registerSection:E,unregisterSection:U}=h.useContext(lt),w=h.useRef(),C=JSON.stringify(T)+JSON.stringify(W)+JSON.stringify(c)+JSON.stringify(b);return h.useEffect(()=>{const z={camera:W,animations:T,meshes:b,labels:c,sectionRef:w};return E(z),()=>{U(z)}},[C,E,U]),se.jsx("div",{className:ct(pe.section,e),"data-scrim":r,"data-scrim-reverse":g,ref:w,children:u})});export{An as Earth,vn as EarthSection};