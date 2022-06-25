<template>
  <div class="ui-post">
    <div class="ui-post__title">
      <div>{{ post.title }}</div>
      <div class="ui-post__buttons">
        <button
          @click="updateButtonHandler"
        >
          Update
        </button>
        <button
          @click="deleteButtonHandler"
        >
          Delete
        </button>
      </div>
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
import router from '../../../router';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const {
  post,
} = toRefs(props);

const updateButtonHandler = (): void => {
  console.log('Update');
};

const deleteButtonHandler = (): void => {
  const confirmAction = confirm('Czy na pewno chcesz usunąć dany post?');
  if (confirmAction) router.push({ path: '/' });
};

</script>

<style lang="scss" src='./styles.scss' />