import { cn } from '@/utils'
import {
  animate,
  easeOut,
  motion,
  useMotionTemplate,
  useMotionValue
} from 'framer-motion'
import { useEffect } from 'react'

function PopupBackground({
  children,
  currentStep
}: {
  currentStep: number
  children: React.ReactNode
}) {
  const griadientt = useMotionValue('255 255 255')
  const griadientt2 = useMotionValue('255 255 255')
  const background = useMotionTemplate`linear-gradient(to top right, rgb(${griadientt}), rgb(${griadientt2})`

  useEffect(() => {
    const color: any =
      (currentStep === 0 && '241 251 253') ||
      (currentStep === 1 && '178 199 255') ||
      (currentStep === 2 && '179 236 232') ||
      (currentStep === 3 && '199 235 254')
    const color2: any =
      (currentStep === 0 && '218 185 254') ||
      (currentStep === 1 && '213 242 255') ||
      (currentStep === 2 && '230 254 254') ||
      (currentStep === 3 && '194 204 254')

    animate(griadientt, color, { duration: 0.4, delay: 0.1, ease: easeOut })
    animate(griadientt2, color2, { duration: 0.4, delay: 0.1, ease: easeOut })
  }, [currentStep])

  return (
    <motion.div
      style={{ background }}
      className={cn(
        'relative flex h-60 w-full overflow-hidden rounded-t-2xl',
        'before:absolute before:bottom-0 before:left-0 before:right-0 before:h-32 before:bg-gradient-to-t before:from-white before:to-transparent before:dark:from-transparent'
      )}
    >
      {children}
    </motion.div>
  )
}

export default PopupBackground
