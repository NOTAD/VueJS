
const listapibank = [
    {
        path: "/listapibank",
        component: () => import("../components/pages/PageApi/ListApiBank")
    },{
        path: "/formvietcombank",
        component: () => import("../components/pages/PageApi/LoginVietcombank"),
        name: "routerLoginVietcombank"
    },
    {
        path: "/formvietinbank",
        component: () => import("../components/pages/PageApi/LoginVietinbank")
    }

]
export default listapibank;