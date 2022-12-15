<template>
  <MainNav />
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
