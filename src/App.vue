<template>
  <main-nav />
  <aside class="logo">
    <router-link to="/" class="logo__link">
      <img src="../src/assets/lttgl_logo.png" alt="Lets Talk The Good Life" />
    </router-link>
  </aside>
  <main class="main">
    <div class="container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
