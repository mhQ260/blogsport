<template>
  <div class="post">
    <UiPost 
      :post="APIData"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { UiPost } from '../../components';
import { URI_POST_ID } from '../../api/endpoints';
import { getAPI } from '../../api/http';
import { useRoute } from 'vue-router';

const APIData = ref({});

const route = useRoute();
const id = route.params.id;

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