import apiClient from '../services/api-client'
import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import useData, { FetchResponse } from './useData'
import { Genra } from './useData'
import { GameQuery } from '../App'
import { useQuery } from '@tanstack/react-query'

interface FetchGameResponse {
  count: number
  results: Game[]
}
export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: string
  rating_top: number
  rating: number
  platforms: { platform: Platform }[]
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

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>('/games', {
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.order,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  })

export default useGames
