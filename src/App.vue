<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Lgoin</router-link>
  </div>

  <router-view v-slot="{ Component }">
    <!-- <keep-alive>
      <component :is="Component" />
    </keep-alive> -->

    <component :is="Component" />
  </router-view>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
