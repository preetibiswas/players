import apiClient from '../services/api-client'
import { useQuery } from '@tanstack/react-query'
import { Game } from './useGames'
interface gameo {
  name: string
}

const useGame = (slug: string) =>
  useQuery<gameo, Error>({
    querykey: ['games', slug],
    queryFn: () =>
      apiClient.get<gameo>(`/games/${slug}`).then((res) => res.data),
  })

export default useGame
