import HandSvg from '@/assets/icons/hand-shape.svg?react'
import { easeIn, motion } from 'framer-motion'

export function AboutTutorialBackground() {
  return (
    <motion.div
      initial="hidden"
      exit="exit"
      animate="visible"
      transition={{
        ease: easeIn
      }}
      className="m-auto"
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
        hidden: { opacity: 0, scale: 1.3 },
        exit: { opacity: 0, transition: { duration: 0.1 } }
      }}
    >
      <HandSvg className="drop-shadow-xl" />
    </motion.div>
  )
}
