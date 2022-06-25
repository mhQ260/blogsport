<template>
  <div class="ui-add-post">
    <form 
      class="form"
      @submit="submitForm"
    >
      <input 
        class="form__item"
        type="text" 
        placeholder="Title"
        v-model="post.title"
      />
      <textarea
        class="form__item"
        rows="15"
        cols="100"
        placeholder="Content"
        v-model="post.content"
      />
      <button
        class="form__item"
      >
        Dodaj artykuł
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAPI } from '../../../api/http';
import { URI_POST_ADD } from '../../../api/endpoints';

const post = ref({
  title: '',
  content: '',
});

const submitForm = (e: Event): void => {
  e.preventDefault();
  sendForm();
};

const clearForm = (): void => {
  post.value.title = '';
  post.value.content = '';
  alert('Dodano post!');
};

const sendForm = async (): Promise<void> => {
  try {
    await getAPI.post(URI_POST_ADD, post.value);
    clearForm();
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" src='./styles.scss' />