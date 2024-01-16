<template>
  <!-- banner 區塊 -->
  <div class="bg-secondary-100 overflow-hidden">
    <div class="container pt-88 pb-4 pt-md-30 pb-md-20">
      <div class="row">
        <!-- banner 內容區塊 -->
        <div
          class="order-2 order-md-1 col-md-5 d-flex flex-column justify-content-between"
        >
          <h1
            class="display-1 fw-bold fst-italic text-primary-500 position-relative"
          >
            <span class="banner-title banner-title-1">Dr.Meme</span><br /><span
              class="banner-title banner-title-2"
              >的斜槓人生</span
            >
            <img
              src="../../assets/images/banner/cursor.png"
              alt="箭頭"
              class="position-absolute bottom-n15 end-10"
            />
          </h1>
          <div class="d-none d-md-block">
            <div class="mb-3 fs-4">
              <div class="d-inline-block">
                <span class="overflow-hidden">嗨~ 我是 Dr. Meme，</span>
              </div>
              <div class="d-inline-block">
                <div ref="typewriteAnimated" class="typewrite-animation">
                  <span
                    ref="typewriteText"
                    class="d-inline-block border-bottom border-4 border-primary-500"
                    >{{ typedText }}</span
                  >
                </div>
              </div>
            </div>
            <button
              type="button"
              class="py-4 px-15 fs-4 btn-dark border-0 button-hover"
            >
              斜槓故事
            </button>
          </div>
        </div>
        <!-- banner 主圖 -->
        <div
          class="order-1 order-md-2 col-md-7 d-flex justify-content-center align-items-center position-relative"
        >
          <div>
            <img
              src="../../assets/images/banner/drmeme.png"
              alt="dr.meme"
              class="banner-img"
            />
            <img
              src="../../assets/images/banner/meme1.png"
              alt="meme1"
              class="meme-img meme-img-1"
            />
            <img
              src="../../assets/images/banner/meme2.png"
              alt="meme2"
              class="meme-img meme-img-2"
            />
            <img
              src="../../assets/images/banner/meme3.png"
              alt="meme3"
              class="meme-img meme-img-3"
            />
            <img
              src="../../assets/images/banner/meme4.png"
              alt="meme4"
              class="meme-img meme-img-4"
            />
            <img
              src="../../assets/images/banner/meme5.png"
              alt="meme5"
              class="meme-img meme-img-5"
            />
          </div>

          <!-- banner 聲波圓 動畫 -->
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
          <div class="circle circle-4"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-6 mt-md-0 d-flex justify-content-center">
    <div class="row text-center d-md-none">
      <div>
        <div class="mb-3 fs-6">
          <div class="d-inline-block">
            <span class="overflow-hidden">嗨~ 我是 Dr. Meme，</span>
          </div>
          <div class="d-inline-block">
            <div ref="typewriteAnimated" class="typewrite-animation">
              <span
                ref="typewriteText"
                class="d-inline-block border-bottom border-4 border-primary-500"
                >{{ typedText }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          class="py-4 px-15 fs-4 btn-dark border-0 button-hover"
        >
          斜槓故事
        </button>
      </div>
    </div>
  </div>

  <!-- 追蹤 IG: 一天一迷因 醫生遠離我 -->
  <div class="container pt-20 pt-md-30 d-flex flex-column align-items-center">
    <!-- 追蹤 IG 標題 -->
    <div>
      <h3 class="fs-5 ff-sans-en text-secondary-600 text-center">
        <span class="decoball decoball-1 ls-4">INSTAGRAM</span>
      </h3>
      <h2 class="fs-3 fs-md-2 fw-bold mt-2 mt-md-5">
        <span class="me-4 me-md-10">一天一迷因</span
        ><span class="decoball decoball-2">醫生遠離我</span>
      </h2>
    </div>
    <!-- 追蹤 IG 追蹤區塊 -->
    <div
      class="w-100 w-md-auto mt-10 mt-md-20 border border-4 border-dark d-flex flex-column flex-md-row justify-content-between align-items-center p-6 p-md-8 bdrs-4"
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
          <p>840 則貼文 <span class="ms-4">98.7K 粉絲</span></p>
        </div>
      </div>
      <div>
        <button
          type="button"
          class="py-4 px-15 bg-light border border-4 border-dark bdrs-4 fs-5 fs-md-4 fw-bold button-hover"
        >
          追蹤 IG
        </button>
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
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 4456
          </div>
          <div>2023/02/02</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-2 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 4456
          </div>
          <div>2023/02/02</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-3 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 4456
          </div>
          <div>2023/02/02</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-4 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 4456
          </div>
          <div>2023/02/02</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-5 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 4456
          </div>
          <div>2023/02/02</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-6 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 4456
          </div>
          <div>2023/02/02</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-7 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 4456
          </div>
          <div>2023/02/02</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-img slide-img-8 mb-4"></div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-primary-500 me-1"></i> 4456
          </div>
          <div>2023/02/02</div>
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

  <!-- 聽取人生的藥方 -->
  <div class="container pt-20 pb-0 py-md-30">
    <div class="border-none border border-md-12 border-dark p-md-2">
      <div
        class="border-none border border-md-4 border-secondary-700 border-style-dashed p-md-15"
      >
        <div class="row justify-content-center">
          <!-- podcast 區塊標題 -->
          <div class="col-12 col-md-8">
            <h3 class="fs-5 ff-sans-en text-secondary-600 text-center">
              <span class="decoball decoball-1 ls-4">PODCAST</span>
            </h3>
            <h2 class="fs-3 fs-md-2 fw-bold mt-2 mt-md-5 text-center">
              <span class="decoball decoball-2">聽取人生的藥方</span>
            </h2>
          </div>
          <!-- podcast 分類 -->
          <div
            class="col-12 col-xxl-8 mt-10 mt-sm-15 mt-md-20 gx-6 gy-2 gy-md-0"
          >
            <div class="row gy-md-2 gy-lg-0">
              <div class="col-6 col-lg-3">
                <div
                  class="d-flex justify-content-md-center align-items-center py-md-3 border-none border border-2 border-primary-500 bdrs-30 text-primary-500"
                >
                  <span class="material-symbols-outlined me-2"> school </span
                  >學校沒有教的事
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div
                  class="d-flex justify-content-md-center align-items-center py-md-3 border-none border border-2 border-primary-500 bdrs-30 text-primary-500"
                >
                  <span class="material-symbols-outlined me-2">
                    stethoscope </span
                  >從醫學看人生
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div
                  class="d-flex justify-content-md-center align-items-center py-md-3 border-none border border-2 border-primary-500 bdrs-30 text-primary-500"
                >
                  <span class="material-symbols-outlined me-2">
                    medication </span
                  >醫師雜談
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div
                  class="d-flex justify-content-md-center align-items-center py-md-3 border-none border border-2 border-primary-500 bdrs-30 text-primary-500"
                >
                  <span class="material-symbols-outlined me-2">
                    question_mark </span
                  >醫護幹三小
                </div>
              </div>
            </div>
          </div>
          <!-- podcast 播放 -->
          <div class="col-12 col-lg-8 col-xl-6">
            <div class="bg-podcast mt-5 mt-md-20 bdrs-8">
              <div class="row justify-content-center">
                <img
                  class="col-6 col-md-4 bdrs-20 my-10"
                  :src="podcastImages"
                  alt="drmeme 圖片"
                />
                <div class="col-12">
                  <div
                    class="px-5 py-6 px-md-10 py-md-8 bg-dark text-light d-flex flex-column align-items-center bdrs-8"
                  >
                    <p>{{ podcastTitle }}</p>
                    <audio ref="episode" :src="episodeSrc"></audio>
                    <div
                      ref="progress"
                      class="progress w-100 bg-secondary-500 mt-4"
                      role="progressbar"
                      aria-label="Example 1px high"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="height: 8px"
                    >
                      <div
                        class="progress-bar bg-primary-400"
                        :style="{ width: `${progress}%` }"
                      ></div>
                    </div>
                    <div class="w-100 d-flex justify-content-between mt-2">
                      <p>{{ audioCurrentTime }}</p>
                      <p>{{ audioDuration }}</p>
                    </div>
                    <div ref="controls" class="d-flex align-items-center mt-4">
                      <button type="button" class="btn text-light border-0 p-1">
                        <i class="fa-solid fa-backward"></i>
                      </button>
                      <button
                        @click="playPause"
                        type="button"
                        class="btn text-light border-0 p-0 mx-10 mx-md-12"
                      >
                        <i
                          ref="controlBtn"
                          class="fa-solid fa-circle-play fa-2xl"
                        ></i>
                      </button>
                      <button type="button" class="btn text-light border-0 p-1">
                        <i class="fa-solid fa-forward"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-md-14">
              <div class="col-12 col-md-6 mt-5 mt-md-0">
                <a
                  target="_blank"
                  href="https://podcasts.apple.com/us/podcast/dr-meme/id1522408497"
                  type="button"
                  class="btn w-100 py-4 bg-light border border-4 border-dark bdrs-4 fs-5 fs-md-4 fw-bold button-hover"
                >
                  <i class="fa-solid fa-podcast fa-lg me-2"></i>Apple Podcasts
                </a>
              </div>
              <div class="col-12 col-md-6 mt-5 mt-md-0">
                <a
                  target="_blank"
                  href="https://open.spotify.com/show/4gm4BSePy7Xoi08Nd8KH87"
                  type="button"
                  class="btn w-100 py-4 bg-light border border-4 border-dark bdrs-4 fs-5 fs-md-4 fw-bold button-hover"
                >
                  <i class="fa-brands fa-spotify fa-lg me-2"></i>Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 限量周邊 -->
  <div class="bg-secondary-200">
    <div
      class="container mt-20 mt-md-0 pt-0 pt-md-20 d-flex flex-column align-items-center"
    >
      <!-- 周邊標題 -->
      <div class="col-12 col-md-8">
        <h3 class="fs-5 ff-sans-en text-secondary-600 text-center">
          <span class="decoball decoball-1 ls-4">SHOPPING</span>
        </h3>
        <h2 class="fs-3 fs-md-2 fw-bold mt-2 mt-md-5 text-center">
          <span class="decoball decoball-2">限量週邊</span>
        </h2>
      </div>
      <!-- 周邊輪播圖 -->
      <div class="col-12">
        <swiper-container
          class="shopping-swiper mt-10 mt-md-20"
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
  </div>
</template>

<style lang="scss">
@import '../../assets/SCSS/all.scss';
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';

h1 {
  a {
    font-family: 'Iceberg';
  }
}

// banner 標題
.banner-title {
  position: relative;
  white-space: nowrap;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 4px dashed $secondary-500;
    padding-bottom: 10px;
  }
}

