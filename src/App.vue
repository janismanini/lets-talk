<template>
  <main-nav />
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
.main {
  position: absolute;
  top: 0;
  left: 35%;
  width: 65%;
}

.container {
  max-width: 840px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 1454px) {
  .main {
    position: relative;
    top: unset;
    left: unset;
    width: unset;
    margin-top: 7rem;
  }

  .container {
    margin: auto;
  }
}

@media only screen and (max-width: 1085px) {
  .container {
    padding: 0 2.5rem 2rem;
  }
}

@media only screen and (max-width: 545px) {
  .container {
    padding: 0 1.5rem 1rem;
  }
}
</style>
