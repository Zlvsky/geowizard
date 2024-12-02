import { memo, PropsWithChildren } from 'react'

const PageWrap = memo(({ children }: PropsWithChildren) => {
  return (
    <div
      className={`app min-h-screen w-full bg-white  transition-colors duration-300 ease-in-out dark:bg-dark-background flex flex-col`}>
      {children}
    </div>
  )
})

export default PageWrap
