import apiClient from '../services/api-client'
import { useQuery } from '@tanstack/react-query'

interface screenshots {
  id: number
  image: string
  width: number
  height: number
}

const useScreenshots = (gameId: number) =>
  useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: () =>
      apiClient
        .get<screenshots>(`/games/${gameId}/screenshots`)
        .then((res) => res.data),
  })

export default useScreenshots
