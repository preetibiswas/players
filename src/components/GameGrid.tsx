import { SimpleGrid } from '@chakra-ui/react'
import useGames, { Game } from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import useData from '../hooks/useData'
import { Genra } from '../hooks/useData'
interface Props {
  selectedGenra: Genra | null
}

const GameGrid = ({ selectedGenra }: Props) => {
  const { data: games, error, isLoading } = useGames(selectedGenra)
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={'10px'}
        spacing={10}
      >
        {isLoading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((games) => (
          <GameCard games={games} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
