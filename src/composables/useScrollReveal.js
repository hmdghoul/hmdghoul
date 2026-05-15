import { ref, onMounted, onUnmounted } from 'vue'

// Shared observers keyed by "threshold|rootMargin" — avoids one IntersectionObserver per component.
const observerCache = new Map()
const callbackMap = new WeakMap()

function getSharedObserver(threshold, rootMargin) {
  const key = `${threshold}|${rootMargin}`
  if (!observerCache.has(key)) {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = callbackMap.get(entry.target)
            if (cb) cb()
            obs.unobserve(entry.target)
            callbackMap.delete(entry.target)
          }
        }
      },
      { threshold, rootMargin }
    )
    observerCache.set(key, obs)
  }
  return observerCache.get(key)
}

export function useScrollReveal(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options
  const el = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (!el.value) return
    observer = getSharedObserver(threshold, rootMargin)
    callbackMap.set(el.value, () => { isVisible.value = true })
    observer.observe(el.value)
  })

  onUnmounted(() => {
    if (el.value && observer) {
      observer.unobserve(el.value)
      callbackMap.delete(el.value)
    }
  })

  return { el, isVisible }
}
