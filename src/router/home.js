const home = [
    {
        path: "/",
        component: () => import("../components/Home")
    },
    {
        path: "/signup",
        component: () => import("../components/SignUp")
        // children : [
        //     {
        //         path: "test",
        //         name: "test01",
        //         component: () => import("../components/SignUp")
        //     }
        // ]
    },
    {
        path: "/login",
        component: () => import("../components/LogIn")
    },
    {
        path: "/panel",
        component: () => import("../components/PanelUser")
    },{
        path: "/:catchAll(.*)",
        component: () => import("../components/NotFound.vue"),
        meta: {
            title: 'Not Found',
            metaTags: []
        }
    }
]
export default home;