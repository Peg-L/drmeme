<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg bg-dark">
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
          <span class="navbar-toggler-icon"></span>
        </label>
      </div>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav my-10 my-lg-0 ms-auto d-flex align-items-center">
          <li class="nav-item">
            <router-link
              to="/articles"
              class="nav-link fs-5 fw-bold"
              aria-current="page"
              >精選文章</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/products"
              class="nav-link fs-5 fw-bold"
              aria-current="page"
              >限量週邊</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/faq"
              class="nav-link fs-5 fw-bold"
              aria-current="page"
              >常見問答</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="btn btn-follow fs-5 fw-bold"
              aria-current="page"
              href="https://www.instagram.com/doctormeme_tw/"
              target="_blank"
              >追蹤IG</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <footer class="footer">
    <router-link to="/adminLogin">後台管理</router-link>
  </footer>
</template>

<script>
export default {
  components: {},
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

  &-icon,
  &-icon::before,
  &-icon::after {
    background-image: none;
    display: block;
    content: '';
    background-color: $secondary-100;
    position: absolute;
    height: 2px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 4px;
  }

  &-icon {
    &::before {
      margin-top: -8px;
    }

    &::after {
      margin-top: 8px;
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
      .navbar-toggler-icon {
        background-color: $dark;

        &::before {
          margin-top: 0;
          transform: rotate(405deg);
        }

        &::after {
          margin-top: 0;
          transform: rotate(-405deg);
        }
      }
    }
  }
}

.navbar-nav {
  display: flex;
  gap: 0;
  row-gap: 40px;
  @include media-breakpoint-up(lg) {
    gap: 0;
    column-gap: 56px;
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

  &:hover {
    border: 1px solid $primary-500;
    color: $primary-500;
  }
}
</style>
