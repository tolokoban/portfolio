"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[0],{9e3:(n,e,t)=>{t.r(e),t.d(e,{default:()=>c});var r=t(4848),o=t(686);function i(n){const e={a:"a",code:"code",h1:"h1",p:"p",...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Fougères fractales"}),"\n",(0,r.jsx)(o.A,{alt:"Fougère fractale",name:"blog/articles//rust/fern",size:[513,1080],children:(0,r.jsx)(e.p,{children:"Une fougère fractale parmi d'autres"})}),"\n",(0,r.jsxs)(e.p,{children:["Pour dessiner une fougère fractale, il faut partir d'un point en position ",(0,r.jsx)(e.code,{children:"(0,0)"}),",\nlui appliquer une formule pour déterminer les coordonnées du point suivant, et\nrépéter ce processus quelques millions de fois."]}),"\n",(0,r.jsx)(e.p,{children:"À chaque fois qu'on tombe sur un pixel, on augmente la valeur de sa couleur.\nSi on tombe 127 fois sur le même pixel, il devient totalement blanc."}),"\n",(0,r.jsx)(e.p,{children:"À noter que seuls les pixels verts sont calculés. Les rouges sont juste issus d'une\nsymétrie centrale."}),"\n",(0,r.jsxs)(e.p,{children:["Vous pouvez créer vos propres fougères avec cette ",(0,r.jsx)(e.a,{href:"https://tolokoban.github.io/fern",children:"application"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"Le nombre de pixels à calculer étant colossal, il serait trop lent de faire ça en Javascript.\nNous avons donc compilé un programme Rust en Web Assembly."})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(i,{...n})}):i(n)}},6063:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(1601),o=t.n(r),i=t(6314),c=t.n(i)()(o());c.push([n.id,".fVSU6qOd25b2JTUNee4W {\n    position: relative;\n    margin: 1em 0;\n    overflow: hidden;\n    border-radius: 0.5em;\n    transition: opacity 0.5s;\n    height: fit-content;\n}\n\n.fVSU6qOd25b2JTUNee4W picture,\n.fVSU6qOd25b2JTUNee4W img {\n    max-width: min(calc(100vw - 20px), 780px);\n    max-height: 100svh;\n    cursor: pointer;\n    margin: 0;\n}\n\n.fVSU6qOd25b2JTUNee4W > footer {\n    pointer-events: none;\n    position: absolute;\n    box-sizing: border-box;\n    left: 0;\n    width: 100%;\n    top: 0;\n    padding: 0 0.5em 1em 0.5em;\n    color: #000;\n    background: linear-gradient(to bottom, #ddd, #dddb, transparent);\n}\n\n.fVSU6qOd25b2JTUNee4W > div {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: grid;\n    place-items: center;\n    backdrop-filter: blur(8px) brightness(50%);\n    cursor: pointer;\n    z-index: 999999;\n    transition: opacity 0.3s;\n}\n\n.fVSU6qOd25b2JTUNee4W > div.x7IoGunuDK9GMfNE_T27 {\n    opacity: 0;\n    pointer-events: none;\n}\n\n.fVSU6qOd25b2JTUNee4W > div img {\n    margin: 0;\n    box-shadow: 0 6px 12px #000;\n    max-width: calc(100vw - 16px);\n    max-height: calc(100svh - 16px);\n}\n\n.fVSU6qOd25b2JTUNee4W > img {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.MqIVf4rZVbX4zP3o5C8s {\n    pointer-events: none;\n    transition: 0.3s opacity;\n}\n\n.EYsezBAEfjrj1oIU5BYH {\n    position: relative;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\n.EYsezBAEfjrj1oIU5BYH > img {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.EYsezBAEfjrj1oIU5BYH > img:first-child {\n    object-fit: cover;\n    filter: brightness(20%) blur(8px);\n}\n",""]),c.locals={Image:"fVSU6qOd25b2JTUNee4W",hide:"x7IoGunuDK9GMfNE_T27",Mini:"MqIVf4rZVbX4zP3o5C8s",fullscreen:"EYsezBAEfjrj1oIU5BYH"};const s=c},686:(n,e,t)=>{t.d(e,{A:()=>E});var r=t(4848),o=t(6540);const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TiiJVETsUcchQHcSCqIijVqEIFUqt0KqDyaVf0KQhSXFxFFwLDn4sVh1cnHV1cBUEwQ8QVxcnRRcp8X9JoUWMB8f9eHfvcfcOEOplppqBcUDVLCMVj4mZ7KrY+YoA+tGLMEYlZupzyWQCnuPrHj6+3kV5lve5P0ePkjMZ4BOJZ5luWMQbxNObls55nzjEipJCfE48ZtAFiR+5Lrv8xrngsMAzQ0Y6NU8cIhYLbSy3MSsaKvEUcURRNcoXMi4rnLc4q+Uqa96TvzCY01aWuU5zCHEsYglJiJBRRQllWIjSqpFiIkX7MQ//oONPkksmVwmMHAuoQIXk+MH/4He3Zn5ywk0KxoCOF9v+GAY6d4FGzba/j227cQL4n4ErreWv1IGZT9JrLS1yBPRtAxfXLU3eAy53gPCTLhmSI/lpCvk88H5G35QFBm6B7jW3t+Y+Th+ANHWVuAEODoGRAmWve7y7q723f880+/sBbfNypbh+NtkAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfnBBEOGR6xIa7RAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAAtJREFUCNdjYAACAAAFAAHiJgWbAAAAAElFTkSuQmCC";var c=t(5072),s=t.n(c),a=t(7825),l=t.n(a),u=t(7659),f=t.n(u),d=t(5056),p=t.n(d),h=t(540),A=t.n(h),m=t(1113),b=t.n(m),v=t(6063),g={};g.styleTagTransform=b(),g.setAttributes=p(),g.insert=f().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=A(),s()(v.A,g);const x=v.A&&v.A.locals?v.A.locals:void 0;var y=function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function c(n){try{a(r.next(n))}catch(n){i(n)}}function s(n){try{a(r.throw(n))}catch(n){i(n)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,s)}a((r=r.apply(n,e||[])).next())}))},j=function(n,e){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(a){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(c=0)),c;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,r=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){c=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){c.label=s[1];break}if(6===s[0]&&c.label<o[1]){c.label=o[1],o=s;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(s);break}o[2]&&c.ops.pop(),c.trys.pop();continue}s=e.call(n,c)}catch(n){s=[6,n],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},w=function(n,e){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var r,o,i=t.call(n),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(n){o={error:n}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return c},U=function(n){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};function E(n){var e=n.className,t=n.name,c=n.alt,s=n.size,a=void 0===s?[640,480]:s,l=n.onClick,u=n.children,f=o.useRef(null),d=function(n){var e=w(o.useState(!1),2),t=e[0],r=e[1];return o.useEffect((function(){if(n){var e=new IntersectionObserver((function(n){var e,t;try{for(var o=U(n),i=o.next();!i.done;i=o.next())if(i.value.isIntersecting){r(!0);break}}catch(n){e={error:n}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}}),{threshold:.01});return e.observe(n),function(){return e.unobserve(n)}}r(!1)}),[n]),t}(f.current),p=w(a,2),h=p[0],A=p[1],m=w(o.useState(!1),2),b=m[0],v=m[1],g=w(o.useState(!1),2),E=g[0],k=g[1],N=w(o.useState(!1),2),V=N[0],q=N[1],W=w(o.useState("webp"),2),B=W[0],C=W[1],I=document.location,J=I.protocol,T=I.host,F=I.pathname,O="".concat(J,"//").concat(T).concat(F,"images/"),Y="".concat(O).concat(t,".").concat(B),H="".concat(O).concat(t,".blur.").concat(B),M="".concat(O).concat(t,".mini.").concat(B),Q=function(){console.error("Unable to load image:",Y),"png"!==B&&C("png")};return(0,r.jsxs)("div",{ref:f,className:S(e,x.Image),style:{opacity:b?1:0,width:"min(100%, ".concat(h,"px)")},onClick:function(){if(l)l();else{q(!V);var n=f.current;if(!n)return;try{console.log("handleClick"),V?document.fullscreenElement&&document.exitFullscreen():function(n,e){void 0===e&&(e={navigationUI:"hide"}),y(this,void 0,void 0,(function(){return j(this,(function(t){switch(t.label){case 0:if(!n)return[2,!1];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,n.requestFullscreen(e)];case 2:return t.sent(),[2,!0];case 3:return t.sent(),[2,!1];case 4:return[2]}}))}))}(n)}catch(n){}}},children:[V&&(0,r.jsxs)("div",{className:x.fullscreen,children:[(0,r.jsx)("img",{src:Y}),(0,r.jsx)("img",{src:Y})]}),!V&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{position:"static",width:"100%",height:0,paddingTop:"".concat(100*A/h,"%")}}),(0,r.jsx)("img",{src:d?H:i,style:{filter:"blur(24px)"},alt:c,width:h,height:A,onError:Q,onLoad:function(){return v(!0)}}),d&&(0,r.jsx)("img",{className:x.Mini,src:M,style:{opacity:E?1:0},alt:c,width:h,height:A,onError:Q,onLoad:function(){return k(!0)}}),u&&(0,r.jsx)("footer",{children:u}),!l&&(0,r.jsx)("div",{className:S(V||x.hide),onClick:function(){return q(!1)},children:(0,r.jsx)("img",{src:Y,alt:c,onError:Q})})]})]})}function S(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return n.filter((function(n){return"string"==typeof n})).join(" ")}}}]);