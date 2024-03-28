<template>
  <div class="container pb-10 pb-md-20">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div></div>
        <div v-for="image in product.imagesUrl" :key="image">
          <img
            class="aspect-ratio-img"
            :src="image['1000w']"
            alt="其他圖片"
            :srcset="`${image['300w']} 300w, ${image['600w']} 600w, ${image['1000w']} 1000w`"
          />
        </div>
      </div>
      <div class="col-md-5 sticky-top vh-100">
        <div class="ms-10 mt-8" :class="{ 'mt-20': hasMarginTop }">
          <div class="d-flex justify-content-end">
            <button
              @click.prevent="toggleFollowProduct(product.id)"
              class="btn border-0 text-primary-500 mt-2"
            >
              <i
                :class="[
                  followList.includes(product.id) ? 'fa-solid' : 'fa-regular',
                  'fa-heart fa-xl',
                ]"
              ></i>
            </button>
          </div>
          <h1 class="fs-2 fw-bold">{{ product.title }}</h1>
          <h2 class="fs-3 fw-bold mt-2">
            NT$ {{ product.price
            }}<del
              v-if="product.price !== product.origin_price"
              class="text-secondary-500 fs-5 ms-2"
              >NT$ {{ product.origin_price }}</del
            >
          </h2>
          <div class="row rounded-2 mt-6 mt-md-10 align-items-center">
            <div class="col-md-6">
              <div class="input-group">
                <button
                  class="btn btn-outline-secondary border"
                  type="button"
                  @click="updateNum('minus')"
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
                <input
                  type="text"
                  class="form-control text-center"
                  aria-label="product number with two button addons"
                  v-model="itemNum"
                />
                <button
                  class="btn btn-outline-secondary border"
                  type="button"
                  @click="updateNum('plus')"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <button
                type="button"
                class="btn btn-primary-500 text-light py-2 fs-6 fw-bold"
                @click.prevent="addToCart(product.id, itemNum)"
              >
                <i class="fa-solid fa-cart-shopping"></i
                ><span class="ms-2">加入購物車</span>
              </button>
            </div>
          </div>
          <div class="mt-6 mt-md-10">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="description-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#description-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="description-tab-pane"
                  aria-selected="true"
                >
                  商品資訊
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="wash-way-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#wash-way-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="wash-way-tab-pane"
                  aria-selected="false"
                >
                  洗滌方式
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="size-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#size-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="size-tab-pane"
                  aria-selected="false"
                >
                  尺寸指南
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active p-6"
                id="description-tab-pane"
                role="tabpanel"
                aria-labelledby="description-tab"
                tabindex="0"
                v-html="product.description"
              ></div>
              <div
                class="tab-pane fade p-6"
                id="wash-way-tab-pane"
                role="tabpanel"
                aria-labelledby="wash-way-tab"
                tabindex="0"
              >
                <div class="scrollable-content">
                  <ol>
                    <li>1. 深淺色請分開洗滌，以避免造成互相移染。</li>
                    <li>
                      2.
                      請放入大小適中之細網洗衣袋細中弱速水洗，以保持商品型態。
                    </li>
                    <li>
                      3. 洗滌時，水溫請低於30℃；請使用中性洗劑；請勿浸泡。
                    </li>
                    <li>
                      4. 請勿使用漂白劑、螢光增白劑及衣物柔軟劑，以免破壞布料。
                    </li>
                    <li>
                      5.
                      不可濕放，以免衣物染色；請弱速輕脫水，不可烘乾，以免衣物縮水。
                    </li>
                    <li>
                      6.
                      清洗後請快速調整商品型態並平放陰乾即可，不可擰扭，勿直接曝曬於陽光下
                    </li>
                    <li>7. 不可熨燙。</li>
                    <li>8. 穿著時，請留意避免與配件包包等他物接觸摩擦。</li>
                    <li>
                      9.
                      毛衣外套/特殊立體針織毛衣/長毛類針織毛衣等商品建議送專業乾洗。
                    </li>
                  </ol>
                </div>
              </div>
              <div
                class="tab-pane fade p-6"
                id="size-tab-pane"
                role="tabpanel"
                aria-labelledby="size-tab"
                tabindex="0"
              >
                <img
                  src="../../assets/images/products/size-t-short.jpg"
                  alt="尺寸表"
                  class="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-10 justify-content-center">
      <div class="col-md-10">
        <h2 class="fs-4 fw-bold mb-4">推薦商品</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-6">
          <div
            class="col"
            v-for="product in recommendProducts"
            :key="product.id"
          >
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
                      followList.includes(product.id)
                        ? 'fa-solid'
                        : 'fa-regular',
                      'fa-heart fa-2xl',
                    ]"
                  ></i>
                </button>
                <img
                  class="card-img-top aspect-ratio-item"
                  :src="product.imageUrl['1000w']"
                  alt="product.title"
                  :srcset="`${product.imageUrl['300w']} 300w, ${product.imageUrl['600w']} 600w, ${product.imageUrl['1000w']} 1000w`"
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
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';
import { mapActions, mapState } from 'pinia';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      itemNum: 1,
      hasMarginTop: false,
    };
  },
  computed: {
    ...mapState(useProductsStore, [
      'followList',
      'products',
      'recommendProducts',
    ]),
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler() {
        if (this.$route.params.id) {
          this.getProduct();
        }
      },
    },
  },
  methods: {
    ...mapActions(useCartStore, ['addToCart']),
    ...mapActions(useProductsStore, ['toggleFollowProduct', 'getProducts']),
    getProduct() {
      console.log(this.$route.params);
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
        });
    },
    updateNum(operator) {
      if (operator === 'plus') {
        this.itemNum++;
      } else {
        this.itemNum = Math.max(this.itemNum - 1, 1);
      }
    },
    handleScroll() {
      // 設定顯示 fixed-sidebar class 的閾值，這裡假設滾動到 384px 時啟用
      this.hasMarginTop = window.scrollY > 80;
    },
  },
  mounted() {
    this.getProduct();
    this.getProducts();

    // 監聽滾動距離，執行 handleScroll
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
.aspect-ratio-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.aspect-ratio-item {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.scrollable-content {
  height: 250px;
  overflow-y: auto;
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
