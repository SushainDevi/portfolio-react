import{r as n}from"./components-PifdxV0v.js";import{m as p,i as f,a as l}from"./index-GhhXowCo.js";import{d as g,f as S,e as d}from"./heading-CpFj42vI.js";const m=n.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function x(t){const o=g(()=>p(t)),{isStatic:r}=n.useContext(m);if(r){const[,a]=n.useState(t);n.useEffect(()=>o.on("change",a),[])}return o}function h(t,o={}){const{isStatic:r}=n.useContext(m),a=n.useRef(null),e=x(f(t)?t.get():t),u=()=>{a.current&&a.current.stop()};return n.useInsertionEffect(()=>e.attach((s,c)=>{if(r)return c(s);const i=a.current;return i&&i.time===0&&i.sample(S.delta),u(),a.current=l({keyframes:[e.get(),s],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...o,onUpdate:c}),e.get()},u),[JSON.stringify(o)]),d(()=>{if(f(t))return t.on("change",s=>e.set(parseFloat(s)))},[e]),e}export{h as u};
