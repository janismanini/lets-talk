<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="has-submenu">
        <router-link to="/" aria-expanded="false">interviews</router-link>
        <ul class="navigation__list-interviews">
          <li v-for="interview in interviews" :key="interview.id">
            <interview-link :interview="interview">
              {{ interview.name }}
            </interview-link>
          </li>
        </ul>
      </li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
  </nav>
</template>

<script>
import sourceData from "../data.json";
import InterviewLink from "./InterviewLink.vue";

export default {
  components: {
    InterviewLink,
  },
  data() {
    return {
      interviews: sourceData.interviews,
    };
  },
};
</script>

<style>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
}

.navigation__list {
  display: flex;
  justify-content: space-around;
}

.navigation__list-interviews {
  display: none;
}

nav .router-link-active {
  border-bottom: 2px solid;
}
</style>
