<script setup lang="ts">
import { Home, ExternalLink, Sun, Moon } from '@lucide/vue'
import { useTheme } from '@/composables/useTheme'
import Logo from '@/components/ui/Logo.vue'
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'
import PolicySection from '@/components/ui/PolicySection.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

const { isDark, toggleTheme } = useTheme()

const repo = 'https://github.com/hmdghoul/athan-times-app'
</script>

<template>
  <div class="bg-canvas min-h-screen flex flex-col">
    <!-- Skip to content -->
    <a href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium">
      Skip to content
    </a>

    <!-- Nav -->
    <header class="sticky top-0 z-50 bg-canvas/85 backdrop-blur-md border-b border-line">
      <nav class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Logo href="https://ahmadalghoul.com"
          class="text-primary hover:text-accent transition-colors duration-200" />

        <div class="flex items-center gap-1">
          <a href="https://ahmadalghoul.com"
            class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-primary hover:bg-surface transition-colors duration-200">
            <Home class="w-4 h-4" />
            <span class="hidden sm:inline">Home</span>
          </a>
          <a :href="repo" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-primary hover:bg-surface transition-colors duration-200">
            <ExternalLink class="w-4 h-4" />
            <span class="hidden sm:inline">GitHub</span>
          </a>
          <button @click="toggleTheme"
            class="p-2 rounded-lg text-muted hover:text-primary hover:bg-surface transition-colors duration-200"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <Sun v-if="isDark" class="w-4 h-4" />
            <Moon v-else class="w-4 h-4" />
          </button>
        </div>
      </nav>
    </header>

    <!-- Content -->
    <main id="main-content" class="flex-1 w-full max-w-3xl mx-auto px-6 pt-14 pb-20">
      <SectionEyebrow label="Legal" class="mb-5" />

      <div class="flex items-center gap-3 mb-4">
        <img src="/athantimes/athan-icon.png" alt="Athan Times"
          class="w-10 h-10 rounded-lg border border-line" width="40" height="40" />
        <span class="font-mono text-sm text-muted">Athan Times</span>
      </div>

      <h1 class="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
        Privacy Policy
      </h1>

      <div class="mt-5 flex flex-wrap gap-x-6 gap-y-1.5 font-mono text-xs text-muted">
        <span><span class="text-primary">Effective</span> 2026-07-08</span>
        <span><span class="text-primary">Publisher</span> hmdghoul</span>
        <span><span class="text-primary">Contact</span>
          <a class="text-accent hover:underline" href="mailto:privacy@ahmadalghoul.com">privacy@ahmadalghoul.com</a>
        </span>
      </div>

      <div class="mt-8 rounded-xl border border-accent/20 bg-accent-subtle px-5 py-4 text-[15px] leading-relaxed text-primary">
        <strong class="font-semibold">In short:</strong> Athan Times works entirely on your device. It has no account,
        no backend, and no analytics — it collects nothing and sends nothing off your device.
      </div>

      <PolicySection title="What we collect">
        <p class="text-muted leading-relaxed">Nothing. Athan Times does not collect, transmit, or sell any personal
          data. The app has no backend and makes no network requests for its core function.</p>
      </PolicySection>

      <PolicySection title="Location">
        <p class="text-muted leading-relaxed">With your permission, Athan Times reads your device location to calculate
          accurate prayer times for where you are. This is done
          <strong class="text-primary font-medium">entirely on your device</strong> using a built-in offline
          calculation library. Your location is:</p>
        <ul class="mt-3 ml-5 list-disc text-muted leading-relaxed space-y-1.5">
          <li>used only to determine prayer times and the nearest city name;</li>
          <li>approximate (city-level, ~3&nbsp;km);</li>
          <li><strong class="text-primary font-medium">never sent to us or any third party</strong> — there is nowhere
            for it to go.</li>
        </ul>
        <p class="mt-3 text-muted leading-relaxed">You can use the app without location by choosing your city manually.
          To grant or revoke location access at any time:
          <strong class="text-primary font-medium">Windows Settings → Privacy &amp; security → Location</strong>.</p>
      </PolicySection>

      <PolicySection title="What is stored on your device">
        <p class="text-muted leading-relaxed">Your preferences (such as calculation method, madhab, time format,
          high-latitude rule, and chosen city) and your last known location and timezone are saved locally on your
          device so the app remembers them. This data never leaves your device and is removed when you uninstall the
          app.</p>
      </PolicySection>

      <PolicySection title="Third parties, ads, and tracking">
        <p class="text-muted leading-relaxed">There are none. We do not include advertising, analytics, or third-party
          tracking of any kind.</p>
      </PolicySection>

      <PolicySection title="Children">
        <p class="text-muted leading-relaxed">Athan Times collects no data from any user, including children.</p>
      </PolicySection>

      <PolicySection title="Your rights">
        <p class="text-muted leading-relaxed">Because we collect and store no personal data on our side, there is
          nothing for us to access, export, or delete. All app data lives on your own device and is under your control
          (via app settings and Windows privacy settings).</p>
      </PolicySection>

      <PolicySection title="Microsoft Store">
        <p class="text-muted leading-relaxed">Athan Times is distributed through the Microsoft Store. Microsoft may
          collect diagnostic and installation data under its own policy, which we do not control. See the
          <a class="text-accent hover:underline" href="https://privacy.microsoft.com/privacystatement" target="_blank"
            rel="noopener noreferrer">Microsoft Privacy Statement</a>.</p>
      </PolicySection>

      <PolicySection title="Changes to this policy">
        <p class="text-muted leading-relaxed">If we change this policy, we will update the effective date above and note
          material changes in the app's Store listing.</p>
      </PolicySection>

      <PolicySection title="Contact">
        <p class="text-muted leading-relaxed">Questions about privacy? Email
          <a class="text-accent hover:underline" href="mailto:privacy@ahmadalghoul.com">privacy@ahmadalghoul.com</a>.</p>
      </PolicySection>
    </main>

    <TheFooter />
  </div>
</template>
