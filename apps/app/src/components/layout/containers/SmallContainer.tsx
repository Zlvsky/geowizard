import { IChildrenProps } from '@/types/common.types'
import { memo } from 'react'

const SmallContainer = memo(({ children }: IChildrenProps) => {
  return <div className="mx-auto w-full max-w-2xl px-4 text-center">{children}</div>
})

export default SmallContainer
