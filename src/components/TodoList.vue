<template>
  <div class="task">
    <form class="task__form" id="app" @submit.prevent="createTask">
      <label class="task__label" for="task">Nueva tarea: </label>
      <input class="task__input" type="text" v-model="newTask" id="task" />
      <input class="task__button" type="submit" value="Crear tarea" />
      <ul class="task__list">
        <li
          class="task__element"
          :class="{ 'task__element-completed': task.completed }"
          v-for="(task, i) in tasks"
          :key="'task' + i"
          @click="completedTask(task.text)"
        >
          {{ task.text }}
        </li>
      </ul>
    </form>
  </div>
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
  width: 800px;
  max-width: 100%;
  margin: 0px auto;
  &__form {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0px 10px 22px -1px rgba(0, 0, 0, 0.25);
  }
  &__label {
    display: block;
    margin-bottom: 10px;
  }
  &__input {
    height: 35px;
  }
  &__button {
    margin-left: 20px;
    height: 35px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0.2);
    background-color: #2ecc71;
    color: #ecf0f1;
    cursor: pointer;
  }
  &__list {
    margin-top: 40px;
    list-style-type: none;
  }
  &__element {
    cursor: pointer;
    margin: 10px 0;
    &-completed {
      text-decoration: line-through;
      color: grey;
    }
  }
}
</style>