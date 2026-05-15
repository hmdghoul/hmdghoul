<script setup>
defineProps({
  value: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <div class="bg-surface border border-line rounded-xl p-6 flex flex-col gap-1 hover:shadow-md transition-shadow duration-200 h-full">
    <span class="text-3xl font-bold text-accent font-mono">{{ value }}</span>
    <span class="text-sm text-muted">{{ label }}</span>
  </div>
</template>
