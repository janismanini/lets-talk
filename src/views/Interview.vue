<template>
  <section class="interview">
    <h1>{{ interview.name }}</h1>
    <span class="interview__location">{{ interview.location }}</span>
    <img
      :src="`../src/assets/images/${interview.portrait}`"
      :alt="`person behind ${interview.name} at work`"
    />
    <h3 class="interview__intro">{{ interview.intro }}</h3>
    <ul class="interview__text">
      <li v-for="(question, index) in interview.questions" :key="index">
        <h4>{{ question.title }}</h4>
        <p>{{ question.answer }}</p>
        <div class="interview__images" v-if="question.images.length">
          <img
            v-for="(image, index) in question.images"
            :key="index"
            :src="`../src/assets/images/${image}`"
            alt=""
          />
        </div>
      </li>
    </ul>
    <p>{{ interview.thanks }}</p>
    <h5>{{ interview.imprint }}</h5>
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

<style>
.interview {
  margin: 1.4rem 0 4rem;
}

.interview__location {
  display: block;
  font-weight: 800;
  font-size: 1.2rem;
  text-indent: 2px;
  margin-bottom: 0.2rem;
}

.interview__intro {
  margin: 1.7rem 0 2.1rem;
}

.interview__images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4.5rem;
  margin: 2rem 0;
}

.interview__images img {
  max-height: 567px;
  width: auto;
  max-width: 840px;
}
</style>
