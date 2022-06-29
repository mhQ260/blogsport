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
      <textarea name="a" />
      <button>
        Save
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['update:modelValue']);

const closeDialogHandler = (): void => {
  emit('update:modelValue', false);
};

</script>

<style lang="scss" src='./styles.scss' />