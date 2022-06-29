<template>
  <div class="posts">
    <UiPostsList
      :posts="APIData"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { URI_POSTS } from '../../api/endpoints';
import { getAPI } from '../../api/http';
import { UiPostsList } from '../../components';

const APIData = ref({});

onMounted(() => {
  getAPI.get(URI_POSTS)
    .then(res => {
      APIData.value = res.data;
    })
    .catch(err => {
      console.log(err);
    });
});


</script>

<style lang="scss" src="./styles.scss" />