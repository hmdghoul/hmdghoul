<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, Menu, X, FileDown } from '@lucide/vue'
import { useTheme } from '@/composables/useTheme'
import { contact } from '@/data/portfolio'

interface NavLink {
  label: string
  href: string
}

const { isDark, toggleTheme } = useTheme()
const isScrolled = ref(false)
const isMobileOpen = ref(false)

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function onScroll(): void {
  isScrolled.value = window.scrollY > 24
}

function closeMobile(): void {
  isMobileOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 transition-all duration-300" :class="isScrolled
    ? 'bg-canvas/80 backdrop-blur-md border-b border-line shadow-sm'
    : 'bg-transparent'">
    <nav class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="#" class="font-mono font-bold text-lg text-primary hover:text-accent transition-colors duration-200">
        Ahmad.
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" class="text-sm font-medium text-muted hover:text-primary transition-colors duration-200">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Desktop right: CV + theme toggle -->
      <div class="hidden md:flex items-center gap-3">
        <a :href="contact.cv" download class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-line rounded-lg text-primary hover:border-accent hover:text-accent transition-all duration-200">
          <FileDown class="w-3.5 h-3.5" />
          Download CV
        </a>
        <button @click="toggleTheme" class="p-2 rounded-lg text-muted hover:text-primary hover:bg-surface transition-all duration-200" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <Sun v-if="isDark" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </button>
      </div>

      <!-- Mobile right: theme + hamburger -->
      <div class="flex md:hidden items-center gap-1">
        <button @click="toggleTheme" class="p-2 rounded-lg text-muted hover:text-primary transition-colors duration-200" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <Sun v-if="isDark" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </button>
        <button @click="isMobileOpen = !isMobileOpen" class="p-2 rounded-lg text-muted hover:text-primary transition-colors duration-200" :aria-expanded="isMobileOpen" aria-label="Toggle navigation">
          <X v-if="isMobileOpen" class="w-5 h-5" />
          <Menu v-else class="w-5 h-5" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
      <div v-if="isMobileOpen" class="md:hidden bg-canvas/95 backdrop-blur-md border-b border-line">
        <ul class="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" @click="closeMobile" class="block text-sm font-medium text-muted hover:text-primary transition-colors duration-200 py-0.5">
              {{ link.label }}
            </a>
          </li>
          <li class="pt-3 border-t border-line">
            <a :href="contact.cv" download @click="closeMobile" class="inline-flex items-center gap-2 text-sm font-medium text-accent">
              <FileDown class="w-4 h-4" />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
