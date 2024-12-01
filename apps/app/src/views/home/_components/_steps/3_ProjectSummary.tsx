import FormWrap from '@/components/forms/form/FormWrap'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import { useWizardContext } from '../../_context/WizardContext'
import StepDescription from '../StepDescription'
import { ListedFile } from './2_FileUpload'

const SummaryText = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-medium text-black dark:text-white">{title}</h3>
      <p className="text-slate-text dark:text-white">{value}</p>
    </div>
  )
}

const DescriptionText = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-medium text-black dark:text-white">{title}</h3>
      <div className="text-slate-text prose dark:text-white max-h-80 overflow-auto">
        {value ? parse(value) : 'No description provided'}
      </div>
    </div>
  )
}

function ProjectSummary() {
  const { formDetails, uploadedFile, setCurrentStep } = useWizardContext()

  const onSubmit = () => {
    console.log('Submitted')
  }

  return (
    <motion.div
      className="w-full space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.1,
        delay: 0.3,
        type: 'spring',
        damping: 10,
        stiffness: 100
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}>
      <StepDescription
        title="Check if everything is correct"
        description="Please check if everything is correct before submitting your project."
      />
      <FormWrap submitText="Create new project" buttonClassName="w-full text-base" onSubmit={onSubmit}>
        <div className="flex flex-col gap-6">
          <SummaryText title="Project name" value={formDetails.name} />
          <SummaryText
            title="Date range"
            value={`${format(formDetails.date.from, 'yyyy.MM.dd')} - ${format(formDetails.date.to, 'yyyy.MM.dd')}  `}
          />
          <DescriptionText title="Description" value={formDetails.description} />
          <ListedFile />
        </div>
      </FormWrap>
    </motion.div>
  )
}

export default ProjectSummary
