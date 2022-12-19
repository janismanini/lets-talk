<template>
  <router-link
    :to="{ name: 'interview.page', params: { slug: interview.slug } }"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    interview: {
      type: Object,
      required: true,
    },
  },
};
</script>
