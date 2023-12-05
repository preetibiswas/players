import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
  const { games, error, loading } = useGames()
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={'10px'}
        spacing={10}
      >
        {loading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((games) => (
          <GameCard games={games} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
