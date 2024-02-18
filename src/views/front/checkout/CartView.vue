<template>
  <div class="container py-10">
    <div v-if="carts.length == 0">
      <p class="fs-5">您還沒購買任何商品</p>
      <router-link
        to="/products"
        class="btn btn-primary-500 text-light mt-3 fs-5 fw-bold"
        aria-current="page"
        >前往購買</router-link
      >
      <!-- TODO: 補推薦購買 swiper -->
    </div>
    <div v-else class="row justify-content-center">
      <ProgressbarComponent :currentStatus="1" />
      <div class="col-12 col-md-10">
        <CartlistComponent />
        <div class="d-flex justify-content-between">
          <div>
            <p class="fs-6 fw-bold">優惠券</p>
            <div class="input-group my-2">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                v-model="coupon_code"
              />
              <button
                class="btn btn-primary-500 text-light"
                type="button"
                id="button-addon2"
                @click="useCoupon()"
              >
                使用
              </button>
            </div>
          </div>
          <table class="table table-borderless w-auto">
            <tbody v-if="carts">
              <tr>
                <th class="px-5" scope="row">共 3 件商品</th>
                <td class="px-5">商品金額</td>
                <td class="px-5">NT$ {{ total }}</td>
              </tr>
              <tr>
                <th class="px-5" scope="row"></th>
                <td class="px-5">商品折扣</td>
                <td class="px-5">
                  NT$ - {{ total - Math.round(final_total) }}
                </td>
              </tr>
              <tr>
                <th class="px-5" scope="row"></th>
                <td class="px-5 fs-4 fw-bold">總計</td>
                <td class="px-5 fs-4 text-danger fw-bold">
                  NT$ {{ Math.round(final_total) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-flex justify-content-between">
          <RouterLink
            class="btn btn-outline-primary-500 button-hover fw-bold"
            type="button"
            to="/products"
          >
            <i class="fa-solid fa-caret-left me-2"></i>繼續購物
          </RouterLink>
          <RouterLink
            class="btn btn-primary-500 text-light fw-bold"
            type="button"
            to="/order"
          >
            下一步<i class="fa-solid fa-caret-right ms-2"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- 購物車列表 -->
  <!-- <div class="text-end">
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cart.carts">
          <tr v-for="item in cart.carts" :key="item.id">
            <td>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                :disabled="item.id === loadingItem"
                @click="deleteCartItem(item)"
              >
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingItem === item.id"
                ></i>
                x
              </button>
            </td>
            <td>
              資料結構設計：對後端而言，產品名稱、描述等並非重要資料，所以放在內層
              {{ item.product.title }}
            </td>
            <td>
              <div class="input-group input-group-sm">
                <select
                  name=""
                  id=""
                  class="form-control"
                  v-model="item.qty"
                  :disabled="item.id === loadingItem"
                  @change="updateCartItem(item)"
                >
                  <option :value="i" v-for="i in 20" :key="`${i}12345`">
                    {{ i }}
                  </option>
                </select>
              </div>
            </td>
            <td class="text-end">
              <small v-if="cart.final_total !== cart.total" class="text-success"
                >折扣價：</small
              >
              {{ item.final_total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ cart.total }}</td>
        </tr>
        <tr v-if="cart.final_total !== cart.total">
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ cart.final_total }}</td>
        </tr>
      </tfoot>
    </table>
  </div> -->
</template>

<script>
import ProgressbarComponent from '@/components/Cart/ProgressbarComponent.vue';
import CartlistComponent from '@/components/Cart/CartlistComponent.vue';
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useProductsStore } from '@/stores/productsStore';
import { useCartStore } from '@/stores/cartStore';

export default {
  components: {
    ProgressbarComponent,
    CartlistComponent,
  },
  data() {
    return {
      tempProduct: {},
      productId: '',
      loadingItem: '', // 存 id
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  computed: {
    ...mapState(useCartStore, ['carts', 'total', 'final_total']),
    ...mapWritableState(useCartStore, ['coupon_code']),
  },
  methods: {
    ...mapActions(useCartStore, ['getCarts', 'useCoupon']),

    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>
