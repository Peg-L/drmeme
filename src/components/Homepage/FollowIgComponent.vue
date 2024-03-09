<template>
  <!-- 首頁 追蹤 IG 區塊 -->
  <div class="container pt-20 pt-md-30 d-flex flex-column align-items-center">
    <!-- 追蹤 IG 標題 -->
    <TitleBlockComponent
      title="INSTAGRAM"
      text1="一天一迷因"
      text2="醫生遠離我"
    />

    <!-- 追蹤 IG 追蹤區塊 -->
    <div
      class="w-100 w-md-auto border border-4 border-dark d-flex flex-column flex-md-row justify-content-between align-items-center p-6 p-md-8 bdrs-4"
    >
      <div
        class="d-flex flex-column flex-md-row justify-content-md-between align-items-center mb-6 mb-md-0 me-md-10"
      >
        <img
          src="../../assets/images/followIG/ig-avatar.png"
          alt="drmeme 頭像"
          class="w-115px mb-4 mb-md-0 me-md-5"
        />
        <div class="text-center text-md-start">
          <p class="fs-4 fw-bold mb-1 mb-md-2">@doctormeme_tw</p>
          <p>983 則貼文 <span class="ms-4">100K 粉絲</span></p>
        </div>
      </div>
      <div>
        <a
          href="https://www.instagram.com/doctormeme_tw"
          target="_blank"
          class="btn w-100 py-4 px-15 bg-light border border-4 border-dark bdrs-4 fs-5 fs-md-4 fw-bold button-hover"
          >追蹤 IG</a
        >
      </div>
    </div>
  </div>
  <!-- 追蹤 IG 貼文區塊 -->
  <div class="bg-dark bg-md-transparent py-3 py-md-0 mt-4 mt-md-20">
    <swiper-container
      class="w-100 bg-posts container posts-swiper"
      :space-between="spaceBetween"
      :pagination="false"
      :navigation="false"
      :breakpoints="{
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide>
        <div class="slide-img slide-img-1 mb-4"></div>
        <div
          class="d-flex justify-content-between text-light fw-bold text-light"
        >
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 5,679
          </div>
          <div>202/03/06</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-2 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 11.6K
          </div>
          <div>2023/03/01</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-3 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 7,526
          </div>
          <div>2023/02/02</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-4 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 1,427
          </div>
          <div>2023/12/01</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-5 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 2,499
          </div>
          <div>2023/02/02</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-6 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 3,663
          </div>
          <div>2023/05/11</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-7 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 5,981
          </div>
          <div>2023/01/30</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-8 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 31.8K
          </div>
          <div>2022/12/25</div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
  <!-- 貼文切換按鈕 -->
  <div
    class="navigation position-relative mt-5 mt-md-11 d-flex justify-content-center align-items-start gap-5"
  >
    <div
      class="swiper-button-prev"
      type="button"
      @click="postsSlidePrev('.posts-swiper')"
    >
      <span class="material-symbols-outlined fs-1"> arrow_circle_left </span>
    </div>
    <div
      class="swiper-button-next"
      type="button"
      @click="postsSlideNext('.posts-swiper')"
    >
      <span class="material-symbols-outlined fs-1"> arrow_circle_right </span>
    </div>
  </div>
</template>

<script>
import { register } from 'swiper/element/bundle';
import TitleBlockComponent from '@/components/Homepage/TitleBlockComponent.vue';

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
@import '../../assets/SCSS/all.scss';

// 追蹤 ig 貼文
.slide-img {
  height: 410px;
  @include media-breakpoint-up(md) {
    height: 357px;
  }
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 4px;

  @include media-breakpoint-up(md) {
    filter: brightness(70%) blur(2px);
  }

  &:hover {
    filter: none;
  }

  &-1 {
    background: url('../../assets/images/posts/post1.jpg') no-repeat center /
      cover;
  }

  &-2 {
    background: url('../../assets/images/posts/post2.jpg') no-repeat center /
      cover;
  }

  &-3 {
    background: url('../../assets/images/posts/post3.jpg') no-repeat center /
      cover;
  }

  &-4 {
    background: url('../../assets/images/posts/post4.jpg') no-repeat center /
      cover;
  }

  &-5 {
    background: url('../../assets/images/posts/post5.jpg') no-repeat center /
      cover;
  }

  &-6 {
    background: url('../../assets/images/posts/post6.jpg') no-repeat center /
      cover;
  }

  &-7 {
    background: url('../../assets/images/posts/post7.jpg') no-repeat center /
      cover;
  }

  &-8 {
    background: url('../../assets/images/posts/post8.jpg') no-repeat center /
      cover;
  }
}

.bg-posts::after {
  content: '';
  position: absolute;
  background-color: $dark;

  @include media-breakpoint-up(md) {
    bottom: -24px;
    left: -24px;
    width: calc(100% + 24px * 2);
    height: 50%;
    background: linear-gradient(
      360deg,
      rgba($dark, 0.9) 10%,
      rgba($dark, 0.5) 50%,
      rgba($dark, 0) 100%
    );
  }
}

// 切換貼文按鈕
.swiper-button-prev,
.swiper-button-next {
  line-height: 0;
  user-select: none;
}
</style>
