import{u as r,N as b,s as m}from"./spinner-13873142.js";import{s as p,v,K as f,b as y,o as e,c as l,a as s,u as c,d as g,t as _}from"./index-dd656316.js";const k={class:"page profile"},B=s("h1",{class:"page__title"},"Profile",-1),D={class:"page__content"},E={class:"ui-table"},w={key:1,class:"ui-table__no-user"},I={key:2,class:"ui-table__table"},N=s("thead",{class:"ui-table__thead"},[s("tr",{class:"ui-table__row"},[s("th",{class:"ui-table__th"},"ID"),s("th",{class:"ui-table__th"},"Avatar"),s("th",{class:"ui-table__th"},"Name"),s("th",{class:"ui-table__th"},"Email"),s("th",{class:"ui-table__th"},"Head")])],-1),S={class:"ui-table__tbody"},H={class:"ui-table__row"},R={class:"ui-table__td"},T={class:"ui-table__td"},x=["src","alt"],A={class:"ui-table__td"},P={class:"ui-table__td"},K={class:"ui-table__td"},U={__name:"UserProfile",setup(L){var u,d;const{fetchUserByID:i}=r(),{isLoading:h}=p(r()),a=v(null),n=(d=(u=f())==null?void 0:u.params)==null?void 0:d.id;return y(async()=>{const t=await i(n),o=t!=null&&t.head?await i(t==null?void 0:t.head):null;a.value={...t,head:o?o.name:b}}),(t,o)=>(e(),l("div",k,[B,s("main",D,[s("div",E,[c(h)?(e(),g(c(m),{key:0,class:"ui-spinner"})):a.value?(e(),l("table",I,[N,s("tbody",S,[s("tr",H,[s("td",R,_(c(n)),1),s("td",T,[s("img",{src:a.value.avatar,alt:a.value.name},null,8,x)]),s("td",A,_(a.value.name),1),s("td",P,_(a.value.email),1),s("td",K,_(a.value.head),1)])])])):(e(),l("span",w,"user not found"))])])]))}};export{U as default};
