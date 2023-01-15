<script setup lang="ts">
import { useSlots, computed } from 'vue';

defineProps({
  props: {
    type: Object,
    default: () => ({}),
  },
});

function renderWhiteSpace(text: string) {
  const whiteSpaceCodes = '\xa0\u200C\u200B\u200D\u200E\u200F\uFEFF';
  return whiteSpaceCodes.repeat(150 - text.length);
}

// Get default slot text
const slotText = computed(() => {
  const { default: defaultSlot } = useSlots();
  return defaultSlot ? defaultSlot()[0].children?.toString() : '';
});
</script>

<template>
  <div
    :style="{
      display: 'none',
      overflow: 'hidden',
      lineHeight: '1px',
      opacity: 0,
      maxHeight: 0,
      maxWidth: 0,
    }"
    :v-bind="props"
  >
    {{ slotText }}
    <div>
      {{ renderWhiteSpace(slotText!) }}
    </div>
  </div>
</template>