.banner-title-1::after {
  width: 105%;
}

.banner-title-2::after {
  width: 105%;
}

// banner CTA 按鈕
.btn-dark {
  border-radius: 4px;
  background: linear-gradient(276deg, #000 13.88%, rgba(0, 0, 0, 0.7) 93.75%);
  color: $light;
  font-weight: 700;
}

.button-hover {
  transition: background 0.5s ease-in-out;
  &:hover {
    background: $primary-500 !important;
    color: $light;
  }
}

// banner 右側主圖
.banner-img {
  z-index: 100;
  padding: 5px;
  position: relative;

  img {
    width: 532px;
  }
}

.meme-img {
  opacity: 0.3;
  position: absolute;

  // 安妮亞
  &-1 {
    top: 30px;
    left: 90px;
    width: 117px;
  }

  // 蜘蛛人
  &-2 {
    top: -80px;
    left: 490px;
    width: 148px;
  }

  // 大腦
  &-3 {
    bottom: -80px;
    right: 160px;
    width: 133px;
  }

  // oh no
  &-4 {
    bottom: -40px;
    left: -40px;
    width: 234px;
  }

  // 貓打貓
  &-5 {
    right: 0px;
    bottom: 150px;
    width: 156px;
  }
}

.circle {
  border-radius: 50%;
  width: 370px;
  height: 370px;
  position: absolute;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);

  &-1 {
    background-color: rgba($primary-500, 0.5);
    animation-delay: -3s;
  }

  &-2 {
    background-color: rgba($secondary-600, 0.5);
    animation-delay: -2s;
  }

  &-3 {
    background-color: rgba($primary-300, 0.5);
    animation-delay: -1s;
  }

  &-4 {
    background-color: rgba($secondary-600, 0.5);
    animation-delay: 0s;
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
}

// banner 追蹤 IG
.decoball {
  position: relative;

  &::before {
    content: '';
    border-radius: 50%;
    position: absolute;
  }

  &-1::before {
    width: 24px;
    height: 24px;
    background-color: $primary-500;
    top: -17px;
    left: -28.5px;
  }

  &-2::before {
    width: 40px;
    height: 40px;
    background-color: $primary-400;
    bottom: -20px;
    right: -17px;
    z-index: -1;
  }

  @include media-breakpoint-up(md) {
    &-1::before {
      top: -12px;
      left: -28px;
    }

    &-2::before {
      bottom: -13px;
      right: -18px;
    }
  }
}

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
    left: -56px;
    width: calc(100% + 56px * 2);
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
}

