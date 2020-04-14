<template>
  <div>
    <div v-custom-on:click="handleClick">Home component</div>
    <input v-focus>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  directives: {
    customOn: {
      // eslint-disable-next-line no-unused-vars
      bind (el, binding, vnode) {
        const { arg:type, value:fn } = binding;
        el.addEventListener(type, fn);
      },
      unbind(el, binding) {
        const { arg:type, value:fn } = binding;
        el.removeEventListener(type, fn);
      }
    },
    focus: {
      inserted (el) {
        el.focus();
      }
    }
  },
  methods: {
    handleClick (e) {
      console.log('e', e);
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    &:focus {
      box-shadow: 3px 3px #F08080;
    }
  }
</style>
