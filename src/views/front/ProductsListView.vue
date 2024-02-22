<template>
  <!-- 限量週邊 banner -->
  <BannerComponent
    :title="'限量周邊'"
    :subtitle="'Limited Edition Merch'"
    :image-name="imageName"
    :image-alt="'Anya wants this'"
  />

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
import BannerComponent from '@/components/BannerComponent.vue';

export default {
  components: {
    ProductslistComponent,
    ProductsCategoryComponent,
    BannerComponent,
  },
  data() {
    return {
      imageName: 'products-list-banner-3.png',
    };
  },
  methods: {},
};
</script>

<style lang="scss"></style>
