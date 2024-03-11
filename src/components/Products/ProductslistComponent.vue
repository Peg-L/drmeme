<template>
  <div class="col-md-9">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-6">
      <div class="col" v-for="product in products" :key="product.id">
        <RouterLink
          class="card h-100 hover-dashed"
          :to="`/products/${product.id}`"
        >
          <div class="position-relative">
            <button
              @click.prevent="toggleFollowProduct(product.id)"
              class="btn border-0 text-primary-500 position-absolute mt-2 top-0 end-0"
            >
              <i
                :class="[
                  followList.includes(product.id) ? 'fa-solid' : 'fa-regular',
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
                >NT$ {{ product.origin_price }}</del
              ><span>NT$ {{ product.price }}</span>
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
        </RouterLink>
      </div>
    </div>
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
            :class="['page-item', { active: page == pagination.current_page }]"
          >
            <button type="button" class="page-link" @click="getProducts(page)">
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
</template>

<script type="module">
import { useProductsStore } from '@/stores/productsStore';
import { useCartStore } from '@/stores/cartStore';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useProductsStore, [
      'products',
      'pageNum',
      'pagination',
      'followList',
    ]),
  },
  methods: {
    ...mapActions(useProductsStore, ['getProducts', 'toggleFollowProduct']),
    ...mapActions(useCartStore, ['addToCart']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
@import '../../assets/SCSS/all.scss';

.cart-toast-modal {
  width: 300px !important;
}

.aspect-ratio-item {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.darken {
  filter: brightness(90%);
}

.products-list-sidebar {
  transition: margin 0.3s ease-in-out;
}
</style>
