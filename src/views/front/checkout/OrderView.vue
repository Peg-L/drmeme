<template>
  <div class="container">
    <div class="row justify-content-center py-10">
      <ProgressbarComponent :currentStatus="2" />
      <div class="col-md-10">
        <div class="row justify-content-center">
          <div class="col-lg-5 p-6 d-flex flex-column justify-content-between">
            <h2 class="fs-5 fw-bold mb-2">訂單明細</h2>
            <div class="overflow-auto" style="max-height: 400px">
              <table class="table fs-7">
                <tbody>
                  <template v-if="carts">
                    <tr
                      class="align-middle"
                      v-for="item in carts"
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
            <div class="d-flex justify-content-between mt-2">
              <div class="px-5 fs-6 fw-bold">總計</div>
              <div class="px-2 fs-6 fw-bold">
                NT$ {{ Math.round(final_total) }}
              </div>
            </div>
          </div>
          <div class="col-lg-5 bg-secondary-100 p-6 rounded-3">
            <h2 class="fs-5 fw-bold mb-2">訂單資訊</h2>
            <VForm ref="form" class="fs-7" @submit="createOrder">
              <div class="mb-3">
                <label for="InputName" class="form-label"
                  >姓名 <span class="required">*</span></label
                >
                <VField
                  :rules="validateName"
                  v-slot="{ field, meta }"
                  name="name"
                  id="InputName"
                >
                  <input
                    v-bind="field"
                    v-model="form.user.name"
                    type="text"
                    class="form-control"
                    :class="{
                      'is-valid': meta.valid && meta.touched,
                      'is-invalid': !meta.valid && meta.touched,
                    }"
                  />
                </VField>
                <ErrorMessage class="error-message" name="userName" />
              </div>
              <div class="mb-3">
                <label for="InputTel" class="form-label"
                  >手機 <span class="required">*</span></label
                >
                <VField
                  :rules="validatePhone"
                  v-slot="{ field, meta }"
                  name="tel"
                  id="InputTel"
                >
                  <input
                    v-bind="field"
                    v-model="form.user.tel"
                    type="tel"
                    class="form-control"
                    :class="{
                      'is-valid': meta.valid && meta.touched,
                      'is-invalid': !meta.valid && meta.touched,
                    }"
                  />
                </VField>
                <ErrorMessage class="error-message" name="phone" />
              </div>
              <div class="mb-3">
                <label for="InputEmail" class="form-label"
                  >Email <span class="required">*</span></label
                >
                <VField
                  :rules="validateEmail"
                  v-slot="{ field, meta }"
                  name="email"
                  id="InputEmail"
                >
                  <input
                    v-bind="field"
                    v-model="form.user.email"
                    type="email"
                    class="form-control"
                    :class="{
                      'is-valid': meta.valid && meta.touched,
                      'is-invalid': !meta.valid && meta.touched,
                    }"
                /></VField>
                <ErrorMessage class="error-message" name="email" />
              </div>
              <div class="mb-3">
                <label for="InputAddress" class="form-label"
                  >地址 <span class="required">*</span></label
                >
                <VField
                  :rules="validateAddress"
                  v-slot="{ field, meta }"
                  name="address"
                  id="InputAddress"
                >
                  <input
                    v-bind="field"
                    v-model="form.user.address"
                    type="text"
                    class="form-control"
                    :class="{
                      'is-valid': meta.valid && meta.touched,
                      'is-invalid': !meta.valid && meta.touched,
                    }"
                  />
                </VField>
                <ErrorMessage class="error-message" name="address" />
              </div>
              <div class="mb-3">
                <label for="InputMessage" class="form-label">備註</label>
                <textarea
                  v-model="form.message"
                  name="message"
                  type="text"
                  class="form-control"
                  id="InputMessage"
                  style="height: 150px"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary-500 text-light fw-bold w-100"
                @click="resetForm"
              >
                提交訂單
              </button>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressbarComponent from '@/components/Cart/ProgressbarComponent.vue';
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import { Form, Field, ErrorMessage, useForm } from 'vee-validate';
import { RouterLink } from 'vue-router';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      currentStatus: 2,
      form: {
        user: {
          name: 'Peggy',
          email: 'stu90233@gmail.com',
          tel: '0911111111',
          address: '台南',
        },
        message: '剁手囉',
      },
    };
  },
  components: {
    ProgressbarComponent,
    VForm: Form,
    VField: Field,
    ErrorMessage,
  },
  computed: {
    ...mapState(useCartStore, ['carts', 'final_total']),
  },
  methods: {
    ...mapActions(useCartStore, ['getCarts', 'showToast']),

    validateName(value) {
      // 如果值為空
      if (!value) {
        return '姓名為必填';
      }

      // 通通過關
      return true;
    },
    validatePhone(value) {
      // 如果值為空
      if (!value) {
        return '手機為必填';
      }
      // 確認是否為正確的 手機 格式
      const phoneRegex = /^09\d{8}$/;

      if (!phoneRegex.test(value)) {
        return '請填寫正確的手機格式';
      }
      // 通通過關
      return true;
    },
    validateEmail(value) {
      // 如果值為空
      if (!value) {
        return 'Email 為必填';
      }
      // 確認是否為正確的 email 格式
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return '請填寫正確的 Email 格式';
      }
      // 通通過關
      return true;
    },
    validateAddress(value) {
      // 如果值為空
      if (!value) {
        return '地址為必填';
      }

      // 通通過關
      return true;
    },

    createOrder() {
      const order = this.form;
      console.log(order);

      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order`, { data: order })
        .then((res) => {
          const { message, orderId } = res.data;
          this.showToast(message);
          this.$refs.form.resetForm();

          this.$router.push(`/payment/${orderId}`);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    const { meta } = useForm();
    console.log(meta);

    this.getCarts();
  },
};
</script>

<style lang="scss" scoped>
.cart-image {
  height: 80px;
  width: 80px;
  object-fit: cover;
}

.form-label {
  margin-bottom: 1px;
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
  background: #888;
}

/* 定義滾動條當被滾動時的顏色 */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.error-message {
  color: #ff3535;
  font-weight: bold;
  margin-top: 4px;
  display: block;
}

.required {
  color: #dd1313;
}
</style>
