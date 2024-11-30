import StepDescription from '../StepDescription'

function FileUpload() {
  return (
    <div className="w-full">
      <StepDescription
        title="Upload your geodata"
        description="Please upload your geojson file."
      />
    </div>
  )
}

export default FileUpload
