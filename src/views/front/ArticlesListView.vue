<template>
  <!-- 精選文章 banner -->
  <BannerComponent
    title="精選文章"
    subtitle="Featured Articles"
    image-name="banner-article.jpg"
    image-alt="'精選文章"
  />
  <div class="container py-5 py-md-10">
    <div
      v-masonry="containerId"
      transition-duration="0.3s"
      item-selector=".item"
      class="row"
    >
      <div
        v-masonry-tile
        class="item col-sm-6 col-md-4 col-lg-3 mt-4"
        v-for="article in articles"
        :key="article.id"
      >
        <RouterLink
          class="text-dark hover-link"
          :to="`/articles/${article.id}`"
        >
          <img
            :src="article.image"
            :alt="article.title"
            class="img-fluid rounded-3"
          />
          <h2 class="fs-6 fw-bold mt-2">
            {{ article.title }}
          </h2>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useArticleStore } from '@/stores/articleStore';
import BannerComponent from '@/components/BannerComponent.vue';

export default {
  components: {
    BannerComponent,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useArticleStore, ['articles']),
  },
  methods: {
    ...mapActions(useArticleStore, ['getArticles']),
  },
  mounted() {
    this.getArticles();
  },
};
</script>
<style lang="scss">
@import '../../assets/SCSS/all.scss';

.item {
  margin-inline: auto;
}

.hover-link:hover {
  h2 {
    color: $primary-500;
  }
}
</style>
