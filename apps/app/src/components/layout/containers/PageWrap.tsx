import { IChildrenProps } from '@/types/common.types'
import { memo } from 'react'

const PageWrap = memo(({ children }: IChildrenProps) => {
  return <div className={`flex size-full flex-col items-center`}>{children}</div>
})

export default PageWrap
