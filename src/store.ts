import SortSelector from './components/SortSelector'
import { Genra } from './hooks/useData'
import { Platform } from './hooks/useGames'
import { create } from 'zustand'

export interface GameQuery {
  genre?: Genra | null
  platform?: Platform | null
  order?: string | null
  searchText?: string | null
}

interface GameQueryStore {
  gameQuery: GameQuery
  setSearchText: (searchText: string) => void
  setGenre: (genre: Genra) => void
  setPlatform: (platform: Platform) => void
  setSortOrder: (sortOrder: string) => void
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenre: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setSortOrder: (order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, order } })),
}))

export default useGameQueryStore
