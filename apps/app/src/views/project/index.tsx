import { getProjectService } from '@/api/mockedService'
import Container from '@/components/layout/containers/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Skeleton'
import { format } from 'date-fns'
import parse from 'html-react-parser'
import { CalendarFoldIcon, LucideCalendarRange, NotebookTextIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import MapComponent from './_components/Map'

function ProjectPage() {
  const { id } = useParams()

  const { data, isLoading, isError }: any = useQuery({
    queryFn: () => getProjectService(id!),
    queryKey: ['project', id],
    
    enabled: !!id
  })

  useEffect(() => {
    if (isError || data?.status !== 200) {
      toast.error('Error fetching project data')
    }
  }, [isError, data])

  return (
    <Container>
      <div className="my-10  flex flex-col">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-10">
          <h1 className="flex flex-row items-center gap-2 text-3xl font-medium tracking-tighter text-black transition-colors dark:text-white">
            Project: {data?.res?.name || <Skeleton className="h-10 w-32" />}
          </h1>
          {data?.res?.name ? (
            <div className="bg-primary/10 flex flex-row items-center gap-2 rounded-lg px-4 py-2">
              <CalendarFoldIcon />
              {new Date(data.res.createdAt).toDateString()}
            </div>
          ) : (
            <Skeleton className="h-10 w-52" />
          )}
        </div>
      </div>
      <div className="grid h-full w-full flex-1 grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-10">
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2">
                <LucideCalendarRange /> Period of interest
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>From:</span>
                  </div>
                  {data?.res?.date ? (
                    <span>{format(data?.res?.date.from, 'dd.MM.yyyy')}</span>
                  ) : (
                    <Skeleton className="h-5 w-20" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>To:</span>
                  </div>
                  {data?.res?.date ? (
                    <span>{format(data?.res?.date.to, 'dd.MM.yyyy')}</span>
                  ) : (
                    <Skeleton className="h-5 w-20" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2">
                <NotebookTextIcon /> Project notes
              </CardTitle>
            </CardHeader>
            <CardContent className='pr-0'>
              {!isLoading ? (
                data?.res?.description ? (
                  <div className="w-full prose max-h-96 overflow-auto"> {parse(data?.res?.description)}</div>
                ) : (
                  <p className="">No description provided</p>
                )
              ) : (
                <Skeleton className="h-10 w-52" />
              )}
            </CardContent>
          </Card>
        </div>
        <Card className="rounded-2xl p-3">
          {data?.res?.geodata ? (
            <MapComponent geojson={data?.res?.geodata} />
          ) : (
            <Skeleton className="h-full w-full" />
          )}
        </Card>
      </div>
    </Container>
  )
}

export default ProjectPage
