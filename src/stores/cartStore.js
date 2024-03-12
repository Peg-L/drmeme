import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';
import debounce from 'lodash/debounce';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    carts: [],
    total: 0,
    final_total: 0,
    temp_code: '',
    coupon_code: '',
    coupon_title: '',
    coupon_success: null,
    coupon_error: null,
  }),
  actions: {
    // 取得購物車資料
    getCarts() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`;
      axios.get(url).then((res) => {
        this.coupon_success = false;
        this.carts = res.data.data.carts;
        this.total = res.data.data.total;
        this.final_total = res.data.data.final_total;

        if (this.carts[0] && this.carts[0].coupon !== undefined) {
          this.coupon_success = true;
          this.coupon_code = this.carts[0].coupon.code;
          this.coupon_title = this.carts[0].coupon.title;
        }
      });
    },

    // 購物車更新商品數量
    updateCartItemQty(item, operator) {
      // 加減數量
      operator === 'plus' ? item.qty++ : (item.qty = Math.max(item.qty - 1, 1));

      this.debouncedUpdateCartItemQty(item);
    },

    debouncedUpdateCartItemQty: debounce(function (item) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`;
      const data = {
        data: {
          product_id: item.product_id,
          qty: item.qty,
        },
      };

      axios.put(url, data).then((res) => {
        console.log(res);
        this.getCarts();
      });
    }, 300),

    // 刪除單一品項
    deleteCartItem(item) {
      this.loadingItem = item.id;
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`;
      axios
        .delete(url)
        .then((res) => {
          this.showToast('成功刪除該商品');
          this.loadingItem = '';
          this.getCarts();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    // 清空購物車
    deleteAllCarts() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-secondary-500 ms-2',
          cancelButton: 'btn btn-primary-500 text-light',
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: '您確定要清空購物車?',
          text: '清空後無法復原',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '確定',
          cancelButtonText: '我再想想',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`;
            axios
              .delete(url)
              .then((res) => {
                this.getCarts();
              })
              .catch((err) => {
                alert(err.response.data.message);
              });

            Swal.fire({
              title: '成功清空購物車!',
              text: '繼續尋找您喜歡的商品吧',
              icon: 'success',
              confirmButtonColor: '#e08700',
            });
          }
        });
    },

    // 加入購物車
    addToCart(product_id, qty = 1) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`;
      const data = {
        data: {
          product_id,
          qty,
        },
      };
      axios
        .post(url, data)
        .then((res) => {
          console.log('addToCart', res.data.message);
          this.showToast('成功加入購物車!');
          this.getCarts();
        })
        .catch((err) => {
          console.error(err);
        });
    },

    // 成功加入購物車提示
    showToast(str) {
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        width: 280,
        timerProgressBar: false,
        customClass: {
          popup: 'cart-toast-modal',
        },
      }).fire({
        icon: 'success',
        title: str,
      });
    },

    // 使用優惠券
    useCoupon() {
      if (this.temp_code) {
        const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/coupon`;
        const data = {
          data: {
            code: this.temp_code,
          },
        };
        axios
          .post(url, data)
          .then((res) => {
            console.log(typeof this.temp_code);

            this.coupon_success = true;
            this.coupon_error = false;

            console.log('useCoupon', res.data.message);
            this.temp_code = '';
            this.showToast('成功套用優惠券!');
            this.getCarts();
          })
          .catch((err) => {
            this.coupon_success = false;
            this.coupon_error = true;
            console.log(err);
            this.temp_code = '';
          });
      }
    },
  },
});
