<template>
  <router-link
    v-for="interview in interviews"
    :key="interview.id"
    :to="{ name: 'interview.page', params: { slug: interview.slug } }"
  >
    <slot :interview="interview"></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    interviews: {
      type: Object,
      required: true,
    },
  },
};
</script>
