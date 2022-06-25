<template>
  <div class="UiPost">
    <a 
      :href="`/post/${post.id}`"
    >
      <div class="UiPost__title">
          {{ post.title }}
      </div>
      <div class="UiPost__content">
        {{ post.content }}
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';

const props = defineProps({
  post: {
    type: Object as PropType<any>,
    required: true,
  },
});

const {
  post,
} = toRefs(props);

</script>

<style lang="scss" src='./styles.scss' />