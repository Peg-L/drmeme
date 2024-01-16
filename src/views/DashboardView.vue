<template>
  <router-link to="/admin/products">後台產品列表</router-link> |
  <router-link to="/admin/orders">後台訂單列表</router-link> |
  <router-link to="/">回前台首頁</router-link> |
  <a href="#" @click.prevent="logout">登出</a>

  <hr />
  <div class="container">
    <router-view></router-view>
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
