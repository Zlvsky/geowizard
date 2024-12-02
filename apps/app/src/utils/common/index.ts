import { area, polygon } from '@turf/turf'
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const calculateHectares = (coordinates: any) => {
  if (!coordinates || !coordinates.length) return 0

  const turfPolygon = polygon(coordinates)

  // Calculate the area in square meters
  const areaSqMeters = area(turfPolygon)

  // Convert square meters to hectares (1 hectare = 10,000 square meters)
  const areaHectares = areaSqMeters

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return formatter.format(areaHectares / 10000)
}
