<template>
  <div class="ui-dialog">
    <div class="ui-dialog__header">
      <div class="header__title">
        Dodaj komentarz
      </div>
      <button
        class="header__button"
        @click="closeDialogHandler"
      >
        x
      </button>
    </div>
    <div class="ui-dialog__content">
      <input
        v-model="comment.author"
        class="content__item"
        placeholder="Autor"
      >
      <textarea 
        v-model="comment.content"
        class="content__item"
        placeholder="Content"
      />
      <UiButton
        value="Dodaj komentarz"
        @click="sendComHandler"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { UiButton } from '../../../components';
import { getAPI } from '../../../api/http';
import { URI_COMMENT_ADD } from '../../../api/endpoints';
import router from '../../../router';

const props = defineProps({
  postId: {
    type: Number,
    required: true,
  },
});

const {
  postId,
} = toRefs(props);


const comment = ref({
  author: '',
  content: '',
  post_id: postId.value,
});

const emit = defineEmits(['update:modelValue']);

const closeDialogHandler = (): void => {
  emit('update:modelValue', false);
};

const sendComHandler = async(): Promise<void> => {
  try {
    await getAPI.post(URI_COMMENT_ADD, comment.value);
    alert('Dodano komentarz do posta!');
    router.push({ path: '/' });
  } catch (err) {
    console.log(err);
  }
};

</script>

<style lang="scss" src='./styles.scss' />