import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genra } from './hooks/useGenra'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatform'
import SortSelector from './components/SortSelector'

function App() {
  const [selectedGenra, setSelectedGenra] = useState<Genra | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  )
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)
  const [searchText, setSearchText] = useState<string | null>(null)

  console.log(searchText)

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
        <Navbar onSearch={(txt) => setSearchText(txt)} />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5}>
          <GenreList
            onSelectedGenre={(genre) => setSelectedGenra(genre)}
            selectedGenra={selectedGenra}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'} padding={'10px'}>
        <HStack>
          <PlatformSelector
            onSelectedPlatform={(platform: Platform) =>
              setSelectedPlatform(platform)
            }
            selectedPlatform={selectedPlatform}
          />
          <SortSelector
            onselectOrder={(o) => setSelectedOrder(o)}
            sortorder={selectedOrder}
          />
        </HStack>
        <GameGrid
          selectedGenra={selectedGenra}
          selectedPlatform={selectedPlatform}
          selectedOrder={selectedOrder}
          searchText={searchText}
        />
      </GridItem>
    </Grid>
  )
}

export default App
