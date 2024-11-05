import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  scrollBehavior(to, from) {
    if (
      to.path.indexOf("/nghe-si") != 0 ||
      from.path.indexOf("/nghe-si") != 0 ||
      to.params.slug ||
      from.params.slug
    ) {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      component: () => import("./components/HomePage/HomePage.vue"),
      meta: { text: "HomePage" },
      name: "homePage",
    },
    {
      path: "/gioi-thieu",
      component: () => import("./components/IntroducePage/IntroducePage.vue"),
      meta: { text: "IntroducePage" },
    },
    {
      path: "/dang-ky",
      component: () => import("./components/RegisterPage/RegisterPage.vue"),
      meta: { text: "RegisterPage" },
    },
    {
      path: "/dich-vu",
      component: () => import("./components/ServicePage/ServicePage.vue"),
      meta: { text: "ServicePage" },
    },
    {
      path: "/lien-he",
      component: () => import("./components/ContactPage/ContactPage.vue"),
      meta: { text: "ContactPage" },
    },
    {
      path: "/quy-trinh",
      component: () => import("./components/ProcedurePage/ProcedurePage.vue"),
      meta: { text: "ProcedurePage" },
    },
    {
      path: "/phan-bo",
      component: () => import("./components/AllotmentPage/AllotmentPage.vue"),
      meta: { text: "AllotmentPage" },
    },
    {
      path: "/nghe-si",
      component: () => import("./components/ArtistPage/ArtistPage.vue"),
      meta: { text: "ArtistPage" },
    },
    {
      path: "/nghe-si/:slug",
      component: () =>
        import("./components/DetailArtistPage/DetailArtistPage.vue"),
      name: "detailArtist",
      meta: { text: "DetailArtistPage" },
    },
    {
      path: "/san-pham",
      component: () => import("./components/ProductPage/ProductPage.vue"),
      meta: { text: "ProductPage" },
    },
    {
      path: "/san-pham/:slug",
      component: () =>
        import("./components/DetailProductComponent/DetailPage.vue"),
      name: "detailProduct",
      meta: { text: "DetailProductPage" },
    },
    {
      path: "/tin-tuc",
      component: () => import("./components/NewsPage/NewsPage.vue"),
      meta: { text: "NewsPage" },
    },
    {
      path: "/tin-tuc/:slug",
      component: () => import("./components/DetailNewsPage/DetailNewsPage.vue"),
      name: "detailNews",
      meta: { text: "DetailNewsPage" },
    },
    {
      path: "/chinh-sach-bao-mat",
      component: () => import("./components/SupportivePage/PolicyPage.vue"),
      meta: { text: "PolicyPage" },
    },
    {
      path: "/dieu-khoan-dich-vu",
      component: () => import("./components/SupportivePage/T&CPage.vue"),
      meta: { text: "T&CPage" },
    },
    {
      path: "/404",
      component: () => import("./components/404Page/404Page.vue"),
      meta: { text: "404Page" },
      name: '404Page'
    },
    { path: "*", redirect: "/404" },
  ],
});
export default router;
