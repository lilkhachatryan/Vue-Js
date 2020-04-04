<script>
    export default {
        functional: true,
        props: {
            routes: {
                type: Array,
                required: true
            }
        },
        render (createElement, context) {
            const { props } = context;

            return props.routes.map((route) => {
                const routerLinkElement = createElement('router-link', { attrs: { to: { name: route.name } } }, route.title);

                return createElement('li', { attrs: { key: route.name } }, ['', routerLinkElement])
            })
        }
    }
</script>
