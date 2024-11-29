import { IChildrenProps } from '@/types/common.types'
import { memo } from 'react'

const MidContainer = memo(({ children }: IChildrenProps) => {
  return <div className="mx-auto w-full max-w-3xl px-4">{children}</div>
})

export default MidContainer
