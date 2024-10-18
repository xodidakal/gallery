import Home from "@/pages/home.vue"
import Login from "@/pages/login.vue"
import Cart from "@/pages/cart.vue"
import Order from "@/pages/order.vue"
import { createRouter, createWebHistory } from "vue-router"
import Orders from "@/pages/orders.vue"

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/cart', component: Cart},
    {path: '/order', component: Order},
    {path: '/orders', component: Orders}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;