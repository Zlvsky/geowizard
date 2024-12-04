import { AlertDialogHeader, AlertDialogTitle } from '@/components/ui/AlertDialog'
import { Button } from '@/components/ui/Button'
import { easeIn, motion } from 'framer-motion'

interface IProps {
  data: { title: string; description: string }
  initial?: boolean
  nextStep: () => void
}

function TutorialContent({ data, initial, nextStep }: IProps) {
  return (
    <motion.div
      initial="hidden"
      exit="exit"
      animate="visible"
      transition={{
        ease: easeIn
      }}
      variants={
        initial
          ? {
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              hidden: { opacity: 0, x: 0 },
              exit: { opacity: 0, x: -50, transition: { duration: 0.2 } }
            }
          : {
              visible: { opacity: 1, x: 0, transition: { duration: 0.15, delay: 0.1 } },
              hidden: { opacity: 0, x: 60 },
              exit: { opacity: 0, x: -40, transition: { duration: 0.2 } }
            }
      }
    >
      <AlertDialogHeader>
        <AlertDialogTitle>{data.title}</AlertDialogTitle>
        <p className="text-text dark:text-text-foreground">{data.description}</p>
        <div className="pt-4">
          <Button
            size={'lg'}
            className="rounded-xl transition-all active:scale-95"
            onClick={nextStep}
          >
            Continue
          </Button>
        </div>
      </AlertDialogHeader>
    </motion.div>
  )
}

export default TutorialContent
