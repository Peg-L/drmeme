<template>
  <div class="container py-10 py-md-20">
    <div class="row">
      <div class="col-md-8">
        <h1 class="fs-3 fw-bold">{{ article.title }}</h1>
        <div class="mt-4">
          <span class="text-secondary-300"
            ><i class="fa-solid fa-user me-1"></i>{{ article.author }}</span
          >
          <span class="text-secondary-300 ms-3"
            ><i class="fa-solid fa-calendar-days me-1"></i
            >{{ getDate(article.create_at) }}</span
          >
          <span
            class="text-secondary-300 ms-3"
            v-for="tag in article.tag"
            :key="tag"
            ><i class="fa-solid fa-tag me-1"></i>{{ tag }}</span
          >
        </div>
        <div v-if="article.image && Object.keys(article.image).length > 0">
          <img
            class="mt-4 w-100 rounded-3"
            :src="article.image['1000w']"
            alt="首圖"
            :srcset="`${article.image['300w']} 300w, ${article.image['600w']} 600w, ${article.image['1000w']} 1000w`"
          />
        </div>
        <div class="mt-4 p-6" v-html="article.content"></div>
        <hr />
        <div class="row justify-content-between">
          <div class="col-6">
            <RouterLink
              :to="`/articles/${articles[currentIndex - 1].id}`"
              class="d-flex align-items-center"
              v-if="articles[currentIndex - 1]"
            >
              <i class="fa-solid fa-arrow-left me-2"></i>
              <div>
                上一篇：<br />
                {{ articles[currentIndex - 1].title }}
              </div>
            </RouterLink>
          </div>
          <div class="col-6" v-if="articles[currentIndex + 1]">
            <RouterLink
              :to="`/articles/${articles[currentIndex + 1].id}`"
              class="d-flex align-items-center justify-content-end"
            >
              <div class="text-end">
                下一篇：<br />
                {{ articles[currentIndex + 1].title }}
              </div>
              <i class="fa-solid fa-arrow-right ms-2"></i>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="ps-lg-20 pt-lg-10">
          <h2 class="fs-5 fw-bold mt-10 mt-md-0">標籤</h2>
          <div class="mt-4">
            <a class="text-secondary-700 me-3" v-for="tag in allTags" :key="tag"
              ><i class="fa-solid fa-tag"></i>{{ tag }}</a
            >
          </div>
          <h2 class="fs-5 fw-bold mt-md-10 mt-4">最新文章</h2>
          <div v-for="article in fiveArticles" :key="article.id" class="mt-2">
            <RouterLink :to="`/articles/${article.id}`" class="fw-bold">{{
              article.title
            }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getDate from '@/mixins/getDate.js';

import { mapState, mapActions } from 'pinia';
import { useArticleStore } from '@/stores/articleStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return { currentIndex: 0, article: {} };
  },
  mixins: [getDate],
  methods: {
    ...mapActions(useArticleStore, ['getArticles']),
    findIndex() {
      this.currentIndex = this.articles.findIndex(
        (item) => item.id === this.article.id
      );
    },
    getArticle() {
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/article/${id}`)
        .then((res) => {
          this.article = res.data.article;
          this.findIndex();
        });
    },
  },
  computed: {
    ...mapState(useArticleStore, ['articles', 'article']),
    allTags() {
      const allTags = this.articles.reduce((acc, article) => {
        return acc.concat(article.tag);
      }, []);

      // 然後，使用 Set 來排除重複的 tag
      const uniqueTags = new Set(allTags);

      // 最後，將 Set 轉換回陣列
      const tags = Array.from(uniqueTags);

      return tags;
    },
    fiveArticles() {
      return this.articles.slice(0, 5);
    },
  },
  watch: {
    '$route.params': {
      immediate: true, // 初始化完成後，就先觸發
      handler() {
        // 放入我們需要處理的程序
        if (this.$route.params.id) {
          this.getArticle();
        }
      },
    },
  },
  mounted() {
    this.getArticle();
    this.getArticles();
  },
};
</script>
