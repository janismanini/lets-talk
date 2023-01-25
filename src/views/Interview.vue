<template>
  <section class="interview">
    <h1>{{ interview.name }}</h1>
    <span class="interview__location">{{ interview.location }}</span>
    <img
      :src="`../src/assets/images/${interview.portrait}`"
      :alt="`person behind ${interview.name} at work`"
    />
    <p class="interview__intro">{{ interview.intro }}</p>
    <ul>
      <li v-for="(question, index) in interview.questions" :key="index">
        <h2 class="interview__question">{{ question.title }}</h2>
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
    <p class="interview__imprint">{{ interview.imprint }}</p>
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

<style lang="scss">
.interview {
  margin: 1.4rem 0 4rem;

  &__location {
    display: block;
    font-weight: 800;
    font-size: 1.2rem;
    text-indent: 2px;
    margin-bottom: 0.2rem;
  }

  &__intro,
  &__question,
  &__imprint {
    font-weight: 800;
  }

  &__intro {
    font-size: 1.7rem;
    margin: 1.7rem 0 2.1rem;
  }

  &__question {
    font-size: 1.3rem;
    margin-bottom: 0.1rem;
  }

  &__images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4.5rem;
    margin: 2rem 0;

    & img {
      max-height: 567px;
      width: auto;
      max-width: 840px;
    }
  }

  &__imprint {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 1085px) {
  .interview__images img {
    max-width: 100%;
  }
}

@media only screen and (max-width: 920px) {
  .interview {
    max-width: 650px;
    margin: 1rem 0;

    &__images {
      justify-content: flex-start;
      gap: 2rem;

      & img {
        max-height: 433px;
      }
    }
  }
}

@media only screen and (max-width: 545px) {
  .interview {
    &__intro {
      font-size: 1.5rem;
      margin: 1.3rem 0 1.7rem;
    }
    &__question {
      font-size: 1.2rem;
    }
  }
}
</style>
