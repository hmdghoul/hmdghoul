<script setup lang="ts">
defineProps<{
  index?: string
  label?: string
  center?: boolean
}>()
</script>

<template>
  <div class="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest"
    :class="center ? 'justify-center' : ''">
    <span v-if="index" class="text-accent">{{ index }}</span>
    <span class="w-8 h-px bg-line"></span>
    <span class="text-faint">{{ label }}</span>
  </div>
</template>
