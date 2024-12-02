import { memo, PropsWithChildren } from 'react'

const PageWrap = memo(({ children }: PropsWithChildren) => {
  return (
    <div
      className={`app dark:bg-dark-background flex min-h-screen  w-full flex-col bg-white transition-colors duration-300 ease-in-out`}
    >
      {children}
    </div>
  )
})

export default PageWrap
