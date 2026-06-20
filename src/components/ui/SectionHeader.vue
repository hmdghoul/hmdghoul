<script setup lang="ts">
import RevealWrapper from '@/components/ui/RevealWrapper.vue'
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'

defineProps<{
  index?: string
  eyebrow?: string
  title?: string
}>()
</script>

<template>
  <RevealWrapper>
    <SectionEyebrow :index="index" :label="eyebrow" class="mb-4" />
    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-12 leading-tight tracking-tight">{{ title }}</h2>
  </RevealWrapper>
</template>
