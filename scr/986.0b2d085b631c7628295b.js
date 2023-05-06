"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[986],{4986:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var r=n(5893),i=(n(4095),n(2386),n(9233),n(3046),n(7542),n(2613)),a=n(5035);const o=function(){function t(){this.listeners=[]}return t.prototype.addListener=function(t){var e=this.listeners;e.includes(t)||e.push(t)},t.prototype.removeListener=function(t){this.listeners=this.listeners.filter((function(e){return e!==t}))},t.prototype.dispatch=function(t){var e,n;try{for(var r=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(this.listeners),i=r.next();!i.done;i=r.next()){var a=i.value;try{a(t)}catch(t){console.error("Error in an event listener!"),console.error("  error:   ",t),console.error("  listener:",a)}}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},t}();var s=function(){return s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},s.apply(this,arguments)};const c=function(){function t(){var t=this;this.eventDown=new o,this.eventDrag=new o,this.eventUp=new o,this.eventZoom=new o,this.pointers=new Map,this.handleWheel=function(e){var n=e.deltaY>0?1:-1;t.eventZoom.dispatch(n)},this.handlePointerDown=function(e){var n=e.target;if(n){n.setPointerCapture(e.pointerId);var r=h(e),i={first:r,previous:r};t.pointers.set(r.id,i),t.eventDown.dispatch(r)}},this.handlePointerMove=function(e){var n=t.pointers.get(e.pointerId);if(n){var r=h(e);t.eventDrag.dispatch(s(s({},n),{current:r})),n.previous=r}},this.handlePointerUp=function(e){var n=t.pointers.get(e.pointerId);if(n){var r=e.target;if(r){r.releasePointerCapture(e.pointerId),t.pointers.delete(e.pointerId);var i=h(e);t.eventUp.dispatch(s(s({},n),{current:i}))}}}}return t.prototype.attach=function(t){t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointermove",this.handlePointerMove),t.addEventListener("wheel",this.handleWheel)},t.prototype.detach=function(t){t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointermove",this.handlePointerMove),t.removeEventListener("wheel",this.handleWheel)},t}();function h(t){var e=t.target.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;return{realX:n,realY:r,x:2*(n/e.width-.5),y:2*(.5-r/e.height),id:t.pointerId,button:t.button,timestamp:t.timeStamp}}var u=n(7294),l=n(3379),f=n.n(l),p=n(7795),d=n.n(p),v=n(569),y=n.n(v),m=n(3565),g=n.n(m),w=n(9216),x=n.n(w),b=n(4589),P=n.n(b),j=n(1749),A={};A.styleTagTransform=P(),A.setAttributes=g(),A.insert=y().bind(null,"head"),A.domAPI=d(),A.insertStyleElement=x(),f()(j.Z,A);const C=j.Z&&j.Z.locals?j.Z.locals:void 0;var O=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,a=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o},R=(function(){function t(e,n,r,i){this.data="number"!=typeof e?e instanceof t?new Float32Array(e.data):new Float32Array([0,0,0,1]):new Float32Array([e,null!=n?n:0,null!=r?r:0,null!=i?i:1])}Object.defineProperty(t.prototype,"x",{get:function(){return this.data[0]},set:function(t){this.data[0]=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.data[1]},set:function(t){this.data[1]=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"z",{get:function(){return this.data[2]},set:function(t){this.data[2]=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"w",{get:function(){return this.data[3]},set:function(t){this.data[3]=t},enumerable:!1,configurable:!0}),t.prototype.setUniform=function(t,e){t.uniform4fv(e,this.data)},t.prototype.lengthSquare=function(){var t=O(this.data,4),e=t[0],n=t[1],r=t[2],i=t[3];return e*e+n*n+r*r+i*i},t.prototype.length=function(){return Math.sqrt(this.lengthSquare())},t.prototype.normalize=function(){var t=this.lengthSquare(),e=t>1e-12?1/Math.sqrt(t):0;return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}}(),function(){function t(e,n,r){this.data="number"!=typeof e?e instanceof t?new Float32Array(e.data):new Float32Array([0,0,0]):new Float32Array([e,null!=n?n:0,null!=r?r:0])}return Object.defineProperty(t.prototype,"x",{get:function(){return this.data[0]},set:function(t){this.data[0]=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.data[1]},set:function(t){this.data[1]=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"z",{get:function(){return this.data[2]},set:function(t){this.data[2]=t},enumerable:!1,configurable:!0}),t.prototype.setUniform=function(t,e){t.uniform3fv(e,this.data)},t.prototype.lengthSquare=function(){var t=O(this.data,3),e=t[0],n=t[1],r=t[2];return e*e+n*n+r*r},t.prototype.length=function(){return Math.sqrt(this.lengthSquare())},t.prototype.normalize=function(){var t=this.lengthSquare(),e=t>1e-12?1/Math.sqrt(t):0;return this.x*=e,this.y*=e,this.z*=e,this},t}());function M(t,e,n,r){var i=Math.cos(n),a=Math.sin(n),o=O(t.data,3),s=o[0],c=o[1],h=o[2],u=O(e.data,3),l=u[0],f=u[1],p=u[2],d=l*l,v=l*f,y=l*p,m=f*f,g=f*p,w=p*p;r.x=s*(i+(1-i)*d)+c*((1-i)*v-a*p)+h*((1-i)*y+a*f),r.y=s*((1-i)*v+a*p)+c*(i+(1-i)*m)+h*((1-i)*g-a*l),r.z=s*((1-i)*y-a*f)+c*((1-i)*g+a*l)+h*(i+(1-i)*w)}function Z(t,e,n){var r=Math.cos(e),i=Math.sin(e),a=O(t.data,3),o=a[0],s=a[1],c=a[2];n.x=o*r+c*i,n.y=s,n.z=-o*i+c*r}var z=n(927);const D=function(){function t(t){this.scene=t,this.roll=0,this.pitch=0,this.pinned=!1,this.axisX=new R(1,0,0),this.axisY=new R(0,1,0),this.axisZ=new R(0,0,1),this.rotatedAxisX=new R(0),this.rotatedAxisY=new R(0),this.rotatedAxisZ=new R(0),this.cameraOrientation=[1,0,0,0,1,0,0,0,1],this.cameraPosition=[0,0,1],this.res=t.getResources("BlendDemo"),this.prg=this.res.createProgram({vert:"#version 300 es\n\nuniform mat3 uniCameraOrientation;\nin vec2 attRay;\nout vec3 varRay;\n\nvoid main() {\n    varRay = uniCameraOrientation * vec3(1.0, attRay);\n    gl_Position = vec4(attRay, 0.0, 1.0);\n}",frag:"#version 300 es\n\nprecision mediump float;\n\nin vec3 varRay;\nout vec4 FragColor;\nuniform vec3 uniCameraPosition;\n\nvoid main() {\n    if (varRay.z >= 0.0) discard;\n\n    float factor = -uniCameraPosition.z / varRay.z;\n    float x = uniCameraPosition.x + factor * varRay.x;\n    float y = uniCameraPosition.y + factor * varRay.y;\n    float a = smoothstep(-.001, .001, cos(x) * cos(y));\n    vec3 color = mix(vec3(0.2, 1, 0), vec3(.5, .7, .2), a);\n    float dist = distance(uniCameraPosition, vec3(x, y, 0));\n    float b = clamp(25.0 / dist, 0.0, 1.0);\n    FragColor = vec4(mix(vec3(0.3, 0.5 , 1), color, b) , 1.0);\n}"}),this.vao=this.res.createVertexArray();var e=t.gl;this.buffer=this.res.createBuffer(),this.data=(0,z._)(4,{attRay:2}),this.data.poke("attRay",[1,1,1,-1,-1,-1,-1,1]),this.data.push(t.gl,this.buffer),e.bindVertexArray(this.vao),this.data.defineAttributes(e,this.prg,this.buffer),e.bindVertexArray(null)}return t.prototype.destroy=function(){this.res.deleteBuffer(),this.res.deleteProgram(),this.res.deleteVertexArray()},t.prototype.paint=function(t,e){var n=this,r=n.prg,i=n.vao,a=n.scene.gl;a.useProgram(r),a.uniform3fv(a.getUniformLocation(r,"uniCameraPosition"),this.cameraPosition),a.uniformMatrix3fv(a.getUniformLocation(r,"uniCameraOrientation"),!1,this.cameraOrientation),a.bindVertexArray(i),a.drawArrays(a.TRIANGLE_FAN,0,4),a.bindVertexArray(null)},t.prototype.update=function(t,e){var n=this.roll,r=this.pitch;this.pinned||(n>0?this.roll=Math.max(0,n-2e-4*e):n<0&&(this.roll=Math.min(0,n+2e-4*e)),r>0?this.pitch=Math.max(0,r-2e-4*e):r<0&&(this.pitch=Math.min(0,r+2e-4*e)));var i=this,a=i.axisX,o=i.axisY,s=i.axisZ,c=i.rotatedAxisX,h=i.rotatedAxisY,u=i.rotatedAxisZ;Z(a,r,c),Z(o,r,h),Z(s,r,u);var l=new R(0);Z(new R(1,0,0),r,l),M(c,l,n,c),M(h,l,n,h),M(u,l,n,u),this.cameraOrientation=[c.x,c.y,c.z,h.x,h.y,h.z,u.x,u.y,u.z],this.cameraPosition[0]+=.01*e,this.cameraPosition[2]=11+10*Math.cos(.0002427022*t)},t}();var F=function(){return F=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},F.apply(this,arguments)};function L(t){var e=t.className,n=u.useRef(null),o=u.useRef(null);return(0,r.jsx)("div",F({className:I(e,C.InfinitePlanDemo)},{children:(0,r.jsx)("canvas",{ref:function(t){if(t&&!n.current){var e=new a.Z(t,{alpha:!1,preserveDrawingBuffer:!1,antialias:!1,depth:!0,stencil:!1,failIfMajorPerformanceCaveat:!1,powerPreference:"low-power"});n.current=e;var r=new D(e);o.current=r;var s=new c;s.attach(t),s.eventDrag.addListener(function(t,e){return function(n){var r=n.current.x-n.previous.x,i=n.current.y-n.previous.y;e.roll+=r,e.pitch+=i,t.paint()}}(e,r));var h=new i.x(e,{color:[.3,.5,1,1]});e.addPainter(h,r),e.animate=!0}},width:512,height:512,onDoubleClick:N})}))}function I(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter((function(t){return"string"==typeof t})).join(" ")}function N(t){t.target.requestFullscreen({navigationUI:"hide"})}function S(t){const e=Object.assign({h1:"h1"},t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Infinite Plane"}),"\n",(0,r.jsx)("div",{children:"Drag your mouse on the scene to change the camera angles."}),"\n",(0,r.jsx)(L,{})]})}const E=function(t={}){const{wrapper:e}=t.components||{};return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(S,t)})):S(t)}},1749:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(8081),i=n.n(r),a=n(3645),o=n.n(a)()(i());o.push([t.id,".Wen8ZNhN4CFcCiTNvRwn {\n    width: 100%;\n    display: grid;\n    place-items: center;\n}\n\n.Wen8ZNhN4CFcCiTNvRwn > canvas {\n    width: 640px;\n    height: 480px;\n    max-width: 100vw;\n    max-height: 100vmin;\n}\n",""]),o.locals={InfinitePlanDemo:"Wen8ZNhN4CFcCiTNvRwn"};const s=o}}]);