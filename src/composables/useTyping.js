import { ref, onMounted, onUnmounted } from 'vue'

export function useTyping(phrases, options = {}) {
  const {
    typeSpeed = 80,
    deleteSpeed = 40,
    pauseDuration = 2200,
  } = options

  const displayText = ref('')

  let phraseIndex = 0
  let charIndex = 0
  let isDeleting = false
  let timer = null

  function tick() {
    const phrase = phrases[phraseIndex]

    if (!isDeleting) {
      charIndex++
      displayText.value = phrase.slice(0, charIndex)

      if (charIndex === phrase.length) {
        isDeleting = true
        timer = setTimeout(tick, pauseDuration)
        return
      }
      timer = setTimeout(tick, typeSpeed)
    } else {
      charIndex--
      displayText.value = phrase.slice(0, charIndex)

      if (charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        timer = setTimeout(tick, typeSpeed + 100)
        return
      }
      timer = setTimeout(tick, deleteSpeed)
    }
  }

  onMounted(() => {
    timer = setTimeout(tick, 600)
  })

  onUnmounted(() => {
    if (timer) clearTimeout(timer)
  })

  return { displayText }
}
