<template>
  <nav class="nav" aria-label="main navigation">
    <div class="nav__inner">
      <ul class="nav__list">
        <li>
          <router-link to="/about">about</router-link>
        </li>
        <li>
          <router-link to="/">interviews</router-link>
          <ul>
            <li v-for="interview in interviews" :key="interview.id">
              <interview-link :interview="interview">
                {{ interview.name }}
              </interview-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="logo">
        <router-link to="/" class="logo__link">
          <img src="../assets/lttgl_logo.png" alt="Lets Talk The Good Life" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import sourceData from "../data.json";
import InterviewLink from "./InterviewLink.vue";

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
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 35%;
}

.nav__inner {
  max-width: 550px;
  margin-left: auto;
}

.nav__list {
  margin: 1.6rem 1.5rem;
}

.nav a {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2.4rem;
  padding: 0 5px;
}

.nav a:hover:not(.logo__link),
.router-link-active:not(.logo__link) {
  background-color: #ffc78ce6;
}

.nav li {
  margin: 0.8rem 0;
}

.logo {
  margin: 3.5rem 1.5rem 0 5.5rem;
}

.logo img {
  width: 23rem;
}
</style>
