<script setup lang="ts">
import { education, volunteer } from '@/data/portfolio'
import RevealWrapper from '@/components/ui/RevealWrapper.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { GraduationCap, Heart } from '@lucide/vue'
</script>

<template>
  <section id="education" class="py-24 md:py-32 bg-canvas border-t border-line">
    <div class="max-w-6xl mx-auto px-6">

      <SectionHeader index="06" eyebrow="Background" title="Education" />

      <div class="grid md:grid-cols-2 gap-6">

        <!-- Degree -->
        <RevealWrapper :delay="100">
          <div class="bg-surface border border-line rounded-xl h-full">
            <div class="flex items-center gap-2.5 px-6 h-12 border-b border-line">
              <GraduationCap class="w-4 h-4 text-accent" />
              <span class="text-[11px] font-mono uppercase tracking-widest text-faint">Education</span>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-primary text-lg mb-2">{{ education.degree }}</h3>
              <p class="text-muted text-sm mb-1">{{ education.institution }}</p>
              <p class="text-xs font-mono text-faint">{{ education.location }} · {{ education.year }}</p>
            </div>
          </div>
        </RevealWrapper>

        <!-- Volunteer -->
        <RevealWrapper :delay="180">
          <div class="bg-surface border border-line rounded-xl h-full">
            <div class="flex items-center gap-2.5 px-6 h-12 border-b border-line">
              <Heart class="w-4 h-4 text-accent" />
              <span class="text-[11px] font-mono uppercase tracking-widest text-faint">Volunteer</span>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-primary text-lg mb-1">{{ volunteer.org }}</h3>
              <p class="text-xs font-mono text-faint mb-4">{{ volunteer.period }}</p>
              <ul class="space-y-2">
                <li v-for="(activity, i) in volunteer.activities" :key="i"
                  class="flex items-start gap-2 text-sm text-muted leading-relaxed">
                  <span class="text-accent font-mono flex-shrink-0 mt-0.5">›</span>
                  {{ activity }}
                </li>
              </ul>
            </div>
          </div>
        </RevealWrapper>

      </div>
    </div>
  </section>
</template>
