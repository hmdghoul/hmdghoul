import { ref } from 'vue'

// index.html inline script already set the class before mount — read it directly.
const isDark = ref<boolean>(document.documentElement.classList.contains('dark'))

export function useTheme() {
  function toggleTheme(): void {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return { isDark, toggleTheme }
}
