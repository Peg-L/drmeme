<template>
  <div class="col-12 col-md-6 position-relative mb-10">
    <ul class="progressbar">
      <li
        :class="{
          active: currentStatus >= 1,
          'text-secondary-600': this.$route.path !== '/cart',
          'fw-bold text-secondary-700': this.$route.path === '/cart',
        }"
      >
        購物車
      </li>
      <li
        :class="{
          active: currentStatus >= 2,
          'text-secondary-600': this.$route.path !== '/order',
          'fw-bold text-secondary-700': this.$route.path === '/order',
        }"
      >
        填寫資料
      </li>
      <li
        :class="{
          active: currentStatus >= 3,
          'text-secondary-600': !$route.path.startsWith('/payment'),
          'fw-bold text-secondary-700': $route.path.startsWith('/payment'),
        }"
      >
        確認付款
      </li>
      <li
        :class="{
          active: currentStatus >= 4,
          'text-secondary-600': !$route.path.startsWith('/checkout'),
          'fw-bold text-secondary-700': $route.path.startsWith('/checkout'),
        }"
      >
        訂單完成
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['currentStatus'],
};
</script>
<style lang="scss">
@import '../../assets/SCSS/all.scss';

// progressbar
.progressbar li {
  width: 25%;
  position: relative;
  float: left;
  list-style-type: none;
  font-size: 16px;
  color: $dark;
  text-align: center;
  counter-increment: step;
}

.progressbar li::before {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: 4px auto 12px auto;
  background: $secondary-500;
  border-radius: 3px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  content: counter(step);
}

// progressbar 連接線
.progressbar li:after {
  content: '';
  width: 100%;
  height: 3px;
  background: $secondary-500;
  position: absolute;
  left: -50%;
  top: 22px; // mt + 高度/2 - 本身高度/2 = 4 + 20 - 2 = 22
  z-index: -1;
}

.progressbar li:first-child:after {
  // 第一步驟前不需要連接線
  content: none;
}

/* active 狀態的元素改成 primary-500 */
.progressbar li.active:before,
.progressbar li.active:after {
  background: $primary-500;
  color: $light;
}
</style>
