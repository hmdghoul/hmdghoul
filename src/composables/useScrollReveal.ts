import { ref, onMounted, onUnmounted } from 'vue'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
}

const observerCache = new Map<string, IntersectionObserver>()
const callbackMap = new WeakMap<Element, () => void>()

function getSharedObserver(threshold: number, rootMargin: string): IntersectionObserver {
  const key = `${threshold}|${rootMargin}`
  let obs = observerCache.get(key)
  if (!obs) {
    obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = callbackMap.get(entry.target)
            if (cb) cb()
            obs!.unobserve(entry.target)
            callbackMap.delete(entry.target)
          }
        }
      },
      { threshold, rootMargin }
    )
    observerCache.set(key, obs)
  }
  return obs
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options
  const el = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return
    observer = getSharedObserver(threshold, rootMargin)
    callbackMap.set(el.value, () => { isVisible.value = true })
    observer.observe(el.value)
  })

  onUnmounted(() => {
    if (el.value && observer && !isVisible.value) {
      observer.unobserve(el.value)
      callbackMap.delete(el.value)
    }
  })

  return { el, isVisible }
}
