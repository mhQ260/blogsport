<template>
  <div class="add-post">
    <h1>
      AddPost
    </h1>
    <UiAddPost />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { UiAddPost } from '../../components/ui';

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

<style lang="scss" src="./styles.scss" />