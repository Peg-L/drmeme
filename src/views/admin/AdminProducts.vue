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
              :src="product.imageUrl"
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
                <input
                  class="form-control border-1"
                  type="file"
                  ref="productImageFile"
                  id="productImageFile"
                  @change="updateImage('main')"
                  accept=".jpg,.jpeg,.png"
                />
                <template v-if="!loadingUploadImage">
                  <img :src="tempProduct.imageUrl" alt="" class="mt-4" />
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
                </template>
              </div>
              <div>
                <label for="productImagesFile" class="fs-6 fw-bold mt-4 mb-2"
                  >其他圖片</label
                >
                <input
                  class="form-control border-1"
                  type="file"
                  ref="productImagesFile"
                  id="productImagesFile"
                  @change="updateImage('multi')"
                  accept=".jpg,.jpeg,.png"
                />
                <draggable v-model="tempProduct.imagesUrl">
                  <div
                    v-for="(element, index) in tempProduct.imagesUrl"
                    :key="element"
                    class="position-relative mt-4"
                  >
                    <img :src="element" alt="" />
                    <button
                      @click="updateImage('delete', index)"
                      class="btn rounded-circle btn-sm btn-light position-absolute top-0 end-0 z-3 m-2"
                    >
                      X
                    </button>
                  </div>
                </draggable>
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
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                >
                </textarea>
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
// import draggable from 'vuedraggable';
import { VueDraggableNext } from 'vue-draggable-next';

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
      products: [],
      tempProduct: {
        imagesUrl: [],
        imageUrl: '',
      },
      isNew: false, // 是否建立新產品
      pages: {},
      loadingUploadImage: false,
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
    updateImage(status, index) {
      let file;
      if (status === 'delete') {
        this.tempProduct.imagesUrl.splice(index, 1);
        return;
      } else if (status === 'main') {
        this.loadingUploadImage = true;
        file = this.$refs.productImageFile.files[0];
      } else if (status === 'multi') {
        file = this.$refs.productImagesFile.files[0];
      }

      // 當上傳圖片後，若再次開啟選擇檔案視窗但未選擇檔案的話會觸發此方法，
      // 因此判斷是否有選擇到檔案來決定是否繼續執行
      if (!file) return;

      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`;

      // file-to-upload (看文件要求)
      const formData = new FormData();
      formData.append('file-to-upload', file);

      this.$http
        .post(url, formData)
        .then((res) => {
          if (status === 'main') {
            this.tempProduct.imageUrl = res.data.imageUrl;
            console.log(this.tempProduct);
          } else if (status === 'multi') {
            this.tempProduct.imagesUrl.push(res.data.imageUrl);
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
        .finally(() => {
          this.loadingUploadImage = false;
        });
    },
  },
  mounted() {
    this.getProducts();
    productModal = new Modal(this.$refs.productModal);
    delProductModal = new Modal(this.$refs.delProductModal);
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
