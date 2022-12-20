import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Form from "../views/forms/FormMain.vue"

const routes = [
  { path: "/", component: HomeView },
  { path: "/form", component: Form },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
