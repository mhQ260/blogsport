<template>
  <div class="ui-post">
    <div class="ui-post__title">
      <div>{{ post.title }}</div>
    </div>
    <div class="ui-post__content">
      {{ post.content }}
    </div>
    <div class="ui-post__date">
      Opublikowano - {{ post.public_date }}
    </div>
    <div class="ui-post__comments">
      0 Komentarzy
    </div>
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