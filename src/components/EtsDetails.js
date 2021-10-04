import { Box, Divider, Flex, Spacer, Spinner, Text, Button } from '@chakra-ui/react';
import axios from 'axios';
import { filter, find, propEq, omit } from 'ramda';
import React, { useEffect, useState } from 'react';
import { pluralize } from '../helpers/text';
import useQuery from '../hooks/useQuery';
import EtsAddress from './EtsAddress';
import EtsName from './EtsName';
import EtsSireNT from './EtsSireNT';
import EtsSiretSiren from './EtsSiretSiren';
import EtsStatus from './EtsStatus';
import { useHistory } from 'react-router-dom';
const qs = require('query-string');

const EtsDetails = () => {
  const query = useQuery();
  const { show: siren } = query;
  const [ets, setEts] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios.get('/api/v1/siret', {
        params: { q: siren, page: 0, perPage: 1000 }
    }).then(({ data }) => {
        if (mounted) {
          setEts(data.data) 
        }
    }).finally(() => {
      setLoading(false)
    })
    
    return () => { mounted = false }

  }, [siren]);

  if (loading) return <Spinner/>
  if (!ets) return null;

  const mainEts = find(propEq('isHeadOffice', true))(ets);
  const otherEts = filter(propEq('isHeadOffice', false))(ets);

  if (!mainEts) return <Text>Une erreur est survenue. Veuillez nous excusez pour la gêne occasionnée</Text>

  const goBack = () => {
    history.push(`?${qs.stringify(omit(['show'], query))}`)
  }

  return (
    <Box>
      <Box d="flex" my="3">
        <Button colorScheme="teal" variant="ghost" size="xs" onClick={goBack}>{'<< retour <<'}</Button>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" marginBottom="10px" p="4" overflow="hidden">
        <Box>
          <Flex pb="3">
            <Box>
              <EtsName ets={mainEts} />
              <EtsAddress address={mainEts.address}/>
            </Box>
            <Spacer/>
            <Box d="flex" textAlign="right" flexDir="column" alignContent="flex-end">
              <EtsStatus ets={mainEts} />
              <EtsSiretSiren ets={mainEts}/>
            </Box>
          </Flex>
          {otherEts.length > 0 && (
            <Box mt="4">
              <Divider />
              <Box mt="4">
                <Text fontWeight="semibold">{pluralize('Etablissement', 's', otherEts.length)} {pluralize('rattaché', 's', otherEts.length)}</Text>
                {otherEts.map(oEts => (
                  <Box mx="2" key={oEts.siret}>
                    <Flex my="2">
                      <EtsAddress address={oEts.address}/>
                      <Spacer />
                      <Box d="flex" textAlign="right" flexDir="column" alignContent="flex-end">
                        <EtsStatus ets={oEts} />
                        <EtsSireNT label="siret" value={oEts.siret}/>
                      </Box>
                    </Flex>
                    <Divider/>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box d="flex" my="3">
        <Button colorScheme="teal" variant="ghost" size="xs" onClick={goBack}>{'<< retour <<'}</Button>
      </Box>
    </Box>
  )
}

export default EtsDetails
