import { Button, SimpleGrid } from '@chakra-ui/react'
import useGames, { Game } from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import useData from '../hooks/useData'
import { Genra } from '../hooks/useData'
import { Platform } from '../hooks/usePlatform'
import { GameQuery } from '../App'
import React from 'react'
interface Props {
  gameQuery: GameQuery
  selectedGenra: Genra | null
  selectedPlatform: Platform | null
  selectedOrder: string | null
  searchText: string | null
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery)
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      {error && <p>{error.message}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingY={5}
        spacing={10}
      >
        {isLoading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {/* {games?.results.map((games) => (
          <GameCard games={games} />
        ))} */}
        {games?.pages.map((page, index) => (
          <React.Fragment>
            {page.results.map((games) => (
              <GameCard games={games} />
            ))}
          </React.Fragment>
        ))}
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? 'Loaing...' : 'Load More'}
          </Button>
        )}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
