import apiClient from '../services/api-client'
import { useQuery } from '@tanstack/react-query'
import { Game } from './useGames'
import { Genra } from './useData'
export interface Gameo {
  id: number
  name: string
  background_image: string
  metacritic: string
  rating_top: number
  rating: number
  platforms: { platform: Platform }[]
  slug: string
  description_raw: string
  publishers: Publisher[]
  genres: Genra[]
}
interface Publisher {
  id: number
  name: string
}

const useGame = (slug: string) =>
  useQuery<Gameo, Error>({
    queryKey: ['games', slug],
    queryFn: () =>
      apiClient.get<Gameo>(`/games/${slug}`).then((res) => res.data),
  })

export default useGame
