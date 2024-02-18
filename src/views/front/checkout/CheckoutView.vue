<template>
  <div class="container">
    <div class="row justify-content-center py-10">
      <ProgressbarComponent :currentStatus="4" />
      <div class="col-md-10 d-flex flex-column align-items-center pb-4">
        <img
          style="width: 300px"
          src="https://i.imgflip.com/8g54ng.jpg"
          alt="thank you"
        />
        <div class="p-4 text-center">
          <h1>感謝您的購買與支持</h1>
          <p class="mt-2">
            我們將盡快為您出貨，商品將於 5~10 天內送達，請留意訊息通知！
          </p>
        </div>
      </div>
      <div class="col-sm-10 col-lg-8">
        <div class="row">
          <div class="col-md-7">
            <div class="py-2 py-md-4">
              <h2 class="fs-5 fw-bold mb-2">訂購商品</h2>
              <div class="table-wrapper">
                <table class="table fs-7">
                  <tbody>
                    <template v-if="order.products">
                      <tr
                        class="align-middle"
                        v-for="item in order.products"
                        :key="item.id"
                      >
                        <td>
                          <img
                            class="cart-image"
                            :src="item.product.imageUrl"
                            :alt="item.product.title"
                          />
                        </td>
                        <td class="col-6">
                          {{ item.product.title }} x{{ item.qty }}
                        </td>
                        <td class="col-3 text-end">
                          NT$ {{ item.product.price }}
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="p-2 p-md-4 border rounded-3 bg-secondary-100">
              <h2 class="fs-5 fw-bold mb-2">訂單資訊</h2>
              <table class="table fs-7 mb-0">
                <tbody>
                  <tr>
                    <th width="100">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td :class="order.is_paid ? 'success' : 'warning'">
                      {{ order.is_paid ? '已付款' : '未付款' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-10 d-flex justify-content-center mt-6">
        <RouterLink
          class="btn btn-primary-500 ms-2 text-light fw-bold"
          to="/products"
        >
          繼續購物
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressbarComponent from '@/components/Cart/ProgressbarComponent.vue';
import { RouterLink } from 'vue-router';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      order: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
      },
      orderId: '',
    };
  },
  components: {
    ProgressbarComponent,
    RouterLink,
  },
  computed: {},
  methods: {
    getOrder() {
      const orderId = this.$route.params.orderId;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${orderId}`)
        .then((res) => {
          const { order } = res.data;
          console.log('order', order);

          this.order = order;
          console.log('this.order', this.order);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    payOrder() {
      this.orderId = this.$route.params.orderId;
      console.log('this.orderId', this.orderId);

      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${this.orderId}`)
        .then((res) => {
          console.log('pay', res);
          this.getOrder();
          this.$router.push('/checkout');
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>

<style lang="scss">
.table-wrapper {
  max-height: 400px; /* 限制表格的最大高度 */
  overflow-y: auto; /* 在超出高度时添加垂直滚动条 */
}

.cart-image {
  height: 80px;
  width: 80px;
  object-fit: cover;
}

.warning {
  color: rgb(216, 47, 47);
  font-weight: bold;
}
.success {
  color: rgb(53, 188, 53);
  font-weight: bold;
}

/* 將滾動條變細 */
::-webkit-scrollbar {
  width: 8px; /* 指定滾動條的寬度 */
}

/* 定義滾動條的輪廓顏色和滾動條的背景顏色 */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* 定義滾動條的前景顏色 */
::-webkit-scrollbar-thumb {
  background: rgb(215, 214, 214);
}

/* 定義滾動條當被滾動時的顏色 */
::-webkit-scrollbar-thumb:hover {
  background: rgb(157, 157, 157);
}
</style>
