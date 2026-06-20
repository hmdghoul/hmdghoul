<script setup lang="ts">
import type { Project } from '@/data/portfolio'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    class="group bg-surface border border-line rounded-xl p-5 flex flex-col gap-4 h-full hover:border-accent/50 hover:shadow-md transition-all duration-200">
    <div class="flex items-center justify-between gap-3">
      <span class="text-[11px] font-mono uppercase tracking-widest text-faint truncate">{{ project.company }}</span>
      <span class="text-[11px] font-mono text-faint flex-shrink-0">{{ project.period }}</span>
    </div>
    <h3 class="font-semibold text-primary text-base leading-snug flex-1">{{ project.name }}</h3>
    <div class="flex flex-wrap gap-1.5">
      <span v-for="tag in project.tags" :key="tag"
        class="px-2.5 py-0.5 rounded-md text-[11px] font-mono border border-line text-muted group-hover:border-accent/40 transition-colors duration-200">
        {{ tag }}
      </span>
    </div>
  </div>
</template>
