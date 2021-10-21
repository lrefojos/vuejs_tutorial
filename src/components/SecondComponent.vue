<template>
  <div class="content">
    {{ calculate() }}
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 20,
  }),
  methods: {
    calculate() {
      let aux = this.value * 2;
      console.log(aux);
      return this.value * 2;
    },
  },
};
</script>

<style lang="scss" scoped></style>;
