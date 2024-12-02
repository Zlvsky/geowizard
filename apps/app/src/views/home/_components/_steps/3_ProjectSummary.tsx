import {
  createProjectService,
  failCreateProjectService,
  uploadFileService
} from '@/api/mockedService'
import FormWrap from '@/components/forms/form/FormWrap'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import { useState } from 'react'
import { toast } from 'sonner'
import { useWizardContext } from '../../_context/WizardContext'
import StepDescription from '../StepDescription'
import { ListedFile } from './2_FileUpload'

const SummaryText = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-medium text-black dark:text-white">{title}</h3>
      <p className="text-text dark:text-text-foreground">{value}</p>
    </div>
  )
}

const DescriptionText = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-medium text-black dark:text-white">{title}</h3>
      <div className="text-text dark:text-text-foreground prose dark:prose-invert max-h-80 overflow-auto">
        {value ? parse(value) : 'No description provided'}
      </div>
    </div>
  )
}

function ProjectSummary() {
  const { formDetails, uploadedFile, setCurrentStep, setNewProjectId } =
    useWizardContext()
  const [loading, setLoading] = useState(false)
  const [MOCKED_API_COUNT, setMOCKED_API_COUNT] = useState(0)

  const uploadFileRequest = async () => {
    const response: any = await uploadFileService(uploadedFile!)
    if (response.status !== 200)
      throw new Error('An error occurred while uploading the file.')
    return response
  }

  const handleUploadFile = () => {
    toast.promise(uploadFileRequest, {
      loading: 'File is being uploaded.',
      success: (data) => {
        if (data.status === 200) {
          handleUploadData(data.res.location)
          return 'The file has been uploaded successfully.'
        }
        return 'An error occurred while uploading the file.'
      },
      error: 'An error occurred while uploading the file.'
    })
  }

  const uploadDataRequest = async (fileLocation: string) => {
    const payload = {
      name: formDetails.name,
      description: formDetails.description,
      date: formDetails.date,
      file: fileLocation
    }
    // This is a mocked service that will return a successful response after second call
    if (MOCKED_API_COUNT === 0) {
      const response: any = await failCreateProjectService(payload)
      setMOCKED_API_COUNT(1)
      if (response.status !== 200)
        throw new Error('An error occurred while creating the project.')
      return response
    }
    const response: any = await createProjectService(payload)
    if (response.status !== 200)
      throw new Error('An error occurred while creating the project.')
    return response
  }

  const handleUploadData = (fileLocation: string) => {
    setTimeout(() => {
      toast.promise(() => uploadDataRequest(fileLocation), {
        loading: 'Data is being sent to the server.',
        success: (data) => {
          if (data.status === 200) {
            setNewProjectId(data.res.id)
            setCurrentStep(3)
            setLoading(false)
            return 'Data has been sent successfully.'
          }
          setLoading(false)
          return 'An error occurred while sending the data.'
        },
        error: () => {
          setLoading(false)
          return 'An error occurred while sending the data.'
        }
      })
    }, 500)
  }

  const onSubmit = async () => {
    setLoading(true)
    handleUploadFile()
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
      <FormWrap
        submitText="Create new project"
        buttonClassName="w-full text-base"
        onSubmit={onSubmit}
        disabled={loading}>
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
