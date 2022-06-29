<template>
  <div class="ui-comment">
    <div class="ui-comment__title">
      <div>{{ comment.author }}</div>
    </div>
    <div class="ui-comment__content">
      {{ comment.content }}
    </div>
    <div class="ui-comment__date">
      Opublikowano - {{ comment.public_date }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

const {
  comment,
} = toRefs(props);

</script>

<style lang="scss" src='./styles.scss' />