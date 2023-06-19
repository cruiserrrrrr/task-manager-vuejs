import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import TASKS_KEY from '@/store'

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  created() {
    const tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
    this.tasks = tasks.map((task, index) => ({ task, id: index }));
  },
  render: (h) => h(App),
}).$mount('#app');