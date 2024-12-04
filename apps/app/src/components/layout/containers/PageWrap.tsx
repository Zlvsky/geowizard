import { useTutorialStore } from '@/store'
import { cn } from '@/utils'
import { memo, PropsWithChildren } from 'react'

const PageWrap = memo(({ children }: PropsWithChildren) => {
  const open = useTutorialStore((state) => state.open)

  return (
    <div
      className={cn(
        `app dark:bg-dark-background flex min-h-screen  w-full scale-100 flex-col rounded-none bg-white transition-all duration-500`,
        open && 'overflow-hidden rounded-lg'
      )}
      style={
        open
          ? {
              transformOrigin: 'center top',
              transitionProperty: 'transform, border-radius',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
              transform:
                'scale(0.9787581699346405) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)'
            }
          : {
              transformOrigin: 'center top',
              transitionProperty: 'transform, border-radius',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
              transform: 'scale(1) translate3d(0, 0, 0)'
            }
      }
    >
      {children}
    </div>
  )
})

export default PageWrap
