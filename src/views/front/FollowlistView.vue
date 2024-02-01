<template>
  <div class="container py-10 py-md-20">
    <h1 class="fw-bold">收藏清單</h1>
    <div class="row" v-if="followList.length > 0">
      <div class="col-md-12">
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-6 mt-3"
        >
          <template v-for="product in products" :key="product.id">
            <div class="col" v-if="followList.includes(product.id)">
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
          </template>
        </div>
      </div>
    </div>
    <div v-else class="mt-3">
      <p class="fs-5">目前沒有收藏的商品</p>
      <router-link
        to="/products"
        class="btn btn-primary-500 text-light mt-3 fs-5"
        aria-current="page"
        >前往選購</router-link
      >
    </div>
  </div>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      selectedCategory: '',
      followList: [],
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
    getProducts() {
      // 參數預設值
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
          console.log('products', this.products);
        })
        .catch((err) => {
          console.log(err.response.data.message, 'error');
        });
    },
    // 取得收藏列表
    getFollowList() {
      this.followList = JSON.parse(localStorage.getItem('followList')) || [];
      console.log('followList', this.followList);
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
  },
  mounted() {
    this.getProducts();
    this.getFollowList();
  },
};
</script>
<style lang="scss" scoped>
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
</style>
