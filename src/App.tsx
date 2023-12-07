import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genra } from './hooks/useGenra'

function App() {
  const [selectedGenra, setSelectedGenra] = useState<Genra | null>(null)
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
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5}>
          <GenreList
            onSelectedGenre={(genre) => setSelectedGenra(genre)}
            selectedGenra={selectedGenra}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GameGrid selectedGenra={selectedGenra} />
      </GridItem>
    </Grid>
  )
}

export default App
