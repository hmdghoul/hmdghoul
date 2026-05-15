<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal.js'

defineProps({
  tag: { type: String, default: 'div' },
  delay: { type: Number, default: 0 },
})

const { el, isVisible } = useScrollReveal()
</script>

<template>
  <component
    :is="tag"
    ref="el"
    :style="{ transitionDelay: delay ? `${delay}ms` : undefined }"
    class="transition-all duration-700 ease-out"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
  >
    <slot />
  </component>
</template>
