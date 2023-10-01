<script setup lang="ts">
defineProps({
  lang: {
    type: String,
    default: 'en',
  },
});
</script>

<template>
  <html :lang="lang">
    <slot />
  </html>
</template>
