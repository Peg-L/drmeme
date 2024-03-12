<template>
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
</template>
<script>
export default {
  computed: {
    isFollowBtnVisible() {
      return !(
        this.$route.path.startsWith('/products') ||
        this.$route.path === '/cart' ||
        this.$route.path === '/followlist' ||
        this.$route.path === '/order' ||
        this.$route.path === '/checkout' ||
        this.$route.path === '/payment'
      );
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/SCSS/all.scss';

h1 {
  a {
    font-family: 'Iceberg';
  }
}

.nav-link {
  color: $light !important;

  &:hover {
    color: $primary-500 !important;
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
</style>
