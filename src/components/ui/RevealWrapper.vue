<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

withDefaults(defineProps<{
  tag?: string
  delay?: number
}>(), {
  tag: 'div',
  delay: 0,
})

const { el, isVisible } = useScrollReveal()
</script>

<template>
  <component :is="tag" ref="el" :style="{ transitionDelay: delay ? `${delay}ms` : undefined }" class="transition-all duration-700 ease-out" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'">
    <slot />
  </component>
</template>
