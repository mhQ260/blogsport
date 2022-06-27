<template>
  <div class="post">
    <UiPost 
      v-if="!updateView"
      :post="APIData"
    />
    <UiAddPost
      v-else
      :postToUpdate="APIData"
    />
    <div class="post__buttons">
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
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { UiPost, UiAddPost } from '../../components';
import { URI_POST_ID, URI_POST_DELETE_ID } from '../../api/endpoints';
import { getAPI } from '../../api/http';
import router from '../../router';

const APIData = ref({});
const updateView = ref(false);

const route = useRoute();
const id = route.params.id;

const updateButtonHandler = (): void => {
  updateView.value = true;
};

const deleteFunc = async (): Promise<void> => {
  try {
    await getAPI.post(URI_POST_DELETE_ID(Number(APIData.value.id)));
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

onMounted(() => {
  getAPI.get(URI_POST_ID(Number(id)))
    .then(res => {
      APIData.value = res.data;
    })
    .catch(err => {
      console.log(err);
    });
});

</script>