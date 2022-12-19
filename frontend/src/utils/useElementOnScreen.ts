import { useEffect, useRef, useState } from 'react'

export const useElementOnScreen = () => {
  const elementRef = useRef<HTMLInputElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)
    })

    if (elementRef.current) observer.observe(elementRef.current)

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current)
    }
  }, [elementRef])

  return [elementRef, isVisible] as any
}
