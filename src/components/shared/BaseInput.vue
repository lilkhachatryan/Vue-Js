<template>
    <label>
        {{ label }}
        <input v-on="listeners"
               v-bind="$attrs" />
    </label>
</template>
<script>
    export default {
        name: 'BaseInput',
        inheritAttrs: false,
        model: {
            event: 'update'
        },
        props: {
            value: { type: String },
            label: { type: String }
        },
        computed: {
            // used all events without .native
            listeners () {
                return {
                    ...this.$listeners,
                    update: event =>
                        this.$emit('input', event.target.value)
                }
            }
        }
    }
</script>
