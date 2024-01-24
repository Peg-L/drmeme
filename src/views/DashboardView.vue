<template>
  <div class="wrapper d-flex">
    <!-- sidebar -->
    <ul class="navbar-nav bg-primary-500 bg-gradient sidebar">
      <router-link class="text-light py-6 fs-3" to="/admin/products"
        >後台產品列表</router-link
      >
      <router-link class="text-light py-6 fs-3" to="/admin/orders"
        >後台訂單列表</router-link
      >
      <router-link class="text-light py-6 fs-3" to="/">回前台首頁</router-link>
      <a class="text-light py-6 fs-3" href="#" @click.prevent="logout">登出</a>
    </ul>
    <!-- end of sidebar -->

    <!-- content wrapper -->
    <div class="content-wrapper container">
      <router-view></router-view>
    </div>
    <!-- end of content wrapper-->
  </div>
</template>
<script>
import axios from 'axios';
const { VITE_APP_URL } = import.meta.env;

export default {
  methods: {
    logout() {
      // 把 cookie 清除
      document.cookie = `drmemeToken=; expires=${new Date()};`;
      this.$router.push('/adminLogin');
    },
    checkAdmin() {
      console.log('checkAdmin');

      // 取出 Token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)drmemeToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      axios.defaults.headers.common.Authorization = token;

      const url = `${VITE_APP_URL}/v2/api/user/check`;
      axios
        .post(url)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/adminLogin');
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    this.checkAdmin();
  },
};
</script>
