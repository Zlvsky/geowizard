import { cn } from '@/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'bg-gray dark:bg-gray-foreground animate-pulse rounded-md',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
