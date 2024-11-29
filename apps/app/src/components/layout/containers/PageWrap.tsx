import { IChildrenProps } from '@/types/common.types'
import { memo } from 'react'

const PageWrap = memo(({ children }: IChildrenProps) => {
  return (
    <div
      className={`app min-h-screen w-full bg-white p-6 transition-colors duration-300 ease-in-out dark:bg-dark-background `}>
      {children}
    </div>
  )
})

export default PageWrap
