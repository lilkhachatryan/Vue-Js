import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './styles/index.scss';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireBaseComponent = require.context('./components/shared', false, /Base[A-Z]\w+\.(vue|js)$/);

requireBaseComponent.keys().forEach(fileName => {
  const componentConfig = requireBaseComponent(fileName);
  const componentName = upperFirst(camelCase(
      fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
  ));

  Vue.component(componentName, componentConfig.default || componentConfig)
});

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
