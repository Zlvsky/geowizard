import { memo, PropsWithChildren } from 'react'

const Container = memo(({ children }: PropsWithChildren) => {
  return <main className="container mx-auto flex-1 w-full p-4 flex flex-col">{children}</main>
})

export default Container
