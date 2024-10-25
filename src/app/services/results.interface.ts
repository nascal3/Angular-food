export interface filterFoodResults {
  results: food[]
  number: number
  offset: number
  totalResults: number
}
export interface food {
  id: number
  title: string
  image: string
  imageType: string
}
