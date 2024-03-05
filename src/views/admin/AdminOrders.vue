<template>
  <div class="py-3">
    <div class="d-flex justify-content-between">
      <h1 class="fs-4 fw-bold">訂單管理</h1>
      <button
        type="button"
        class="btn btn-outline-secondary-700 fw-bold"
        @click="openModal('deleteAll', order)"
      >
        刪除所有訂單
      </button>
    </div>
    <table class="table table-hover mt-4 align-middle">
      <thead>
        <tr>
          <th>訂單日期</th>
          <th>訂購人資訊</th>
          <th>訂購商品</th>
          <th>金額</th>
          <th width="120">付款狀態</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ getDate(order.create_at) }}</td>
          <td>
            <ul>
              <li>{{ order.user.name }}</li>
              <li>{{ order.user.email }}</li>
              <li>{{ order.user.tel }}</li>
            </ul>
          </td>
          <td>
            <ul v-for="product in order.products" :key="product.product_id">
              <li>{{ product.product.title }} x {{ product.qty }}</li>
            </ul>
          </td>
          <td>NT$ {{ order.total }}</td>
          <td
            class="fw-bold"
            :class="order.is_paid ? 'text-success' : 'text-danger'"
          >
            {{ order.is_paid ? '已付款' : '未付款' }}
          </td>
          <td>
            <button
              type="button"
              class="btn text-dark fw-bold"
              @click="openModal('view', order)"
            >
              <i class="fa-solid fa-eye"></i>
            </button>
            <button
              type="button"
              class="btn text-dark fw-bold"
              @click="openModal('delete', order)"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <PaginationComponent :pages="pages" :get-items="getOrders" />
      <!-- emit 寫法 -->
      <!-- <PaginationComponent :pages="pages" @change-page="getOrders" /> -->
    </div>
  </div>

  <!-- 編輯訂單 modal -->
  <div
    class="modal fade"
    ref="orderModal"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div
      class="modal-dialog modal-dialog-scrollable modal-xl modal-fullscreen-xl-down"
    >
      <div class="modal-content">
        <div class="modal-header bg-primary-500">
          <h1 class="modal-title fs-5 fw-bold text-light" id="orderModalLabel">
            查看訂單
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-5">
              <div class="border border-secondary-600 p-4 rounded-3">
                <h2 class="fs-5 fw-bold">訂單資料</h2>
                <div class="mt-3">
                  <label for="inputOrderNumber" class="form-label mb-1"
                    >訂單編號</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputOrderNumber"
                    :value="tempOrder.id"
                    readonly
                  />
                </div>
                <div class="mt-3">
                  <label for="inputOrderDate" class="form-label mb-1"
                    >訂單日期</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputOrderDate"
                    :value="getDate(tempOrder.create_at)"
                    readonly
                  />
                </div>
                <div class="mt-3">
                  <label for="inputOrderPaid" class="form-label mb-1"
                    >訂單付款狀態</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    :class="tempOrder.is_paid ? 'text-success' : 'text-danger'"
                    id="inputOrderPaid"
                    :value="tempOrder.is_paid ? '已付款' : '未付款'"
                    readonly
                  />
                </div>
              </div>
              <div class="border border-secondary-600 p-4 mt-6 rounded-3">
                <h2 class="fs-5 fw-bold">訂購人資訊</h2>
                <div class="mt-3">
                  <label for="inputOrderPerson" class="form-label mb-1"
                    >訂購人姓名</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputOrderPerson"
                    :value="tempOrder.user?.name"
                    readonly
                  />
                </div>
                <div class="mt-3">
                  <label for="inputOrderTel" class="form-label mb-1"
                    >訂購人手機</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputOrderTel"
                    :value="tempOrder.user?.tel"
                    readonly
                  />
                </div>
                <div class="mt-3">
                  <label for="inputOrderEmail" class="form-label mb-1"
                    >訂購人Email</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputOrderEmail"
                    :value="tempOrder.user?.email"
                    readonly
                  />
                </div>
                <div class="mt-3">
                  <label for="inputOrderAddress" class="form-label mb-1"
                    >收件地址</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputOrderAddress"
                    :value="tempOrder.user?.address"
                    readonly
                  />
                </div>
                <div class="mt-3">
                  <label for="inputOrderMsg" class="form-label mb-1"
                    >訂單備註</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputOrderMsg"
                    :value="tempOrder.message"
                    readonly
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="border border-secondary-600 p-4 rounded-3">
                <h2 class="fs-5 fw-bold">訂購商品</h2>
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <td>縮圖</td>
                      <td>品項</td>
                      <td width="90">數量</td>
                      <td class="text-end">小計</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in tempOrder.products" :key="product.id">
                      <td>
                        <img
                          :src="product.product.imageUrl"
                          :alt="product.product.title"
                          class="thumbnail"
                        />
                      </td>
                      <td>
                        <p class="mb-0">
                          {{ product.product.title }}
                        </p>
                      </td>
                      <td>{{ product.qty }}</td>
                      <td class="text-end">
                        NT${{ Math.round(product.final_total) }}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3" class="fs-3">總金額</td>
                      <td class="text-end fs-3">NT$ {{ tempOrder.total }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 刪除訂單 modal -->
  <div
    class="modal fade"
    ref="delOrderModal"
    tabindex="-1"
    aria-labelledby="delOrderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delOrderModalLabel" class="modal-title">
            <span>刪除{{ delAll ? '所有' : '該筆' }}訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p v-if="!delAll">
            是否刪除編號
            <strong class="text-danger">{{ tempOrder.id }} 訂單</strong>?
          </p>
          <p v-else>是否刪除所有訂單</p>
          <p class="fw-bold mt-4">** 刪除後將無法恢復 **</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            @click="delAll ? deleteAllOrders() : deleteOrder()"
          >
            確認刪除</button
          ><button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import Modal from 'bootstrap/js/dist/modal';
import getDate from '@/mixins/getDate.js';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
let orderModal;
let delOrderModal;

export default {
  components: {
    PaginationComponent,
  },
  data() {
    return {
      orders: [],
      tempOrder: {},
      pages: {},
      delAll: false,
    };
  },
  mixins: [getDate],
  methods: {
    getOrders(page = 1) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=${page}`;
      // 取出 Token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)drmemeToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      this.$http.defaults.headers.common.Authorization = token;

      this.$http
        .get(url)
        .then((res) => {
          console.log(res.data);

          this.orders = res.data.orders;
          this.pages = res.data.pagination;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal(status, order) {
      if (status === 'view') {
        orderModal.show();
        this.tempOrder = { ...order };
      } else if (status === 'delete') {
        this.delAll = false;
        delOrderModal.show();
        this.tempOrder = { ...order };
      } else if (status === 'deleteAll') {
        this.delAll = true;
        delOrderModal.show();
      }
    },
    viewOrder(id) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${id}`;

      this.$http.put(url, { data: this.tempOrder }).then(() => {
        this.getOrders();
        orderModal.hide();
      });
    },
    deleteOrder() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`;

      this.$http.delete(url).then(() => {
        this.getOrders();
        delOrderModal.hide();
      });
    },
    deleteAllOrders() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders/all`;

      this.$http.delete(url).then(() => {
        this.getOrders();
        delOrderModal.hide();
      });
    },
  },
  mounted() {
    this.getOrders();
    orderModal = new Modal(this.$refs.orderModal);
    delOrderModal = new Modal(this.$refs.delOrderModal);
  },
};
</script>
