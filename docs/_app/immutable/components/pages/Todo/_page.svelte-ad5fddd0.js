import{S as G,i as H,s as K,k as T,q as A,a as b,e as U,l as S,m as E,r as J,h as g,c as y,n as m,b as O,G as u,I as q,J as L,K as R,B,L as w,M as F,N as D,u as z}from"../../../chunks/index-3452682b.js";function V(n,e,a){const s=n.slice();return s[7]=e[a],s[8]=e,s[9]=a,s}function C(n){let e,a,s,c=n[7].inputText+"",f,k,d,v,r,h,_;function I(){n[5].call(a,n[8],n[9])}function j(){return n[6](n[7])}return{c(){e=T("div"),a=T("input"),s=T("span"),f=A(c),k=b(),d=T("button"),v=A("\xD7"),r=b(),this.h()},l(p){e=S(p,"DIV",{class:!0});var l=E(e);a=S(l,"INPUT",{type:!0,class:!0}),s=S(l,"SPAN",{class:!0});var t=E(s);f=J(t,c),t.forEach(g),k=y(l),d=S(l,"BUTTON",{class:!0});var i=E(d);v=J(i,"\xD7"),i.forEach(g),r=y(l),l.forEach(g),this.h()},h(){m(a,"type","checkbox"),m(a,"class","svelte-1vuajgk"),m(s,"class","svelte-1vuajgk"),m(d,"class","svelte-1vuajgk"),m(e,"class","listElements svelte-1vuajgk"),D(e,"done",n[7].done)},m(p,l){O(p,e,l),u(e,a),a.checked=n[7].done,u(e,s),u(s,f),u(e,k),u(e,d),u(d,v),u(e,r),h||(_=[L(a,"change",I),L(d,"click",j)],h=!0)},p(p,l){n=p,l&1&&(a.checked=n[7].done),l&1&&c!==(c=n[7].inputText+"")&&z(f,c),l&1&&D(e,"done",n[7].done)},d(p){p&&g(e),h=!1,F(_)}}}function Q(n){let e,a,s,c,f,k,d,v,r,h,_,I,j,p=n[0],l=[];for(let t=0;t<p.length;t+=1)l[t]=C(V(n,p,t));return{c(){e=T("div"),a=T("title"),s=A("Todo App"),c=b(),f=T("h1"),k=A("Todo App"),d=b(),v=T("form"),r=T("input"),h=b();for(let t=0;t<l.length;t+=1)l[t].c();_=U(),this.h()},l(t){e=S(t,"DIV",{class:!0});var i=E(e);a=S(i,"TITLE",{});var o=E(a);s=J(o,"Todo App"),o.forEach(g),c=y(i),f=S(i,"H1",{class:!0});var N=E(f);k=J(N,"Todo App"),N.forEach(g),d=y(i),v=S(i,"FORM",{});var M=E(v);r=S(M,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),M.forEach(g),i.forEach(g),h=y(t);for(let P=0;P<l.length;P+=1)l[P].l(t);_=U(),this.h()},h(){m(f,"class","svelte-1vuajgk"),m(r,"id","inputText"),m(r,"type","text"),m(r,"placeholder","Enter a thing Todo"),m(r,"class","svelte-1vuajgk"),m(e,"class","Top svelte-1vuajgk")},m(t,i){O(t,e,i),u(e,a),u(a,s),u(e,c),u(e,f),u(f,k),u(e,d),u(e,v),u(v,r),q(r,n[1]),O(t,h,i);for(let o=0;o<l.length;o+=1)l[o].m(t,i);O(t,_,i),I||(j=[L(r,"input",n[4]),L(v,"submit",R(n[2]))],I=!0)},p(t,[i]){if(i&2&&r.value!==t[1]&&q(r,t[1]),i&9){p=t[0];let o;for(o=0;o<p.length;o+=1){const N=V(t,p,o);l[o]?l[o].p(N,i):(l[o]=C(N),l[o].c(),l[o].m(_.parentNode,_))}for(;o<l.length;o+=1)l[o].d(1);l.length=p.length}},i:B,o:B,d(t){t&&g(e),t&&g(h),w(l,t),t&&g(_),I=!1,F(j)}}}function W(n,e,a){let s=JSON.parse(localStorage.getItem("list"));(s=null)&&(s=[]);let c="";function f(){a(0,s=[...s,{id:Math.random(),inputText:c,done:!1}]),localStorage.setItem("list",JSON.stringify(s)),a(1,c="")}function k(h){a(0,s=s.filter(_=>_.id!=h.id)),localStorage.setItem("list",JSON.stringify(s))}onbeforeunload=function(){localStorage.setItem("list",JSON.stringify(s))};function d(){c=this.value,a(1,c)}function v(h,_){h[_].done=this.checked,a(0,s)}return[s,c,f,k,d,v,h=>k(h)]}class Y extends G{constructor(e){super(),H(this,e,W,Q,K,{})}}export{Y as default};