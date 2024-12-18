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
        <CardTitle className="flex flex-row items-center justify-center gap-2 md:justify-normal">
          <NotebookTextIcon /> Project notes
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full flex-1 md:pr-0">
        {!isLoading ? (
          description ? (
            <div className="prose dark:prose-invert max-h-96 w-full flex-1 overflow-auto lg:max-h-[calc(50vh-100px)]">
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
