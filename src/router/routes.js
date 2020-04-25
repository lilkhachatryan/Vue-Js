import Dashboard from "../components/Dashboard";

export default [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/home',
        name: 'home',
        component: c('Home'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/login',
        name: 'login',
        component: c('auth/Login')
    }
]

function c(component) {
    return () => import(`../views/${component}`);
}
