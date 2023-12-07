import apiClient from '../services/api-client'
import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import useData from './useData'
import { Genra } from './useData'

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
  platforms: { platform: Platform }[]
}
export interface Platform {
  id: number
  name: string
  slug: string
}

const useGames = (
  selectedGenra: Genra | null,
  selectedPlatform: Platform | null,
  selectedOrder: string | null,
) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: selectedGenra?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedOrder,
      },
    },
    [selectedGenra?.id, selectedPlatform?.id, selectedOrder],
  )

export default useGames
