<script setup lang="ts">
import { Html, Body } from '@tlra/components';
import { defineComponent, inject } from 'vue';
defineComponent({
  components: {
    Html,
    Body,
  },
});
const lang = inject<string>('lang', 'en');
</script>

<template>
  <Html :lang="lang">
    <Body>
      <h1>Hello World</h1>
    </Body>
  </Html>
</template>
