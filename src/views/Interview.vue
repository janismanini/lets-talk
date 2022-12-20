<template>
  <section class="interview">
    <h1>{{ interview.name }}</h1>
    <h2>{{ interview.location }}</h2>
    <img
      :src="`../src/assets/images/${interview.portrait}`"
      :alt="`interview with ${interview.name}`"
    />
    <h3>{{ interview.intro }}</h3>
    <ul>
      <li
        v-for="question in interview.questions"
        :key="interview.questions.indexOf(question)"
      >
        <h4>{{ question.title }}</h4>
        <p>{{ question.answer }}</p>
        <div class="interview__images" v-if="question.images.length">
          <img
            v-for="image in question.images"
            :key="question.images.indexOf(image)"
            :src="`../src/assets/images/${image}`"
            :alt="`interview with ${interview.name}`"
          />
        </div>
      </li>
    </ul>
    <p>{{ interview.thanks }}</p>
    <p>{{ interview.imprint }}</p>
  </section>
</template>

<script>
import sourceData from "../data.json";

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },

  computed: {
    interview() {
      return sourceData.interviews.find((i) => i.slug === this.slug);
    },
  },
};
</script>
