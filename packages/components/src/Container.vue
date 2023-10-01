<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  style: {
    type: Object,
    default: () => ({}),
  },
});

const styles = computed(() => {
  return { maxWidth: '37.5em', ...props.style };
});

const inlineStyle = computed(() => {
  return Object.entries(styles.value).reduce((acc, [key, value]) => {
    return `${acc}${key}:${value};`;
  }, '');
});
</script>

<template>
  <div
    :v-html="
      '<!--[if mso | IE]><table role=\'presentation\' width=\'100%\' align=\'center\' style=' +
      inlineStyle +
      '><tr><td></td><td style=\'width:37.5em;background:#ffffff\'><![endif]-->'
    "
  ></div>
  <div :style="styles">
    <slot />
  </div>
  <div
    :v-html="'<!--[if mso | IE]></td><td></td></tr></table><![endif]-->'"
  ></div>
</template>
