import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskList from '../components/TastList/TaskList.vue';
import TaskForm from '../components/TaskForm/TaskForm.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: TaskList },
  { path: '/create', component: TaskForm },
];

const router = new VueRouter({
  routes,
});

export default router;