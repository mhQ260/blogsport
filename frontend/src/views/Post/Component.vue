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

const APIData = ref({});

onMounted(() => {
  getAPI.get(URI_POST_ID(1))
    .then(res => {
      APIData.value = res.data;
    })
    .catch(err => {
      console.log(err);
    });
});

</script>