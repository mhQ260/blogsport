<template>
  <div class="ui-post">
    <h1>Title - {{ post.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const {
  post,
} = toRefs(props);

</script>

<style lang="scss" src='./styles.scss' />