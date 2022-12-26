<template>
  <nav class="nav" aria-label="main navigation">
    <ul>
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
  width: calc(35% - 3rem);
  margin: 1.2rem 1.5rem;
}

.nav a {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2.4rem;
  padding: 0 5px;
}

.nav a:hover {
  background-color: #beef33;
}

.nav li {
  margin: 0.8rem 0;
}
</style>
