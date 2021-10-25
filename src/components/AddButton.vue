<template>
  <button @click="suma()">Computed button</button>
</template>

<script>
export default {
  name: "AddButton",
  props: {
    sumando: {
      type: Number,
      // required: true,
      default: 6,
    },
  },
  data: () => ({
    value: 20,
  }),
  methods: {
    suma() {
      this.value = this.value + this.sumando;
      this.$emit("msg-child", "he sumado");
      console.log("VALUE", this.value);
      console.log("PROPS", this.$props);
    },
  },
};
</script>
