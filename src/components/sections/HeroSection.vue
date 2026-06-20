<script setup lang="ts">
import { FileDown, ArrowRight } from '@lucide/vue'
import { useTyping } from '@/composables/useTyping'
import { contact, stats, experience } from '@/data/portfolio'
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'
import StatusDot from '@/components/ui/StatusDot.vue'

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

const employers: string[] = experience.map((e) => e.company)
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden pt-16 bg-canvas">
    <div class="absolute inset-0 panel-grid pointer-events-none" aria-hidden="true"></div>

    <div class="relative max-w-6xl mx-auto px-6 py-20 w-full">
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">

        <!-- Left: credentials -->
        <div class="flex flex-col gap-6 order-1">
          <!-- Meta role line -->
          <SectionEyebrow index="01" label="Senior Software Engineer · Team Lead" />

          <!-- Name -->
          <h1 class="text-5xl lg:text-7xl font-bold text-primary leading-[0.95] tracking-tight">
            Ahmad<br />Al Ghoul
          </h1>

          <!-- Typing line -->
          <div class="flex items-center font-mono text-sm text-accent min-h-[1.5rem]">
            <span class="text-faint mr-2">&gt;</span>
            <span>{{ displayText }}</span>
            <span class="inline-block w-2 h-[1.05em] bg-accent ml-1 align-text-bottom animate-blink"></span>
          </div>

          <!-- Value statement -->
          <p class="text-muted leading-relaxed max-w-xl text-[15px]">
            Designing and delivering enterprise and mission-critical systems across government
            and telecommunications sectors. 13+ years of scalable architecture, cloud
            infrastructure, and backend engineering.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3 pt-1">
            <a :href="contact.cv" download
              class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity duration-200">
              <FileDown class="w-4 h-4" />
              Download CV
            </a>
            <a href="#contact"
              class="group inline-flex items-center gap-2 px-6 py-3 border border-line rounded-lg font-medium text-sm text-primary hover:border-accent hover:text-accent transition-all duration-200">
              Get in touch
              <ArrowRight class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          <!-- Metrics panel -->
          <dl
            class="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line rounded-xl overflow-hidden mt-4">
            <div v-for="stat in stats" :key="stat.label" class="bg-canvas px-4 py-3.5 flex flex-col gap-0.5">
              <dt class="sr-only">{{ stat.label }}</dt>
              <dd class="font-mono text-2xl font-semibold text-primary leading-none">{{ stat.value }}</dd>
              <span class="text-[11px] text-muted leading-tight mt-1">{{ stat.label }}</span>
            </div>
          </dl>

          <!-- Delivered at -->
          <div class="flex flex-col gap-2.5 pt-3">
            <span class="text-[11px] font-mono uppercase tracking-widest text-faint">Delivered systems at</span>
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <template v-for="(c, i) in employers" :key="c">
                <span class="font-mono text-xs text-muted">{{ c }}</span>
                <span v-if="i < employers.length - 1" class="text-faint/60 text-xs">·</span>
              </template>
            </div>
          </div>
        </div>

        <!-- Right: photo panel -->
        <div class="order-2 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-sm">
            <div class="rounded-2xl border border-line bg-surface overflow-hidden shadow-sm">
              <!-- Panel header strip -->
              <div class="flex items-center justify-between px-4 h-9 border-b border-line bg-canvas">
                <span class="font-mono text-[11px] uppercase tracking-widest text-faint">Engineer</span>
                <StatusDot />
              </div>
              <img src="/ahmad-alghoul-photo.jpg" alt="Ahmad Al Ghoul — Senior Software Engineer"
                class="w-full aspect-square object-cover object-top" width="384" height="384" loading="eager" />
              <!-- Caption strip -->
              <div class="flex items-center justify-between px-4 h-10 border-t border-line bg-canvas">
                <span class="font-mono text-[11px] text-muted">Ahmad Al Ghoul</span>
                <span class="font-mono text-[11px] text-faint">Muscat, OM</span>
              </div>
            </div>
            <!-- Corner accent -->
            <div class="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-accent rounded-tl"></div>
            <div class="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-accent rounded-br"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
