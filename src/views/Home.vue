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

<style>
.interviews__item {
  position: relative;
  max-height: 560px;
}

.interviews__item a {
  display: block;
  max-height: 560px;
}

.interviews__item a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
}

.interviews__item a:hover::before {
  background-color: #beef33;
}

.interviews__item h2 {
  position: absolute;
  top: 1.3rem;
  left: 2rem;
}

.interviews__item img {
  max-height: 560px;
}
</style>
