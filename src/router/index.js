import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/HomeView.vue'),
      },
      {
        path: 'articles',
        component: () => import('../views/front/ArticlesListView.vue'),
      },
      {
        path: 'articles/:id',
        component: () => import('../views/front/ArticleView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsListView.vue'),
      },
      {
        path: 'products/:id',
        component: () => import('../views/front/ProductView.vue'),
      },
      {
        path: 'followlist',
        component: () => import('../views/front/FollowlistView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/front/checkout/CartView.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/front/checkout/OrderView.vue'),
      },
      {
        path: 'payment/:orderId',
        component: () => import('../views/front/checkout/PaymentView.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/front/checkout/CheckoutView.vue'),
      },
      {
        path: 'contact',
        component: () => import('../views/front/ContactView.vue'),
      },
      {
        path: 'faq',
        component: () => import('../views/front/FaqView.vue'),
      },
    ],
  },
  {
    path: '/adminLogin',
    component: () => import('../views/AdminLogin.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/admin/AdminHome.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue'),
      },
      {
        path: 'articles',
        component: () => import('../views/admin/AdminArticles.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
