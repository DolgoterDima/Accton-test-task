import{m as e,q as _,v as s,x as b,o as p,J as m,u as a,H as g,F as f,E as k,D as c,A as l,I as v}from"./index-475d0110.js";import{u as n,s as y}from"./users-2d2ae9ba.js";const x={"xml:space":"preserve",fill:"currentColor",viewBox:"0 0 442.04 442.04"},w=s("path",{d:"M221.02 341.304c-49.708 0-103.206-19.44-154.71-56.22-38.502-27.494-62.266-54.733-63.259-55.881a12.5 12.5 0 0 1 0-16.367c.993-1.146 24.756-28.387 63.259-55.881 51.505-36.777 105.003-56.219 154.71-56.219 49.708 0 103.207 19.441 154.71 56.219 38.502 27.494 62.266 54.734 63.259 55.881a12.5 12.5 0 0 1 0 16.367c-.993 1.146-24.756 28.387-63.259 55.881-51.503 36.779-105.001 56.22-154.71 56.22zM29.638 221.021c9.61 9.799 27.747 27.03 51.694 44.071 32.83 23.361 83.714 51.212 139.688 51.212s106.859-27.851 139.688-51.212c23.944-17.038 42.082-34.271 51.694-44.071-9.609-9.799-27.747-27.03-51.694-44.071-32.829-23.362-83.714-51.212-139.688-51.212s-106.858 27.85-139.688 51.212c-23.944 17.038-42.082 34.269-51.694 44.071z"},null,-1),$=s("path",{d:"M221.02 298.521c-42.734 0-77.5-34.767-77.5-77.5s34.766-77.5 77.5-77.5a77.436 77.436 0 0 1 51.048 19.188c5.193 4.549 5.715 12.446 1.166 17.639-4.549 5.193-12.447 5.714-17.639 1.166a52.448 52.448 0 0 0-34.576-12.993c-28.949 0-52.5 23.552-52.5 52.5s23.551 52.5 52.5 52.5c28.95 0 52.5-23.552 52.5-52.5 0-6.903 5.597-12.5 12.5-12.5s12.5 5.597 12.5 12.5c.002 42.733-34.765 77.5-77.499 77.5z"},null,-1),B=s("path",{d:"M221.02 246.021c-13.785 0-25-11.215-25-25s11.215-25 25-25c13.786 0 25 11.215 25 25s-11.214 25-25 25z"},null,-1),M=[w,$,B];function U(i,o){return e(),_("svg",x,M)}const z={render:U},A={class:"users-page page"},C=s("h1",{class:"page__title"},"All Users",-1),E={class:"page__content"},H={class:"ui-table"},I={key:1,class:"ui-table__no-users"},N={key:2,class:"ui-table__table"},S=s("thead",{class:"ui-table__thead"},[s("tr",{class:"ui-table__row"},[s("th",{class:"ui-table__th"},"Avatar"),s("th",{class:"ui-table__th"},"Name"),s("th",{class:"ui-table__th"},"Email"),s("th",{class:"ui-table__th"},"Head"),s("th",{class:"ui-table__th"},"Show more")])],-1),D={class:"ui-table__tbody"},F={class:"ui-table__td"},L=["src","alt"],V={class:"ui-table__td"},q={class:"ui-table__td"},J={class:"ui-table__td"},R={class:"ui-table__td"},O={__name:"AllUsers",setup(i){const{users:o,getUsersHead:r,isLoading:d}=b(n()),{fetchUsers:h}=n();return p(()=>{h()}),(T,j)=>{const u=m("router-link");return e(),_("div",A,[C,s("main",E,[s("div",H,[a(d)?(e(),g(a(y),{key:0,class:"ui-spinner"})):a(o).length===0?(e(),_("span",I,"users not found")):(e(),_("table",N,[S,s("tbody",D,[(e(!0),_(f,null,k(a(o),t=>(e(),_("tr",{key:t.id,class:"ui-table__row"},[s("td",F,[s("img",{src:t.avatar,alt:t.name,width:"31",height:"31"},null,8,L)]),s("td",V,c(t.name),1),s("td",q,c(t.email),1),s("td",J,c(a(r)(t)),1),s("td",R,[l(u,{to:`/users/${t.id}`},{default:v(()=>[l(a(z),{class:"ui-table__icon"})]),_:2},1032,["to"])])]))),128))])]))])])])}}};export{O as default};
