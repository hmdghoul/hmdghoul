<script setup>
import { Mail, FileDown, ExternalLink } from '@lucide/vue'
import RevealWrapper from '@/components/ui/RevealWrapper.vue'
import { contact } from '@/data/portfolio.js'
</script>

<template>
  <section id="contact" class="py-32 md:py-40 bg-canvas border-t border-line">
    <div class="max-w-6xl mx-auto px-6 text-center">

      <RevealWrapper>
        <p class="text-xs font-mono uppercase tracking-widest text-faint mb-4">Get in Touch</p>
        <h2 class="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          Let's Work Together
        </h2>
        <p class="text-muted max-w-xl mx-auto mb-10 leading-relaxed text-[15px]">
          Open to new opportunities, collaborations, and interesting challenges.
          If you're building something meaningful, I'd love to hear from you.
        </p>
      </RevealWrapper>

      <RevealWrapper :delay="100">
        <a
          :href="`mailto:${contact.email}`"
          class="inline-block text-xl md:text-2xl font-semibold text-accent hover:underline underline-offset-4 decoration-2 transition-all duration-200 mb-12 font-mono"
        >
          {{ contact.email }}
        </a>
      </RevealWrapper>

      <RevealWrapper :delay="200">
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a
            :href="`mailto:${contact.email}`"
            class="inline-flex items-center gap-2 px-5 py-2.5 border border-line rounded-lg text-sm text-muted hover:text-primary hover:border-accent transition-all duration-200"
          >
            <Mail class="w-4 h-4" />
            Email
          </a>
          <a
            :href="contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 border border-line rounded-lg text-sm text-muted hover:text-primary hover:border-accent transition-all duration-200"
          >
            <ExternalLink class="w-4 h-4" />
            LinkedIn
          </a>
          <a
            :href="contact.cv"
            download
            class="inline-flex items-center gap-2 px-5 py-2.5 border border-line rounded-lg text-sm text-muted hover:text-primary hover:border-accent transition-all duration-200"
          >
            <FileDown class="w-4 h-4" />
            Download CV
          </a>
        </div>
      </RevealWrapper>

    </div>
  </section>
</template>
