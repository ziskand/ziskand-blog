import{S as t,i as s,s as e,e as l,t as a,c as r,b as o,d as n,f as h,h as c,j as f,k as i,v as u,a as g,q as p,g as d,w as m,x as v}from"./client.18c43917.js";function x(t,s,e){const l=t.slice();return l[1]=s[e],l}function k(t){let s,e,g,p,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),g=a(d),this.h()},l(t){s=r(t,"LI",{});var l=o(s);e=r(l,"A",{rel:!0,href:!0});var a=o(e);g=n(a,d),a.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",p="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,g)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(g,d),1&s&&p!==(p="blog/"+t[1].slug)&&c(e,"href",p)},d(t){t&&h(s)}}}function E(t){let s,e,u,E,b,j=t[0],w=[];for(let s=0;s<j.length;s+=1)w[s]=k(x(t,j,s));return{c(){s=g(),e=l("h1"),u=a("Recent posts"),E=g(),b=l("ul");for(let t=0;t<w.length;t+=1)w[t].c();this.h()},l(t){p('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=r(t,"H1",{class:!0});var l=o(e);u=n(l,"Recent posts"),l.forEach(h),E=d(t),b=r(t,"UL",{class:!0});var a=o(b);for(let t=0;t<w.length;t+=1)w[t].l(a);a.forEach(h),this.h()},h(){document.title="Blog",c(e,"class","dark:text-white"),c(b,"class","dark:text-gray-400 svelte-dkckuz")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,E,l),f(t,b,l);for(let t=0;t<w.length;t+=1)w[t].m(b,null)},p(t,[s]){if(1&s){let e;for(j=t[0],e=0;e<j.length;e+=1){const l=x(t,j,e);w[e]?w[e].p(l,s):(w[e]=k(l),w[e].c(),w[e].m(b,null))}for(;e<w.length;e+=1)w[e].d(1);w.length=j.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(E),t&&h(b),v(w,t)}}}function b(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function j(t,s,e){let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,j,E,e,{posts:0})}}export{b as preload};