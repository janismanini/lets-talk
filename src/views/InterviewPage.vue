<template>
  <section class="interview">
    <h1>{{ interview.name }}</h1>
    <h2>{{ interview.location }}</h2>
    <img
      :src="`../src/assets/images/${interview.portrait}`"
      :alt="interview.name"
    />
    <h3>{{ interview.intro }}</h3>
    <ul
      v-for="question in interview.questions"
      :key="interview.questions.indexOf(question)"
    >
      <li>
        <h4>{{ question.question }}</h4>
        <p>{{ question.answer }}</p>
      </li>
    </ul>
    <p>{{ interview.thanks }}</p>
    <p>{{ interview.imprint }}</p>
  </section>
</template>

<script>
import sourceData from "../data.json";

export default {
  computed: {
    interviewSlug() {
      return this.$route.params.slug;
    },
    interview() {
      return sourceData.interviews.find((i) => i.slug === this.interviewSlug);
    },
  },
};
</script>
