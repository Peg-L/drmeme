<template>
  <nav class="d-flex justify-content-between">
    <h1 class="fs-5 fw-bold">文章 Articles</h1>
    <div>
      <button class="btn ms-4" type="button">
        <i class="fa-solid fa-bell"></i>
      </button>
    </div>
  </nav>
  <!-- <div>
    <h2 class="fs-6 fw-bold">文章數據</h2>
  </div> -->
  <div class="mt-6">
    <h2 class="fs-6 fw-bold">文章列表</h2>
    <div class="mt-3">
      <!-- 功能區塊 -->
      <div class="d-flex justify-content-between pb-4">
        <div class="d-flex">
          <div class="input-group w-300 d-flex align-items-center">
            <input
              type="text"
              class="form-control"
              placeholder="輸入文章標題關鍵字..."
              aria-label="輸入文章標題關鍵字..."
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-primary-500 text-light"
              type="button"
              id="button-addon2"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div class="d-flex align-items-center select-filter ms-4">
            <span class="text-nowrap me-2">篩選</span>
            <select class="form-select" aria-label="Default select">
              <option selected>全部</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="d-flex align-items-center select-sort ms-4">
            <span class="text-nowrap me-2">排序</span>
            <select class="form-select" aria-label="Default select">
              <option selected>從新到舊</option>
              <option value="1">從舊到新</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary-500 text-light fw-bold"
          @click="openModal('create')"
        >
          <i class="fa-solid fa-plus me-2"></i>新增文章
        </button>
      </div>
      <table class="table table-hover mt-4 align-middle">
        <thead>
          <tr>
            <th width="120">縮圖</th>
            <th width="200">標題</th>
            <th width="200">建立時間</th>
            <th width="200">標籤</th>
            <th width="120">發布狀態</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td>
              <img
                :src="article.image"
                :alt="article.title"
                class="thumbnail"
              />
            </td>
            <td>{{ article.title }}</td>
            <td>{{ getDate(article.create_at) }}</td>
            <td>
              <div class="d-flex flex-wrap">
                <span v-for="tag in article.tag" :key="tag" class="me-2"
                  ><i class="fa-solid fa-hashtag"></i>{{ tag }}</span
                >
              </div>
            </td>
            <td>
              <span
                class="fw-bold"
                :class="article.isPublic ? 'text-success' : 'text-danger'"
                >{{ article.isPublic ? '發布中' : '未發布' }}</span
              >
            </td>
            <td>
              <button
                type="button"
                class="btn text-dark fw-bold"
                @click="getArticle(article.id)"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                type="button"
                class="btn text-dark fw-bold"
                @click="openModal('delete', article)"
              >
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-center">
        <PaginationComponent :pages="pages" :get-items="getArticles" />
        <!-- emit 寫法 -->
        <!-- <PaginationComponent :pages="pages" @change-page="getProducts" /> -->
      </div>
    </div>
  </div>

  <!-- 新增和編輯 文章 Modal -->
  <div
    class="modal fade"
    ref="editArticleModal"
    tabindex="-1"
    aria-labelledby="articleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div
      class="modal-dialog modal-dialog-scrollable modal-xl modal-fullscreen-xl-down"
    >
      <div class="modal-content">
        <div class="modal-header bg-primary-500">
          <h1
            class="modal-title fs-5 fw-bold text-light"
            id="articleModalLabel"
          >
            {{ isNewArticle ? '新增文章' : '編輯文章' }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mt-4 container">
            <div class="row">
              <div class="col-md-9">
                <div>
                  <label
                    for="inputTitle"
                    class="form-label text-nowrap mb-0 fs-6 fw-bold"
                    >文章標題</label
                  >
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="inputTitle"
                    v-model="tempArticle.title"
                  />
                </div>
                <div class="mt-4">
                  <label
                    for="inputAuthor"
                    class="form-label text-nowrap mb-0 fs-6 fw-bold"
                    >文章作者</label
                  >
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="inputAuthor"
                    v-model="tempArticle.author"
                  />
                </div>
                <div class="mt-4">
                  <label
                    for="inputImg"
                    class="form-label text-nowrap mb-0 fs-6 fw-bold mb-1"
                    >文章內文</label
                  >
                  <ckeditor
                    :editor="editor"
                    v-model="tempArticle.content"
                    :config="editorConfig"
                  ></ckeditor>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    v-model="tempArticle.isPublic"
                  />
                  <label
                    class="form-check-label fw-bold"
                    for="flexSwitchCheckDefault"
                    >是否發布文章</label
                  >
                </div>
                <div class="mt-4">
                  <p>
                    <span class="fw-bold">建立日期</span
                    ><span class="ms-2">{{
                      getDate(tempArticle.create_at)
                    }}</span>
                  </p>
                </div>
                <div class="mt-4">
                  <label class="form-label fw-bold">標籤</label>
                  <div class="row g-1">
                    <template v-if="tempArticle.tag?.length">
                      <div
                        v-for="(tag, key) in tempArticle.tag"
                        :key="key + 1234"
                        class="col-md-6"
                      >
                        <div class="input-group input-group-sm">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="請輸入標籤"
                            v-model="tempArticle.tag[key]"
                          />
                          <button
                            class="btn btn-outline-danger"
                            type="button"
                            @click="tempArticle.tag.splice(key, 1)"
                          >
                            x
                          </button>
                        </div>
                      </div>
                      <div
                        v-if="tempArticle.tag[tempArticle.tag.length - 1]"
                        class="col-md-6"
                      >
                        <button
                          class="btn btn-sm btn-primary-500 text-light w-100"
                          @click="tempArticle.tag.push('')"
                        >
                          新增標籤
                        </button>
                      </div>
                    </template>
                    <template v-else>
                      <button
                        class="btn btn-sm btn-primary-500 text-light col-md-6"
                        @click="createTag"
                      >
                        新增標籤
                      </button>
                    </template>
                  </div>
                </div>
                <div class="mt-4">
                  <label
                    for="inputImg"
                    class="form-label text-nowrap mb-0 fs-6 fw-bold"
                    >圖片網址</label
                  >
                  <input
                    type="url"
                    class="form-control mt-1"
                    id="inputImg"
                    v-model="tempArticle.image"
                  />
                  <img
                    :src="tempArticle.image"
                    alt="文章縮圖"
                    class="w-100 mt-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary-500"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary-500 text-light fw-bold"
            @click="updateArticle"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 刪除文章 modal -->
  <div
    class="modal fade"
    ref="delArticleModal"
    tabindex="-1"
    aria-labelledby="delArticleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delArticleModalLabel" class="modal-title">
            <span>刪除文章</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            是否刪除 <strong class="text-danger">{{ tempArticle.title }}</strong
            >?
          </p>
          <p class="fw-bold mt-4">** 刪除後將無法恢復 **</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="deleteArticle">
            確認刪除</button
          ><button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Modal from 'bootstrap/js/dist/modal';
import PaginationComponent from '@/components/PaginationComponent.vue';

let editArticleModal;
let delArticleModal;
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  components: {
    PaginationComponent,
  },
  data() {
    return {
      articles: [],
      tempArticle: {
        tag: [],
      },
      isNewArticle: false,
      pages: {},
      editor: ClassicEditor,
      editorConfig: {
        // toolbar: ['heading', '|', 'bold', 'italic', 'link'],
      },
    };
  },
  methods: {
    // 將時間戳轉為年月日
    getDate(timestamp) {
      // 創建一個新的 Date 物件並將時間戳傳遞給它
      const date = new Date(timestamp * 1000);

      // 使用 Date 物件的方法取得年、月和日
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // 月份是從 0 開始計算的，所以要加 1
      const day = date.getDate();

      // 將數字補零到兩位數，如果月份或日期小於 10
      const formattedMonth = month < 10 ? '0' + month : month;
      const formattedDay = day < 10 ? '0' + day : day;

      // 最後組合成年月日的格式（例如：YYYY-MM-DD）
      const formattedDate = year + '-' + formattedMonth + '-' + formattedDay;

      return formattedDate;
    },
    openModal(status, article) {
      if (status === 'create') {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: [],
        };
        this.isNewArticle = true;
        editArticleModal.show();
      } else if (status === 'delete') {
        delArticleModal.show();
        this.tempArticle = { ...article };
      }
    },
    getArticles(page = 1) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/articles?page=${page}`;

      // 取得 cookie 中的 token 值
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)drmemeToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );

      // 設定預設 headers
      this.$http.defaults.headers.common.Authorization = token;

      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles;
          this.pages = res.data.pagination;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getArticle(id) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${id}`;

      this.$http
        .get(url)
        .then((res) => {
          editArticleModal.show();
          this.tempArticle = res.data.article;
          this.isNewArticle = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateArticle() {
      let method = 'post';
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article`;

      if (!this.isNewArticle) {
        method = 'put';
        url =
          url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`;
      }

      this.$http[method](url, { data: this.tempArticle }).then((res) => {
        editArticleModal.hide();

        this.getArticles();
      });
    },
    deleteArticle() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`;

      this.$http.delete(url).then(() => {
        this.getArticles();
        delArticleModal.hide();
      });
    },
    createTag() {
      this.tempArticle.tag = [];
      this.tempArticle.tag.push('');
    },
  },
  mounted() {
    this.getArticles();
    editArticleModal = new Modal(this.$refs.editArticleModal);
    delArticleModal = new Modal(this.$refs.delArticleModal);
  },
};
</script>
<style lang="scss">
.w-300 {
  width: 300px !important;
}

.select-filter {
  width: 200px;
}

.select-sort {
  width: 200px;
}
</style>
