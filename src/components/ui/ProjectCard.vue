<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <div class="bg-surface border border-line rounded-xl p-6 flex flex-col gap-4 hover:shadow-md hover:scale-[1.01] transition-all duration-200 h-full">
    <h3 class="font-semibold text-primary text-base leading-snug">{{ project.name }}</h3>
    <div class="flex flex-col gap-1 flex-1">
      <span class="text-sm text-muted">{{ project.company }}</span>
      <span class="text-xs font-mono text-faint">{{ project.period }}</span>
    </div>
    <div class="flex flex-wrap gap-1.5">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-accent-subtle text-accent"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
