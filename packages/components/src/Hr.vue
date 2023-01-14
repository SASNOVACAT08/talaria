<script setup lang="ts">
defineProps({
  props: {
    type: Object,
    default: () => ({}),
  },
  style: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <hr
    ref="forwardedRef"
    :style="{
      width: '100%',
      border: 'none',
      borderTop: '1px solid #eaeaea',
      ...style,
    }"
    :v-bind="props"
  />
</template>
