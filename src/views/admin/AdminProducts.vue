<template>
  <div class="py-3">
    <div class="d-flex justify-content-between">
      <h1 class="fs-4 fw-bold">產品管理</h1>
      <button
        class="btn btn-primary-500 text-light fw-bold"
        type="button"
        @click="openModal('create')"
      >
        <i class="fa-solid fa-plus me-2"></i>新增產品
      </button>
    </div>
    <table class="table table-hover mt-4 align-middle">
      <thead>
        <tr>
          <th>縮圖</th>
          <th>名稱</th>
          <th>分類</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="120">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <img
              class="thumbnail"
              :src="product.imageUrl['300w']"
              :alt="product.title"
            />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.origin_price }}</td>
          <td>{{ product.price }}</td>
          <td>
            <span :class="{ 'text-success': product.is_enabled }">{{
              product.is_enabled ? '啟用' : '未啟用'
            }}</span>
          </td>
          <td>
            <button
              type="button"
              class="btn text-dark fw-bold"
              @click="openModal('edit', product)"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              type="button"
              class="btn text-dark fw-bold"
              @click="openModal('delete', product)"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <PaginationComponent :pages="pages" :get-items="getProducts" />
      <!-- emit 寫法 -->
      <!-- <PaginationComponent :pages="pages" @change-page="getProducts" /> -->
    </div>
  </div>

  <!-- update product modal -->
  <div
    class="modal fade"
    ref="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
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
            id="productModalLabel"
          >
            {{ isNew ? '新增產品' : '編輯產品' }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4 order-2 order-sm-1">
              <div>
                <label for="productImageFile" class="form-label fw-bold"
                  >產品首圖</label
                >
                <!-- cloudinary -->
                <div>
                  <button
                    class="btn text-light fw-bold"
                    :class="{
                      'btn-primary-500': true,
                      'btn-disabled': isDisabledMain,
                    }"
                    @click="handleUpdateImage('main')"
                    :disabled="isDisabledMain"
                  >
                    上傳圖片
                  </button>
                  <div
                    v-if="
                      tempProduct.imageUrl &&
                      Object.keys(tempProduct.imageUrl).length > 0
                    "
                  >
                    <img
                      class="mt-2"
                      :src="tempProduct.imageUrl['1000w']"
                      alt="首圖"
                      :srcset="`${tempProduct.imageUrl['300w']} 300w, ${tempProduct.imageUrl['600w']} 600w, ${tempProduct.imageUrl['1000w']} 1000w`"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label for="productImagesFile" class="fs-6 fw-bold mt-4 mb-2"
                  >其他圖片</label
                >
                <div>
                  <button
                    class="btn text-light fw-bold"
                    :class="{
                      'btn-primary-500': true,
                      'btn-disabled': isDisabledMulti,
                    }"
                    @click="handleUpdateImage('multi')"
                    :disabled="isDisabledMulti"
                  >
                    上傳圖片
                  </button>
                  <draggable v-model="tempProduct.imagesUrl">
                    <div
                      v-for="(image, index) in tempProduct.imagesUrl"
                      :key="image"
                      class="position-relative mt-4"
                    >
                      <img
                        class="mt-2"
                        :src="image['1000w']"
                        alt="其他圖片"
                        :srcset="`${image['300w']} 300w, ${image['600w']} 600w, ${image['1000w']} 1000w`"
                      />
                      <button
                        @click="handleUpdateImage('delete', index)"
                        class="btn rounded-circle btn-sm btn-light position-absolute top-0 end-0 z-3 m-2"
                      >
                        X
                      </button>
                    </div>
                  </draggable>
                </div>
              </div>
            </div>
            <div class="col-sm-8 order-1 order-sm-2">
              <div class="mb-3">
                <label for="title" class="form-label fw-bold"
                  >商品名<span class="warning">*</span></label
                >
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label fw-bold mb-1"
                    >分類 <span class="warning">*</span></label
                  >
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label fw-bold mb-1"
                    >單位 <span class="warning">*</span></label
                  >
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label fw-bold mb-1"
                    >原價 <span class="warning">*</span></label
                  >
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label fw-bold mb-1"
                    >售價 <span class="warning">*</span></label
                  >
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                  />
                </div>
              </div>

              <hr />

              <div class="mb-3">
                <label for="description" class="form-label fw-bold mb-1"
                  >產品描述</label
                >
                <ckeditor
                  :editor="editor"
                  v-model="tempProduct.description"
                  :config="editorConfig"
                ></ckeditor>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label fw-bold mb-0" for="is_enabled"
                    >是否啟用</label
                  >
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
            @click="updateProduct"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- delete product modal -->
  <div
    class="modal fade"
    ref="delProductModal"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
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
            是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong
            >?
          </p>
          <p class="fw-bold mt-4">** 刪除後將無法恢復 **</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="deleteProduct">
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
import Modal from 'bootstrap/js/dist/modal';
import PaginationComponent from '@/components/PaginationComponent.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
let productModal;
let delProductModal;

