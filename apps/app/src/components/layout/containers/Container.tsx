import { IChildrenProps } from '@/types/common.types'
import { memo } from 'react'

const Container = memo(({ children }: IChildrenProps) => {
  return <main className="container mx-auto flex-1 w-full p-4 flex flex-col">{children}</main>
})

export default Container
