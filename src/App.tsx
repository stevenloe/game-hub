import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        // define 2 different layouts: 1 for mobile, another for desktop
        base: `"nav" "main"`, // mobile
        lg: `"nav nav" "aside main"`, // desktop
      }}
    >
      <GridItem area="nav" >
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
         <GenreList />
        </GridItem>
      </Show>
      
      <GridItem area="main">
        <GameGrid />

      </GridItem>
    </Grid>
  );
}

export default App;
