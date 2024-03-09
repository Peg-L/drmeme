<template>
  <!-- 限量周邊 -->
  <div class="bg-secondary-200">
    <div
      class="container mt-20 mt-md-0 pt-5 pt-sm-10 pt-md-20 d-flex flex-column align-items-center"
    >
      <!-- 周邊標題 -->
      <TitleBlockComponent title="SHOPPING" text2="限量週邊" />

      <!-- 周邊輪播圖 -->
      <div class="col-12">
        <swiper-container
          class="shopping-swiper"
          :space-between="spaceBetween"
          :pagination="false"
          :navigation="false"
          :breakpoints="{
            375: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }"
          @swiperprogress="onProgress"
          @swiperslidechange="onSlideChange"
        >
          <swiper-slide>
            <div class="slide-products-img slide-products-img-1 mb-4"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-products-img slide-products-img-2 mb-4"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-products-img slide-products-img-3 mb-4"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-products-img slide-products-img-4 mb-4"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-products-img slide-products-img-5 mb-4"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-products-img slide-products-img-6 mb-4"></div>
          </swiper-slide>
        </swiper-container>
      </div>
      <!-- 圖片切換按鈕 -->
      <div
        class="navigation position-relative mt-5 mt-md-11 d-flex justify-content-center align-items-start gap-5"
      >
        <div
          class="swiper-button-prev"
          type="button"
          @click="postsSlidePrev('.shopping-swiper')"
        >
          <span class="material-symbols-outlined fs-1">
            arrow_circle_left
          </span>
        </div>
        <div
          class="swiper-button-next"
          type="button"
          @click="postsSlideNext('.shopping-swiper')"
        >
          <span class="material-symbols-outlined fs-1">
            arrow_circle_right
          </span>
        </div>
      </div>
    </div>
    <!-- 波浪動畫 -->
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(255,255,255,0.7"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
        />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
    </svg>
  </div>
</template>

<script>
import TitleBlockComponent from '@/components/Homepage/TitleBlockComponent.vue';
import { register } from 'swiper/element/bundle';

export default {
  components: {
    TitleBlockComponent,
  },
  data() {
    return {
      spaceBetween: 24,
    };
  },
  beforeMount() {
    register();
  },
  methods: {
    postsSlidePrev(el) {
      const swiperEl = document.querySelector(el);
      swiperEl.swiper.slidePrev();
    },
    postsSlideNext(el) {
      const swiperEl = document.querySelector(el);
      swiperEl.swiper.slideNext();
    },
  },
};
</script>

<style lang="scss" scoped>
// 周邊
.slide-products-img {
  height: 300px;

  &-1 {
    background: url('../../assets/images/products/heart-t-shirt-w1-1.jpg')
      no-repeat center / cover;
  }

  &-2 {
    background: url('../../assets/images/products/morphine-t-shirt-w1-1.png')
      no-repeat center / cover;
  }
  &-3 {
    background: url('../../assets/images/products/morphine-hoody-b1.jpg')
      no-repeat center / cover;
  }
  &-4 {
    background: url('../../assets/images/products/heart-hoody-w1-front.jpg')
      no-repeat center / cover;
  }
  &-5 {
    background: url('../../assets/images/products/heart-t-shirt-b1-2.png')
      no-repeat center / cover;
  }
  &-6 {
    background: url('../../assets/images/products/heart-hoody-b1-front.jpg')
      no-repeat center / cover;
  }
}

// 海浪動畫
.waves {
  position: relative;
  color: red;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
}

// 切換貼文按鈕
.swiper-button-prev,
.swiper-button-next {
  line-height: 0;
  user-select: none;
}
</style>
