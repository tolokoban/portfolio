"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2681],{3399:(e,n,t)=>{t.d(n,{A:()=>p});var s=t(1601),r=t.n(s),i=t(6314),a=t.n(i),l=t(4417),o=t.n(l),d=new URL(t(8346),t.b),c=new URL(t(6459),t.b),h=a()(r()),x=o()(d),u=o()(c);h.push([e.id,`.JISd8UbdLGXIc53cpjZh {\n    width: 100%;\n    height: 100vh;\n    margin: 1em 0;\n    display: grid;\n    place-items: center;\n    background-image: url(${x});\n    background-image: url(${u});\n    background-repeat: repeat;\n}\n\n.JISd8UbdLGXIc53cpjZh > * {\n    padding: 2em;\n    background: #fff3;\n    backdrop-filter: blur(4px);\n    border-radius: 999vmax;\n}\n`,""]),h.locals={AntiSpoil:"JISd8UbdLGXIc53cpjZh"};const p=h},811:(e,n,t)=>{t.d(n,{A:()=>l});var s=t(1601),r=t.n(s),i=t(6314),a=t.n(i)()(r());a.push([e.id,".BMSTJaViwix56ZH5aFa1 {\n    width: 100%;\n    margin: 0.25em 0;\n}\n",""]),a.locals={CrossingBoats:"BMSTJaViwix56ZH5aFa1"};const l=a},2681:(e,n,t)=>{t.r(n),t.d(n,{default:()=>P});var s=t(4848),r=t(7369);function i(e){var n=e.fr,t=e.en,i=(0,r.v)();console.log("🚀 [Lang] lang = ",i);var a="fr"===i?n:null!=t?t:n;return(0,s.jsx)(a,{})}var a=t(5072),l=t.n(a),o=t(7825),d=t.n(o),c=t(7659),h=t.n(c),x=t(5056),u=t.n(x),p=t(540),m=t.n(p),j=t(1113),g=t.n(j),f=t(3399),v={};v.styleTagTransform=g(),v.setAttributes=u(),v.insert=h().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=m(),l()(f.A,v);const b=f.A&&f.A.locals?f.A.locals:void 0;function w(e){var n=e.className,t=e.children;return(0,s.jsx)("div",{className:A(n,b.AntiSpoil,"full-width"),children:t})}function A(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return"string"==typeof e})).join(" ")}var k=t(6540),M=t(811),y={};y.styleTagTransform=g(),y.setAttributes=u(),y.insert=h().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=m(),l()(M.A,y);const L=M.A&&M.A.locals?M.A.locals:void 0;var I=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],s=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},R=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var s,r,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(s=i.next()).done;)a.push(s.value)}catch(e){r={error:e}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return a};function E(e,n,t,s){var r=R(n,2),i=r[0],a=r[1];e.fillStyle="#000",e.beginPath(),e.ellipse(i,a,5,5,0,0,2*Math.PI),e.fill(),e.save(),e.lineWidth=1,e.strokeStyle="#000",e.setLineDash([2,2]),e.beginPath(),e.moveTo(i,a),e.lineTo(i,t),e.stroke(),e.font="16px sans-serif";var l="".concat((100*Math.abs(a-t)/s).toFixed(1),"%");e.fillText(l,i+16,a+4),e.restore()}function C(e,n){var t=R(e,2),s=R(t[0],2),r=s[0],i=s[1],a=R(t[1],2),l=a[0],o=a[1],d=R(n,2),c=R(d[0],2),h=c[0],x=c[1],u=R(d[1],2),p=u[0],m=l-r,j=o-i,g=p-h,f=u[1]-x,v=((x-i)*m*g+r*j*g-h*m*f)/(j*g-m*f);return v<r||v<h||v>l||v>p?null:[v,i+(v-r)*j/m]}function V(e){var n=e.className,t=e.speed,r=void 0===t?1:t,i=e.pause,a=void 0===i?0:i,l=e.tail,o=void 0===l?0:l,d=k.useRef(null);return k.useEffect((function(){var e=d.current;if(e){var n=function(e,n,t,s){return function(){window.requestAnimationFrame((function(){var r,i,a,l,o=e.getBoundingClientRect(),d=Math.ceil(.4*o.width);if(d===o.height){var c=o.width;e.width=c,e.height=d;var h=e.getContext("2d");if(!h)throw Error("Unable to create context 2D!");h.fillStyle="#adf",h.fillRect(0,0,c,d);var x=t*c/100;s>0&&(c-=s*c/100);var u=Math.floor(d/12),p=(c-x)/2,m=u,j=p,g=d-u,f=j+x,v=[[0,m],[j,g]],b=[[f,d-u],[f+p,u]];h.lineWidth=3,h.strokeStyle="#db0",h.beginPath(),h.moveTo(0,m),h.lineTo(j,g),h.lineTo(p+x,d-u),h.lineTo(c,u),h.stroke();var w=[],A=0;for(h.strokeStyle="#b50";A<c;){var k=A,M=d-u;h.beginPath(),h.moveTo(k,M);var y=A+=n*p,L=u;h.lineTo(y,L);var R=A+=x,V=u;h.lineTo(R,V);var S=A+=n*p,T=d-u;h.lineTo(S,T),A+=x,h.stroke(),w.push([[k,M],[y,L]],[[R,V],[S,T]])}var F=[u,d-u],B=0;try{for(var U=I(w),Q=U.next();!Q.done;Q=U.next())(W=C(v,Q.value))&&(E(h,W,F[B],d-2*u),B=1-B)}catch(e){r={error:e}}finally{try{Q&&!Q.done&&(i=U.return)&&i.call(U)}finally{if(r)throw r.error}}try{for(var D=I(w),P=D.next();!P.done;P=D.next()){var W;(W=C(b,P.value))&&(E(h,W,F[B],d-2*u),B=1-B)}}catch(e){a={error:e}}finally{try{P&&!P.done&&(l=D.return)&&l.call(D)}finally{if(a)throw a.error}}h.fillStyle="#567",h.fillRect(0,0,e.width,u),h.fillRect(0,d-u,e.width,u)}else e.style.height="".concat(d,"px")}))}}(e,r,a,o),t=new ResizeObserver(n);return t.observe(e),function(){return t.unobserve(e)}}}),[d.current,r,a]),(0,s.jsx)("canvas",{className:S(n,L.CrossingBoats),ref:d})}function S(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return"string"==typeof e})).join(" ")}function T(){return(0,s.jsx)("svg",{version:"1.1",viewBox:"-20 -20 240 140",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",children:(0,s.jsxs)("g",{style:{font:"bold 6px sans-serif"},textAnchor:"middle",dominantBaseline:"middle",strokeWidth:"1",strokeLinecap:"round",children:[(0,s.jsx)("rect",{x:"0",y:"0",width:"200",height:"100",fill:"#6af",stroke:"#48d"}),(0,s.jsxs)("g",{fill:"#fff4",stroke:"none",children:[(0,s.jsx)("path",{d:"M0,0L69.2,0L41,41Z"}),(0,s.jsx)("path",{d:"M100,100h40L123,78Z"}),(0,s.jsx)("path",{d:"M0,100h100L41,41Z",fill:"#0004"})]}),(0,s.jsxs)("g",{stroke:"#000",fill:"none",children:[(0,s.jsx)("path",{d:"M0,0L100,100L200,0",stroke:"#000"}),(0,s.jsx)("path",{d:"M0,100L69.2,0L138.5,100",stroke:"#000"})]}),(0,s.jsxs)("g",{strokeWidth:"0.5",stroke:"#f90",fill:"none",children:[(0,s.jsx)("path",{d:"M0,-5H69.2M0,-7v4M69.2,-7v4"}),(0,s.jsx)("path",{d:"M0,105H100M0,103v4M100,103v4"}),(0,s.jsx)("path",{d:"M41,0V41M39,0h4M39,41h4"}),(0,s.jsx)("path",{d:"M123,77v22M121,77h4M121,100h4"}),(0,s.jsx)("path",{d:"M100,105h40M100,103v4M140,103v4"})]}),(0,s.jsxs)("g",{fill:"#000",stroke:"none",children:[(0,s.jsx)("text",{x:"34.6",y:"-10",children:"V"}),(0,s.jsx)("text",{x:"50",y:"110",children:"1"}),(0,s.jsx)("text",{x:"0",y:"0",transform:"translate(35,20) rotate(-90)",children:"720"}),(0,s.jsx)("text",{x:"0",y:"0",transform:"translate(118,92) rotate(-90)",children:"400"}),(0,s.jsx)("text",{x:"120",y:"110",children:"2V - 1"})]})]})})}function F(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Les deux ferries"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Deux ferries partent en même temps de chaque rive d'un large bras de mer.\nIls se croisent à ",(0,s.jsx)(n.strong,{children:"720 mètres"})," de la rive la plus proche.\nQuand ils arrivent sur la rive opposé, ils font chacun une pause de 10 minutes\npour les passager, puis ils repartent en sens inverse.\nIls se croisent alors à ",(0,s.jsx)(n.strong,{children:"400 mètres"})," de l'autre rive."]}),"\n",(0,s.jsx)(n.p,{children:"Quelle est la largeur de ce bras de mer ?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cette énigme de Sam Loyd a été publiée par son fils en 1914."}),"\n",(0,s.jsx)(n.p,{children:"Il s'agit de trouver la solution la plus simple/astucieuse."}),"\n",(0,s.jsx)(w,{children:(0,s.jsx)(n.p,{children:"Faites défiler pour voir une façon de résoudre le problème."})}),"\n",(0,s.jsx)(n.h2,{children:"Étude préliminaire"}),"\n",(0,s.jsx)(n.p,{children:"Pour commencer, voyons ce qui se passe si les deux ferries vont à la même vitesse.\nPour cela, on utilise un diagramme temporel en deux dimensions :\nle temps en abscisse et la distance en ordonnée."}),"\n",(0,s.jsx)(V,{speed:1,pause:10}),"\n",(0,s.jsxs)(n.p,{children:["On voit que les bateaux se croisent exactement au milieu de la riviere.\nAussi bien a l'aller qu'au retour.\nOn en deduit que les bateaux ne vont pas a la meme vitesse puisque ils se croisent\na 720 metres puis a 400 metres.\nOn va donc supposer que le prenier bateau va a une vitesse 1 et le second a une\nvitesse ",(0,s.jsx)(n.code,{children:"1 / V"})," avec ",(0,s.jsx)(n.code,{children:"0 < V < 1"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Maintenant, regardons comment le temps de pause influence le probleme."}),"\n",(0,s.jsx)(V,{speed:2/3,pause:10}),"\n",(0,s.jsx)(V,{speed:2/3,pause:5,tail:5}),"\n",(0,s.jsx)(V,{speed:2/3,tail:10}),"\n",(0,s.jsx)(n.p,{children:"En fait, comme la pause est la meme pour les deux bateaux, il semble qu'on puisse\njuste translater la partie retour et ne rien changer au croisement."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Mais attention"}),"!",(0,s.jsx)(n.br,{}),"\n","Cela ne fonctionne plus si le deuxieme bateau recroise le premier avant meme d'avoir\npu traverser la riviere. Et cela arrive si ",(0,s.jsx)(n.code,{children:"V <= 1/2"}),"."]}),"\n",(0,s.jsx)(V,{speed:1/3,pause:10}),"\n",(0,s.jsx)(V,{speed:1/3,pause:5,tail:5}),"\n",(0,s.jsxs)(n.h2,{children:["Cas simple : ",(0,s.jsx)(n.code,{children:"1/2 < V < 1"})]}),"\n",(0,s.jsx)(n.p,{children:"Dans ce cas, on a vu que l'on peut ignorer les temps de pause.\nAlors notre problème peut être représenté par ce schéma :"}),"\n",(0,s.jsx)(T,{}),"\n",(0,s.jsx)(n.p,{children:"Les deux triangles clairs sont semblables puisqu'il ont deux angles\nde même mesure. On en déduit donc l'égalité suivante :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"720×(2V - 1) = 400×V <=> V = 9 / 13\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"V"})," est bien compris entre 1/2 et 1, donc on est bien dans le cas simple."]}),"\n",(0,s.jsxs)(n.p,{children:["Il ne nous reste qu'à trouver la hauteur (",(0,s.jsx)(n.code,{children:"h"}),") du triangle sombre.\nPuisqu'il est semblable aux deux triangles clairs, on en déduit :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"V×h = 720 <=> h = 1040\n"})}),"\n",(0,s.jsxs)(n.p,{children:["La largeur de la rivière est donc de ",(0,s.jsx)(n.code,{children:"1040 + 720 = "})," ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"1760"})," mètres"]}),"."]}),"\n",(0,s.jsx)(n.h2,{children:"Une solution plus simple"}),"\n",(0,s.jsx)(n.p,{children:"La solution précédente nous faisait calculer la vitesse relative des deux bateaux.\nMais cette information n;est pas demandée dans l'énigme.\nOn doit donc peut-être pouvoir s'en passer."}),"\n",(0,s.jsx)(n.p,{children:"Imaginons une variante du problème dans laquelle quand les bateaux se croisent\nils repartent en arrière. Un peu comme s'ils rebondissaient l'un sur l'autre."}),"\n",(0,s.jsx)(n.p,{children:"Voici les diagrammes temporels des deux variantes du problème :"}),"\n",(0,s.jsx)("svg",{version:"1.1",viewBox:"0 0 123 105",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",children:(0,s.jsxs)("g",{strokeWidth:"1",strokeLinecap:"round",children:[(0,s.jsxs)("g",{children:[(0,s.jsx)("rect",{x:"0",y:"0",width:"200",height:"50",fill:"#247",stroke:"#247"}),(0,s.jsxs)("g",{stroke:"#000",fill:"none",children:[(0,s.jsx)("path",{d:"M0,0L41,20.5L82,0L123,20.5",stroke:"#f80"}),(0,s.jsx)("path",{d:"M0,50L41,20.5L82,50L123,20.5",stroke:"#0f8"})]})]}),(0,s.jsxs)("g",{transform:"translate(0,55)",children:[(0,s.jsx)("rect",{x:"0",y:"0",width:"200",height:"50",fill:"#247",stroke:"#247"}),(0,s.jsxs)("g",{stroke:"#000",fill:"none",children:[(0,s.jsx)("path",{d:"M0,0L100,50L200,0",stroke:"#f80"}),(0,s.jsx)("path",{d:"M0,50L69.2,0L138.5,50",stroke:"#0f8"})]})]})]})}),"\n",(0,s.jsxs)(n.p,{children:["On voit maintenant que lors du second croisement, le bateau orange\na parcouru trois fois la distance entre sa berge et le point de rencontre,\nsoit ",(0,s.jsx)(n.code,{children:"3 * 720 = 2160"})," mètres."]}),"\n",(0,s.jsx)(n.p,{children:"Et on sait d'après l'énoncé du problème que lors de cette deuxième rencontre,\nle bateau orange a traversé complètement la rivière et a encore avancé de\n400 mètres."}),"\n",(0,s.jsxs)(n.p,{children:["La largeur de la rivière est donc de ",(0,s.jsx)(n.code,{children:"2160 - 400 = 1760"})," mètres."]})]})}function B(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(F,{...e})}):F(e)}function U(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"The two ferries"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Two ferries leave at the same time from each bank of a wide arm of the sea.\nThey intersect at ",(0,s.jsx)(n.strong,{children:"720 meters"})," from the nearest bank.\nWhen they arrive on the opposite bank, they each take a 10-minute break\nfor the passengers, then they leave in the opposite direction.\nThey then meet at ",(0,s.jsx)(n.strong,{children:"400 meters"})," from the other bank."]}),"\n",(0,s.jsx)(n.p,{children:"How wide is this arm of the sea?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This riddle by Sam Loyd was published by his son in 1914."}),"\n",(0,s.jsx)(n.p,{children:"It's about finding the simplest/cleverest solution."}),"\n",(0,s.jsx)(w,{children:"Scroll down to see a way to fix the problem."}),"\n",(0,s.jsx)(n.h2,{children:"Preliminary study"}),"\n",(0,s.jsx)(n.p,{children:"To start, let's see what happens if both ferries are going at the same speed.\nTo do this, we use a two-dimensional time diagram:\nthe time on the abscissa and the distance on the ordinate."}),"\n",(0,s.jsx)(V,{speed:1,pause:10}),"\n",(0,s.jsxs)(n.p,{children:["We see that the boats cross exactly in the middle of the river.\nBoth outward and return.\nWe deduce that the boats are not going at the same speed since they cross\nat 720 meters then at 400 meters.\nWe will therefore assume that the first boat is going at a speed of 1 and the second at a\nspeed ",(0,s.jsx)(n.code,{children:"1 / V"})," with ",(0,s.jsx)(n.code,{children:"0 < V < 1"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Now, let's look at how the pause time influences the problem."}),"\n",(0,s.jsx)(V,{speed:2/3,pause:10}),"\n",(0,s.jsx)(V,{speed:2/3,pause:5,tail:5}),"\n",(0,s.jsx)(V,{speed:2/3,tail:10}),"\n",(0,s.jsx)(n.p,{children:"In fact, as the break is the same for both boats, it seems that we can\njust translate the return part and don't change anything at the intersection."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"But beware"}),"!\nThis no longer works if the second boat passes the first again before even having\nwas able to cross the river. And this happens if ",(0,s.jsx)(n.code,{children:"V <= 1/2"}),"."]}),"\n",(0,s.jsx)(V,{speed:1/3,pause:10}),"\n",(0,s.jsx)(V,{speed:1/3,pause:5,tail:5}),"\n",(0,s.jsxs)(n.h2,{children:["Simple case: ",(0,s.jsx)(n.code,{children:"1/2 < V < 1"})]}),"\n",(0,s.jsx)(n.p,{children:"In this case, we have seen that the pause times can be ignored.\nSo our problem can be represented by this diagram:"}),"\n",(0,s.jsx)(T,{}),"\n",(0,s.jsx)(n.p,{children:"The two light triangles are similar since they have two angles\nof the same measure. We therefore deduce the following equality:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"720×(2V - 1) = 400×V <=> V = 9 / 13\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"V"})," is between 1/2 and 1, so we are in the simple case."]}),"\n",(0,s.jsxs)(n.p,{children:["We just need to find the height (",(0,s.jsx)(n.code,{children:"h"}),") of the dark triangle.\nSince it is similar to the two clear triangles, we deduce:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"V×h = 720 <=> h = 1040\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The width of the river is therefore ",(0,s.jsx)(n.code,{children:"1040 + 720 = "})," ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"1760"})," meters"]}),"."]}),"\n",(0,s.jsx)(n.h2,{children:"A simpler solution"}),"\n",(0,s.jsx)(n.p,{children:"The previous solution had us calculate the relative speed of the two boats.\nBut this information is not requested in the puzzle.\nSo maybe we can get away with it."}),"\n",(0,s.jsx)(n.p,{children:"Imagine a variant of the problem in which when the boats pass each other\nthey go back. Kind of like they were bouncing off each other."}),"\n",(0,s.jsx)(n.p,{children:"Here are the time diagrams of the two variants of the problem:"}),"\n",(0,s.jsx)("svg",{version:"1.1",viewBox:"0 0 123 105",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",children:(0,s.jsxs)("g",{strokeWidth:"1",strokeLinecap:"round",children:[(0,s.jsxs)("g",{children:[(0,s.jsx)("rect",{x:"0",y:"0",width:"200",height:"50",fill:"#247",stroke:"#247"}),(0,s.jsxs)("g",{stroke:"#000",fill:"none",children:[(0,s.jsx)("path",{d:"M0,0L41,20.5L82,0L123,20.5",stroke:"#f80"}),(0,s.jsx)("path",{d:"M0,50L41,20.5L82,50L123,20.5",stroke:"#0f8"})]})]}),(0,s.jsxs)("g",{transform:"translate(0,55)",children:[(0,s.jsx)("rect",{x:"0",y:"0",width:"200",height:"50",fill:"#247",stroke:"#247"}),(0,s.jsxs)("g",{stroke:"#000",fill:"none",children:[(0,s.jsx)("path",{d:"M0,0L100,50L200,0",stroke:"#f80"}),(0,s.jsx)("path",{d:"M0,50L69.2,0L138.5,50",stroke:"#0f8"})]})]})]})}),"\n",(0,s.jsxs)(n.p,{children:["We now see that during the second crossing, the orange boat\ntraveled three times the distance between its bank and the meeting point,\ni.e. ",(0,s.jsx)(n.code,{children:"3 * 720 = 2160"})," meters."]}),"\n",(0,s.jsx)(n.p,{children:"And we know from the statement of the problem that during this second meeting,\nthe orange boat crossed the river completely and advanced further\n400 meters."}),"\n",(0,s.jsxs)(n.p,{children:["The width of the river is therefore ",(0,s.jsx)(n.code,{children:"2160 - 400 = 1760"})," meters."]})]})}function Q(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(U,{...e})}):U(e)}function D(e){return e.className,(0,s.jsx)(i,{fr:B,en:Q})}function P(e){return e.params,(0,s.jsx)(D,{})}},8346:(e,n,t)=>{e.exports=t.p+"img/back.636e7d863bd4462e1a28.png"},6459:e=>{e.exports="data:image/webp;base64,UklGRqwbAABXRUJQVlA4TJ8bAAAv/8A/EOpQHIBshP3HbtDrHxETIBsmZ7WQYOObqDxyV4hgDkzclZAWxkwpMm7AukQ3QIMdkMQomIE/2Pd9ke8za9h9QPkg2jJRsWP/v2pLynhO3fXue3XGsO+9ew+l95lEIxGz7nPPfavX2/97DmR/XCNexABaYiRyaR0AEVMga9lTqAmQuVZ8kWm4OxUV2ZkDXmFFTcTbE8CZQGUd0R4R6hQcaq27OmLtCAZA7hK5S2axa9hRdXbRATixO9TBBsBiBEQO1SNAR+AQ0R5u3F1C17CGQneMu16sRoDFRA7v5rhMgMilclwG0WGv9VaHN+oeALlr+CKc/wBwh7UkJpIkSZI+QdFJF5wiJ8L/yFDUXBFJVSWutDQDdCzN2k/miNKijGJWcLcRJUru62e0osyjfc6qHUiylcaaCieGxImHuK6vLMi227bZ67wZWA3pAAi4/Npttv+ypCifX52u/sfVcZRKfX5Zc7qquNTv/O2fRBDEgQhizM/EGhMbs8x/EBMAZpsnBmyC6Ai4B4FFFIRwv08QY/58PEQAmG2hEwQBYI55AsCcAAhhgiAIhNUxjDoK7hYRtIX+EilgEkBbqIKYCLDaPDGgiYAAUMeAJpCOAZHD/dJBYP7NvVkbRVurEwQRrNVaa4NYrbtrrlZinLaRoB5DGP89LFPLcU07UhtJkv7TpiYPszTFkA8LmqRoZkma+DQDSZIMR2Ots22bkNhIUiS5lvcYG7IOvnTq/5flNnymsp2EQkjtuXOv33t/1lrmvnP+/t/+XwaEuhBIeRGoykJhTx4CV+5CQKXXVpWACEGqQDKQrAz25AdCGHJcPgw5AjHlQAoCAUk1ILJhSDUgVF4EqQTC5SBwJSCDIFiEIPvKYroQEBB1IeDygjCNnDMgAmJKgQgQg4CkSJIj6T9OFkkOUWQRo1fetKgP7cMNso2k9F5fgTGcNANJkgxnY42zbdvnyI0kRfLQCZahKqcfoAFM/L2tEP8kxIcQCUYiRNxPQvzxOCbSAyGmKQlx570gqgtLyvKxPCxK9RTLbyyJqipLF1lOFqo+K/7eSUpC/ApRRAmRCfFFKY+TRQjREglxRIXKN8lw44oHqixBrCjfdFnexI5EvUa85QjxTakQq+7wOEnZbYR4UCrEElWmfLOMgUUqi11RvkmHG2dk2YYb0G94L/QlIiGu/L1BhBBdIX4o5XHCMt6L9VFDiKFSxSVjuSNLoyxaiiyxKksf2fGu7t1Wz5UQO6I+EZtFCDFoUoPHEWW8l2pQcxwqzUGcsrDNEFkiZXFTXN37oL4jRN2ghng+wwghqgY1RWyvTMQuU+rfsFrDDY0dT2SpWCDLlVh8Frywafl20RqCTqhCMZcQn0S8vfoIIcYp9fL35mWiPTPRbEIEqDbDjTH2LIRlTZcPY2QptDWElrAGsxHtWYmEeAkRlQkxT2k870UQccPzEC2Iiq3u3UzxkKWdsjhTG24c5Zu4NcYAYQuHiG1S6hWiXybEmkiIN++FEXFcL6Xi+UxVK98OWIYYDlmO0zGVb/raGmOMcBGWYPBefpPS6SpGG7NhSIhJSk0ex0fVGW4wdhyx/+ckskzFJWiPMYNwE+Zg3EaIJ5EQNxEbhIQ4EwlxKhNiT9TP341Ref4zSSH0O9qe7hIQHsKkwUxCbFPqE88nD32JaPkQ7wUmEC2OAFK+yYcbU0osobbItpzwEoZwrNyglLdXjsjbC81D6cdDvBfvo/RiCCHlm+D0/m6bnHSJ0IdDPJ+Yt9dNJMTlU/j28dS4b0jE1o3yC4DIcMPSv3/UoqLMaarhTOL5tER9c+FcfdQUohcS7WmIeoXIQSguYfmmVP2sRVXYE6EOiIgdNii9Ha67l8YLkSIKEc5GxNvrEM8nBKF8ExWXpNUXmoAIZyKUAeHvTfuJjv2pcU3a9Iax/HQkns8Oxi23XO3vD6wUgTaEj5BrQNOTys2RTRLtOaKjjgaPE4Gw2t8fAKf89wsqRZA5EdKQHKVB6cHWPaEhYrchIQ5E4/m7GVZ/Ps+JEIVEPJ8k8mDRHk/EjviX/wRRxEb9RItjDCA4KRGCMyDwYIFHFngEKh/cG11pEO0JG5QK0cSB/ZQILj+JIImcEvlL5CO3CVVEbFU59xAieBJR78g4QMiQCBY/iTCJ/LSW2wpV+HvjCUQTHhYa2Uu0+KfiwAjpc34S8eu6LrcpVJU3Rv+34XHAj4gavL1ijAOEDpmg8pNIKJGvlsg7yM6VGddHdN7llhPtMU2iL4nnE8eCT5F3+Ukkr2uJPGW+U1QW0Z6JqPnxnTSJmkKMMBZMkAmcn0SaupbIFXgAdXgc2SRKiSj9pxBBPCDsaK7zk8iotUR2hfh7wyelRETNs4v2QIwFxsAYDQHzk8iqtURmVJgrzpamjQlCTG6I8cAYbNESILtPSeTQWiI9qsw0vFf1Xt5LfxQxJhgjDcrhdALYBR5YIrfWEqkxKWKMZzg5lF3gQZ6m6xIxicGYktBddn6BBx+u6xJJEoMxPcHYxi/w8Ab00ldNDMasBGMLv8BDDOgBiQSJwZgHGJv5BR5hXQ9IxEsM3SUGjI38Ao+4rodLhCcGO2WAsZ5f4JHXtUReEqGJwUm5wFjLL/AotH6aREhicNIAxip+gUdd17s4c2J4GDBW8As8Oq3PnRycjICxjF/g0Wv9X4mAxOBkBowl/AKPUet9JAcnK2As5Bd4zFrLwoqJoSg78Bm/wGPRWp5rrj4nvlJOfDWd+Gq86+2FTFU4AGM2v8Bj01puG6sOYdjZWzt7/5MnvmpEIoAx4U+r/AKPXWu5zVYdwrSzd0vVb2IypvELPA6t5bau6hBmnb3ryc7ed+IrTyQCWXSWX+Bxai23NVWHMA8g/LnIEYnAcszGBL8g+zXVsovcVlUjk2l30To/WXpPVeS2suoQFgHRRbZIBCXF5jv+rvMudF1uM1WHsCT8wmT6fJExdEbIbXk1ijL9mmK7w+57EnnoutyWJoZXEMffs5MIDsltSVU2nhOJ4CMSDuVfhZcd5La4+oh9kH3gPGe/KfBA3ZDboqpDWIEtt4AJn8/tQyLb4SpI5Cu3hYnRIBTAJh+JDFpLZCp7XDc+FXg4G479u7wKEEY+ErFa7yLwgBVFbpMREil+9tajx31jCgz5SCSq6+EvqShBdlkmS9MBPXDVahp3wnQbIDR8tnx8XQ+y5xHRXYcS0cN1fQpwyFJWRQ7a9bVioLuucMRHIuBSWsvSJdoYkKUeoiz1f6b1Li5XPfMusI7BmjqXpUV4vWnLkTJcIg5KxD231lOAlyzV8b/uMAAIMaMguxv+RXtl5Gx39uUt/7euB+6F1cVFgUgzYIPRDd+q9f9eXbN38z7CH6eT5wLVtO5G+IK5KBRpHMGaun6FRL76aOXfLH155L66Xloi1V+xyrgokpk6i7yp6yA7PLzuHv3vyNHo+EBZCrCaECYjLkokermJiaCx3s4ge13v1l+4Zb3rRse/YlUhjAmfMBelEhmji95m9ZKndZsr/1a+sNuN3WXVowXgokxm6i5yp44l0m12eyv/lnZd9xeJQKwyhAHhA+aiXGbqLubrvB678t3ubvP1rttb+W4IlSn6UgwYBrCi/mbTO+CiUqJvU2z6zLc0yN7V9fHr+lCoTNGXKFx9MfBhIFUkb22Ai2qRqTvEds6dOd2FrkvkLZHHVZUpLQMM7Az8GPgyoBRx0Qq4qJHImAvwl93ePVwff+N/VaboS9YcAzcDUBEXLYCLOom6S7hUdmOfbr2Lzd4JlSlmW5xjhQYV+RBwUS+RbSlQhZVfkB0c/cyoTDEbZ6VvVytc9VRx0Qgs5xglclIA5TBrSBMDjXMMXIXdgCovAnnXJJGTGihKHxI+O2Tg4RwDFaryNyCbXoSm7k4fNCEpLdNtV2OAK+OiGpgThjJTd07KkBSuLs4xcKAyLioMhHcJ7nkF7nsC6jhZFjjJAsIAZeDNwN+xglHnS8OEMBJg3UlYpygb4CQKCAOlcycpXKXquCgGFkcSuuzKoXNC61NnTjyv7b5o+36edQysqM71hl4CfXWvNnUGJ5aPMUmY10Qr+gra1jEQK/SuYUqYSbBN2JwQf+pssezkRPOxLalCo6IVsw3OMvA6r0IuciMCYS7B4bgocc2YKzE7kR62wTJNRXFFK2ZDrPRpHQMzKuQiKyLtSNAnHFVYigJ8CCLHfM6XQTl2gkVjIHLWsUKokouMEcK6SqgqTA3B9L4KU2ycII+VkYrGwOIsA8/CVaR033FCImyIUJQ8D2tSR2PPRbe28QnBEK20jJzEOgZGVMlFMiEStkWwk5nH3YX4Ujf+v91lSg7mohWzZc4y8GVAK+UiHmCEXRG6Cx5nO4UehAQ49nwibZYpUtEKV3drC1efpWVIKRfRHkY4ELLTnK74Uye3e/0/sY2IVrjKWOFjXWnZiEq5iCxghCMZzqUq3EWRnk9aX+pgfnCkojFQONvms2u1XAQmMMKZDI/mtOdNXTzWg2AOdmVj4HR28AKKez4HCJcyzM9j0Ptdc+zrug/L1Kloxbx4rfxoxQgvAOFGZdRLyEXRelMHvq7zedts2Qq7lc66WVUjPAKEeyGK4iRUoepNHcR0dTlj6ub3shWuHtZOZACptgUQnoSwE24xI8Cerrun67pCiFT83mNQNcI1sPG1yqgDpF97x1zJ15b/4z5vDMvGQO6sY4VUOcI5MHMRFIIQJgx7x1xp+8vYVg9UNgZ2a09yAuUIx4aFi7CUXqMGbVFwz5grM11imyjT/phsfHZyEmtHo3KEfUP/lQqpMi1I5eCpqq4m/L28GjW7KRufPXHWnUk9wq4hLOfgUnwCVGFc1nVNKIdxyY3ZUGUrLVucZeDDgKvedkRYTsnmJM7xFbrRoLm2vOt6+qBeYls1virbq7dn7QgGAIid1zHvMppk0/Z830VC26tjgJAuslMC2Jaq6sdlOjbnsi3krGPAAtl5u9TTbupDngAuKtrtNhn8q/oW0tI156O2TL7KxkBfHnQC2Xm31NNvei8k4Mt2HzlXQVetQoG0qro+O28bEm4Ra0/CShEAg/lg4jpgSz3jBoQ9Q2jziv4DTFVHyLZJVduKZktlK/riNWsvjWpcuJJxxmA+G2ypZ96AcAtsXGhTUbyEdm1RWyaittG/2puq0ituqq62H20tPs67QJO8awYG86kbTGCEC22TE9xG/LdoNte9XKZBhWOli7VtBjw1CDsGZNNdk+UcPUBcQ8MqdEAkbLXebzOZj9JE12bNz8L9f9DawVFq5C2RTb+AbTdwUWXYIAxq8lZs6DfbdZiQD48SodftTNh2hGPAbyucc+atzADC3Ut19xtmZ2uy6QEgPB+3vPo0AaZb+bH++XxLfrfdOlbIla01bgFpMB+n7ummnef1BYy4Mm25qhAitnvNxkYu02Ubk46Bzdp24aqr7rRhDxDXPJgPqnGRHTHdbBiDx8F8rLY93wIrs7cnybZehSstgxOtHVS210w1m84Nsb7b4CItIRHWqginhj7vItp2rQDnDwh2zt9IV/Tlt60dg+rkXXQGzL6qchELiITN6ufjPrC/nAO07jAjTw/S+R3pitlKZx0DRmW3CUcGy1tR087Tpep7oAdOafv1CDBo0pZKx0pXa9vLqnR2DmTTZ96iWqkZ7GJDBmFbgKIEANA8Jd2oQWu3t16lHc+m/diw33S+PtbMW4WBuM5smgqwP0ZEmSaVjgGnZm1p2Y5K5S20ASyyaV5xABxUPAhk0yNCyAgx2uaCN8lZx2dvVK+3RRjh6njN84b9r2s9mIP5xTA+5hDQnAXv9iE+u1Jsj/AITM+sIRwa5mvuNaSlnjoIT02HR91FgsfAaW2Nz05Vdz2bNgLshto8bLH2PfgQmORdCAQnyAlzwvcfvILQvfok1jLwQNXyFjgAwicjJxKmd6temANbGpcp+vIioy7lyVsym76B/T3VzYB0q+rnAfa7NxV9Zc46BmoAvf/AkO5VPZ4g/rWSQA1nvKmYzVoYS653LwDC63pl4JG3fNW81QLEtWfT2JtY6WFtjQEGofsXDUY4UT2AZdOJ5i2cTR9ANt2qt/DZwdQZdQ6OgiDvwg8Ci04JZ2aHa0/eBvPz1F/FZ8c1nlGzdjSCSN7lJNih/suwpS8ZwlJP4TF8dlSDAemsY4UBhp8PgLC9HbFxfC1AeM27gMeU/ndYgwETKlw1CCM7PXD+t4D52g+geF49puiL1P3qttYVdpPd7DxGtcmmU0MknCywuDciXvaZwlX0dW3NsfbbCqVluHAVKPbpHFhMMD009EfjxCMDjyw7V4gexgD64O7/02s7jkVfMKqYjRWuMlSdywk2RZgDN+oY8Yczj7w98p8769W5wutZy56Elb6L2Ux350y7mXWUlvnFbCMrHVG549MGQwywvJWME3+48MifMR5Z9LCaq5WWmUqnr7ziOomBV42BFtXntgUAMyQXaePEH65CHml6uDHC2cLVT2lZVIHP7rWtY2AKsdKk5iauhAByLo4AMxehceIPlx75NS2PFD3cU1ZaO2tPsnAUn1066xjoEBkQJ3FtVmgRgrwF/2AA7H0dJ/5wnZnWenr6eNki1roRDNAIPnsc2W/2ixHOMXDtDkEkb/EJMG5P1R8etoxHfjzS6/FdRjVr3aX/X8b/mwkxkOAnnTsJAwECyaUIpN2x4g+PMwXw0c5at/myYrY6tNBCNecejVAcTwA7MVb84UnII90e96wNOWvb1w0VrnbOthce7dzzWAGCkXeBbLoxEJcxmA8YK/7wLDMe+fZI3vOdZYCMsNYOsgJFZIXR2vaktm0zECLCeVsnDFXHij/cZMYjXx7JFPS2cFXUrHVjRuENrK29zbl1YozHH15mxiOfHklUdJeBylnbZiDDDYVO4tqlZTrO+cNro8izWGG31k58xqWtbTu31tfFOX94Y4xHPjwSK+lv4So/Sflda7XWufYkjHP+8C4zYz0SqenwhdvWtgette4Ur451/nBrzNhDqzFqjLPWlZWWWYx1/vDBGI88PRIo6jErpYM2khqfPYh3/vDJGI88PBKq6vL62hFrfV2884fPxgyptXdkAGV9ZoXFlZ0J450/fDGmI2NDZU4w0VrrnhHz/OGbMXnHqrDTFw5tD2OeP3w3Ju+YFRo1aG1pWRf3uj7zMCbvGFX2unBVTRzBZ2dxL3fWaUzeMSjt9jN2hTFvCx55GZN39JjkOfRYY/KONtnNbrK8o050m5tssryjTHQeSUN5h1mD3o0WM1nekSW+vCNNdHPPa7K8I0l0HumE8o446Usr74gS3TtmMFneESa7eU0r79AJX5LelWZYPaC08g6Z6DzSL0v8Rt4hEr90rikS39A5RdI3ZvCHB4luPTOY1ldj0uNQG/FZikvBMq/u2xtOeMVlzLJDFZ+N8s1huLE/M9nv8sWz5Zsb4HHX9mMRC2e5i8sV8LzjRbGIxWJ5issJ8LrDx2IRS8LyFpc91HXHGUwr71CxiKVOxWUDdt0xLrFMLF9xWQE2bSyaxeIyA3zdJRb9wHLF4jKCet1xsZhcd38jxOLSA1wuChOPA68oRABKcamnVFxagPcd7BkkHoeK9gybfuM3ISkunZiKSw2wf4B0u5SavJcHatYV0/8B77tZDqQ3EhHvFUNSXBYsfyguKVAdGXBIrRvqvgsh1kQp7yUgKS5bmxaXCIGmI+MyJu8oQBJik1Iv70UhKS5H64tLAFXnmqfJtgb1O3AYD8pNxnIqVEPn3I25exwq33s3lkNy7jzvsJU6VwBIhNiHNgNJ+fbTWDbJfRcHqdC5guTOwqAAK+Xb0XDjZvlZFrH84aMxecdSwSPzjQDTD6mwkGD7cvvujMk7tih/OPDIwSMltPJRSKtuwVh6WVaYu7tzp5npyDiiuj7T98g1xrDIZCytsNGmR9a5s2glf3hhzJBaV0cGisidVS/hkWF8NVj0aO8Lm23/2CO7LVSeu688d7rCEi2PTPzhMLbuwmJHYymFzbann7fy79h+Ks+de6RumWGjY6uw+NFYcmFXDm48cu9cgbv5uCOTP13mkTYzBx8dW+9mia7Akspyt4ObLHdWFR1lfbUV/bgLQ+eksxvjkRnGllNmLLEsnStQ7qzGmMVeGuEP92eIftyRzhVxy7ReCmrcDazBUlhkCRRWOleYzJjjfLfMH87nNTPsC/HIubMWY2b/NMbWXd63yOIKs98ljMk+sYWQP5xONq1FI/uvzZBaFkGVFFa5weJlBRaPVDMYM++eEBHHmtavEL+TmRk6MmSMzTu3LF6n0JI7q8uMWbHrM2loG6blkRGusA1jlvgyrO8/BthdWEaLLIY4XZ9JVjQmy501dH0mQPyxyVbBl85gsk9gjDlv8RsFlz/mznob0xqGuFeTDUOPbDMz75WAAdZgWY3lZdEUXjpXFC1j5l0UP5FlHll5JBxrjEduW4C27girzC3tCDR0TuiRc2bMEnMfNTMH/lXLZLmzUnjrzn2QykwmvNESxpgfr9LKLn7xzEzuXMGAeWMKy8QSi1CIyZ0VTDYm88hlBnOO2Y3xyAmBEWIJT6cgs8q8xmQts0TLtE4NjRALor4DALKwxMJkWn/urLJljDHzZmZI5eNo0Fw/jUfY9Zlw+iyUGZM7yyI0QsxT6p0GjpO9BbH/b2DXZ6IPZMaYGcZ25BLgCDGLTdj1mXinIY/sr4TgCDEN8V5OPML35846ssm5sxTQfQe8lwto1xHLLRp2ruAemS66foCEGEPk2RJiFOLv7cPxpo/dt0FNETuA5ci3Vm5Qg8cRiU6IMsTjKEBHjoKHCTFoJr1flr/vzkQnRLdJDR4nSnRCdHop5XFiWHZ9S4g8xOMkgB42sulPjf93LagnSl7G4+SwdL51xfGU8jgGlt98S4gkxOMUgOZdXtZPxONUsOz4lhBRP6WAnOw9TIh400Q8TgMLi2psQvrBiwfRnpvSSgc79gPUKC5dlowFNq07xxMNyjeN2Tkv4nEuIh6njbrepkm0Z72JEv8OLM3JJt80GG7U6aIX8fe+iHicLuoAfSTasykabc9C+WbQsO8Ut+tYwHx6wovEWyelFS7SJBF7VrXbMHxbvsnq+66Rxax7IMyPvYj3Ool4nD6K95IN4r0GRVb3DtixpFraeN6YO9pK7MjVV27zXt5r473i7lUU3itspLxXg4qyunc7hPK99VruIrI4NeXbRd+v7p3JIbLXxN+bTR0idp6mvFeBqrIRy7eP9dzNvTWre28SS6fesjxRKmK7lXivqxuiPZZS3itR5rU03HjKtxvV3JVdqlrdu2LHPT3jL99OqcHjBJVE7Kty3CFEIMSdmupOIH4x3Fjjvqrqgdm56gvCMiR29Oov43q7nWuuRMTj1BUzEKVXIG9P4R+V3Kn9XjHc8MJ0uKE85lPzEPE4c+W4u5t5xy+bSnegvjmJxeVQyR3bxTW7k3RaW6MA"}}]);