<template>
  <nav
    class="nav"
    :class="{ 'is-open': expanded === true }"
    aria-label="main navigation"
  >
    <div class="nav__inner">
      <div class="nav__toggle">
        <button
          class="nav__toggle-btn"
          aria-haspopup="true"
          :aria-expanded="expanded"
          @click="
            {
              expanded = !expanded;
            }
          "
        >
          <span class="sr-only">open and close navigation</span>
          <span class="nav__toggle-line nav__toggle-line--1"></span>
          <span class="nav__toggle-line nav__toggle-line--2"></span>
          <span class="nav__toggle-line nav__toggle-line--3"></span>
        </button>
      </div>
      <ul class="nav__list">
        <li>
          <router-link to="/about" @click="closeBurgerMenu">about</router-link>
        </li>
        <li>
          <router-link to="/" @click="closeBurgerMenu">interviews</router-link>
          <ul>
            <li v-for="interview in interviews" :key="interview.id">
              <interview-link :interview="interview" @click="closeBurgerMenu">
                {{ interview.name }}
              </interview-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="logo" aria-hidden="true">
        <router-link to="/" tabindex="-1">
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
      expanded: false,
    };
  },
  methods: {
    closeBurgerMenu() {
      setTimeout(() => (this.expanded = false), 200);
    },
  },
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 35%;

  &__inner {
    position: relative;
    max-width: 550px;
    margin-left: auto;
  }

  &__toggle {
    display: none;
    justify-content: flex-start;
    margin: 1.6rem 2.3rem;

    &-btn {
      position: relative;
      width: 60px;
      height: 50px;
      padding: 0;
      background-color: transparent;
      border: none;
      outline-offset: 2px;
      transition: all 250ms ease-in-out, outline-offset 0s linear;
    }

    &-line {
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      height: 6px;
      background-color: #f97bda;
      transition: 250ms all ease-in-out;

      &--1 {
        top: 6px;
      }
      &--2 {
        top: 50%;
        margin-top: -3px;
      }
      &--3 {
        bottom: 6px;
      }
    }

    &-btn[aria-expanded="true"] {
      .nav__toggle-line--1 {
        transform: translateY(16px) translateX(0) rotate(45deg);
      }
      .nav__toggle-line--2 {
        opacity: 0;
      }
      .nav__toggle-line--3 {
        transform: translateY(-16px) translateX(0) rotate(-45deg);
      }
    }
  }

  &__list {
    margin: 1.6rem 1.5rem;

    & a {
      color: #000;
      text-transform: uppercase;
      text-shadow: none;
      font-weight: 600;
      font-size: 2.4rem;
      transition: all 0.5s;
    }
    & a:hover,
    & .router-link-active {
      text-shadow: -0.7px -0.7px 0 #000, 0.7px -0.7px 0 #000,
        -0.7px 0.7px 0 #000, 0.7px 0.7px 0 #000;
      transition: all 0.5s;
    }

    & li {
      margin: 0.8rem 0;
    }
  }

  & .logo {
    margin: 1.7rem 1rem 0 7.5rem;

    & img {
      width: 23rem;
    }
  }
}

@media only screen and (max-width: 1454px) {
  .nav {
    width: 100%;
    z-index: 2;
    background-color: #fff;

    &__inner {
      max-width: unset;
      margin-left: unset;
    }

    &__list {
      display: none;
    }

    &__toggle {
      display: flex;
    }

    & .logo {
      position: absolute;
      top: -0.8rem;
      right: 1.3rem;
      z-index: 3;
      margin: 0;

      & img {
        width: 18rem;
      }
    }

    &.is-open {
      height: 100%;
      overflow-y: scroll;

      .nav__list {
        display: block;
        margin: 0;
        padding: 1.3rem 2.5rem 1.8rem;
        background-color: #fff;
      }
    }
  }
}

@media only screen and (max-width: 920px) {
  .nav .logo img {
    width: 11rem;
  }
}

@media only screen and (max-width: 545px) {
  .nav {
    &__toggle {
      margin: 1.5rem;
    }

    & .logo img {
      width: 8rem;
    }

    &.is-open .nav__list {
      padding: 1rem 1.5rem;

      & a {
        font-size: 1.3rem;
      }
      & a:hover,
      & .router-link-active {
        text-shadow: -0.3px -0.3px 0 #000, 0.3px -0.3px 0 #000,
          -0.3px 0.3px 0 #000, 0.3px 0.3px 0 #000;
        transition: all 0.5s;
      }
    }
  }
}
</style>
