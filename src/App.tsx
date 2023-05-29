import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
  useAccordion,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

// refactor to use the query object pattern -- as passing all of these variables around is ugly.
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        // define 2 different layouts: 1 for mobile, another for desktop
        base: `"nav" "main"`, // mobile
        lg: `"nav nav" "aside main"`, // desktop
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
          />
          <SortSelector />
        </HStack>
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
