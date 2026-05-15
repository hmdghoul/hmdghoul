<script setup>
import RevealWrapper from '@/components/ui/RevealWrapper.vue'
defineProps({ eyebrow: String, title: String })
</script>

<template>
  <RevealWrapper>
    <p class="text-xs font-mono uppercase tracking-widest text-faint mb-3">{{ eyebrow }}</p>
    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-12 leading-tight">{{ title }}</h2>
  </RevealWrapper>
</template>
