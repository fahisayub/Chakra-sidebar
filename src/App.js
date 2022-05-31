import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import Sidebar from './components/Sidebar';

function App() {


 
  return (
    <ChakraProvider  >
      <Sidebar></Sidebar>

    </ChakraProvider>
  );
}

export default App;
