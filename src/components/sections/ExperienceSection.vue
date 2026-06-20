<script setup lang="ts">
import { ref } from 'vue'
import { experience } from '@/data/portfolio'
import ExperienceItem from '@/components/ui/ExperienceItem.vue'
import RevealWrapper from '@/components/ui/RevealWrapper.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'

const openIndex = ref<number>(0)

const items = experience.map((item, i) => ({
  item,
  index: String(i + 1).padStart(2, '0'),
}))

function handleToggle(index: number): void {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section id="experience" class="py-24 md:py-32 bg-canvas border-t border-line">
    <div class="max-w-6xl mx-auto px-6">

      <SectionHeader index="03" eyebrow="Career" title="Experience" />

      <div class="space-y-3">
        <RevealWrapper v-for="(row, i) in items" :key="row.item.company + row.item.period" :delay="i * 50">
          <ExperienceItem :item="row.item" :index="row.index" :isOpen="openIndex === i" @toggle="handleToggle(i)" />
        </RevealWrapper>
      </div>

    </div>
  </section>
</template>
