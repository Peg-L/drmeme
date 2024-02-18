export default {
  template: `<footer class="footer bg-dark py-14">
  <div
    class="container d-flex flex-column flex-md-row justify-content-between align-items-center"
  >
    <div>
      <h1>
        <router-link to="/" class="navbar-brand d-block fs-2"
          >Dr. Meme</router-link
        >
      </h1>
      <p class="text-secondary-700 fs-sm mt-1 d-none d-md-block">
        Copyright © 2020 Dr.Meme All Rights Reserved.
      </p>
    </div>
    <div
      class="d-flex flex-column align-items-center align-items-md-end mt-7 mt-md-0 container"
    >
      <ul class="d-flex flex-column flex-md-row gap-5 list-unstyled">
        <li>
          <router-link
            to="/articles"
            class="nav-link fs-5"
            aria-current="page"
            >精選文章</router-link
          >
        </li>
        <li>
          <router-link
            to="/products"
            class="nav-link fs-5"
            aria-current="page"
            >限量週邊</router-link
          >
        </li>
        <li>
          <router-link to="/faq" class="nav-link fs-5" aria-current="page"
            >常見問答</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="nav-link fs-5" aria-current="page"
            >聯絡 Dr.Meme</router-link
          >
        </li>
        <li>
          <router-link to="/adminLogin" class="nav-link fs-5"
            >後台管理</router-link
          >
        </li>
      </ul>
      <ul class="mt-5 list-unstyled row gx-10 gy-5 justify-content-center">
        <li class="col-5 col-md-3">
          <a
            class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
            href="https://podcasts.apple.com/tw/podcast/dr-meme/id1522408497"
            target="_blank"
            ><i class="fa-solid fa-podcast fs-2"></i>
            <div class="mt-1">Apple Podcasts</div></a
          >
        </li>
        <li class="col-5 col-md-3">
          <a
            class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
            href="https://open.spotify.com/show/4gm4BSePy7Xoi08Nd8KH87"
            target="_blank"
            ><i class="fa-brands fa-spotify fs-2"></i
            ><span class="mt-1">Spotify</span></a
          >
        </li>
        <li class="col-5 col-md-3">
          <a
            class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
            href="https://www.instagram.com/memedical_slashie/"
            target="_blank"
            ><i class="fa-brands fa-instagram fs-2"></i>
            <span class="mt-1 text-nowrap">斜槓人生</span></a
          >
        </li>
        <li class="col-5 col-md-3">
          <a
            class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
            href="https://www.instagram.com/doctormeme_tw/"
            target="_blank"
            ><i class="fa-brands fa-instagram fs-2"></i
            ><span class="mt-1 text-nowrap">醫學迷因</span></a
          >
        </li>
      </ul>
    </div>
    <p class="text-secondary-700 fs-sm mt-10 mt-md-1 d-md-none">
      Copyright © 2020 Dr.Meme All Rights Reserved.
    </p>
  </div>
</footer>`,
};
