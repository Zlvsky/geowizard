import { Button } from '@/components/ui/Button'
import Map from 'ol/Map'
import View from 'ol/View'
import GeoJSON from 'ol/format/GeoJSON'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import 'ol/ol.css'
import { fromLonLat } from 'ol/proj'
import OSM from 'ol/source/OSM'
import VectorSource from 'ol/source/Vector'
import { useEffect, useRef } from 'react'

interface MapProps {
  geojson: any
}

export default function MapComponent({ geojson }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(geojson, {
        featureProjection: 'EPSG:3857'
      })
    })

    const vectorLayer = new VectorLayer({
      source: vectorSource
    })

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2
      })
    })

    const centerView = () => {
      map.getView().fit(vectorSource.getExtent(), { padding: [50, 50, 50, 50] })
    }

    buttonRef.current?.addEventListener('click', centerView)

    centerView()

    return () => {
      map.setTarget(undefined)
      buttonRef.current?.removeEventListener('click', centerView)
    }
  }, [geojson])

  return (
    <div
      ref={mapRef}
      className="relative h-[calc(100%-5rem)] min-h-96 w-full overflow-hidden rounded-2xl md:h-[calc(100%-3rem)]">
      <Button
        ref={buttonRef}
        className="absolute left-10 top-1.5 z-10 m-[1px] h-[47px] rounded-[4px] border-0 bg-white py-0 font-semibold text-[#666] outline outline-1 outline-[#808080]/25 hover:outline-[#808080] dark:bg-white dark:text-[#666]"
        variant={'outline'}>
        Center
      </Button>
    </div>
  )
}
