import{g as A}from"./getDate-a6a896d2.js";import{_ as T,j as v,m as x,c as a,a as t,t as r,d as c,F as d,k as _,u as P,w as u,g as f,b as p,r as y,o as l}from"./index-c34ecdd2.js";import{u as g}from"./articleStore-8f78cb0a.js";const{VITE_APP_URL:w,VITE_APP_PATH:E}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"drmeme",VITE_APP_SPOTIFY_CLIENT_ID:"6ae98659652a4d86a9c6ca300f595a21",VITE_APP_SPOTIFY_CLIENT_SECRET:"08d3edfa0ca14a7382d7b286ac6b13c3",BASE_URL:"/drmeme/",MODE:"production",DEV:!1,PROD:!0},V={data(){return{currentIndex:0,article:{}}},mixins:[A],methods:{...v(g,["getArticles"]),findIndex(){this.currentIndex=this.articles.findIndex(s=>s.id===this.article.id)},getArticle(){const{id:s}=this.$route.params;this.$http.get(`${w}/api/${E}/article/${s}`).then(o=>{this.article=o.data.article,this.findIndex()})}},computed:{...x(g,["articles","article"]),allTags(){const s=this.articles.reduce((h,e)=>h.concat(e.tag),[]),o=new Set(s);return Array.from(o)},fiveArticles(){return this.articles.slice(0,5)}},watch:{"$route.params":{immediate:!0,handler(){this.$route.params.id&&this.getArticle()}}},mounted(){this.getArticle(),this.getArticles()}},k={class:"container py-10 py-md-20"},b={class:"row"},L={class:"col-md-8"},S={class:"fs-3 fw-bold"},D={class:"mt-4"},R={class:"text-secondary-300"},C=t("i",{class:"fa-solid fa-user me-1"},null,-1),N={class:"text-secondary-300 ms-3"},B=t("i",{class:"fa-solid fa-calendar-days me-1"},null,-1),F=t("i",{class:"fa-solid fa-tag me-1"},null,-1),H=["src","alt"],O=["innerHTML"],j=t("hr",null,null,-1),M={class:"row justify-content-between"},U={class:"col-6"},Y=t("i",{class:"fa-solid fa-arrow-left me-2"},null,-1),q=t("br",null,null,-1),z={key:0,class:"col-6"},G={class:"text-end"},J=t("br",null,null,-1),K=t("i",{class:"fa-solid fa-arrow-right ms-2"},null,-1),Q={class:"col-md-4"},W={class:"ps-lg-20 pt-lg-10"},X=t("h2",{class:"fs-5 fw-bold mt-10 mt-md-0"},"標籤",-1),Z={class:"mt-4"},$=t("i",{class:"fa-solid fa-tag"},null,-1),tt=t("h2",{class:"fs-5 fw-bold mt-md-10 mt-4"},"最新文章",-1);function et(s,o,I,h,e,m){const n=y("RouterLink");return l(),a("div",k,[t("div",b,[t("div",L,[t("h1",S,r(e.article.title),1),t("div",D,[t("span",R,[C,c(r(e.article.author),1)]),t("span",N,[B,c(r(s.getDate(e.article.create_at)),1)]),(l(!0),a(d,null,_(e.article.tag,i=>(l(),a("span",{class:"text-secondary-300 ms-3",key:i},[F,c(r(i),1)]))),128))]),t("img",{class:"w-100 mt-4 rounded-3",src:e.article.image,alt:e.article.title},null,8,H),t("div",{class:"mt-4 p-6",innerHTML:e.article.content},null,8,O),j,t("div",M,[t("div",U,[s.articles[e.currentIndex-1]?(l(),P(n,{key:0,to:`/articles/${s.articles[e.currentIndex-1].id}`,class:"d-flex align-items-center"},{default:u(()=>[Y,t("div",null,[c(" 上一篇："),q,c(" "+r(s.articles[e.currentIndex-1].title),1)])]),_:1},8,["to"])):f("",!0)]),s.articles[e.currentIndex+1]?(l(),a("div",z,[p(n,{to:`/articles/${s.articles[e.currentIndex+1].id}`,class:"d-flex align-items-center justify-content-end"},{default:u(()=>[t("div",G,[c(" 下一篇："),J,c(" "+r(s.articles[e.currentIndex+1].title),1)]),K]),_:1},8,["to"])])):f("",!0)])]),t("div",Q,[t("div",W,[X,t("div",Z,[(l(!0),a(d,null,_(m.allTags,i=>(l(),a("a",{class:"text-secondary-700 me-3",key:i},[$,c(r(i),1)]))),128))]),tt,(l(!0),a(d,null,_(m.fiveArticles,i=>(l(),a("div",{key:i.id,class:"mt-2"},[p(n,{to:`/articles/${i.id}`,class:"fw-bold"},{default:u(()=>[c(r(i.title),1)]),_:2},1032,["to"])]))),128))])])])])}const lt=T(V,[["render",et]]);export{lt as default};
