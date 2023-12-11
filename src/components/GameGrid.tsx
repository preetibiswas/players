import React from 'react'
import { Button, SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames()
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
          <React.Fragment key={index}>
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
