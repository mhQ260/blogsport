<template>
  <div class="UiPostsList">
    <h1>
        Posts
    </h1>
    <UiPost
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { UiPost } from './Post';
const props = defineProps({
  posts: {
    type: Array as PropType<Array<any>>,
    required: true,
  },
});

const {
  posts,
} = toRefs(props);

</script>

<style lang="scss" src='./styles.scss' />