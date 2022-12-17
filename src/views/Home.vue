<template>
  <section class="interviews">
    <router-link
      v-for="interview in this.interviews"
      :key="interview.id"
      :to="{ name: 'interview.page', params: { slug: interview.slug } }"
    >
      <h2>{{ interview.name }}</h2>
      <img
        :src="`../src/assets/images/${interview.portrait}`"
        :alt="`interview with ${interview.name}`"
      />
    </router-link>
  </section>
</template>

<script>
import sourceData from "../data.json";

export default {
  data() {
    return {
      interviews: sourceData.interviews,
    };
  },
};
</script>
