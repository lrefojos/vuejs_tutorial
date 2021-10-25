<template>
  <div class="content">
    {{ calculate() }}
    <div class="content__div">
      <button class="content__button" @click="increment()">Increment</button>
      <span> Current value {{ value }}</span>
    </div>
    <div class="computed">
      <add-button :sumando="10" @msg-child="childResponse" />

      <!-- <button @click="suma(5)">Computed button</button> -->
      <!-- <p>{{ value }}</p> -->
      <!-- <br />
      <button @click="counterMethod++">Method button</button>
      <p>{{ counterMethod }}</p>
      {{ printTextMethod() }}
      {{ printTextComputed }} -->
    </div>
  </div>
</template>

<script>
import AddButton from "@/components/AddButton";

// more info about computed vs methods properties
// https://medium.com/notonlycss/the-difference-between-computed-and-methods-in-vue-js-9cb05c59ed98
export default {
  components: {
    AddButton,
  },
  data: () => ({
    value: 20,
    counterComputed: 0,
    counterMethod: 0,
  }),
  // no aceptan parametros de entrada, siempre tiene que hacer un return (usadas para pintar en la vista)
  computed: {
    printTextComputed() {
      return console.log(
        `counter printed from computed: ${this.counterComputed}`
      );
    },
  },
  methods: {
    calculate() {
      return this.value * 2;
    },
    increment() {
      this.value++;
    },
    printTextMethod() {
      console.log(`counter printed from method: ${this.counterMethod} `);
    },
    suma(sumando) {
      this.value = this.value + sumando;
      console.log("VALUE", this.value);
    },
    childResponse(e) {
      console.log(e);
    },
  },
  created() {
    console.log("Value in created ", this.value);
  },
  watch: {
    // value(newValue, oldValue) {
    //   console.log("WATCH-VALUE", newValue, oldValue);
    // },
    value: {
      handler: function (newValue, oldValue) {
        console.log("WATCH-VALUE", newValue, oldValue);
      },
      immediate: true,
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
</style>
