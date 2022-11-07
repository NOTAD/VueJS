import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index";
import axios from "axios";
//Import antdv
// import Antv from 'ant-design-vue';
// import {
//     Checkbox,
//     Input,
//     Form,
//     Button,
//     Drawer
// } from "ant-design-vue"
import antdv from 'ant-design-vue';
window.axios = axios;
//Import css
import("ant-design-vue/dist/antd.css")
import("bootstrap/dist/css/bootstrap-grid.min.css");
import("bootstrap/dist/css/bootstrap-utilities.min.css");

const app = createApp(App);
app.use(antdv);

app.use(router);
app.mount('#app');

