import { IChildrenProps } from '@/types/common.types'
import { memo } from 'react'

const Container = memo(({ children }: IChildrenProps) => {
  return <main className="container mx-auto w-full p-4">{children}</main>
})

export default Container
