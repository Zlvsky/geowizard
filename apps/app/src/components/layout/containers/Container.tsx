import { memo, PropsWithChildren } from 'react'

const Container = memo(({ children }: PropsWithChildren) => {
  return (
    <main className="container mx-auto flex w-full flex-1 flex-col p-4">{children}</main>
  )
})

export default Container
