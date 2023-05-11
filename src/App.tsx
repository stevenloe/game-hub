import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
          Aside
        </GridItem>
      </Show>
      
      <GridItem area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
