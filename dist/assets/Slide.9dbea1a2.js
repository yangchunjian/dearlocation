import{f as s,v as u,k as a,x as m,h as t,C as c,y as r}from"./app.b91cbad5.js";const b=()=>t(r,{name:"back"},()=>t("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),l=()=>t(r,{name:"home"},()=>t("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var d=s({name:"SlidePage",setup(){const i=u(),e=a(!1),o=a(null),n=()=>{e.value=!1};return m(o,n),()=>t("div",{class:"presentation"},[t(c),t("div",{ref:o,class:["menu",{active:e.value}]},[t("button",{class:"menu-button",onClick:()=>{e.value=!e.value}},t("span",{class:"icon"})),t("button",{class:"back-button",onClick:()=>(n(),void window.history.go(-1))},t(b)),t("button",{class:"home-button",onClick:()=>(n(),void i.push("/"))},t(l))])])}});export{d as default};
