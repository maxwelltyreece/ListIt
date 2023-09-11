import {React,useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import theme from './theme';


function App() {  
  const colorThemes = [grape, watermelon];
  const [activeColorTheme, activateColorTheme] = useState(grape);
  const mergedTheme = extendTheme(theme, { colors: activeColorTheme.colors });

  return (
    <ChakraProvider theme={mergedTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} >
          <NavBar theme = {theme}/>
          <VStack spacing={8}>
            
            
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
