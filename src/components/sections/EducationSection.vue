<script setup>
import { education, volunteer } from '@/data/portfolio.js'
import RevealWrapper from '@/components/ui/RevealWrapper.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { GraduationCap, Heart } from '@lucide/vue'
</script>

<template>
  <section id="education" class="py-24 md:py-32 bg-canvas border-t border-line">
    <div class="max-w-6xl mx-auto px-6">

      <SectionHeader eyebrow="Background" title="Education" />

      <div class="grid md:grid-cols-2 gap-6">

        <!-- Degree -->
        <RevealWrapper :delay="100">
          <div class="bg-surface border border-line rounded-xl p-6 h-full">
            <div class="inline-flex items-center gap-2 mb-5">
              <div class="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center">
                <GraduationCap class="w-4 h-4 text-accent" />
              </div>
              <span class="text-xs font-mono uppercase tracking-widest text-faint">Education</span>
            </div>
            <h3 class="font-semibold text-primary text-lg mb-2">{{ education.degree }}</h3>
            <p class="text-muted text-sm mb-1">{{ education.institution }}</p>
            <p class="text-xs font-mono text-faint">{{ education.location }} · {{ education.year }}</p>
          </div>
        </RevealWrapper>

        <!-- Volunteer -->
        <RevealWrapper :delay="180">
          <div class="bg-surface border border-line rounded-xl p-6 h-full">
            <div class="inline-flex items-center gap-2 mb-5">
              <div class="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center">
                <Heart class="w-4 h-4 text-accent" />
              </div>
              <span class="text-xs font-mono uppercase tracking-widest text-faint">Volunteer</span>
            </div>
            <h3 class="font-semibold text-primary text-lg mb-1">{{ volunteer.org }}</h3>
            <p class="text-xs font-mono text-faint mb-4">{{ volunteer.period }}</p>
            <ul class="space-y-2">
              <li
                v-for="(activity, i) in volunteer.activities"
                :key="i"
                class="flex items-start gap-2 text-sm text-muted leading-relaxed"
              >
                <span class="text-accent font-mono flex-shrink-0 mt-0.5">›</span>
                {{ activity }}
              </li>
            </ul>
          </div>
        </RevealWrapper>

      </div>
    </div>
  </section>
</template>
