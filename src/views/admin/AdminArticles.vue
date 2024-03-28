<template>
  <div class="py-3">
    <nav class="d-flex justify-content-between">
      <h1 class="fs-4 fw-bold">文章管理</h1>
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
                  :src="article.image['1000w']"
                  class="thumbnail"
                  :alt="article.title"
                  :srcset="`${article.image['300w']} 300w, ${article.image['600w']} 600w, ${article.image['1000w']} 1000w`"
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
          <!-- <PaginationComponent :pages="pages" @change-page="getArticles" /> -->
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
                      >文章標題 <span class="warning">*</span>
                    </label>
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
                      >文章作者 <span class="warning">*</span></label
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
                      >文章內文 <span class="warning">*</span></label
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
                      ><span class="ms-2">
                        <VueDatePicker
                          v-model="tempArticle.create_at"
                          model-type="timestamp"
                          :max-date="date"
                          placeholder="選擇日期"
                        />
                      </span>
                    </p>
                  </div>
                  <div class="mt-4">
                    <label class="form-label fw-bold"
                      >標籤 <span class="warning">*</span></label
                    >
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
                      for="articleImageFile"
                      class="form-label text-nowrap mb-0 fs-6 fw-bold"
                      >上傳圖片 <span class="warning">*</span></label
                    >
                    <!-- <input
                      class="form-control border-1 mt-1"
                      type="file"
                      ref="articleImageFile"
                      id="articleImageFile"
                      @change="uploadImage"
                      accept=".jpg,.jpeg,.png"
                    /> -->
                    <button
                      class="btn text-light fw-bold"
                      :class="{
                        'btn-primary-500': true,
                        'btn-disabled': isDisabled,
                      }"
                      @click="handleUpdateImage"
                      :disabled="isDisabled"
                    >
                      上傳圖片
                    </button>
                    <div
                      v-if="
                        tempArticle.image &&
                        Object.keys(tempArticle.image).length > 0
                      "
                    >
                      <img
                        class="mt-4 w-100"
                        :src="tempArticle.image['1000w']"
                        alt="首圖"
                        :srcset="`${tempArticle.image['300w']} 300w, ${tempArticle.image['600w']} 600w, ${tempArticle.image['1000w']} 1000w`"
                      />
                    </div>
                    <!-- <template v-if="!loadingUploadImage">
                      <img
                        :src="tempArticle.image"
                        :alt="tempArticle.title"
                        class="mt-4 w-100"
                      />
                    </template>
                    <template v-else>
                      <div
                        class="d-flex flex-column justify-content-center align-items-center mt-6"
                      >
                        <div class="spinner-border mb-3" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <p>圖片上傳中...</p>
                      </div>
                    </template> -->
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
              是否刪除
              <strong class="text-danger">{{ tempArticle.title }}</strong
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
  </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Modal from 'bootstrap/js/dist/modal';
import PaginationComponent from '@/components/PaginationComponent.vue';
import getDate from '@/mixins/getDate.js';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

let editArticleModal;
let delArticleModal;
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
const date = new Date();

export default {
  components: {
    PaginationComponent,
    VueDatePicker,
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
      loadingUploadImage: false,
      maxDate: date,
      date,

      // cloudinary
      isDisabled: false,
      scriptLoaded: false,
    };
  },
  mixins: [getDate],
  methods: {
    openModal(status, article) {
      if (status === 'create') {
        this.tempArticle = {
          isPublic: false,
          create_at: date,
          tag: [],
          image: '',
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
    uploadImage() {
      const file = this.$refs.articleImageFile.files[0];
      // 當上傳圖片後，若再次開啟選擇檔案視窗但未選擇檔案的話會觸發此方法，
      // 因此判斷是否有選擇到檔案來決定是否繼續執行
      if (!file) return;

      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`;
      this.loadingUploadImage = true;

      // file-to-upload (看文件要求)
      const formData = new FormData();
      formData.append('file-to-upload', file);

      this.$http
        .post(url, formData)
        .then((res) => {
          this.tempArticle.image = res.data.imageUrl;
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
        .finally(() => {
          this.loadingUploadImage = false;
        });
    },
    handleUpdateImage() {
      this.isDisabled = true;
      window.cloudinary.openUploadWidget(
        {
          cloudName: this.cloudName,
          uploadPreset: this.uploadPreset,
          sources: ['local', 'url'],
          tags: ['articles'],
          clientAllowedFormats: ['image'],
          resourceType: 'image',
          maxFiles: 1,
        },
        this.processResults
      );
    },
    processResults(error, result) {
      if (result.event === 'close') {
        this.isDisabled = false;
      }
      if (result && result.event === 'success') {
        const secureUrl = result.info.secure_url;

        const sizes = [
          { suffix: 'w_300', width: '300w' },
          { suffix: 'w_900', width: '600w' },
          { suffix: 'w_1200', width: '1000w' },
        ];

        // 創建圖片空物件
        const imageUrls = {};

        // 儲存進物件
        sizes.forEach((size) => {
          const previewUrl = secureUrl.replace(
            '/upload/',
            `/upload/${size.suffix}/f_webp,q_auto/`
          );
          imageUrls[size.width] = previewUrl;
        });

        this.tempArticle.image = imageUrls;
      }

      if (error) {
        console.error('Error occurred:', error);
      }

      this.isDisabled = false;
    },
  },
  mounted() {
    this.getArticles();
    editArticleModal = new Modal(this.$refs.editArticleModal);
    delArticleModal = new Modal(this.$refs.delArticleModal);

    // cloudinary
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', 'uw');
    script.src = 'https://upload-widget.cloudinary.com/global/all.js';
    script.addEventListener('load', () => (this.scriptLoaded = true));

    script.onerror = () => {
      console.error('Failed to load third-party script.');
    };
    document.head.appendChild(script);
  },
  computed: {
    cloudName() {
      return import.meta.env.VITE_CLOUD_NAME;
    },
    uploadPreset() {
      return import.meta.env.VITE_UPLOAD_PRESET;
    },
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

.warning {
  color: rgb(210, 22, 22);
}
</style>
