<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <span class="font-mono text-4xl md:text-5xl font-bold text-accent leading-none tracking-tight">{{ value }}</span>
    <span class="text-sm text-muted">{{ label }}</span>
  </div>
</template>
