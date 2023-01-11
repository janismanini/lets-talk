<template>
  <section class="interviews">
    <ul class="interviews__list">
      <li
        v-for="interview in interviews"
        :key="interview.id"
        class="interviews__item"
      >
        <interview-link :interview="interview">
          <h2>{{ interview.name }}</h2>
          <img
            :src="`../src/assets/images/${interview.portrait}`"
            :alt="`interview with person behind ${interview.name}`"
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

<style>
.interviews__item {
  position: relative;
}

.interviews__item a {
  display: block;
  height: 560px;
}

.interviews__item a:hover {
  clip-path: polygon(86% 0, 100% 50%, 86% 100%, 0% 100%, 14% 50%, 0% 0%);
}

.interviews__item h2 {
  position: absolute;
  top: 1.3rem;
  left: 1.5rem;
}

.interviews__item img {
  height: 560px;
  width: auto;
  max-width: 840px;
}
</style>
