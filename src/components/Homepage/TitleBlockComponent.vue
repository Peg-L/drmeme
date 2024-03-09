<template>
  <div class="mb-10 mb-sm-15 mb-md-20">
    <h3 class="fs-5 ff-sans-en text-secondary-600 text-center">
      <span class="decoball decoball-1 ls-4">{{ title }}</span>
    </h3>
    <h2 class="fs-3 fs-md-2 fw-bold mt-2 mt-md-5 text-center">
      <span v-if="text1" class="me-4 me-md-10">{{ text1 }}</span
      ><span class="decoball decoball-2">{{ text2 }}</span>
    </h2>
  </div>
</template>

<script>
export default {
  props: ['title', 'text1', 'text2'],
};
</script>

<style lang="scss" scoped>
@import '../../assets/SCSS/all.scss';

.decoball {
  position: relative;
  z-index: 2;

  &-1::before {
    content: '';
    border-radius: 50%;
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: $primary-500;
    top: -17px;
    left: -28.5px;
    z-index: -1;
  }

  &-2::before {
    content: '';
    border-radius: 50%;
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: $primary-400;
    bottom: -20px;
    right: -17px;
    z-index: -1;
  }

  @include media-breakpoint-up(md) {
    &-1::before {
      top: -12px;
      left: -28px;
    }

    &-2::before {
      // bottom: -13px;
      // right: -18px;
    }
  }
}
</style>
