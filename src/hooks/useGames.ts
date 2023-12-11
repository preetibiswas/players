import apiClient from '../services/api-client'
import { FetchResponse } from './useData'
import { useInfiniteQuery } from '@tanstack/react-query'
import useGameQueryStore from '../store'

export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: string
  rating_top: number
  rating: number
  platforms: { platform: Platform }[]
  slug: string
  description_raw: string
}
export interface Platform {
  id: number
  name: string
  slug: string
}

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     '/games',
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.order,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery],
//   )

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery)
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<FetchResponse<Game>>('/games', {
          params: {
            page: pageParam,
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.order,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: 24 * 60 * 1000,
    initialPageParam: 1,
  })
}

export default useGames
