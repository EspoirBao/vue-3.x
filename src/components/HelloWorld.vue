<template>
  <h1 class="text">{{ msg }}</h1>
  <img :src="imgurl" />

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="click">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import {
  defineProps,
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  onRenderTriggered,
  ref,
} from "vue";
import img from "../assets/logo.png";
const imgurl = ref(img);

const emit = defineEmit(["change"]);

const props = defineProps({
  // vue3Props
  msg: String,
  data: Object,
});
const active = ref("red");
const click = () => {
  state.count++;
  active.value = "green";
  emit("change", 123123);
};

// vue3生命周期钩子
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
  console.log("父组件传过来的props" + props.data);
  props.data.one = "2";
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
onUpdated(() => {
  console.log("onUpdated");
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
onUnmounted(() => {
  console.log("onUnmounted");
});
onActivated(() => {
  console.log("onActivated");
});
onDeactivated(() => {
  console.log("onDeactivated");
});
onErrorCaptured(() => {
  console.log("onErrorCaptured");
});

onRenderTriggered((e) => {
  // 检查哪个依赖项导致组件重新呈现
  console.log("onErrorCaptured");
});

const state = reactive({ count: 0 });
</script>

<style lang="scss"  scoped>
a {
  color: #42b983;
}

.text {
  color: v-bind("active");
}
</style>