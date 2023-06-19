<template>
    <div :class="{ 'task_form__wrapper': true }">
        <div :class="{ 'task_form__container': true }">
            <form @submit.prevent="addTask" :class="{ 'task_form__form': true }">
                <textarea v-model="newTask" type="text" placeholder="Введите задачу"
                    :class="{ 'form_input': true }"></textarea>
                <button type="submit" :class="{ 'form_button': true }">
                    Создать
                </button>
            </form>
        </div>
    </div>
</template>
  
<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            newTask: '',
        };
    },
    methods: {
        ...mapMutations(['createTask']),
        addTask() {
            if (this.newTask.trim() !== '') {
                this.createTask(this.newTask);
                this.newTask = '';
            }
        },
    },
};
</script>
  
<style lang="scss">
@import './index.module.scss';
</style>