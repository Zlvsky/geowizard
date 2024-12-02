import { motion } from 'framer-motion'

interface IProps {
  title: string
  description: string
}

function StepDescription({ title, description }: IProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <motion.div
        initial="hidden"
        key="step-description"
        animate="visible"
        transition={{
          duration: 0.1,
          type: 'spring',
          damping: 10,
          stiffness: 100
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 30 }
        }}>
        <h1 className="text-center text-3xl font-medium tracking-tighter text-black transition-colors dark:text-white">
          {title}
        </h1>
      </motion.div>
      <motion.div
        initial="hidden"
        key="step-description2"
        animate="visible"
        transition={{
          duration: 0.1,
          delay: 0.1,
          type: 'spring',
          damping: 10,
          stiffness: 100
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 30 }
        }}>
        <p className="text-text dark:text-text-foreground/60 max-w-xl text-center text-xl tracking-tight">
          {description}
        </p>
      </motion.div>
    </div>
  )
}

export default StepDescription
