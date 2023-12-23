<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container d-flex justify-content-between align-items-center">
      <h1>
        <a class="navbar-brand d-block" href="#">Dr. Meme</a>
      </h1>
      <div>
        <input type="checkbox" id="menu-toggle" />
        <label
          for="menu-toggle"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </label>
      </div>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav my-10 my-lg-0 ms-auto d-flex align-items-center">
          <li class="nav-item">
            <a class="nav-link fs-5 fw-bold" aria-current="page" href="#"
              >精選文章</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5 fw-bold" aria-current="page" href="#"
              >限量週邊</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5 fw-bold" aria-current="page" href="#"
              >常見問答</a
            >
          </li>
          <li class="nav-item">
            <a class="btn btn-follow fs-5 fw-bold" aria-current="page" href="#"
              >追蹤IG</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- banner 區塊 -->
  <div class="bg-secondary-100 overflow-hidden">
    <div class="container pt-88 pb-4 pt-md-30 pb-md-20">
      <div class="row">
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
              src="../assets/images/banner/cursor.png"
              alt="箭頭"
              class="position-absolute bottom-n15 end-10"
            />
          </h1>
          <div>
            <div class="mb-3 fs-4">
              <div class="d-inline-block">
                <span class="d-inline-block overflow-hidden"
                  >嗨~ 我是 Dr. Meme，</span
                >
              </div>
              <div class="d-inline-block">
                <div id="typewrite-animated" class="typewrite-animation">
                  <span
                    id="typewrite-text"
                    class="d-inline-block border-bottom border-4 border-primary-500"
                  ></span>
                </div>
              </div>
            </div>
            <button type="button" class="py-4 px-15 fs-4 btn-dark border-0">
              斜槓故事
            </button>
          </div>
        </div>
        <div
          class="order-1 order-md-2 col-md-7 d-flex justify-content-center align-items-center position-relative"
        >
          <div class="banner-img">
            <img
              src="../assets/images/banner/drmeme.png"
              alt="dr.meme"
              class="banner-img"
            />
          </div>
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
          <div class="circle circle-4"></div>

          <img
            src="../assets/images/banner/meme1.png"
            alt="meme1"
            class="meme-img meme-img-1"
          />
          <img
            src="../assets/images/banner/meme2.png"
            alt="meme2"
            class="meme-img meme-img-2"
          />
          <img
            src="../assets/images/banner/meme3.png"
            alt="meme3"
            class="meme-img meme-img-3"
          />
          <img
            src="../assets/images/banner/meme4.png"
            alt="meme4"
            class="meme-img meme-img-4"
          />
          <img
            src="../assets/images/banner/meme5.png"
            alt="meme5"
            class="meme-img meme-img-5"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- 這是前台頁面
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/products">產品列表</router-link> |
  <router-link to="/cart">購物車</router-link> |
  <router-link to="/admin/products">後台產品列表</router-link>
  <hr /> -->
  <!-- <RouterView></RouterView> -->
</template>

<script>
// import { RouterView } from 'vue-router'

// export default {
//   components: {
//     // RouterView
//   },
// };
</script>
