import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   //name: "Home",
  //   component: () => import ("@/views/Sidebar.vue")
  // },
  {
    path: "/example01",
    //name: "Home",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    path: "/example02",
    //name: "Home",
    component: () => import("@/views/example02/Example02.vue")
  },
  /*example3----------------------------------------*/
  {
    props: true,
    path: "/example03/students/:sid/homeworks/:hid",
    component: () => import("@/views/example03/Example03.vue")
  },
  {
    path: "/example03/Example03_login",
    component: () => import("@/views/example03/Example03_login.vue")
  },
  /*example4--------------------------------------------*/
  {
    path: "/example04/Example04-01",
    component: () => import("@/views/example04/Example04-01.vue")
  },
  {
    path: "/example04/Example04-02",
    component: () => import("@/views/example04/Example04-02.vue")
  },
  {
    props: true,
    path: "/example04/Example04-03/students/:sid/homeworks/:hid",
    component: () => import("@/views/example04/Example04-03.vue")
  },
  {
    props: true,
    path: "/example04/Example04-04",
    component: () => import("@/views/example04/Example04-04.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
