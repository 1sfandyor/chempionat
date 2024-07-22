export interface UserRatingType {
  key?: string,
  sport_icon?: string 
  sport_name?: string
  ratings?: {
    name?: string 
    score?: number 
    icon?: string   
  }[]
  }