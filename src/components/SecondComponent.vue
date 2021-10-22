<template>
  <div class="content">
    {{ calculate() }}
    <div class="content__div">
      <button class="content__button" @click="increment()">Increment</button>
      <span> Current value {{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 20,
  }),
  methods: {
    calculate() {
      return this.value * 2;
    },
    increment() {
      this.value++;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  &__div {
    padding: 20px;
  }
  &__button {
    height: 100px;
    width: 100px;
    background-color: lightcoral;
  }
}
</style>;
