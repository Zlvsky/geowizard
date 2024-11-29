function PageLoading() {
  return (
    <div className="fixed inset-x-0 inset-y-64 flex items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
        <div className="size-4 animate-bounce rounded-full bg-blue-600 delay-0"></div>
        <div className="size-4 animate-bounce rounded-full bg-blue-600 delay-75"></div>
        <div className="size-4 animate-bounce rounded-full bg-blue-600 delay-150"></div>
      </div>
    </div>
  )
}

export default PageLoading
