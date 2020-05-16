import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        }
    }
});

export default router;
