import{u as r,N as b,s as m}from"./users-2d2ae9ba.js";import{x as p,e as v,K as f,o as y,m as e,q as l,v as s,u as c,H as g,D as _}from"./index-475d0110.js";const k={class:"page profile"},D=s("h1",{class:"page__title"},"Profile",-1),B={class:"page__content"},E={class:"ui-table"},w={key:1,class:"ui-table__no-user"},H={key:2,class:"ui-table__table"},I=s("thead",{class:"ui-table__thead"},[s("tr",{class:"ui-table__row"},[s("th",{class:"ui-table__th"},"ID"),s("th",{class:"ui-table__th"},"Avatar"),s("th",{class:"ui-table__th"},"Name"),s("th",{class:"ui-table__th"},"Email"),s("th",{class:"ui-table__th"},"Head")])],-1),N={class:"ui-table__tbody"},S={class:"ui-table__row"},x={class:"ui-table__td"},R={class:"ui-table__td"},T=["src","alt"],A={class:"ui-table__td"},P={class:"ui-table__td"},q={class:"ui-table__td"},O={__name:"UserProfile",setup(K){var u,d;const{fetchUserByID:i}=r(),{isLoading:h}=p(r()),a=v(null),n=(d=(u=f())==null?void 0:u.params)==null?void 0:d.id;return y(async()=>{const t=await i(n),o=t!=null&&t.head?await i(t==null?void 0:t.head):null;a.value={...t,head:o?o.name:b}}),(t,o)=>(e(),l("div",k,[D,s("main",B,[s("div",E,[c(h)?(e(),g(c(m),{key:0,class:"ui-spinner"})):a.value?(e(),l("table",H,[I,s("tbody",N,[s("tr",S,[s("td",x,_(c(n)),1),s("td",R,[s("img",{src:a.value.avatar,alt:a.value.name},null,8,T)]),s("td",A,_(a.value.name),1),s("td",P,_(a.value.email),1),s("td",q,_(a.value.head),1)])])])):(e(),l("span",w,"user not found"))])])]))}};export{O as default};