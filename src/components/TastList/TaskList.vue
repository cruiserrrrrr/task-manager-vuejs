<template>
    <div :class="{ 'task_list__wrapper': true }">
        <ul :class="{ 'list_container': true }">
            <li v-for="(task, index) in tasks" :key="index" :class="{ 'list_item': true }">
                <div v-if="editingTaskIndex === index" :class="{ 'content_active': true }">
                    <input type="text" v-model="editedTask" value="task" :class="{ 'edit_input': true }" placeholder="Введите текст"/>
                    <div :class="{ 'content_buttons__wrapper': true }">
                        <button @click="updateTask(index)" :class="{ 'confirm_button': true }">
                            <icon name="check-circle" />
                        </button>
                        <button @click="cancelEdit" :class="{ 'cancel_button': true }">
                            <icon name="times" />
                        </button>
                    </div>
                </div>
                <div v-else :class="{ 'content_default': true }">
                    <p :class="{ 'task': true }">{{ task }}</p>
                    <div :class="{ 'content_buttons__wrapper': true }">
                        <button @click="editTask(index)" v-show="!isTaskBeingEdited(index)"
                            :class="{ 'edit_button': true }">
                            <icon name="sync" />
                        </button>
                        <button @click="deleteTask(index)" v-show="!isTaskBeingEdited(index)"
                            :class="{ 'delete_button': true }">
                            <icon name="times" />
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { TASKS_KEY } from '@/store';
import { mapMutations } from 'vuex';
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/sync';
import 'vue-awesome/icons/check-circle';
import Icon from 'vue-awesome/components/Icon';

export default {
    name: 'MyComponent',
    components: {
        Icon
    },
    computed: {
        tasks() {
            return this.$store.state.tasks;
        },
        editingTaskIndex() {
            return this.$store.state.editingTaskIndex;
        },
    },
    data() {
        return {
            editedTask: '',
        };
    },
    created() {
        const tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
        this.$store.commit('loadTasks', tasks);
    },
    methods: {
        ...mapMutations(['updateTasks']),
        saveTasks(newTaskOrder) {
            this.updateTasks(newTaskOrder);
        },
        isTaskBeingEdited(index) {
            return this.editingTaskIndex === index;
        },
        editTask(index) {
            this.$store.commit('editTask', index);
        },
        updateTask(index) {
            const updatedTask = this.editedTask;
            this.$store.commit('updateTask', { index, updatedTask });
            this.editedTask = '';
        },
        cancelEdit() {
            this.$store.commit('cancelEdit');
            this.editedTask = '';
        },
        deleteTask(index) {
            this.$store.commit('deleteTask', index);
        },
    },
};
</script>
  
<style lang="scss">@import './index.scss';</style>