import { Box, Container, Heading, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Container maxW="container.lg" bgColor="gray-200" pb="10">
        <Box my="10">
          <Heading textAlign="center">L.Entreprise</Heading>
        </Box>
        <Suspense fallback={<Spinner/>}>
          <Routes/>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
