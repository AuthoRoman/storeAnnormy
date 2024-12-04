<template>
  <div id="app">
    <section class="intro"></section>
    <section>
      <MyHeader v-model="searchText" />
    </section>
    <PreviewComponent />
    <StoreComponent :searchText="searchText" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MyHeader from "./UI/MyHeader.vue";
import PreviewComponent from "@/pages/GeneralPage/PreviewComponent.vue";
import StoreComponent from "@/pages/GeneralPage/StoreComponent.vue";

const searchText = ref("");
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
}

/* Intro */

.intro {
  height: 100vh;
  max-width: 100vw;
  width: 100%;
  min-width: 30%;
  background-size: cover;

  background-image: url("./assets/introMan.jpeg");
}
</style>
