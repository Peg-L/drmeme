import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export const useArticleStore = defineStore('useArticleStore', {
  state: () => ({
    articles: [],
    page: {},
    allArticles: [],
  }),
  actions: {
    getArticles(page = 1) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/articles?page=${page}`;
      axios.get(url).then((res) => {
        this.articles = res.data.articles;
        this.page = res.data.pagination;
        this.allArticles.push(...res.data.articles);
      });
    },
  },
});
