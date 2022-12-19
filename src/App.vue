<template>
  <main-nav />
  <aside class="logo">
    <router-link to="/">
      <img src="../src/assets/lttgl_logo.png" alt="Lets Talk The Good Life" />
    </router-link>
  </aside>
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
