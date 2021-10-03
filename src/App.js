import { Container, Box, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EtsList from './components/EtsList';
import FormSearch from './components/FormSearch';
import FPagination from './components/FPagination';

function App() {
  const [ets, setEts] = useState([])
  const [metadata, setMetadata] = useState({});
  const [page, setPage] = useState(0);
  const [formValues, setFormValues] = useState(null);

  useEffect(() => {
    if (formValues) {
      axios.get('/api/v1/siret', {
        params: { ...formValues, page }
      }).then(({ data }) => {
        setEts(data.data)
        setMetadata(data.metadata)
      })
    }
  }, [formValues, page]);

  const onNextPage = () => setPage(p => p + 1)
  const onPreviousPage = () => setPage(p => p - 1)
  const onSubmit = (values) => {
    setPage(0);
    setFormValues(values);
  }

  return (
    <Container maxW="container.lg" bgColor="gray-200" pb="10">
      <Box my="10">
        <Heading textAlign="center">L.Entreprise</Heading>
      </Box>
      <Box mt="5" mb="5">
        <FormSearch onSubmit={onSubmit} />
      </Box>
      <EtsList ets={ets} metadata={metadata} />
      
      <FPagination
        currentPage={metadata.page}
        total={metadata.total}
        perPage={metadata.perPage}
        onNext={onNextPage}
        onPrevious={onPreviousPage} />
    </Container>
  );
}

export default App;
