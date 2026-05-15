<script setup>
import { stats } from '@/data/portfolio.js'
import StatCard from '@/components/ui/StatCard.vue'
import RevealWrapper from '@/components/ui/RevealWrapper.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
</script>

<template>
  <section id="about" class="py-24 md:py-32 bg-canvas border-t border-line">
    <div class="max-w-6xl mx-auto px-6">

      <SectionHeader eyebrow="About" title="Building Systems That Matter" />

      <RevealWrapper :delay="100" class="max-w-2xl mb-16">
        <div class="space-y-4 text-muted leading-relaxed text-[15px]">
          <p>
            Senior Software Engineer with extensive experience designing and delivering
            enterprise and mission-critical systems across government and telecommunications
            sectors. Strong background in scalable architecture, cloud infrastructure,
            and backend development.
          </p>
          <p>
            Currently based in Muscat, Oman, leading engineering at SITA on the Oman
            Border Management System. I bring a systems-first mindset to every engagement —
            building software that works reliably under pressure, at scale, and across
            complex operational environments.
          </p>
        </div>
      </RevealWrapper>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <RevealWrapper v-for="(stat, i) in stats" :key="stat.label" :delay="i * 80">
          <StatCard :value="stat.value" :label="stat.label" />
        </RevealWrapper>
      </div>

    </div>
  </section>
</template>
