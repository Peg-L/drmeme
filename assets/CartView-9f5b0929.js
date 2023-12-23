import{_ as f,o as d,a as n,b as p,d as e,F as _,e as g,g as u,t as i,h as I,v as C}from"./index-17317806.js";const{VITE_APP_URL:l,VITE_APP_PATH:c}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"drmeme",BASE_URL:"/drmeme/",MODE:"production",DEV:!1,PROD:!0},v={data(){return{products:[],tempProduct:{},productId:"",cart:{},loadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getProducts(){this.$http.get(`${l}/v2/api/${c}/products`).then(t=>{this.products=t.data.products}).catch(t=>{alert(t.response.data.message)})},getCarts(){this.$http.get(`${l}/v2/api/${c}/cart`).then(t=>{this.cart=t.data.data}).catch(t=>{alert(t.response.data.message)})},updateCartItem(t){this.loadingItem=t.id;const o={product_id:t.product_id,qty:t.qty};this.$http.put(`${l}/v2/api/${c}/cart/${t.id}`,{data:o}).then(h=>{alert(h.data.message),this.loadingItem="",this.getCarts()}).catch(h=>{alert(h.response.data.message),this.loadingItem=""})},deleteAllCarts(){this.$http.delete(`${l}/v2/api/${c}/carts`).then(t=>{alert(t.data.message),this.getCarts()}).catch(t=>{alert(t.response.data.message)})},deleteCartItem(t){this.loadingItem=t.id,this.$http.delete(`${l}/v2/api/${c}/cart/${t.id}`).then(o=>{alert(o.data.message),this.loadingItem="",this.getCarts()}).catch(o=>{alert(o.response.data.message)})},createOrder(){this.$http.post(`${l}/v2/api/${c}/order`,{data:this.form}).then(t=>{alert(t.data.message),this.$refs.form.resetForm(),this.getCarts()}).catch(t=>{alert(t.response.data.message)})},isPhone(t){return/^(09)[0-9]{8}$/.test(t)?!0:"需要正確的電話號碼"}},mounted(){this.getCarts()}},x={class:"text-end"},$={class:"table align-middle"},b=e("thead",null,[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量/單位"),e("th",null,"單價")])],-1),y=["disabled","onClick"],P={key:0,class:"fas fa-spinner fa-pulse"},V={class:"input-group input-group-sm"},k=["onUpdate:modelValue","disabled","onChange"],A=["value"],E={class:"text-end"},T={key:0,class:"text-success"},D=e("td",{colspan:"3",class:"text-end"},"總計",-1),N={class:"text-end"},U={key:0},q=e("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),B={class:"text-end text-success"};function L(t,o,h,R,s,m){return d(),n(_,null,[p(" 這是購物車頁面 "),e("div",x,[e("table",$,[b,e("tbody",null,[s.cart.carts?(d(!0),n(_,{key:0},g(s.cart.carts,a=>(d(),n("tr",{key:a.id},[e("td",null,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:a.id===s.loadingItem,onClick:r=>m.deleteCartItem(a)},[s.loadingItem===a.id?(d(),n("i",P)):u("",!0),p(" x ")],8,y)]),e("td",null,i(a.product.title),1),e("td",null,[e("div",V,[I(e("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":r=>a.qty=r,disabled:a.id===s.loadingItem,onChange:r=>m.updateCartItem(a)},[(d(),n(_,null,g(20,r=>e("option",{value:r,key:`${r}12345`},i(r),9,A)),64))],40,k),[[C,a.qty]])])]),e("td",E,[s.cart.final_total!==s.cart.total?(d(),n("small",T,"折扣價：")):u("",!0),p(" "+i(a.final_total),1)])]))),128)):u("",!0)]),e("tfoot",null,[e("tr",null,[D,e("td",N,i(s.cart.total),1)]),s.cart.final_total!==s.cart.total?(d(),n("tr",U,[q,e("td",B,i(s.cart.final_total),1)])):u("",!0)])])])],64)}const F=f(v,[["render",L]]);export{F as default};