.bg-podcast {
  background: url('../../assets/images/background/bg-podcast.png') no-repeat
    center / cover;
}

.material-symbols-outlined.fs-larger {
  font-size: 60px;
}

@include media-breakpoint-down(md) {
  .border-none {
    border: none !important;
  }
}

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
    background: url('../../assets/images/products/heart-hoody-w1.jpg') no-repeat
      center / cover;
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
</style>

<script>
// swiper
import { register } from 'swiper/element/bundle';
import axios from 'axios';
const { VITE_APP_SPOTIFY_CLIENT_ID, VITE_APP_SPOTIFY_CLIENT_SECRET } =
  import.meta.env;

export default {
  data() {
    return {
      spaceBetween: 24,
      // // arr 陣列儲存要變化的文字內容
      arr: [
        '一位醫生',
        '水肺潛水教練',
        '楓之谷楓樹種子',
        '經營 IG 迷因帳號',
        '錄 Podcast',
      ],
      typedText: '',
      currentIndex: 0,
      typingSpeed: 100, // 調整打字速度 (毫秒)
      pauseDuration: 3000, // 停頓時間 (毫秒)
      id: '74FhGXNmjtQfLh2zCETaqb',
      podcastImages: '',
      podcastTitle: '',
      audioCurrentTime: '00:00',
      audioDuration: '',
      progress: '0%', // 播放進度
      episodeSrc: '',
    };
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
    typeText() {
      if (this.currentIndex < this.arr.length) {
        const currentElement = this.arr[this.currentIndex];
        if (this.typedText.length < currentElement.length) {
          this.typedText += currentElement.charAt(this.typedText.length);
        } else {
          setTimeout(() => {
            // Move to the next element in the array
            this.currentIndex++;
            // Clear typedText for the next element
            this.typedText = '';
            // Call typeText again for the next iteration
            this.typeText();
          }, this.pauseDuration);
          return;
        }
      } else {
        // If all elements are typed, reset to the first element
        this.currentIndex = 0;
      }
      setTimeout(this.typeText, this.typingSpeed);
    },
    async getSpotifyToken() {
      const url = 'https://accounts.spotify.com/api/token';

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: `grant_type=client_credentials&client_id=${VITE_APP_SPOTIFY_CLIENT_ID}&client_secret=${VITE_APP_SPOTIFY_CLIENT_SECRET}`,
        url,
      };

      try {
        const response = await axios(options);
        const token = response.data.access_token;
        localStorage.setItem('token', token);
        console.log(token);
      } catch (error) {
        console.error('getSpotifyToken Error:', error);
        // throw error; // 可以拋出錯誤或進行其他錯誤處理
      }
    },
    async getSpotifyEp() {
      const token = localStorage.getItem('token');
      const url = `https://api.spotify.com/v1/episodes/${this.id}?market=TW`;
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url,
      };

      try {
        const response = await axios(options);
        console.log(response.data);
        const podcastData = response.data;

        this.podcastImages = podcastData.images[1].url;
        this.podcastTitle = podcastData.name;
        this.episodeSrc = podcastData.audio_preview_url;
      } catch (error) {
        console.error('getSpotifyEp Error:', error.message);
        // throw error; // 可以拋出錯誤或進行其他錯誤處理
      }
    },
    getEpMetadata() {
      const epAudio = this.$refs.episode;
      epAudio.addEventListener('loadedmetadata', () => {
        const duration = epAudio.duration;
        const currentTime = epAudio.currentTime;
        this.audioCurrentTime = this.formatTime(currentTime);
        this.audioDuration = this.formatTime(duration);
      });
    },
    formatTime(s) {
      // 將 audio 的 時間轉換成 03:20 格式

      const min = Math.floor(s / 60);
      const remainingS = Math.round(s % 60);

      const formattedMin = min < 10 ? '0' + min : min;
      const formattedS = remainingS < 10 ? '0' + remainingS : remainingS;

      return `${formattedMin}:${formattedS}`;
    },
    playPause() {
      const controlBtn = this.$refs.controlBtn;
      const episode = this.$refs.episode;
      if (controlBtn.classList.contains('fa-circle-pause')) {
        episode.pause();
        controlBtn.classList.remove('fa-circle-pause');
        controlBtn.classList.add('fa-circle-play');
      } else {
        episode.play();
        controlBtn.classList.remove('fa-circle-play');
        controlBtn.classList.add('fa-circle-pause');
        setInterval(() => {
          this.audioCurrentTime = this.formatTime(episode.currentTime);
          this.progress = (episode.currentTime / episode.duration) * 100;
        });
      }
    },
  },
  beforeMount() {
    register();
  },
  async mounted() {
    this.typeText();
    await this.getSpotifyToken();
    this.getSpotifyEp();
    this.getEpMetadata();

    // 播放 audio 的進度條
    // const episode = this.$refs.episode;

    // if (episode.play()) {
    //   setInterval(() => {
    //     this.audioCurrentTime = this.formatTime(episode.currentTime);
    //     this.progress = (episode.currentTime / episode.duration) * 100;
    //   });
    // }
  },
};
</script>
