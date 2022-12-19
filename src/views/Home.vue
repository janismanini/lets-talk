<template>
  <section class="interviews">
    <interview-links :interviews="interviews" v-slot="{ interview }">
      <h2>{{ interview.name }}</h2>
      <img
        :src="`../src/assets/images/${interview.portrait}`"
        :alt="`interview with ${interview.name}`"
      />
    </interview-links>
  </section>
</template>

<script>
import sourceData from "../data.json";
import InterviewLinks from "../components/InterviewLinks.vue";

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
