import{S as G,i as L,s as w,k as g,q as J,a as j,l as v,m as k,r as N,h as _,c as E,n as d,b as D,G as u,B as I,M as S,I as y,N as M,J as b,K as V}from"../../../chunks/index-737b636c.js";function T(o,e,a){const n=o.slice();return n[8]=e[a],n[10]=a,n}function q(o){let e,a,n,h,s,f,t,l,p;function r(){return o[2](o[8])}function i(){return o[3](o[8])}return{c(){e=g("div"),a=g("img"),h=j(),s=g("img"),t=j(),this.h()},l(c){e=v(c,"DIV",{class:!0});var m=k(e);a=v(m,"IMG",{class:!0,src:!0,alt:!0}),h=E(m),s=v(m,"IMG",{class:!0,src:!0,alt:!0}),t=E(m),m.forEach(_),this.h()},h(){d(a,"class","front svelte-mnfpkn"),y(a.src,n=o[8].img)||d(a,"src",n),d(a,"alt",""),d(s,"class","back svelte-mnfpkn"),y(s.src,f="front.webp")||d(s,"src",f),d(s,"alt",""),d(e,"class","card svelte-mnfpkn"),M(e,"flipped",o[8].flipped)},m(c,m){D(c,e,m),u(e,a),u(e,h),u(e,s),u(e,t),l||(p=[b(e,"click",r),b(e,"keypress",i)],l=!0)},p(c,m){o=c,m&1&&!y(a.src,n=o[8].img)&&d(a,"src",n),m&1&&M(e,"flipped",o[8].flipped)},d(c){c&&_(e),l=!1,V(p)}}}function W(o){let e,a,n,h,s,f=o[0],t=[];for(let l=0;l<f.length;l+=1)t[l]=q(T(o,f,l));return{c(){e=g("main"),a=g("title"),n=J("Memory"),h=j(),s=g("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=v(l,"MAIN",{class:!0});var p=k(e);a=v(p,"TITLE",{});var r=k(a);n=N(r,"Memory"),r.forEach(_),h=E(p),s=v(p,"DIV",{class:!0});var i=k(s);for(let c=0;c<t.length;c+=1)t[c].l(i);i.forEach(_),p.forEach(_),this.h()},h(){d(s,"class","row svelte-mnfpkn"),d(e,"class","svelte-mnfpkn")},m(l,p){D(l,e,p),u(e,a),u(a,n),u(e,h),u(e,s);for(let r=0;r<t.length;r+=1)t[r].m(s,null)},p(l,[p]){if(p&3){f=l[0];let r;for(r=0;r<f.length;r+=1){const i=T(l,f,r);t[r]?t[r].p(i,p):(t[r]=q(i),t[r].c(),t[r].m(s,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=f.length}},i:I,o:I,d(l){l&&_(e),S(t,l)}}}function A(o,e,a){let n=[],h=["/notrick.gif","/Rollin.jpg","/jhon.jpg","/Otto.jpg","/WalterWhite.png","/DavieJhon.jpg","/Limie.jpg","/merran.jpg"];for(let i=0;i<8;i++)n.push({id:i,img:h[i],flipped:!1,completed:!1},{id:i+.5,img:h[i],flipped:!1,completed:!1});n=n.sort((i,c)=>.5-Math.random());let s=0,f,t;function l(i){!i.flipped&&s<2&&(i.flipped=!0,s==0?f=i.img:s==1&&(t=i.img),s+=1,s==2&&f==t?setTimeout(()=>{n.forEach(c=>{c.completed=c.flipped}),s=0,f="+",t="",a(0,n)},2e3):s==2&&setTimeout(()=>{n.forEach(c=>{c.flipped=c.completed}),s=0,f="",t="",a(0,n)},2e3),a(0,n))}return[n,l,i=>{l(i)},i=>{l(i)}]}class C extends G{constructor(e){super(),L(this,e,A,W,w,{})}}export{C as default};