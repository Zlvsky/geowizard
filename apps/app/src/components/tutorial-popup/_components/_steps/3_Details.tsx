import AreaImage from '@/assets/images/area.png'
import { easeOut, motion } from 'framer-motion'

export function DetailsTutorialBackground() {
  return (
    <motion.div
      initial="hidden"
      exit="exit"
      animate="visible"
      transition={{
        ease: easeOut
      }}
      className="z-20 mx-auto flex h-52 w-64 items-center justify-center self-end rounded-t-xl bg-white"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.1, delay: 0.05 } },
        hidden: { opacity: 0, y: 30 },
        exit: { opacity: 0, y: 30, transition: { duration: 0.05 } }
      }}
    >
      <img src={AreaImage} className="h-full translate-y-10 scale-125" />
    </motion.div>
  )
}
