<template>
  <div class="bg-secondary-100">
    <div class="container">
      <div
        class="d-flex flex-column flex-md-row justify-content-md-center align-items-center py-4 py-md-8"
      >
        <div>
          <h1 class="display-5 fw-bold text-center text-md-start">限量週邊</h1>
          <p class="fs-3 ff-sans-en fw-light text-uppercase">
            Limited Edition Merch
          </p>
        </div>
        <img
          class="darken ms-md-20 product-list-banner-img"
          src="../../assets/images/banner/products-list-banner-3.png"
          alt="Anya wants this"
        />
      </div>
    </div>
  </div>
  <div class="container py-10 py-md-20" ref="products-block">
    <div class="row">
      <!-- 分類切換 -->
      <!-- md 以下 -->
      <div class="col d-md-none sticky-top">
        <select
          class="form-select border border-primary-500 mb-3"
          aria-label="Default select"
          v-model="selectedCategory"
          @change.prevent="getProducts(selectedCategory)"
        >
          <option value="" selected>全部</option>
          <option value="服飾">服飾</option>
          <option value="飾品配件">飾品配件</option>
          <option value="其他">其他</option>
        </select>
      </div>
      <!-- md 以上 -->
      <div class="d-none d-md-block col-3 sticky-top overflow-y-auto vh-100">
        <div class="h-100">
          <div class="list-group">
            <a
              href="#"
              @click.prevent="filterProducts('')"
              :class="[
                'list-group-item list-group-item-action fw-bold products-list-sidebar',
                { 'mt-20': hasMarginTop },
                selectedCategory === '' ? 'active' : '',
              ]"
              aria-current="true"
            >
              全部
            </a>
            <a
              @click.prevent="filterProducts('服飾')"
              :class="[
                'list-group-item list-group-item-action fw-bold',
                selectedCategory === '服飾' ? 'active' : '',
              ]"
              href="#"
              aria-current="true"
              >服飾</a
            >
            <a
              @click.prevent="filterProducts('配件飾品')"
              :class="[
                'list-group-item list-group-item-action fw-bold',
                selectedCategory === '配件飾品' ? 'active' : '',
              ]"
              href="#"
              aria-current="true"
              >配件飾品</a
            >
            <a
              @click.prevent="filterProducts('其他')"
              :class="[
                'list-group-item list-group-item-action fw-bold',
                selectedCategory === '其他' ? 'active' : '',
              ]"
              href="#"
              aria-current="true"
              >其他</a
            >
          </div>
        </div>
      </div>

      <!-- 產品區塊 -->
      <div class="col-md-9">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-6">
          <div class="col" v-for="product in products" :key="product.id">
            <router-link
              class="card h-100 hover-dashed"
              :to="`/product/${product.id}`"
            >
              <div class="position-relative">
                <button
                  @click.prevent="toggleFollowProduct(product.id)"
                  class="btn border-0 text-primary-500 position-absolute mt-2 top-0 end-0"
                >
                  <i
                    :class="[
                      followList.includes(product.id)
                        ? 'fa-solid'
                        : 'fa-regular',
                      'fa-heart fa-2xl',
                    ]"
                  ></i>
                </button>
                <img
                  :src="product.imageUrl"
                  class="card-img-top aspect-ratio-item"
                  :alt="product.title"
                />
              </div>
              <div class="card-body px-2">
                <h5 class="card-title text-dark fw-bold">
                  {{ product.title }}
                </h5>
                <p class="fs-5">
                  <del
                    v-if="product.origin_price !== product.price"
                    class="text-secondary-500 me-2"
                    >{{ `NT$ ${product.origin_price}` }}</del
                  ><span>{{ `NT$ ${product.price}` }}</span>
                </p>
              </div>
              <div class="p-1">
                <button
                  type="button"
                  class="btn btn-outline-primary-500 w-100 button-hover py-3 fs-5 fw-bold"
                  @click.prevent="addToCart(product.id)"
                >
                  <i class="fa-solid fa-cart-shopping"></i
                  ><span class="ms-2">加入購物車</span>
                </button>
              </div>
            </router-link>
          </div>
        </div>

        <!-- 分頁按鈕 -->
        <div class="row" v-if="pagination.total_pages > 1">
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center pt-10">
              <li class="page-item">
                <button
                  type="button"
                  :class="['page-link', { disabled: !pagination.has_pre }]"
                  aria-label="Previous"
                  @click="getProducts(pagination.current_page - 1)"
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              <li
                v-for="page in pagination.total_pages"
                :key="page"
                :class="[
                  'page-item',
                  { active: page == pagination.current_page },
                ]"
              >
                <button
                  type="button"
                  class="page-link"
                  @click="getProducts(page)"
                >
                  {{ page }}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  :class="['page-link', { disabled: !pagination.has_next }]"
                  aria-label="Next"
                  @click="getProducts(pagination.current_page + 1)"
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      product: {},
      isLoading: false,
      pagination: {},
      pageNum: 1,
      selectedCategory: '',
      followList: [],
      hasMarginTop: false,
      isFirstLoad: true,
    };
  },
  methods: {
    showToast(str) {
      this.$swal
        .mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          width: 280,
          timerProgressBar: false,
          customClass: {
            popup: 'cart-toast-modal',
          },
        })
        .fire({
          icon: 'success',
          title: str,
        });
    },

    // 產品列表
    getProducts(pageNum = 1) {
      // 參數預設值
      this.isLoading = true;
      this.pageNum = pageNum;
      this.$http
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?page=${pageNum}&category=${this.selectedCategory}`
        )
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;

          // 跳轉到產品區塊最上方
          // 判斷是否為第一次載入，第一次載入 "不會" 執行 scrollToProductsBlock
          if (!this.isFirstLoad) {
            this.scrollToProductsBlock();
          } else {
            // 第一次加載後，將 isFirstLoad 設為 false
            this.isFirstLoad = false;
          }
        })
        .catch((err) => {
          console.log(err.response.data.message, 'error');
          this.isLoading = false;
        });
    },
    // 切換類別
    filterProducts(category) {
      if (this.selectedCategory !== category) {
        this.selectedCategory = category;
        this.getProducts();
      }
    },
    addToCart(product_id) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`;
      const data = {
        data: {
          product_id,
          qty: 1,
        },
      };

      this.$http
        .post(url, data)
        .then((res) => {
          // console.log(res.data.message);
          this.showToast('成功加入購物車!');
          // this.getCart();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // 取得購物車資料
    getCart() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        console.log(res.data);
      });
    },
    // 取得收藏列表
    getFollowList() {
      this.followList = JSON.parse(localStorage.getItem('followList')) || [];
    },
    toggleFollowProduct(id) {
      if (this.followList.includes(id)) {
        const followIndex = this.followList.indexOf(id);
        this.followList.splice(followIndex, 1);
      } else {
        this.followList.push(id);
      }

      localStorage.setItem('followList', JSON.stringify(this.followList));
    },
    // 滾動到 sidebar 時，增加 margin-top
    handleScroll() {
      // 設定顯示 fixed-sidebar class 的閾值，這裡假設滾動到200px時啟用
      this.hasMarginTop = window.scrollY > 384;
    },
    // 跳轉到產品區塊最上方
    scrollToProductsBlock() {
      const targetBlock = this.$refs['products-block'];
      if (targetBlock) {
        // Scroll to the target element
        targetBlock.scrollIntoView({
          behavior: 'smooth', // You can use 'auto' or 'smooth' for smooth scrolling
          block: 'start', // You can use 'start', 'center', or 'end'
        });
      }
    },
  },
  mounted() {
    console.clear();
    // 取得產品資料
    this.getProducts();

    // 滾動到 sidebar 時，增加 margin-top 的 class
    window.addEventListener('scroll', this.handleScroll);

    // 取得收藏列表
    this.getFollowList();
    // 取得購物車
    this.getCart();
  },
};
</script>
<style lang="scss" scoped>
@import '../../assets/SCSS/all.scss';

.aspect-ratio-item {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.product-list-banner-img {
  height: 150px;
  @media (min-width: 768px) {
    height: 250px;
  }
}

.darken {
  filter: brightness(90%);
}

.products-list-sidebar {
  transition: margin 0.3s ease-in-out;
}

.cart-toast-modal {
  width: 100px !important;
}
</style>
