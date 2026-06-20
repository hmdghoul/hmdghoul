<script setup lang="ts">
import { Mail, ExternalLink, FileDown, ArrowUp } from '@lucide/vue'
import type { Component } from 'vue'
import Logo from '@/components/ui/Logo.vue'
import { contact } from '@/data/portfolio'

interface FooterLink {
  icon: Component
  href: string
  label: string
  external?: boolean
  download?: boolean
}

const links: FooterLink[] = [
  { icon: Mail, href: `mailto:${contact.email}`, label: contact.email },
  { icon: ExternalLink, href: contact.linkedin, label: 'LinkedIn', external: true },
  { icon: FileDown, href: contact.cv, label: 'Download CV', download: true },
]
</script>

<template>
  <footer class="bg-ink text-ink-fg border-t border-ink-line">
    <div class="max-w-6xl mx-auto px-6 py-14">
      <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

        <div class="flex flex-col gap-3 max-w-sm">
          <Logo />
          <p class="text-sm text-ink-muted leading-relaxed">
            Senior Software Engineer building enterprise and mission-critical systems.
            Open to senior &amp; lead roles.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <span class="text-[11px] font-mono uppercase tracking-widest text-ink-muted">Connect</span>
          <a v-for="link in links" :key="link.label" :href="link.href"
            :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noopener noreferrer' : undefined"
            :download="link.download ? '' : undefined"
            class="inline-flex items-center gap-2 text-sm text-ink-fg/90 hover:text-accent transition-colors duration-200">
            <component :is="link.icon" class="w-4 h-4" />
            {{ link.label }}
          </a>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-ink-line flex items-center justify-between gap-4">
        <p class="font-mono text-xs text-ink-muted">
          Ahmad Al Ghoul &copy; 2025
        </p>
        <a href="#"
          class="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted hover:text-accent transition-colors duration-200">
          Back to top
          <ArrowUp class="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </footer>
</template>
