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
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import ButtonBacktotop from '../components/ButtonBackToTop.vue';

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
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
</style>
