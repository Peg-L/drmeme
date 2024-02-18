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
  <div class="container py-10 py-md-20" id="products-block">
    <div class="row">
      <!-- 產品分類切換 -->
      <ProductsCategoryComponent />

      <!-- 產品列表 -->
      <ProductslistComponent />
    </div>
  </div>
</template>
<script type="module">
import ProductsCategoryComponent from '@/components/Products/ProductsCategoryComponent.vue';
import ProductslistComponent from '@/components/Products/ProductslistComponent.vue';

export default {
  components: {
    ProductslistComponent,
    ProductsCategoryComponent,
  },
  methods: {},
};
</script>

<style lang="scss">
.product-list-banner-img {
  height: 150px;
  @media (min-width: 768px) {
    height: 250px;
  }
}
</style>
