import FileIcon from '@/assets/icons/file.svg?react'
import FormWrap from '@/components/forms/form/FormWrap'
import { Button } from '@/components/ui/Button'
import { useFilesHandler } from '@/hooks/useFileUpload'
import { cn } from '@/utils'
import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowUp, Check, FileCheckIcon, FileXIcon } from 'lucide-react'
import { useWizardContext } from '../../_context/WizardContext'
import StepDescription from '../StepDescription'

const UploadArea = () => {
  const { getRootProps, getInputProps, isDragActive, open } = useFilesHandler()
  return (
    <div className="flex flex-col gap-10">
      <div
        {...getRootProps()}
        className={cn(
          'flex  flex-col items-center justify-center rounded-2xl border border-dashed p-8 transition-colors',
          isDragActive
            ? 'border-primary'
            : 'border-gray dark:border-gray-foreground transition-colors'
        )}
      >
        <IconComponent isDragActive={isDragActive} />
        <h3 className="mt-8 text-center text-xl font-medium tracking-tighter text-black transition-colors dark:text-white">
          Upload your file
        </h3>
        <p className="text-text dark:text-text-foreground text-center transition-colors">
          Supported format: <span className="text-primary">.geojson</span>
        </p>
        <Button
          variant="outline"
          className="border-gray dark:border-gray-foreground hover:dark:bg-foreground mt-6 w-64 rounded-lg transition-all hover:bg-[#EDF2F5] active:scale-95"
          onClick={open}
        >
          Select file
        </Button>
      </div>
      <input {...getInputProps()} />
    </div>
  )
}

const IconComponent = ({ isDragActive }: { isDragActive: boolean }) => {
  const { uploadedFile } = useWizardContext()

  return (
    <div className="relative ">
      <FileIcon width={80} height={80} />
      <div className="bg-primary absolute bottom-0 right-0 flex size-10 translate-y-2 items-center justify-center rounded-full">
        <ArrowUp
          className={cn(
            'absolute text-white transition-all',
            !isDragActive && !uploadedFile ? 'scale-100' : 'scale-0'
          )}
        />
        <ArrowDownToLine
          className={cn(
            'absolute text-white transition-all',
            isDragActive ? 'scale-100' : 'scale-0'
          )}
        />
        <Check
          className={cn(
            'absolute text-white transition-all',
            uploadedFile && !isDragActive ? 'scale-100' : 'scale-0'
          )}
        />
      </div>
    </div>
  )
}

export const ListedFile = () => {
  const { uploadedFile } = useWizardContext()

  return (
    <div className="border-gray dark:border-gray-foreground mt-10 w-full rounded-2xl border px-2 py-3">
      <div className="flex flex-row items-center gap-2">
        <div className="border-gray dark:border-gray-foreground flex size-12 items-center justify-center rounded-xl border p-1 shadow-md transition-colors">
          <div className="bg-primary/70 relative flex h-full w-full items-center justify-center rounded-lg ">
            <FileXIcon
              className={cn(
                'absolute text-white transition-all',
                !uploadedFile ? 'scale-100' : 'scale-0'
              )}
            />
            <FileCheckIcon
              className={cn(
                'absolute text-white transition-all',
                uploadedFile ? 'scale-100' : 'scale-0'
              )}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="truncate text-base font-medium text-black transition-colors dark:text-white">
            {uploadedFile?.name
              ? uploadedFile?.name?.split('.geojson')
              : 'File not uploaded'}
          </p>
          {uploadedFile ? (
            <p className="text-text dark:text-text-foreground text-sm transition-colors">
              {'GEOJSON'} • {Math.round(uploadedFile?.size / 1024)} KB
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function FileUpload() {
  const { setCurrentStep, uploadedFile } = useWizardContext()

  const onSubmit = () => {
    if (!uploadedFile) return
    setCurrentStep(2)
  }

  return (
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
      }}
    >
      <StepDescription
        title="Import area of interest"
        description="Drag and drop or select the geojson file of your area of interest."
      />
      <FormWrap
        submitText="Next"
        buttonClassName="w-full text-base"
        onSubmit={onSubmit}
        disabled={!uploadedFile}
      >
        <UploadArea />
        <ListedFile />
      </FormWrap>
    </motion.div>
  )
}

export default FileUpload
