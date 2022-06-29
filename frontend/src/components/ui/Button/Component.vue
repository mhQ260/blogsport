<template>
  <button 
    class="ui-button"
  >
    {{ value }}
  </button>

</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const {
  value,
} = toRefs(props);
</script>

<style lang="scss" src='./styles.scss' />