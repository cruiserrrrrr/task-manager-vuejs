import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const TASKS_KEY = 'tasks';

export default new Vuex.Store({
  state: {
    tasks: [],
    editingTaskIndex: -1,
  },
  mutations: {
    loadTasks(state, tasks) {
      state.tasks = tasks;
    },
    createTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem(TASKS_KEY, JSON.stringify(state.tasks));
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
      localStorage.setItem(TASKS_KEY, JSON.stringify(state.tasks));
    },
    editTask(state, index) {
      state.editingTaskIndex = index;
    },
    updateTask(state, payload) {
      const { index, updatedTask } = payload;
      state.tasks[index] = updatedTask;
      state.editingTaskIndex = -1;
      localStorage.setItem(TASKS_KEY, JSON.stringify(state.tasks));
    },
    cancelEdit(state) {
      state.editingTaskIndex = -1;
    },
  },
});