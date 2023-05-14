"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[471],{9471:(n,t,r)=>{r.r(t),r.d(t,{default:()=>tn});var e=r(5893),o=(r(4095),r(2386),r(9233),r(3046),r(7542),r(8471)),a=r(4303),l=r(1543),i=r(7957),s=r(851),c=r(7294),u=r(3379),f=r.n(u),h=r(7795),p=r.n(h),d=r(569),v=r.n(d),C=r(3565),g=r.n(C),m=r(9216),A=r.n(m),x=r(4589),S=r.n(x),y=r(1031),_={};_.styleTagTransform=S(),_.setAttributes=g(),_.insert=v().bind(null,"head"),_.domAPI=p(),_.insertStyleElement=A(),f()(y.Z,_);const O=y.Z&&y.Z.locals?y.Z.locals:void 0;var N=r(5008),j={};j.styleTagTransform=S(),j.setAttributes=g(),j.insert=v().bind(null,"head"),j.domAPI=p(),j.insertStyleElement=A(),f()(N.Z,j);const b=N.Z&&N.Z.locals?N.Z.locals:void 0;var D=r(5389),R=function(){return R=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},R.apply(this,arguments)};function E(n){var t=n.className,r=n.label,o=n.value,a=n.onChange;return(0,e.jsx)("div",R({className:P(t,b.SelectFactor)},{children:(0,e.jsx)(D.kp,R({value:r},{children:(0,e.jsx)(D.n7,{options:{ZERO:"ZERO",ONE:"ONE",SRC_COLOR:"SRC_COLOR",ONE_MINUS_SRC_COLOR:"ONE_MINUS_SRC_COLOR",DST_COLOR:"DST_COLOR",ONE_MINUS_DST_COLOR:"ONE_MINUS_DST_COLOR",SRC_ALPHA:"SRC_ALPHA",ONE_MINUS_SRC_ALPHA:"ONE_MINUS_SRC_ALPHA",DST_ALPHA:"DST_ALPHA",ONE_MINUS_DST_ALPHA:"ONE_MINUS_DST_ALPHA",SRC_ALPHA_SATURATE:"SRC_ALPHA_SATURATE"},value:o,onChange:a})}))}))}function P(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return n.filter((function(n){return"string"==typeof n})).join(" ")}var T=r(8858),Z={};Z.styleTagTransform=S(),Z.setAttributes=g(),Z.insert=v().bind(null,"head"),Z.domAPI=p(),Z.insertStyleElement=A(),f()(T.Z,Z);const w=T.Z&&T.Z.locals?T.Z.locals:void 0;var F=function(){return F=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},F.apply(this,arguments)};function U(n){var t=n.className,r=n.label,o=n.value,a=n.onChange;return(0,e.jsx)("div",F({className:L(t,w.SelectFunction)},{children:(0,e.jsx)(D.kp,F({value:r},{children:(0,e.jsx)(D.n7,{options:{FUNC_ADD:"FUNC_ADD",FUNC_SUBTRACT:"FUNC_SUBTRACT",FUNC_REVERSE_SUBTRACT:"FUNC_REVERSE_SUBTRACT",MIN:"MIN",MAX:"MAX"},value:o,onChange:a})}))}))}function L(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return n.filter((function(n){return"string"==typeof n})).join(" ")}var M=r(7381),k=[.9,.9,.7,.8],I=[.8,.2,.8,.5],B=[.3,.7,.7,.2];const V=function(){function n(n){this.scene=n,this.res=n.getResources("BlendDemo"),this.prg=this.res.createProgram({vert:"#version 300 es\n\nuniform float uniPointSize;\nin vec2 attPos;\nin vec4 attColor;\n\nout vec4 varColor;\n\nvoid main() {\n    varColor = attColor;\n    gl_Position = vec4(attPos, 0.5, 1.0);\n    gl_PointSize = uniPointSize;\n}",frag:"#version 300 es\n\nprecision mediump float;\n\nin vec4 varColor;\n\nout vec4 FragColor;\n\nvoid main() {\n    vec2 pos = 2.0 * gl_PointCoord.xy - vec2(1, 1);\n    float r = length(pos);\n    if (r > 1.0) discard;\n\n    float light = 1.0 - smoothstep(0.9, 1.0, r);\n    FragColor = varColor * light;\n    if (r < .2) FragColor.a = 1.0;\n}"}),this.vao=this.res.createVertexArray();var t=n.gl;this.buffer=this.res.createBuffer();var r=(0,M._)(21,{attPos:2,attColor:4});!function(n){for(var t=2*Math.PI,r=.6667,e=.15,o=0,a=0;a<6;a++){var l=t*a/6,i=r*Math.cos(l),s=r*Math.sin(l),c=X[a];n.poke("attPos",[i+H*e,s+q*e],o+c[0]),n.poke("attColor",k,o+c[0]),n.poke("attPos",[i+z*e,s+Q*e],o+c[1]),n.poke("attColor",I,o+c[1]),n.poke("attPos",[i+W*e,s+K*e],o+c[2]),n.poke("attColor",B,o+c[2]),o+=3}n.poke("attPos",[H*e,q*e],o+0),n.poke("attColor",k,o+0),n.poke("attPos",[z*e,Q*e],o+1),n.poke("attColor",I,o+1),n.poke("attPos",[W*e,K*e],o+2),n.poke("attColor",B,o+2)}(r),r.push(t,this.buffer),t.bindVertexArray(this.vao),r.defineAttributes(t,this.prg,this.buffer),t.bindVertexArray(null)}return n.prototype.destroy=function(){this.res.deleteBuffer(),this.res.deleteProgram(),this.res.deleteVertexArray()},n.prototype.paint=function(n,t){var r=this,e=r.prg,o=r.vao,a=r.scene,l=a.gl;l.useProgram(e),l.uniform1f(l.getUniformLocation(e,"uniPointSize"),.2*Math.min(a.width,a.height)),l.bindVertexArray(o),l.drawArrays(l.POINTS,0,18),l.disable(l.BLEND),l.drawArrays(l.POINTS,18,3),l.bindVertexArray(null)},n.prototype.update=function(n,t){},n}();var X=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]],H=0,q=1,z=.8660254037844387,Q=-.5,W=-.8660254037844387,K=-.5,G=function(){return G=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},G.apply(this,arguments)},J=function(n,t){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,a=r.call(n),l=[];try{for(;(void 0===t||t-- >0)&&!(e=a.next()).done;)l.push(e.value)}catch(n){o={error:n}}finally{try{e&&!e.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return l};function Y(n){var t=n.className,r=c.useRef(null),u=c.useRef(null),f=c.useRef(null),h=J(c.useState(1),2),p=h[0],d=h[1],v=J(c.useState({factorSrcColor:"ONE",factorSrcAlpha:"ONE",factorDstColor:"ZERO",factorDstAlpha:"ZERO",functionColor:"FUNC_ADD",functionAlpha:"FUNC_ADD"}),2),C=v[0],g=v[1];c.useEffect((function(){var n,t=f.current;t&&(t.set({colorValue:[.5,.5,.5,p]}),null===(n=r.current)||void 0===n||n.paint())}),[p]);var m=function(n){var t=G(G({},C),n);g(t);var e=u.current;e&&(e.enabled=!0,e.factorSrcColor=t.factorSrcColor,e.factorSrcAlpha=t.factorSrcAlpha,e.factorDstColor=t.factorDstColor,e.factorDstAlpha=t.factorDstAlpha,e.functionColor=t.functionColor,e.functionAlpha=t.functionAlpha),console.log(t);var o=r.current;o&&o.paint()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("canvas",{className:$(t,O.BlendDemo),ref:function(n){if(n&&!r.current){var t=new s.Z(n,{alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!1,antialias:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!1,powerPreference:"low-power"});r.current=t;var e=new i.Z(t,{enabled:!0,factorSrcColor:"ONE",factorSrcAlpha:"ONE",factorDstColor:"ZERO",factorDstAlpha:"ZERO",functionColor:"FUNC_ADD",functionAlpha:"FUNC_ADD"});u.current=e;var o=new l.x(t,{colorValue:[.5,.5,.5,1]});f.current=o,t.addPainter(o,e,new V(t)),t.paint()}}}),(0,e.jsxs)("div",G({className:"margin-right"},{children:[(0,e.jsx)(o.Z,G({flexDirection:"column",alignItems:"stretch"},{children:(0,e.jsx)(a.kp,G({value:"Background opacity (".concat((100*p).toFixed(),"%)")},{children:(0,e.jsx)(a.yu,{value:p,onChange:d,min:0,max:1,step:.1})}))})),(0,e.jsx)("hr",{}),(0,e.jsx)(E,{label:"Source Color Factor",value:C.factorSrcColor,onChange:function(n){return m({factorSrcColor:n})}}),(0,e.jsx)(E,{label:"Destination Color Factor",value:C.factorDstColor,onChange:function(n){return m({factorDstColor:n})}}),(0,e.jsx)(U,{label:"Source Color Equation",value:C.functionColor,onChange:function(n){return m({functionColor:n})}}),(0,e.jsx)("hr",{}),(0,e.jsx)(E,{label:"Source Alpha Factor",value:C.factorSrcAlpha,onChange:function(n){return m({factorSrcAlpha:n})}}),(0,e.jsx)(E,{label:"Destination Alpha Factor",value:C.factorDstAlpha,onChange:function(n){return m({factorDstAlpha:n})}}),(0,e.jsx)(U,{label:"Source Alpha Equation",value:C.functionAlpha,onChange:function(n){return m({functionAlpha:n})}})]}))]})}function $(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return n.filter((function(n){return"string"==typeof n})).join(" ")}function nn(n){const t=Object.assign({h1:"h1",p:"p"},n.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h1,{children:"Blending"}),"\n",(0,e.jsx)("div",{className:"margin-left",children:(0,e.jsx)(t.p,{children:"When the fragment shader set a new color to a pixel, it can be blended with\nthe current color of that pixel."})}),"\n",(0,e.jsx)(Y,{}),"\n",(0,e.jsx)(t.p,{children:"Ah! Ah!"})]})}const tn=function(n={}){const{wrapper:t}=n.components||{};return t?(0,e.jsx)(t,Object.assign({},n,{children:(0,e.jsx)(nn,n)})):nn(n)}},1135:(n,t,r)=>{r.d(t,{Z:()=>i});var e=r(8081),o=r.n(e),a=r(3645),l=r.n(a)()(o());l.push([n.id,".jvlT0UyM79FnX9RbX9dy {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: start;\n    gap: 1em;\n    padding: 0.5em;\n    border-radius: 0.25em;\n    background: linear-gradient(0deg, #f900, #f902, #f901);\n    backdrop-filter: blur(5px);\n    box-shadow: 0 2px 4px #f903;\n}\n\n.wXxu_E1ctMWwTn8EN3Vq {\n    flex: 0 0 auto;\n    max-width: 160px;\n    max-height: 160px;\n}\n\n@media (max-width: 600px) {\n    .jvlT0UyM79FnX9RbX9dy {\n        flex-direction: column;\n    }\n\n    .wXxu_E1ctMWwTn8EN3Vq {\n        max-width: 100%;\n    }\n}\n",""]),l.locals={Card:"jvlT0UyM79FnX9RbX9dy",image:"wXxu_E1ctMWwTn8EN3Vq"};const i=l},1031:(n,t,r)=>{r.d(t,{Z:()=>i});var e=r(8081),o=r.n(e),a=r(3645),l=r.n(a)()(o());l.push([n.id,"canvas.e39pExigNFcfvnSmt6lO {\n    width: min(640px, 95vmin);\n    height: min(640px, 95vmin);\n}\n",""]),l.locals={BlendDemo:"e39pExigNFcfvnSmt6lO"};const i=l},5008:(n,t,r)=>{r.d(t,{Z:()=>i});var e=r(8081),o=r.n(e),a=r(3645),l=r.n(a)()(o());l.push([n.id,".qKxB7nTSXDZDoQwTZ5LQ {\n    margin: 1em 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n",""]),l.locals={SelectFactor:"qKxB7nTSXDZDoQwTZ5LQ"};const i=l},8858:(n,t,r)=>{r.d(t,{Z:()=>i});var e=r(8081),o=r.n(e),a=r(3645),l=r.n(a)()(o());l.push([n.id,".LrgVFSDuuRiz2mi7ABRh {\n    margin: 1em 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n",""]),l.locals={SelectFunction:"LrgVFSDuuRiz2mi7ABRh"};const i=l},9233:(n,t,r)=>{r.d(t,{Z:()=>x});var e=r(5893),o=r(3379),a=r.n(o),l=r(7795),i=r.n(l),s=r(569),c=r.n(s),u=r(3565),f=r.n(u),h=r(9216),p=r.n(h),d=r(4589),v=r.n(d),C=r(1135),g={};g.styleTagTransform=v(),g.setAttributes=f(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),a()(C.Z,g);const m=C.Z&&C.Z.locals?C.Z.locals:void 0;var A=function(){return A=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},A.apply(this,arguments)};function x(n){var t=n.className,r=n.image,o=n.children;return(0,e.jsxs)("div",A({className:S(t,m.Card)},{children:[(0,e.jsx)("img",{className:m.image,src:r}),(0,e.jsx)("div",{children:o})]}))}function S(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return n.filter((function(n){return"string"==typeof n})).join(" ")}},851:(n,t,r)=>{r.d(t,{Z:()=>e.Z});var e=r(329)}}]);