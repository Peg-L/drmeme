<template>
  <div class="bg-secondary-100">
    <div class="container">
      <div
        class="d-flex flex-column flex-md-row justify-content-md-center align-items-center py-4 py-md-8"
      >
        <div>
          <h1 class="display-5 fw-bold text-center text-md-start">
            {{ title }}
          </h1>
          <p class="fs-3 ff-sans-en fw-light text-uppercase">
            {{ subtitle }}
          </p>
        </div>
        <img
          class="darken ms-md-20 banner-img"
          :src="getImageUrl(imageName)"
          :alt="imageAlt"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`../assets/images/banner/${imageName}`, import.meta.url)
        .href;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.banner-img {
  height: 150px;
  @media (min-width: 768px) {
    height: 250px;
  }
}
</style>
