<script setup lang="ts">
import { projects } from '@/data/portfolio'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import RevealWrapper from '@/components/ui/RevealWrapper.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
</script>

<template>
  <section id="projects" class="py-24 md:py-32 bg-canvas border-t border-line">
    <div class="max-w-6xl mx-auto px-6">

      <SectionHeader eyebrow="Work" title="Projects" />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <RevealWrapper v-for="(project, i) in projects" :key="project.name" :delay="i * 60">
          <ProjectCard :project="project" />
        </RevealWrapper>
      </div>

    </div>
  </section>
</template>
