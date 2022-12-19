<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="interview in interviews" :key="interview.id">
        <interview-link :interview="interview">
          {{ interview.name }}
        </interview-link>
      </li>
      <li><router-link to="/about">About</router-link></li>
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
nav .router-link-active {
  border-bottom: 2px solid;
}
</style>
