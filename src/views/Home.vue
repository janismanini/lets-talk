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

.interviews__item a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.interviews__item a:hover::before {
  background-color: #ffcd99;
  mix-blend-mode: luminosity;
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
