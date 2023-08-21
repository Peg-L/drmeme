<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container d-flex justify-content-between align-items-center">
      <h1>
        <a class="navbar-brand d-block" href="#">Dr. Meme</a>
      </h1>
      <div>
        <input type="checkbox" id="menu-toggle" />
        <label
          for="menu-toggle"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </label>
      </div>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav my-10 my-lg-0 ms-auto d-flex align-items-center">
          <li class="nav-item">
            <a class="nav-link fs-5 fw-bold" aria-current="page" href="#"
              >精選文章</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5 fw-bold" aria-current="page" href="#"
              >限量週邊</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5 fw-bold" aria-current="page" href="#"
              >常見問答</a
            >
          </li>
          <li class="nav-item">
            <a class="btn btn-follow fs-5 fw-bold" aria-current="page" href="#"
              >追蹤IG</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 這是前台頁面
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/products">產品列表</router-link> |
  <router-link to="/cart">購物車</router-link> |
  <router-link to="/admin/products">後台產品列表</router-link>
  <hr /> -->
  <!-- <RouterView></RouterView> -->
</template>

<script>
// import { RouterView } from 'vue-router'

export default {
  components: {
    // RouterView
  }
}
</script>
