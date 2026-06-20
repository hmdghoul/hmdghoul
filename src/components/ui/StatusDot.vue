<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'sm' | 'md'
}>(), {
  size: 'md',
})
</script>

<template>
  <span class="relative flex flex-shrink-0" :class="size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2'">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span class="relative inline-flex h-full w-full rounded-full bg-emerald-500"></span>
  </span>
</template>
