import { Skeleton } from '@/components/ui/Skeleton';

function ProjectHeading({ data }: any) {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="flex flex-row items-center gap-2 text-3xl font-medium tracking-tighter text-black transition-colors dark:text-white">
            Project: {data?.name || <Skeleton className="h-6 w-32" />}
          </h1>
          {data?.name ? (
            <div className="flex flex-row items-center rounded-lg bg-green-600/10 px-4 py-2">
              <span className="text-sm text-green-800">Active</span>
            </div>
          ) : (
            <Skeleton className="h-6 w-24" />
          )}
        </div>
        <p className="flex flex-row items-center gap-2">
          Created at:{' '}
          {data?.createdAt ? (
            new Date(data.createdAt).toDateString()
          ) : (
            <Skeleton className="h-4 w-32" />
          )}{' '}
        </p>
      </div>
    )
}

export default ProjectHeading;