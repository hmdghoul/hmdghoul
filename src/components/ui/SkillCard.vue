<script setup>
defineProps({
  category: { type: Object, required: true },
})
</script>

<template>
  <div class="bg-surface border border-line rounded-xl p-6 h-full hover:shadow-md hover:scale-[1.01] transition-all duration-200">
    <h3 class="text-xs font-mono uppercase tracking-widest text-faint mb-4">{{ category.name }}</h3>
    <div class="flex flex-wrap gap-2">
      <span v-for="(skill, i) in category.items" :key="skill" class="px-3 py-1 rounded-full text-sm font-mono transition-colors duration-200" :class="i < 3
        ? 'bg-accent-subtle text-accent font-medium'
        : 'bg-canvas border border-line text-muted'">
        {{ skill }}
      </span>
    </div>
  </div>
</template>
