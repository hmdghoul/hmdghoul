<script setup lang="ts">
import type { SkillCategory } from '@/data/portfolio'

defineProps<{
  category: SkillCategory
}>()
</script>

<template>
  <div class="bg-surface border border-line rounded-xl p-5 h-full hover:border-muted transition-colors duration-200">
    <div class="flex items-center justify-between mb-4 pb-3 border-b border-line">
      <h3 class="text-[11px] font-mono uppercase tracking-widest text-primary">{{ category.name }}</h3>
      <span class="font-mono text-[11px] text-faint tabular-nums">{{ category.items.length }}</span>
    </div>
    <div class="flex flex-wrap gap-1.5">
      <span v-for="(skill, i) in category.items" :key="skill"
        class="px-2.5 py-1 rounded-md text-[13px] font-mono transition-colors duration-200" :class="i < 3
          ? 'bg-accent-subtle text-accent font-medium'
          : 'bg-canvas border border-line text-muted'">
        {{ skill }}
      </span>
    </div>
  </div>
</template>
