<template>
  <!-- vue3新特性根节点可以支持多个标签 -->
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld
    msg="Hello Vue 3 + Vite"
    v-model:data="datalist"
    @change="change"
  />
</template>

<script setup>
import HelloWorld from "../components/HelloWorld.vue";
import { reactive } from "vue";
const datalist = reactive({ one: "1" });
const change = (e) => {
  console.log(e);
};
</script>

<style lang="scss" scoped>
</style>