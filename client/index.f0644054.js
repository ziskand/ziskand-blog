import{S as s,i as a,s as t,e as o,t as r,a as e,c,b as n,d as i,f as l,g as p,h as d,j as h,k as m,l as u,q as g,m as f,n as v,o as b,p as x,r as E,u as S}from"./client.18c43917.js";function w(s){const a=s-1;return a*a*a+1}function T(s,{delay:a=0,duration:t=400,easing:o=w}={}){const r=getComputedStyle(s),e=+r.opacity,c=parseFloat(r.height),n=parseFloat(r.paddingTop),i=parseFloat(r.paddingBottom),l=parseFloat(r.marginTop),p=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),h=parseFloat(r.borderBottomWidth);return{delay:a,duration:t,easing:o,css:s=>`overflow: hidden;opacity: ${Math.min(20*s,1)*e};height: ${s*c}px;padding-top: ${s*n}px;padding-bottom: ${s*i}px;margin-top: ${s*l}px;margin-bottom: ${s*p}px;border-top-width: ${s*d}px;border-bottom-width: ${s*h}px;`}}function y(s){let a,t,g,f,v,b,x,S;return{c(){a=o("div"),t=o("h2"),g=r("Great success!"),f=e(),v=o("img"),this.h()},l(s){a=c(s,"DIV",{class:!0});var o=n(a);t=c(o,"H2",{class:!0});var r=n(t);g=i(r,"Great success!"),r.forEach(l),f=p(o),v=c(o,"IMG",{class:!0,src:!0,alt:!0}),o.forEach(l),this.h()},h(){d(t,"class","text-7xl mb-10 uppercase font-bold"),d(v,"class","min-w-full"),v.src!==(b="great_success.jpeg")&&d(v,"src","great_success.jpeg"),d(v,"alt","wovaweewa!"),d(a,"class","text-center p-20")},m(s,o){h(s,a,o),m(a,t),m(t,g),m(a,f),m(a,v),S=!0},i(s){S||(s&&E((()=>{x||(x=u(a,T,{},!0)),x.run(1)})),S=!0)},o(s){s&&(x||(x=u(a,T,{},!1)),x.run(0)),S=!1},d(s){s&&l(a),s&&x&&x.end()}}}function $(s){let a,t,u,E,w,T,$,B,F,G,P,C,I,N,O,j,k,D,M,R,V,z,H,W,_,q,U,A,J,K,L,Q,X=s[0]&&y();return{c(){a=e(),t=o("div"),u=o("div"),E=o("h2"),w=r("My Personal Blog"),T=e(),$=o("p"),B=o("strong"),F=r("(work"),G=r("\n\t\t\tin\n\t\t\t"),P=o("strong"),C=r("progress...)"),I=e(),X&&X.c(),N=e(),O=o("button"),j=r("sucess button"),k=e(),D=o("div"),M=o("p"),R=r("(This blog is implemented with "),V=o("strong"),z=r("Sapper, PostCSS & Tailwind CSS"),H=e(),W=o("p"),_=r("inspiration and guidance recieved from amazing resource of "),q=o("strong"),U=r("https://codechips.me"),A=r(")"),J=e(),K=o("b"),this.h()},l(s){g('[data-svelte="svelte-3b63py"]',document.head).forEach(l),a=p(s),t=c(s,"DIV",{class:!0});var o=n(t);u=c(o,"DIV",{});var r=n(u);E=c(r,"H2",{class:!0});var e=n(E);w=i(e,"My Personal Blog"),e.forEach(l),T=p(r),$=c(r,"P",{class:!0});var d=n($);B=c(d,"STRONG",{});var h=n(B);F=i(h,"(work"),h.forEach(l),G=i(d,"\n\t\t\tin\n\t\t\t"),P=c(d,"STRONG",{});var m=n(P);C=i(m,"progress...)"),m.forEach(l),d.forEach(l),r.forEach(l),I=p(o),X&&X.l(o),N=p(o),O=c(o,"BUTTON",{class:!0});var f=n(O);j=i(f,"sucess button"),f.forEach(l),o.forEach(l),k=p(s),D=c(s,"DIV",{class:!0});var v=n(D);M=c(v,"P",{class:!0});var b=n(M);R=i(b,"(This blog is implemented with "),V=c(b,"STRONG",{});var x=n(V);z=i(x,"Sapper, PostCSS & Tailwind CSS"),x.forEach(l),b.forEach(l),H=p(v),W=c(v,"P",{});var S=n(W);_=i(S,"inspiration and guidance recieved from amazing resource of "),q=c(S,"STRONG",{});var y=n(q);U=i(y,"https://codechips.me"),y.forEach(l),A=i(S,")"),S.forEach(l),J=p(v),K=c(v,"B",{}),n(K).forEach(l),v.forEach(l),this.h()},h(){document.title="zisy on",d(E,"class","text-8xl font-semibold"),d($,"class","text-5xl mt-4"),d(O,"class","btn svelte-8gygfh"),d(t,"class","space-y-8"),d(M,"class","text-md"),d(D,"class","space-y-4 mt-5")},m(o,r){h(o,a,r),h(o,t,r),m(t,u),m(u,E),m(E,w),m(u,T),m(u,$),m($,B),m(B,F),m($,G),m($,P),m(P,C),m(t,I),X&&X.m(t,null),m(t,N),m(t,O),m(O,j),h(o,k,r),h(o,D,r),m(D,M),m(M,R),m(M,V),m(V,z),m(D,H),m(D,W),m(W,_),m(W,q),m(q,U),m(W,A),m(D,J),m(D,K),L||(Q=f(O,"click",s[1]),L=!0)},p(s,[a]){s[0]?X?1&a&&v(X,1):(X=y(),X.c(),v(X,1),X.m(t,N)):X&&(S(),b(X,1,1,(()=>{X=null})),x())},i(s){v(X)},o(s){b(X)},d(s){s&&l(a),s&&l(t),X&&X.d(),s&&l(k),s&&l(D),L=!1,Q()}}}function B(s,a,t){let o=!1;return[o,()=>t(0,o=!o)]}export default class extends s{constructor(s){super(),a(this,s,B,$,t,{})}}