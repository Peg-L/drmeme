<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg bg-dark fixed-top">
    <div class="container d-flex justify-content-between align-items-center">
      <h1>
        <router-link to="/" class="navbar-brand d-block">Dr. Meme</router-link>
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
          <span class="navbar-toggler-hamburger"></span>
        </label>
      </div>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav my-10 my-lg-0 ms-auto d-flex align-items-center">
          <li class="nav-item">
            <router-link
              to="/articles"
              class="nav-link fs-5 fw-bold py-3"
              aria-current="page"
              >精選文章</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/products"
              class="nav-link fs-5 fw-bold py-3"
              aria-current="page"
              >限量週邊</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/faq"
              class="nav-link fs-5 fw-bold py-3"
              aria-current="page"
              >常見問答</router-link
            >
          </li>
          <li v-if="isFollowBtnVisible" class="nav-item">
            <a
              class="btn btn-follow fs-5 fw-bold py-3"
              aria-current="page"
              href="https://www.instagram.com/doctormeme_tw/"
              target="_blank"
              >追蹤 IG</a
            >
          </li>
          <template v-else>
            <li class="nav-item">
              <router-link
                to="/followlist"
                class="nav-link fs-5 fw-bold py-3"
                aria-current="page"
                ><i class="fa-solid fa-heart"></i
              ></router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/cart"
                class="nav-link fs-5 fw-bold py-3"
                aria-current="page"
                ><i class="fa-solid fa-cart-shopping"></i
              ></router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
  <div class="mt-14 mt-lg-17"><router-view></router-view></div>
  <footer class="footer bg-dark py-14">
    <div
      class="container d-flex flex-column flex-md-row justify-content-between align-items-center"
    >
      <div>
        <h1>
          <router-link to="/" class="navbar-brand d-block fs-2"
            >Dr. Meme</router-link
          >
        </h1>
        <p class="text-secondary-700 fs-sm mt-1 d-none d-md-block">
          Copyright © 2020 Dr.Meme All Rights Reserved.
        </p>
      </div>
      <div
        class="d-flex flex-column align-items-center align-items-md-end mt-7 mt-md-0 container"
      >
        <ul class="d-flex flex-column flex-md-row gap-5 list-unstyled">
          <li>
            <router-link
              to="/articles"
              class="nav-link fs-5"
              aria-current="page"
              >精選文章</router-link
            >
          </li>
          <li>
            <router-link
              to="/products"
              class="nav-link fs-5"
              aria-current="page"
              >限量週邊</router-link
            >
          </li>
          <li>
            <router-link to="/faq" class="nav-link fs-5" aria-current="page"
              >常見問答</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="nav-link fs-5" aria-current="page"
              >聯絡 Dr.Meme</router-link
            >
          </li>
          <li>
            <router-link to="/adminLogin" class="nav-link fs-5"
              >後台管理</router-link
            >
          </li>
        </ul>
        <ul class="mt-5 list-unstyled row gx-10 gy-5 justify-content-center">
          <li class="col-5 col-md-3">
            <a
              class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
              href="https://podcasts.apple.com/tw/podcast/dr-meme/id1522408497"
              target="_blank"
              ><i class="fa-solid fa-podcast fs-2"></i>
              <div class="mt-1">Apple Podcasts</div></a
            >
          </li>
          <li class="col-5 col-md-3">
            <a
              class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
              href="https://open.spotify.com/show/4gm4BSePy7Xoi08Nd8KH87"
              target="_blank"
              ><i class="fa-brands fa-spotify fs-2"></i
              ><span class="mt-1">Spotify</span></a
            >
          </li>
          <li class="col-5 col-md-3">
            <a
              class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
              href="https://www.instagram.com/memedical_slashie/"
              target="_blank"
              ><i class="fa-brands fa-instagram fs-2"></i>
              <span class="mt-1 text-nowrap">斜槓人生</span></a
            >
          </li>
          <li class="col-5 col-md-3">
            <a
              class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
              href="https://www.instagram.com/doctormeme_tw/"
              target="_blank"
              ><i class="fa-brands fa-instagram fs-2"></i
              ><span class="mt-1 text-nowrap">醫學迷因</span></a
            >
          </li>
        </ul>
      </div>
      <p class="text-secondary-700 fs-sm mt-10 mt-md-1 d-md-none">
        Copyright © 2020 Dr.Meme All Rights Reserved.
      </p>
    </div>
  </footer>

  <!-- backToTop 按鈕 -->
  <button
    type="button"
    class="rounded-circle border-0 bg-primary-500 bg-gradient text-light button-backtotop"
    style="width: 50px; height: 50px"
  >
    <i class="fa-solid fa-arrow-up fa-xl"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {
    isFollowBtnVisible() {
      return !(
        this.$route.path === '/products' ||
        this.$route.path === '/cart' ||
        this.$route.path === '/followlist'
      );
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import '../assets/SCSS/all.scss';
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';

h1 {
  a {
    font-family: 'Iceberg';
  }
}

.navbar-brand,
.nav-link {
  color: $light !important;

  &:hover {
    color: $primary-500 !important;
  }
}

// 漢堡選單
.navbar-toggler {
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &-hamburger,
  &-hamburger::before,
  &-hamburger::after {
    background-image: none;
    display: block;
    content: '';
    background-color: $secondary-100;
    position: absolute;
    height: 2px;
    width: 30px;
    border-radius: 4px;
    transition: transform 0.5s ease-in-out, background-color 0.5s ease-in;
  }

  &-hamburger {
    transform-origin: 8px 0px;

    &::before {
      margin-top: -8px;
      transform-origin: 0% 0%;
    }

    &::after {
      margin-top: 8px;
      transform-origin: 0% 100%;
    }
  }

  &:hover {
    border: 1px solid $dark;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
}

#menu-toggle {
  display: none;

  &:checked {
    + .navbar-toggler {
      .navbar-toggler-hamburger {
        background-color: $dark;

        &::before {
          transform: rotate(45deg) translate(3px, -6px);
        }

        &::after {
          transform: rotate(-45deg) translate(3px, 6px);
        }
      }
    }
  }
}

.navbar-nav {
  display: flex;
  gap: 0;
  row-gap: 10px;
  @include media-breakpoint-up(lg) {
    gap: 0;
    column-gap: 36px;
  }
}

.nav-link {
  text-align: center;
  padding: 0;
}

a.btn-follow {
  color: $light;
  display: block;
  padding: 12px 56px;
  border: 1px solid $light;
  background-color: transparent;
  background-image: url('../assets/images/background/button-bg.png');
  background-repeat: repeat-x;
  background-position: 0 -100%;
  transition: 1.3s ease;

  &:hover {
    color: $light;
    background-position: center;
  }
}

.hover-primary-500:hover {
  color: $primary-500 !important;
}

.button-backtotop {
  position: fixed;
  box-shadow: 0px 3px 5px rgba($secondary-500, 0.8);
  bottom: 14px;
  right: 14px;
}
</style>
