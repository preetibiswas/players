import apiClient from '../services/api-client'
import { useQuery } from '@tanstack/react-query'

interface Trailer {
  id: number
  name: string
  preview: string
  data: { 480: string; max: string }
}

const useTraiers = (gameId: number) => {
  return useQuery<Trailer>({
    queryKey: ['trailers', gameId],
    queryFn: ({ queryKey }) =>
      apiClient
        .get<Trailer>(`/games/${queryKey[1]}/movies`)
        .then((res) => res.data),
  })
}
export default useTraiers
