<template>
  <div>
    <p>First Vue component</p>
    <p v-if="condition">This message will not be displayed</p>
    <p v-else-if="list.length !== 0">This message will be displayed</p>
    <p v-else>Not show</p>
  </div>
</template>

<script>
export default {
  name: "FirstComponent",
  data: () => ({
    condition: false,
    list: [0, 2, 3, 4, 5],
  }),
};
</script>

<style lang="scss" scoped>
</style>