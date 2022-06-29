<template>
  <div class="ui-add-post">
    <h1>
      AddPost
    </h1>
    <form
      v-if="!postToUpdate"
      class="form"
      @submit="sendForm"
    >
      <input
        v-model="post.title"
        class="form__item"
        type="text"
        placeholder="Title"
      >
      <textarea
        v-model="post.content"
        class="form__item"
        rows="15"
        cols="100"
        placeholder="Content"
      />
      <UiButton
        value="Dodaj artykuł"
        class="form__item"
      />
    </form>
    <form
      v-else
      class="form"
      @submit="sendUpdatedForm"
    >
      <input
        v-model="postToUpdate.title"
        class="form__item"
        type="text" 
        placeholder="Title"
      >
      <textarea
        v-model="postToUpdate.content"
        class="form__item"
        rows="15"
        cols="100"
        placeholder="Content"
      />
      <UiButton
        value="Zaktualizuj artykuł"
        class="form__item"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { UiButton } from '../../../components';
import { getAPI } from '../../../api/http';
import { URI_POST_ADD, URI_POST_UPDATE } from '../../../api/endpoints';
import router from '../../../router';

const props = defineProps({
  postToUpdate: {
    type: Object,
    required: true,
  },
});

const {
  postToUpdate,
} = toRefs(props);

const post = ref({
  title: '',
  content: '',
});

const clearForm = (): void => {
  post.value.title = '';
  post.value.content = '';
  alert('Dodano post!');
};

const sendForm = async (e: Event): Promise<void> => {
  e.preventDefault();
  try {
    await getAPI.post(URI_POST_ADD, post.value);
    clearForm();
  } catch (err) {
    console.log(err);
  }
};

const sendUpdatedForm = async (e: Event): Promise<void> => {
  try {
    await getAPI.put(URI_POST_UPDATE(Number(postToUpdate.value.id)), postToUpdate.value);
    router.push({ path: '/' });
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" src='./styles.scss' />