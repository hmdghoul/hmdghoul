<script setup lang="ts">
import { ChevronDown, MapPin, Calendar } from '@lucide/vue'
import type { Experience } from '@/data/portfolio'

defineProps<{
  item: Experience
  isOpen: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()

function clearInlineStyles(el: Element): void {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = ''
  htmlEl.style.opacity = ''
  htmlEl.style.overflow = ''
  htmlEl.style.transition = ''
}

function onEnter(el: Element): void {
  const htmlEl = el as HTMLElement
  const targetHeight = htmlEl.scrollHeight
  htmlEl.style.height = '0'
  htmlEl.style.opacity = '0'
  htmlEl.style.overflow = 'hidden'
  htmlEl.offsetHeight // force reflow
  htmlEl.style.transition = 'height 300ms ease, opacity 300ms ease'
  htmlEl.style.height = targetHeight + 'px'
  htmlEl.style.opacity = '1'
}

function onLeave(el: Element): void {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = htmlEl.scrollHeight + 'px'
  htmlEl.style.overflow = 'hidden'
  htmlEl.offsetHeight // force reflow
  htmlEl.style.transition = 'height 200ms ease, opacity 200ms ease'
  htmlEl.style.height = '0'
  htmlEl.style.opacity = '0'
}
</script>

<template>
  <div class="border rounded-xl bg-surface transition-all duration-200" :class="isOpen ? 'border-accent shadow-sm' : 'border-line hover:border-muted'">
    <button class="w-full text-left p-6 flex items-start justify-between gap-4 rounded-xl" :class="isOpen ? 'rounded-b-none' : ''" @click="emit('toggle')" :aria-expanded="isOpen">
      <div class="flex flex-col gap-1.5 min-w-0">
        <span class="text-xs font-mono uppercase tracking-widest text-faint">{{ item.company }}</span>
        <span class="font-semibold text-primary text-lg leading-snug">{{ item.role }}</span>
        <div class="flex flex-wrap items-center gap-4 mt-0.5">
          <span class="inline-flex items-center gap-1.5 text-xs font-mono text-faint">
            <Calendar class="w-3 h-3" />
            {{ item.period }}
          </span>
          <span class="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin class="w-3 h-3" />
            {{ item.location }}
          </span>
        </div>
      </div>
      <ChevronDown class="w-5 h-5 flex-shrink-0 mt-1.5 transition-transform duration-200" :class="isOpen ? 'rotate-180 text-accent' : 'text-faint'" />
    </button>

    <Transition :css="false" @enter="onEnter" @after-enter="clearInlineStyles" @leave="onLeave" @after-leave="clearInlineStyles">
      <div v-if="isOpen" class="px-6 pb-6">
        <div class="border-t border-line pt-4">
          <ul class="space-y-2.5">
            <li v-for="(r, i) in item.responsibilities" :key="i" class="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
              <span class="text-accent flex-shrink-0 mt-0.5 font-mono">›</span>
              {{ r }}
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>
