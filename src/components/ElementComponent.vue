<template>
    <span contenteditable
         v-html="text"
         :style="{ color: this.color, fontSize: this.fontSize + 'px', backgroundColor: this.backgroundColor }" />
</template>
<script>
    export default {
        name: 'ElementComponent',
        props: {
            color: {
                type: String,
                default: '#000'
            },
            fontSize: {
                type: String,
                default: '16px'
            },
            backgroundColor: {
                type: String,
                default: '#fff'
            },
            text: String
        },
    }
</script>
<style>
    span {
        height: 20px;
    }
</style>
