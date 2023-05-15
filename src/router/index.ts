import { createRouter, createWebHashHistory } from "vue-router";
import question1 from "../views/如何一次性渲染10w条数据.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/question1", component: question1 }],
});
export default router;
