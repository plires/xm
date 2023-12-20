import { useRef } from 'react'

const SmoothScroll = ({ children }) => {
  const refToScroll = useRef(null)

  const scrollToAnchor = (anchorId, offset) => {
    const element = document.getElementById(anchorId)
    if (element) {
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <div>
      {children({ scrollToAnchor })}
      <div ref={refToScroll} />
    </div>
  )
}

export default SmoothScroll
