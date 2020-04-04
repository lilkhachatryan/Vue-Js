<template>
    <b-button v-on="$listeners" v-bind="$attrs">
        <slot>Base</slot>
    </b-button>
</template>
<script>
    export default {
        name: 'BaseButton'
    }
</script>
