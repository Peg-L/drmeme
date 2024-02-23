import{m as h,h as k,_ as C,o as n,c as i,b as t,w,v as P,i as m,j as r,F as c,f as v,t as l,r as u,a as _,k as N,l as y}from"./index-cff3c9f2.js";import{u as g}from"./productsStore-b9a26167.js";import{u as S}from"./cartStore-31ae1a8a.js";import{B}from"./BannerComponent-c80fe1e4.js";const L={data(){return{hasMarginTop:!1}},methods:{...h(g,["changeCategory"]),handleScroll(){this.hasMarginTop=window.scrollY>384}},computed:{...k(g,["categories","currentCategory"])},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}},T={class:"col d-md-none sticky-top"},M=t("option",{value:"",selected:""},"全部",-1),V=t("option",{value:"服飾"},"服飾",-1),E=t("option",{value:"配件飾品"},"配件飾品",-1),F=t("option",{value:"其他"},"其他",-1),D=[M,V,E,F],U={class:"d-none d-md-block col-3 sticky-top overflow-y-auto vh-100"},j={class:"h-100"},A=["onClick"];function z(o,a,f,b,d,$){return n(),i(c,null,[t("div",T,[w(t("select",{class:"form-select border border-primary-500 mb-3","aria-label":"Default select","onUpdate:modelValue":a[0]||(a[0]=s=>o.currentCategory=s),onChange:a[1]||(a[1]=m(s=>o.getProducts(o.currentCategory),["prevent"]))},D,544),[[P,o.currentCategory]])]),t("div",U,[t("div",j,[t("ul",{class:r(["list-group",{"mt-20":d.hasMarginTop}])},[(n(!0),i(c,null,v(o.categories,s=>(n(),i("li",{type:"button",key:s,onClick:m(e=>o.changeCategory(s),["prevent"]),class:r(["list-group-item list-group-item-action fw-bold products-list-sidebar rounded-1",{active:s===o.currentCategory}]),"aria-current":"true"},l(s),11,A))),128))],2)])])],64)}const Y=C(L,[["render",z]]);const q={data(){return{}},computed:{...k(g,["products","pageNum","pagination","followList"])},methods:{...h(g,["getProducts","toggleFollowProduct"]),...h(S,["addToCart"])},mounted(){this.getProducts()}},G={class:"col-md-9"},H={class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-6"},I={class:"position-relative"},J=["onClick"],K=["src","alt"],O={class:"card-body px-2"},Q={class:"card-title text-dark fw-bold"},R={class:"fs-5"},W={key:0,class:"text-secondary-500 me-2"},X={class:"p-1"},Z=["onClick"],x=t("i",{class:"fa-solid fa-cart-shopping"},null,-1),tt=t("span",{class:"ms-2"},"加入購物車",-1),ot=[x,tt],et={key:0,class:"row"},st={"aria-label":"Page navigation"},nt={class:"pagination justify-content-center pt-10"},it={class:"page-item"},at=t("span",{"aria-hidden":"true"},"«",-1),rt=[at],lt=["onClick"],ct=t("span",{"aria-hidden":"true"},"»",-1),dt=[ct];function pt(o,a,f,b,d,$){const s=u("router-link");return n(),i("div",G,[t("div",H,[(n(!0),i(c,null,v(o.products,e=>(n(),i("div",{class:"col",key:e.id},[_(s,{class:"card h-100 hover-dashed",to:`/product/${e.id}`},{default:N(()=>[t("div",I,[t("button",{onClick:m(p=>o.toggleFollowProduct(e.id),["prevent"]),class:"btn border-0 text-primary-500 position-absolute mt-2 top-0 end-0"},[t("i",{class:r([o.followList.includes(e.id)?"fa-solid":"fa-regular","fa-heart fa-2xl"])},null,2)],8,J),t("img",{src:e.imageUrl,class:"card-img-top aspect-ratio-item",alt:e.title},null,8,K)]),t("div",O,[t("h5",Q,l(e.title),1),t("p",R,[e.origin_price!==e.price?(n(),i("del",W,"NT$ "+l(e.origin_price),1)):y("",!0),t("span",null,"NT$ "+l(e.price),1)])]),t("div",X,[t("button",{type:"button",class:"btn btn-outline-primary-500 w-100 button-hover py-3 fs-5 fw-bold",onClick:m(p=>o.addToCart(e.id),["prevent"])},ot,8,Z)])]),_:2},1032,["to"])]))),128))]),o.pagination.total_pages>1?(n(),i("div",et,[t("nav",st,[t("ul",nt,[t("li",it,[t("button",{type:"button",class:r(["page-link",{disabled:!o.pagination.has_pre}]),"aria-label":"Previous",onClick:a[0]||(a[0]=e=>o.getProducts(o.pagination.current_page-1))},rt,2)]),(n(!0),i(c,null,v(o.pagination.total_pages,e=>(n(),i("li",{key:e,class:r(["page-item",{active:e==o.pagination.current_page}])},[t("button",{type:"button",class:"page-link",onClick:p=>o.getProducts(e)},l(e),9,lt)],2))),128)),t("li",null,[t("button",{type:"button",class:r(["page-link",{disabled:!o.pagination.has_next}]),"aria-label":"Next",onClick:a[1]||(a[1]=e=>o.getProducts(o.pagination.current_page+1))},dt,2)])])])])):y("",!0)])}const ut=C(q,[["render",pt]]),_t={components:{ProductslistComponent:ut,ProductsCategoryComponent:Y,BannerComponent:B},data(){return{imageName:"products-list-banner-3.png"}},methods:{}},mt={class:"container py-10 py-md-20",id:"products-block"},gt={class:"row"};function ht(o,a,f,b,d,$){const s=u("BannerComponent"),e=u("ProductsCategoryComponent"),p=u("ProductslistComponent");return n(),i(c,null,[_(s,{title:"限量周邊",subtitle:"Limited Edition Merch","image-name":d.imageName,"image-alt":"Anya wants this"},null,8,["image-name"]),t("div",mt,[t("div",gt,[_(e),_(p)])])],64)}const $t=C(_t,[["render",ht]]);export{$t as default};
