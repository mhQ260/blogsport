<template>
  <div class="posts">
    <h1>
      Posts
    </h1>
    <div
      v-for="post in APIData"
      :key="post.id"
    >
      {{ post }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { URI_POSTS } from '../../api/endpoints';
import { getAPI } from '../../api/http';

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