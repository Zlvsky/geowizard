import CheckSvg from '@/assets/icons/check-shape.svg?react'
import { easeIn, motion } from 'framer-motion'

export function OnboardTutorialBackground() {
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
        visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
        hidden: { opacity: 0, scale: 1.3 },
        exit: { opacity: 0, transition: { duration: 0.1 } }
      }}
    >
      <CheckSvg className="drop-shadow-xl" />
    </motion.div>
  )
}
