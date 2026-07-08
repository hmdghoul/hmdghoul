<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="mt-10">
    <h2 class="text-lg font-semibold text-primary tracking-tight pb-2 mb-3 border-b border-line">{{ title }}</h2>
    <slot />
  </section>
</template>
