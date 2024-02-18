export default {
  template: `
<nav class="navbar navbar-expand-lg bg-dark fixed-top">
    <div class="container d-flex justify-content-between align-items-center">
      <h1>
        <router-link to="/" class="navbar-brand d-block">Dr. Meme</router-link>
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
          <span class="navbar-toggler-hamburger"></span>
        </label>
      </div>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav my-10 my-lg-0 ms-auto d-flex align-items-center">
          <li class="nav-item">
            <router-link
              to="/articles"
              class="nav-link fs-5 fw-bold py-3"
              aria-current="page"
              >精選文章</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/products"
              class="nav-link fs-5 fw-bold py-3"
              aria-current="page"
              >限量週邊</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/faq"
              class="nav-link fs-5 fw-bold py-3"
              aria-current="page"
              >常見問答</router-link
            >
          </li>
          <li v-if="isFollowBtnVisible" class="nav-item">
            <a
              class="btn btn-follow fs-5 fw-bold py-3"
              aria-current="page"
              href="https://www.instagram.com/doctormeme_tw/"
              target="_blank"
              >追蹤 IG</a
            >
          </li>
          <template v-else>
            <li class="nav-item">
              <router-link
                to="/followlist"
                class="nav-link fs-5 fw-bold py-3"
                aria-current="page"
                ><i class="fa-solid fa-heart"></i
              ></router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/cart"
                class="nav-link fs-5 fw-bold py-3"
                aria-current="page"
                ><i class="fa-solid fa-cart-shopping"></i
              ></router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
`,
  computed: {
    isFollowBtnVisible() {
      return !(
        this.$route.path === '/products' ||
        this.$route.path === '/cart' ||
        this.$route.path === '/followlist' ||
        this.$route.path === '/order' ||
        this.$route.path === '/checkout' ||
        this.$route.path === '/payment'
      );
    },
  },
};
