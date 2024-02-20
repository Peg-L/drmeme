<template>
  <div
    class="container"
    :class="followList.length == 0 ? 'py-15 py-md-30' : 'py-6 py-md-10'"
  >
    <div class="row" v-if="followList.length > 0">
      <h1 class="fw-bold">收藏清單</h1>
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
    <div
      v-else
      class="d-flex flex-column flex-md-row justify-content-md-center align-items-center gap-md-14"
    >
      <img
        src="../../assets/images/cart/empty-followList-meme.jpg"
        alt="empty followList"
        style="width: 300px"
      />
      <div class="d-flex flex-column align-items-md-start">
        <p class="fs-5 fw-bold mt-6">您目前沒有收藏任何商品</p>
        <router-link
          to="/products"
          class="btn btn-primary-500 text-light mt-2 fs-6 fw-bold"
          aria-current="page"
          >查看商品</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useProductsStore, ['followList', 'products']),
  },
  methods: {
    ...mapActions(useProductsStore, [
      'getFollowList',
      'getProducts',
      'toggleFollowProduct',
    ]),
    ...mapActions(useCartStore, ['addToCart']),
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
</style>
