<script setup lang="ts">
import { ChevronDown, MapPin, Calendar } from '@lucide/vue'
import type { Experience } from '@/data/portfolio'

defineProps<{
  item: Experience
  index: string
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
  <div class="border rounded-xl bg-surface transition-colors duration-200"
    :class="isOpen ? 'border-accent' : 'border-line hover:border-muted'">
    <button class="w-full text-left p-5 md:p-6 flex items-start gap-4 md:gap-5 rounded-xl"
      :class="isOpen ? 'rounded-b-none' : ''" @click="emit('toggle')" :aria-expanded="isOpen">
      <!-- Ledger index -->
      <span class="font-mono text-xs pt-1 flex-shrink-0 w-6"
        :class="isOpen ? 'text-accent' : 'text-faint'">{{ index }}</span>

      <div class="flex flex-col gap-1.5 min-w-0 flex-1">
        <span class="text-[11px] font-mono uppercase tracking-widest text-faint">{{ item.company }}</span>
        <span class="font-semibold text-primary text-lg leading-snug">{{ item.role }}</span>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-0.5">
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
      <ChevronDown class="w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-200"
        :class="isOpen ? 'rotate-180 text-accent' : 'text-faint'" />
    </button>

    <Transition :css="false" @enter="onEnter" @after-enter="clearInlineStyles" @leave="onLeave"
      @after-leave="clearInlineStyles">
      <div v-if="isOpen" class="px-5 md:px-6 pb-6">
        <div class="border-t border-line pt-4 md:pl-11">
          <ul class="space-y-2.5">
            <li v-for="(r, i) in item.responsibilities" :key="i"
              class="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
              <span class="text-accent flex-shrink-0 mt-0.5 font-mono">›</span>
              {{ r }}
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>
