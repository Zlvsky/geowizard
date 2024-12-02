import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Skeleton'
import parse from 'html-react-parser'
import { NotebookTextIcon } from 'lucide-react'

function NotesCard({
  isLoading,
  description
}: {
  isLoading: boolean
  description?: string
}) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-center md:justify-normal gap-2">
          <NotebookTextIcon  /> Project notes
        </CardTitle>
      </CardHeader>
      <CardContent className="md:pr-0 w-full flex-1">
        {!isLoading ? (
          description ? (
            <div className="prose max-h-96 lg:max-h-[calc(50vh-100px)] w-full overflow-auto flex-1">
              {' '}
              {parse(description)}
            </div>
          ) : (
            <p className="">No description provided</p>
          )
        ) : (
          <Skeleton className="h-10 w-52" />
        )}
      </CardContent>
    </Card>
  )
}

export default NotesCard
