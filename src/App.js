import { Box, Container, Heading, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Container maxW="container.lg" bgColor="gray-200" pb="10" mb="5">
        <Box my="10">
          <Box d="flex" textAlign="center" justifyContent="center">
            <Heading textAlign="center" textColor="teal.700">Lentreprise</Heading>
          </Box>
        </Box>
        <Suspense fallback={<Spinner/>}>
          <Routes/>
        </Suspense>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
