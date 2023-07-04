import posts from "@/pages/posts";
import log from "@/pages/log";
import reg from "@/pages/reg";
import comm from "@/pages/comment";
import reset from "@/pages/reset";
import trash from "@/pages/trash";
// иморт методов из библиотеки вью-роутер
import { createRouter, createWebHistory } from 'vue-router'

// определение путей(при запроса по определенному пути отрисовывается определенный компонент)
const routes = [
    {
        path: '/log',
        component: log
    },
    {
        path: '/reg',
        component: reg
    },
    {
        path: '/',
        component: posts
    },
    {
        path: '/comm',
        component: comm
    },
    {
        path: '/res',
        component: reset
    },
    ,
    {
        path: '/trash',
        component: trash
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;