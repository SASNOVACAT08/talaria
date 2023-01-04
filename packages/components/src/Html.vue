<script setup lang="ts">
const props = defineProps({
  lang: {
    type: String,
    default: 'en',
  },
});
</script>

<template>
  <html :lang="lang">

  </html>
</template>