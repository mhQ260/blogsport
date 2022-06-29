<template>
  <div class="ui-comments-list">
    <div class="ui-comments-list__summary">
      Komentarzy - {{ comments.length }}
    </div>
    <UiComment
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { UiComment } from './Comment';
const props = defineProps({
  comments: {
    type: Array as PropType<Array<any>>,
    required: true,
  },
});

const {
  comments,
} = toRefs(props);

</script>

<style lang="scss" src='./styles.scss' />