export default {
  components: {
    PaginationComponent,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        // toolbar: ['heading', '|', 'bold', 'italic', 'link'],
      },
      products: [],
      tempProduct: {
        imagesUrl: [],
        imageUrl: {},
      },
      isNew: false, // 是否建立新產品
      pages: {},
      loadingUploadImage: false,
      selectedFile: {},

      // cloudinary
      isDisabledMain: false,
      isDisabledMulti: false,
      scriptLoaded: false,
      uploadMode: '',
    };
  },
  methods: {
    getProducts(page = 1) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products?page=${page}`;

      // 取出 Token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)drmemeToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      this.$http.defaults.headers.common.Authorization = token;

      this.$http
        .get(url)
        .then((res) => {
          console.log(res.data);

          this.products = res.data.products;
          this.pages = res.data.pagination;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal(status, product) {
      if (status === 'create') {
        this.tempProduct = {
          imagesUrl: [],
          imageUrl: {},
        };

        this.isNew = true;
        productModal.show();
      } else if (status === 'edit') {
        productModal.show();
        this.isNew = false;
        this.tempProduct = { ...product };
      } else if (status === 'delete') {
        delProductModal.show();
        this.tempProduct = { ...product };
      }
    },
    updateProduct() {
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`;
      let method = 'post';

      if (!this.isNew) {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        method = 'put';
      }

      this.$http[method](url, { data: this.tempProduct }).then(() => {
        this.getProducts();
        productModal.hide();
      });
    },
    deleteProduct() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`;

      this.$http.delete(url).then(() => {
        this.getProducts();
        delProductModal.hide();
      });
    },
    handleUpdateImage(status, index) {
      // 透過傳入的狀態（status）參數決定要執行的操作
      if (status === 'main') {
        this.uploadMode = status;
        this.uploadMainImage();
      } else if (status === 'multi') {
        this.uploadMode = status;
        this.uploadMultiImages();
      } else if (status === 'delete') {
        this.tempProduct.imagesUrl.splice(index, 1);
      }
    },
    processResults(error, result) {
      if (result.event === 'close') {
        this.isDisabledMain = false;
        this.isDisabledMulti = false; // 關閉多圖片上傳按鈕的禁用狀態
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

        // 根據狀態更新 tempProduct 中的屬性
        if (this.uploadMode === 'main') {
          this.tempProduct.imageUrl = imageUrls;
        } else if (this.uploadMode === 'multi') {
          // 將多張圖片的每個圖片 URL 包裝成物件，並放入 imagesUrl 陣列中
          this.tempProduct.imagesUrl.push(imageUrls);
        }
      }

      if (error) {
        console.error('Error occurred:', error);
      }

      this.isDisabledMain = false;
      this.isDisabledMulti = false;
    },

    uploadMainImage() {
      this.isDisabledMain = true;
      window.cloudinary.openUploadWidget(
        {
          cloudName: this.cloudName,
          uploadPreset: this.uploadPreset,
          sources: ['local', 'url'],
          tags: ['products'],
          clientAllowedFormats: ['image'],
          resourceType: 'image',
          maxFiles: 1,
        },
        this.processResults
      );
    },

    uploadMultiImages() {
      this.isDisabledMulti = true;
      window.cloudinary.openUploadWidget(
        {
          cloudName: this.cloudName,
          uploadPreset: this.uploadPreset,
          sources: ['local', 'url'],
          tags: ['products'],
          clientAllowedFormats: ['image'],
          resourceType: 'image',
          multiple: true, // 允許多張圖片上傳
        },
        this.processResults
      );
    },
  },
  async mounted() {
    this.getProducts();
    productModal = new Modal(this.$refs.productModal);
    delProductModal = new Modal(this.$refs.delProductModal);

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

<style>
img {
  object-fit: contain;
  max-width: 100%;
}

.warning {
  color: rgb(210, 22, 22);
}
</style>
