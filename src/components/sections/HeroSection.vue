<script setup lang="ts">
import { useTyping } from '@/composables/useTyping'
import { contact } from '@/data/portfolio'

const phrases: string[] = [
  'Software Engineer Team Lead',
  'Enterprise Systems Architect',
  'Cloud & Backend Specialist',
  'Border Management Expert',
]

const { displayText } = useTyping(phrases, {
  typeSpeed: 70,
  deleteSpeed: 35,
  pauseDuration: 2400,
})
</script>

<template>
  <section class="min-h-screen flex items-center pt-16 bg-canvas">
    <div class="max-w-6xl mx-auto px-6 py-24 w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Left: Text -->
        <div class="flex flex-col gap-6 order-1">
          <!-- Status badge -->
          <div class="inline-flex items-center gap-2 w-fit bg-surface border border-line rounded-full px-4 py-1.5">
            <span class="relative flex h-2 w-2 flex-shrink-0">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-xs font-mono text-muted">Available for opportunities</span>
          </div>

          <!-- Name -->
          <h1 class="text-5xl lg:text-7xl font-bold text-primary leading-none tracking-tight">
            Ahmad<br />Al Ghoul
          </h1>

          <!-- Role -->
          <h2 class="text-xl lg:text-2xl font-semibold text-muted tracking-tight">
            Senior Software Engineer
          </h2>

          <!-- Typing animation -->
          <div class="flex items-center font-mono text-sm text-accent min-h-[1.5rem]">
            <span class="text-faint mr-2">—</span>
            <span>{{ displayText }}</span>
            <span class="inline-block w-0.5 h-[1em] bg-accent ml-0.5 align-text-bottom animate-blink"></span>
          </div>

          <!-- Bio -->
          <p class="text-muted leading-relaxed max-w-lg text-[15px]">
            Designing and delivering enterprise and mission-critical systems across government
            and telecommunications sectors. 13+ years of scalable architecture, cloud
            infrastructure, and backend engineering.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3 pt-2">
            <a :href="contact.cv" download class="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity duration-200">
              Download CV
            </a>
            <a href="#experience" class="inline-flex items-center px-6 py-3 border border-line rounded-lg font-medium text-sm text-primary hover:border-accent hover:text-accent transition-all duration-200">
              View Experience
            </a>
          </div>
        </div>

        <!-- Right: Photo -->
        <div class="order-2 flex justify-center lg:justify-end">
          <div class="relative">
            <!-- Photo frame -->
            <div class="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-line shadow-sm">
              <img src="/ahmad-alghoul-photo.jpg" alt="Ahmad Al Ghoul — Senior Software Engineer" class="w-full h-full object-cover object-top" width="384" height="384" loading="eager" />
            </div>
            <!-- Accent dots -->
            <div class="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-accent opacity-20"></div>
            <div class="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-accent opacity-60"></div>
            <div class="absolute -top-3 -left-3 w-3 h-3 rounded-full border-2 border-accent opacity-40"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
