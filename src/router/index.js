import { createRouter, createWebHistory } from "vue-router";
import home from "./home.js";
import listapibank from "@/router/listapibank";

const routes = [...home, ...listapibank];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)
export default router;