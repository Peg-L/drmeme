<template>
  <div class="wrapper d-flex p-6">
    <!-- sidebar -->
    <ul class="navbar-nav sidebar">
      <h1 class="fs-5 fw-bold">Dr.Meme Dashboard</h1>
      <router-link
        class="text-dark py-5 px-4 fs-6 sidebar-item mt-6"
        :class="{ active: this.$route.path === '/admin/home' }"
        to="/admin/home"
      >
        <span class="me-4 p-2 sidebar-icon"
          ><i class="fa-solid fa-gauge"></i></span
        >數據儀錶板
      </router-link>
      <router-link
        class="text-dark py-5 px-4 fs-6 sidebar-item mt-6"
        to="/admin/products"
      >
        <span class="me-4 p-2 sidebar-icon"
          ><i class="fa-solid fa-cart-shopping"></i></span
        >商品管理
      </router-link>
      <router-link
        class="text-dark py-5 px-4 fs-6 sidebar-item mt-6"
        to="/admin/orders"
        ><span class="me-4 p-2 sidebar-icon"
          ><i class="fa-solid fa-list"></i></span
        >訂單管理</router-link
      >
      <router-link
        class="text-dark py-5 px-4 fs-6 sidebar-item mt-6"
        to="/admin/articles"
        ><span class="me-4 p-2 sidebar-icon"
          ><i class="fa-solid fa-pen-to-square"></i></span
        >文章管理</router-link
      >
      <router-link class="text-dark py-5 px-4 fs-6 sidebar-item mt-6" to="/"
        ><span class="me-4 p-2 sidebar-icon"
          ><i class="fa-solid fa-house"></i></span
        >回前台</router-link
      >
      <a
        class="text-dark py-5 px-4 fs-6 sidebar-item mt-6"
        href="#"
        @click.prevent="logout"
        ><span class="me-4 p-2 sidebar-icon"
          ><i class="fa-solid fa-right-from-bracket"></i></span
        >登出</a
      >
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

      const url = `${VITE_APP_URL}/api/user/check`;
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
<style lang="scss">
@import '../assets/SCSS/all.scss';

.sidebar {
  width: 350px;
}

.sidebar-item {
  border-radius: 8px;

  &.active {
    box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);

    span {
      background-color: $primary-500;

      i {
        color: $light;
      }
    }
  }

  &:hover {
    .sidebar-icon {
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);
    }
  }
}

.sidebar-icon {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}
</style>
