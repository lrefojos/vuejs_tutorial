<template>
  <form class="task" id="app" @submit.prevent="createTask">
    <label class="label" for="task">Nueva tarea: </label>
    <input type="text" v-model="newTask" id="task" />
    <input type="submit" value="Crear tarea" />
    <ul>
      <li
        class="task__list"
        :class="{ 'task__list-completed': task.completed }"
        v-for="(task, i) in tasks"
        :key="'task' + i"
        @click="completedTask(task.text)"
      >
        {{ task.text }}
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  data: () => ({
    newTask: "",
    tasks: [],
  }),
  methods: {
    createTask() {
      let task = {
        text: this.newTask,
        completed: false,
      };
      this.tasks.push(task);
      this.newTask = "";
      console.log(this.tasks);
    },
    completedTask(taskText) {
      let task = this.tasks.find((task) => task.text === taskText);
      task.completed = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  &__list {
    list-style-type: none;
    &-completed {
      text-decoration: line-through;
      color: grey;
    }
  }
}
</style>