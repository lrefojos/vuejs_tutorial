<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <FirstComponent />
    <SecondComponent />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FirstComponent from "@/components/FirstComponent.vue";
import Footer from "@/components/Footer.vue";
import SecondComponent from "@/components/SecondComponent.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    FirstComponent,
    SecondComponent,
    Footer,
  },
};
</script>
