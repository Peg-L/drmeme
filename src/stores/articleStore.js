import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export const useArticleStore = defineStore('useArticleStore', {
  state: () => ({
    articles: [],
    page: {},
  }),
  actions: {
    getArticles() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/articles`;
      axios.get(url).then((res) => {
        this.articles = res.data.articles;
        this.page = res.data.pagination;
      });
    },
  },
});
