function NavDots({
  currentStep,
  setCurrentStep
}: {
  currentStep: number
  setCurrentStep: (step: number) => void
}) {
  return (
    <div className="flex flex-row items-center gap-0.5">
      {[0, 1, 2, 3].map((step) => (
        <div className="cursor-pointer p-1" onClick={() => setCurrentStep(step)}>
          <div
            key={step}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentStep === step ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        </div>
      ))}
    </div>
  )
}

export default NavDots
