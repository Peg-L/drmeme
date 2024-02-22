<template>
  <!-- 精選文章 banner -->
  <BannerComponent
    title="精選文章"
    subtitle="Featured Articles"
    image-name="banner-article.jpg"
    image-alt="'精選文章"
  />
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
export default {
  components: {
    BannerComponent,
  },
  data() {
    return {};
  },
};
</script>
