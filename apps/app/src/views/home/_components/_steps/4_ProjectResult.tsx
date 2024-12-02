import handsImage from '@/assets/icons/hands.png'
import { useWindowSize } from '@/hooks/useWindowSize'
import useCountdown from '@bradgarropy/use-countdown'
import Confetti from 'react-confetti'
import StepDescription from '../StepDescription'

import { getProjectService } from '@/api/mockedService'
import { PATHS } from '@/router/data'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useWizardContext } from '../../_context/WizardContext'

function ProjectResult() {
  const { width, height } = useWindowSize()
  const { newProjectId } = useWizardContext()
  const navigate = useNavigate()
  const countdown = useCountdown({
    seconds: 3,
    format: 'ss',
    autoStart: true,
    onCompleted: () => navigate(PATHS.PROJECT + newProjectId)
  })

  useQuery({
    queryFn: () => getProjectService(newProjectId!),
    queryKey: ['project', newProjectId],
    enabled: !!newProjectId
  })

  const queryClient = useQueryClient()

  const handleGetData = async () => {
    queryClient.invalidateQueries({ queryKey: ['project', newProjectId] })
  }

  useEffect(() => {
    handleGetData()
  }, [])

  return (
    <>
      <Confetti width={width} height={height} numberOfPieces={1000} recycle={false} />
      <motion.div
        className="w-full space-y-8"
        initial="hidden"
        animate="visible"
        key="file-upload"
        transition={{
          duration: 0.1,
          delay: 0.15,
          type: 'spring',
          damping: 10,
          stiffness: 100
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 30 }
        }}>
        <StepDescription
          title="Success!"
          description="Your project has been submitted successfully."
        />
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="dark:bg-foreground/10 border-gray dark:border-gray-foreground rounded-3xl border bg-white p-2 shadow-lg transition-colors">
            <img
              src={handsImage}
              className="bg-primary/5 border-gray dark:border-gray-foreground aspect-square h-44 rounded-2xl border pt-4 drop-shadow-xl transition-colors"
            />
          </div>
          <span className="text-text dark:text-text-foreground mt-2 italic transition-colors">
            Redirecting in {countdown.seconds}...
          </span>
        </div>
      </motion.div>
    </>
  )
}

export default ProjectResult
