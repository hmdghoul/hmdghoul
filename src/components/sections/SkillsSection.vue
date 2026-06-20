<script setup lang="ts">
import { skills } from '@/data/portfolio'
import SkillCard from '@/components/ui/SkillCard.vue'
import RevealWrapper from '@/components/ui/RevealWrapper.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
</script>

<template>
  <section id="skills" class="py-24 md:py-32 bg-canvas border-t border-line">
    <div class="max-w-6xl mx-auto px-6">

      <SectionHeader index="04" eyebrow="Expertise" title="Skills" />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <RevealWrapper v-for="(category, i) in skills" :key="category.name" :delay="i * 70">
          <SkillCard :category="category" />
        </RevealWrapper>
      </div>

    </div>
  </section>
</template>
