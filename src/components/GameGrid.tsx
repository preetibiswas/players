import { SimpleGrid } from '@chakra-ui/react'
import useGames, { Game } from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import useData from '../hooks/useData'
import { Genra } from '../hooks/useData'
import { Platform } from '../hooks/usePlatform'
interface Props {
  selectedGenra: Genra | null
  selectedPlatform: Platform | null
  selectedOrder: string | null
}

const GameGrid = ({
  selectedGenra,
  selectedPlatform,
  selectedOrder,
}: Props) => {
  const { data: games, error, isLoading } = useGames(
    selectedGenra,
    selectedPlatform,
    selectedOrder,
  )
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingY={5}
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
