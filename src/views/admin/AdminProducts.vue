<template>
  <div>
    <div class="py-3">
      <h2>產品列表</h2>
      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="120">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.title }}</td>
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
                class="btn btn-success text-light fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#productModal"
                @click="editProductDetail(product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        目前有
        <span>{{ products ? 0 : products.length }}</span> 項產品
      </p>
    </div>
  </div>

  <!-- editProduct modal -->
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="productModalLabel">編輯產品</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-4">
              <div>
                <label for="imageUrl" class="form-label">主要圖片</label>
                <input
                  type="url"
                  class="form-control mb-2"
                  id="imageUrl"
                  placeholder="請輸入主圖連結"
                  aria-describedby="productHelp"
                  v-model="tempProduct.imageUrl"
                />
                <img :src="tempProduct.imageUrl" :alt="tempProduct.title" />
              </div>
              <div class="mt-4">
                <h4>多圖新增</h4>
                <div
                  v-for="(image, index) in tempProduct.imagesUrl"
                  :key="image"
                >
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label">圖片網址</label>
                    <input
                      id="imageUrl"
                      type="text"
                      v-model="tempProduct.imagesUrl[index]"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                    />
                  </div>
                  <img class="img-fluid" :src="image" />
                </div>
              </div>
            </div>
            <div class="col-8"></div>
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
          <button type="button" class="btn btn-primary-500">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
    };
  },
  methods: {
    getProducts() {
      console.log('this.getProducts');
      const url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/products`;
      // // 取出 Token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)drmemeToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      axios.defaults.headers.common.Authorization = token;

      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          console.log('成功取得', this.products);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editProductDetail(product) {
      this.tempProduct = product;
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
img {
  object-fit: contain;
  max-width: 100%;
}

.primary-image {
  height: 300px;
}
</style>
