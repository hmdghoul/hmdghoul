<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<template>
  <a :href="href ?? '#'" class="font-mono font-semibold text-base">
    <span class="text-accent">~/</span>ahmad
  </a>
</template>
