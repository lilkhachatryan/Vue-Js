<template>
  <div>
    <div v-custom-on:click="handleClick">Home component</div>
    <base-button size="sm" @click="$router.push({name: 'login'})">Logout</base-button>
    <hr />
    <input v-focus />
    <hr />
    <base-input @focus="handleFocus"/>
    <hr />
    <div style="height: 700px"></div>
    <div id="data"></div>
    <hr />
    <base-button size="sm" @click="load = !load">Animate progress bar</base-button>
    <hr />
    <progress-bar :load="load"></progress-bar>
    <hr />
  </div>
</template>

<script>
  import ProgressBar from "../components/shared/ProgressBar";
export default {
  name: 'HomeComponent',
  components: {
    ProgressBar
  },
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
  data: () => ({
    load: true
  }),
  methods: {
    handleClick (e) {
      console.log('e', e);
    },
    handleFocus: function (event) {
      console.log(event);
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
