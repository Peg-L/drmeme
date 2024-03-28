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
        v-for="article in allArticles"
        :key="article.id"
      >
        <RouterLink
          class="text-dark hover-link"
          :to="`/articles/${article.id}`"
        >
          <img
            class="img-fluid rounded-3"
            :src="article.image['1000w']"
            alt="首圖"
            :srcset="`${article.image['300w']} 300w, ${article.image['600w']} 600w, ${article.image['1000w']} 1000w`"
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
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useArticleStore } from '@/stores/articleStore';
import BannerComponent from '@/components/BannerComponent.vue';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  components: {
    BannerComponent,
  },
  data() {
    return {
      // allArticles: [],
      pageNum: 1,
    };
  },
  computed: {
    ...mapState(useArticleStore, ['articles', 'page']),
    ...mapWritableState(useArticleStore, ['allArticles']),
  },
  methods: {
    ...mapActions(useArticleStore, ['getArticles']),
    onScroll() {
      // 判斷目前頁面超過最後一頁時，不繼續執行後面程式碼
      if (this.page.total_pages <= this.pageNum) return;

      // 判斷滑鼠滾動是否到達底部
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // 呼叫 API 取得下一頁的文章資料
        this.pageNum++;
        this.getArticles(this.pageNum);
      }
    },
  },
  mounted() {
    this.allArticles = [];
    // 呼叫 API 取得第一頁的文章資料
    this.getArticles(this.pageNum);

    // 監聽滑鼠滾動事件
    window.addEventListener('scroll', this.onScroll);
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
