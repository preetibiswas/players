import { Box, Flex, Grid, GridItem, Heading, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genra } from './hooks/useGenra'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatform'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genre: Genra | null
  platform: Platform | null
  order: string | null
  searchText: string | null
}

function App() {
  // const [selectedGenra, setSelectedGenra] = useState<Genra | null>(null)

  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null,
  // )
  // const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  // const [searchText, setSearchText] = useState<string | null>(null)

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  console.log(gameQuery)
  const heading = `${gameQuery.genre?.name || ''} ${
    gameQuery.platform?.name || ''
  }`

  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area={'nav'}>
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5}>
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenra={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'} padding={10}>
        <Box paddingLeft={2}>
          <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
          </Heading>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                onSelectedPlatform={(platform: Platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
              />
            </Box>
            <SortSelector
              onselectOrder={(order) => setGameQuery({ ...gameQuery, order })}
              sortorder={gameQuery.order}
            />
          </Flex>
        </Box>

        <GameGrid
          selectedGenra={gameQuery.genre}
          gameQuery={gameQuery}
          selectedPlatform={gameQuery.platform}
          selectedOrder={gameQuery.order}
          searchText={gameQuery.searchText}
        />
      </GridItem>
    </Grid>
  )
}

export default App
