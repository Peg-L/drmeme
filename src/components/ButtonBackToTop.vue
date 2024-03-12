<template>
  <button
    type="button"
    class="rounded-circle border-0 bg-primary-500 bg-gradient text-light button-backtotop"
    style="width: 50px; height: 50px"
  >
    <i class="fa-solid fa-arrow-up fa-xl"></i>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/SCSS/all.scss';

.button-backtotop {
  position: fixed;
  box-shadow: 0px 3px 5px rgba($secondary-500, 0.8);
  bottom: 14px;
  right: 14px;
}
</style>
