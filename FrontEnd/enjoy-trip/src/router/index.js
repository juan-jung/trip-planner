import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/plan",
  //   name: "plan",
  //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  // {
  //   path: "/board",
  //   name: "board",
  //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "about" */ "@/components/LoginForm"),
  },
  {
    path: "/user",
    component: UserView,
    children: [
      {
        path: "regist",
        name: "UserRegist",
        component: () => import(/* webpackChunkName: "about" */ "@/components/uesr/UserWrite"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
