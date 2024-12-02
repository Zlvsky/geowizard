import { getProjectService } from '@/api/mockedService'
import Container from '@/components/layout/containers/Container'

import { Skeleton } from '@/components/ui/Skeleton'
import Breadcrumbs from '@/components/ui/breadcrumb/Breadcrumb'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import MapCard from './_components/MapCard'
import NotesCard from './_components/NotesCard'
import PeriodCard from './_components/PeriodCard'
import ProjectHeading from './_components/ProjectHeading'

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
      <div className="grid h-full w-full flex-1 grid-cols-1 gap-10 pt-5 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div>
            <Breadcrumbs
              links={[
                { title: 'Projects', path: '/projects' },
                { title: data?.res?.name || <Skeleton className="h-5 w-20" /> }
              ]}
            />
            <ProjectHeading data={data?.res} />
          </div>
          <PeriodCard date={data?.res?.date} />
          <NotesCard isLoading={isLoading} description={data?.res?.description} />
        </div>
        <MapCard geodata={data?.res?.geodata} />
      </div>
    </Container>
  )
}

export default ProjectPage
