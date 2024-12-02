import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Skeleton'
import { format } from 'date-fns'
import { LucideCalendarRange } from 'lucide-react'

function PeriodCard({ date }: { date?: { from: Date; to: Date } }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-center gap-2 md:justify-normal">
          <LucideCalendarRange /> Period of interest
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>From:</span>
            </div>
            {date ? (
              <span>{format(date.from, 'dd.MM.yyyy')}</span>
            ) : (
              <Skeleton className="h-5 w-20" />
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>To:</span>
            </div>
            {date ? (
              <span>{format(date.to, 'dd.MM.yyyy')}</span>
            ) : (
              <Skeleton className="h-5 w-20" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PeriodCard
