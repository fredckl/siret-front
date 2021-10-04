import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { compose, dec, evolve, has, inc, isEmpty, pickAll, prop, omit } from 'ramda';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import EtsDetails from '../components/EtsDetails';
import EtsList from '../components/EtsList';
import FormSearch from '../components/FormSearch';
import FPagination from '../components/FPagination';
import useQuery from '../hooks/useQuery';

const qs = require('query-string');

const Home = () => {
  const [ets, setEts] = useState([])
  const [metadata, setMetadata] = useState({});
  const [resultNotFound, setResultNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const query = useQuery();
  const history = useHistory()
  const searchQueries = pickAll(['firstname', 'q', 'postalCode', 'active', 'page'], query);

  useEffect(() => {
    if (searchQueries) {
      setLoading(true)
      axios.get('/api/v1/siret', {
        params: searchQueries
      }).then(({ data }) => {
        setEts(data.data)
        setMetadata(data.metadata || {})
        setResultNotFound(isEmpty(data.data))
      }).finally(() => {
        setLoading(false)
      })
    }
  }, [
    searchQueries.firstname,
    searchQueries.q,
    searchQueries.postalCode,
    searchQueries.active,
    searchQueries.page
  ]);

  const historyPush = (q) => history.push(`?${q}`)

  const onNextPage = () => compose(
    historyPush,
    qs.stringify,
    evolve({ page: inc })
  )(query)

  const onPreviousPage = () => compose(
    historyPush,
    qs.stringify,
    evolve({ page: dec })
  )(query)

  const onSubmit = (values) => {
    historyPush(qs.stringify({ ...omit(['show'], values), page: 0 }))
  }

  const handleSelectEts = (ets) => {
    const siren = prop('siren', ets);
    historyPush(qs.stringify({...query, show: siren}))
  }

  return (
    <>
     <Box mt="5" mb="5">
        <FormSearch onSubmit={onSubmit} isLoading={loading} />
      </Box>
      {has('show', query) ? (<EtsDetails siren={prop('show', query)}/>): (
        <>
          {resultNotFound ? (
        <Box textAlign="center">
          <Text>Aucun resultat</Text>
        </Box>
      ) : (
          <>
            <FPagination
              currentPage={metadata.page}
              total={metadata.total}
              perPage={metadata.perPage}
              onNext={onNextPage}
              onPrevious={onPreviousPage}
              isLoading={loading}
            />
            
          <EtsList establishments={ets} onSelect={handleSelectEts} />
          
          <FPagination
            currentPage={metadata.page}
            total={metadata.total}
            perPage={metadata.perPage}
            onNext={onNextPage}
            onPrevious={onPreviousPage}
            isLoading={loading}
          />
        </>
      )} 
        </>
      )}
      
    </>
  )
}

export default Home
