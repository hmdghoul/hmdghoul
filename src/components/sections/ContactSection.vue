<script setup lang="ts">
import { Mail, FileDown, ExternalLink } from '@lucide/vue'
import RevealWrapper from '@/components/ui/RevealWrapper.vue'
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'
import StatusDot from '@/components/ui/StatusDot.vue'
import { contact, availability } from '@/data/portfolio'
</script>

<template>
  <section id="contact" class="py-24 md:py-32 bg-canvas border-t border-line">
    <div class="max-w-6xl mx-auto px-6">
      <div class="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-16 md:py-24 text-center">
        <div class="absolute inset-0 panel-grid pointer-events-none" aria-hidden="true"></div>

        <div class="relative">
          <RevealWrapper>
            <SectionEyebrow index="07" label="Get in touch" center class="mb-6" />

            <div
              class="inline-flex items-center gap-2 mb-6 bg-canvas border border-line rounded-full px-4 py-1.5">
              <StatusDot />
              <span class="text-xs font-mono text-muted">{{ availability }}</span>
            </div>

            <h2 class="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight tracking-tight">
              Let's Work Together
            </h2>
            <p class="text-muted max-w-xl mx-auto mb-10 leading-relaxed text-[15px]">
              Open to new opportunities, collaborations, and interesting challenges.
              If you're building something meaningful, I'd love to hear from you.
            </p>
          </RevealWrapper>

          <RevealWrapper :delay="100">
            <a :href="`mailto:${contact.email}`"
              class="inline-block text-xl md:text-2xl font-semibold text-accent hover:underline underline-offset-4 decoration-2 transition-all duration-200 mb-12 font-mono break-all">
              {{ contact.email }}
            </a>
          </RevealWrapper>

          <RevealWrapper :delay="200">
            <div class="flex flex-wrap items-center justify-center gap-3">
              <a :href="contact.cv" download
                class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                <FileDown class="w-4 h-4" />
                Download CV
              </a>
              <a :href="`mailto:${contact.email}`"
                class="inline-flex items-center gap-2 px-6 py-3 border border-line rounded-lg text-sm text-primary hover:border-accent hover:text-accent transition-all duration-200">
                <Mail class="w-4 h-4" />
                Email
              </a>
              <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 border border-line rounded-lg text-sm text-primary hover:border-accent hover:text-accent transition-all duration-200">
                <ExternalLink class="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </div>
  </section>
</template>
