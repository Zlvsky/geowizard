import { useWizardContext } from '@/views/home/_context/WizardContext'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export const useFilesHandler = () => {
  // CUSTOM ONDROP CALLBACK TO PREVENT CLEARING FILES WHEN FILE DIALOG POPS UP AND CHANGING WHITESPACES TO "_" TO PREVENT API BUGS
  const { setUploadedFile } = useWizardContext()

  const onDrop = useCallback((files: any) => {
    const renamedAcceptedFiles = files.map(
      (file: any) =>
        new File([file], file.name.replaceAll(' ', '_'), {
          type: file.type
        })
    )

    setUploadedFile(renamedAcceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    maxFiles: 1,
    noClick: true,
    multiple: false,
    accept: {
      'application/geo+json': ['.geojson']
    },
    onDrop
  })

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    open
  }
}
