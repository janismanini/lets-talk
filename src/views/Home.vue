<template>
  <section class="interviews">
    <ul class="interviews__list">
      <li v-for="interview in interviews" :key="interview.id">
        <interview-link :interview="interview">
          <h2>{{ interview.name }}</h2>
          <img
            :src="`../src/assets/images/${interview.portrait}`"
            :alt="`interview with ${interview.name}`"
          />
        </interview-link>
      </li>
    </ul>
  </section>
</template>

<script>
import sourceData from "../data.json";
import InterviewLink from "../components/InterviewLink.vue";

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
