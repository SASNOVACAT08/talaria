<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
  ref: {
    type: String,
    default: 'noreferrer',
  },
  target: {
    type: String,
    default: '_blank',
  },
  style: {
    type: Object,
    default: () => ({}),
  },
});

const style = computed(() => ({
  color: 'inherit',
  textDecoration: 'none',
  ...props.style,
}));
</script>

<template>
  <a :href="href" :ref="ref" :target="target" :style="style">
    <slot />
  </a>
</template>
