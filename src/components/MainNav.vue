<template>
  <nav>
    <interview-links :interviews="interviews" v-slot="{ interview }">
      <p>{{ interview.name }}</p>
    </interview-links>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style>
nav .router-link-active {
  font-weight: 900;
  border-bottom: 1px solid;
}
</style>

<script>
import sourceData from "../data.json";
import InterviewLinks from "./InterviewLinks.vue";

export default {
  components: {
    InterviewLinks,
  },
  data() {
    return {
      interviews: sourceData.interviews,
    };
  },
};
</script>
