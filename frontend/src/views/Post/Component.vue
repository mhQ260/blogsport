<template>
  <div class="post">
    <UiDialog
      v-if="showDialog"
      @update:modelValue="getDialogValue"
    />
    <div
      v-if="!updateView"
      class="post__wrapper"
    >
      <UiPost 
        :post="post"
      />
      <div class="post__buttons">
        <button
          @click="openDialogHandler"
        >
          Dodaj komentarz
        </button>
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
      <UiCommentsList
        :comments="comments"
      />
    </div>
    <UiAddPost
      v-else
      :postToUpdate="post"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { UiPost, UiAddPost, UiCommentsList, UiDialog } from '../../components';
import { URI_POST_ID, URI_POST_DELETE_ID, URI_COMMENTS_FOR_POST } from '../../api/endpoints';
import { getAPI } from '../../api/http';
import router from '../../router';

const post = ref({});
const comments = ref({});
const updateView = ref(false);
const showDialog = ref(false);

const route = useRoute();
const id = route.params.id;

const updateButtonHandler = (): void => {
  updateView.value = true;
};

const deleteFunc = async (): Promise<void> => {
  try {
    await getAPI.post(URI_POST_DELETE_ID(Number(post.value.id)));
  } catch (err) {
    console.log(err);
  }
};

const deleteButtonHandler = (): void => {
  const confirmAction = confirm('Czy na pewno chcesz usunąć dany post?');
  if (confirmAction) {
    deleteFunc();
    router.push({ path: '/' });
  }
};

const openDialogHandler = (): void => {
  showDialog.value = true;
};

const getDialogValue = () => {
  showDialog.value = false;
};

onMounted(() => {
  getAPI.get(URI_POST_ID(Number(id)))
    .then(res => {
      post.value = res.data;
    })
    .catch(err => {
      console.log(err);
    });

  getAPI.get(URI_COMMENTS_FOR_POST(Number(id)))
    .then(res => {
      comments.value = res.data;
    })
    .catch(err => {
      console.log(err);
    });
});

</script>

<style lang="scss" src="./styles.scss" />