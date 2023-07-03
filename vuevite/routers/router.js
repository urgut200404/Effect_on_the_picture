import { createRouter, createWebHashHistory , createWebHistory} from "vue-router";
import { useCounterStore } from "../store/store.js";

let router = createRouter({
   history:createWebHistory(),
   routes:[
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../src/components/404.vue"),
    },
    {
      path:"/",
      name:"home", 
      component: ()=> import("../src/components/home.vue"),
    },
  ]
})
// router.beforeEach(async(to, from, next) => {
//     console.log(to);
//     const store = useCounterStore()
//     console.log(store.isAuthenticated);
//     if (to.name !== 'login' && !store.isAuthenticated) next({ name: 'login' })
//     else next()
//   })

export default router;
