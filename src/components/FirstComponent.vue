<template>
  <div>
    <p>First Vue component</p>
    <p v-if="condition">This message will not be displayed</p>
    <p v-else-if="list.length !== 0">This message will be displayed</p>
    <p v-else>Not show</p>
    <ul>
      <li v-for="(item, i) in elements" :key="i">
        ID: {{ item.id }} - {{ item.name }}
      </li>
      <img :src="source" alt="" />
    </ul>
    <p :style="classObject">Is in danger?</p>
  </div>
</template>

<script>
export default {
  name: "FirstComponent",
  data: () => ({
    condition: false,
    list: [0, 2, 3, 4, 5],
    elements: [
      { name: "Elemento 1", id: 1 },
      { name: "Elemento 2", id: 2 },
      { name: "Elemento 3", id: 3 },
    ],
    source: "https://i.imgur.com/BBcy6Wc.jpg",
    classObject: {
      background: "pink",
      fontSize: "16px",
    },
  }),
};
</script>

<style lang="scss" scoped>
</style>