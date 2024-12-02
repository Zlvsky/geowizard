import { Card, CardTitle } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Skeleton'
import { calculateHectares } from '@/utils'
import { MapPinnedIcon } from 'lucide-react'
import MapComponent from './Map'

function MapCard({ geodata }: { geodata: any }) {
  return (
    <Card className="flex-1 rounded-2xl p-3">
      <CardTitle className="flex flex-col items-center justify-between gap-2 pb-4 md:flex-row">
        <div className="flex flex-row items-center gap-2">
          <MapPinnedIcon /> Area of interest
        </div>
        {geodata && (
          <span className="bg-primary/10 dark:text-gray-foreground rounded-xl p-2 text-sm text-gray-500 dark:bg-blue-50/80">
            {calculateHectares(geodata?.geometry?.coordinates || [])} hectares
          </span>
        )}
      </CardTitle>
      {geodata ? (
        <MapComponent geojson={geodata} />
      ) : (
        <Skeleton className="h-[calc(100%-3rem)] w-full" />
      )}
    </Card>
  )
}

export default MapCard
