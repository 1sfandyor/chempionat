export interface VenuesType {
  isVenue?: boolean
  sport_icon?: SVGElement | string,
  name?: string,
  book?: string,
  location?: string,
  work_time?: string,
  price?: string,
  phone?: string,
  gallery?: string[]
  onClick?: () => void
  description?: string
  features?: string[]
}