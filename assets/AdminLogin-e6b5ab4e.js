import{_ as m,c,a as e,y as _,h as d,v as l,o as u}from"./index-567739fb.js";const p="/drmeme/assets/logo-6ed8e20a.png";const{VITE_APP_URL:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"drmeme",VITE_APP_SPOTIFY_CLIENT_ID:"6ae98659652a4d86a9c6ca300f595a21",VITE_APP_SPOTIFY_CLIENT_SECRET:"08d3edfa0ca14a7382d7b286ac6b13c3",VITE_CLOUD_NAME:"dabraxbag",VITE_UPLOAD_PRESET:"ml_default",BASE_URL:"/drmeme/",MODE:"production",DEV:!1,PROD:!0},h={data(){return{user:{username:"",password:""}}},methods:{login(){const n=`${f}/admin/signin`;this.$http.post(n,this.user).then(s=>{const{token:r,expired:a}=s.data;console.log("token & expired：",r,a),document.cookie=`drmemeToken=${r}; expires=${new Date(a)};`,this.$router.push("/admin/home")}).catch(s=>{alert(s.response.data.message)})}}},g={class:"container"},E={class:"row my-10"},P=e("div",{class:"d-flex flex-column align-items-center"},[e("img",{style:{width:"200px"},src:p,alt:"Dr.Meme"}),e("h2",{class:"fs-4 mt-2"},"Dr. Meme 的斜槓人生"),e("h1",{class:"fs-2 fw-bold mt-3"},"管理員登入")],-1),T={class:"form-floating mb-3"},b=e("label",{for:"username"},"帳號",-1),w={class:"form-floating"},x=e("label",{for:"password"},"密碼",-1),v=e("button",{class:"btn btn-lg btn-primary-500 text-light fw-bold w-100 mt-3",type:"submit"}," 登入 ",-1);function I(n,s,r,a,t,i){return u(),c("div",g,[e("div",E,[P,e("form",{class:"form-signin",onSubmit:s[2]||(s[2]=_((...o)=>i.login&&i.login(...o),["prevent"]))},[e("div",T,[d(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>t.user.username=o),id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[l,t.user.username]]),b]),e("div",w,[d(e("input",{type:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=o=>t.user.password=o),id:"password",placeholder:"Password",required:""},null,512),[[l,t.user.password]]),x]),v],32)])])}const V=m(h,[["render",I]]);export{V as default};