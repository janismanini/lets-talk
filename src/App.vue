<template>
  <main-nav />
  <div class="logo">
    <router-link to="/">
      <img src="../src/assets/lttgl_logo.png" alt="Lets Talk The Good Life" />
    </router-link>
  </div>
  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import MainNav from "./components/MainNav.vue";

export default {
  components: {
    MainNav,
  },
};
</script>
