<template>
  <!-- navbar -->
  <Navbar-Component />

  <div class="mt-14 mt-lg-17">
    <router-view></router-view>
  </div>

  <Footer-Component />
  <Button-Backtotop />
</template>

<script type="module">
import NavbarComponent from '../components/NavbarComponent.js';
import FooterComponent from '../components/FooterComponent.js';
import ButtonBacktotop from '../components/ButtonBackToTop.js';

export default {
  data() {
    return {};
  },
  components: {
    NavbarComponent,
    FooterComponent,
    ButtonBacktotop,
  },
  methods: {},
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
