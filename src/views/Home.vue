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

<style lang="scss">
.interviews__item {
  position: relative;

  a {
    display: block;
    max-height: 560px;

    &:hover h2 {
      color: #f97bda;
      transition: all 0.4s linear;
    }
  }

  h2 {
    position: absolute;
    top: 1.4rem;
    left: 0;
    max-width: 100%;
    padding: 0 1.5rem;
    font-size: 9rem;
    line-height: 0.9;
    color: #fff;
    word-break: break-word;
    transition: all 0.4s ease-in;
  }

  img {
    max-height: 560px;
    width: auto;
    max-width: 840px;
  }
}

@media only screen and (max-width: 1454px) {
  .interviews__item {
    h2 {
      color: #f97bda;
    }
    a:hover h2 {
      color: #fff;
    }
  }
}

@media only screen and (max-width: 1085px) {
  .interviews__item {
    img {
      max-width: 100%;
    }
  }
}

@media only screen and (max-width: 920px) {
  .interviews__item h2 {
    top: 1.2rem;
    font-size: 4.8rem;
  }
}

@media only screen and (max-width: 545px) {
  .interviews__item h2 {
    top: 1rem;
    font-size: 2.6rem;
    padding: 0 1rem;
  }
}
</style>
