import { Box, Divider, Flex, LinkBox, Spacer } from '@chakra-ui/react';
import React from 'react';
import EtsAddress from './EtsAddress';
import EtsName from './EtsName';
import EtsSiretSiren from './EtsSiretSiren';
import EtsStatus from './EtsStatus';

const EtsList = ({ establishments, onSelect }) => {
  if (!establishments || !establishments.length) return null;

  return (
    <Box mt="3">
      {establishments.map(ets => (
        <LinkBox onClick={() => onSelect(ets)} key={ets.siret} borderWidth="1px" borderRadius="lg" marginBottom="10px" p="4" overflow="hidden">
          <Flex>
            <div>
              <EtsName ets={ets} />
              <Box mt="1">
                <Divider />
                <EtsAddress address={ets.address}/>
              </Box>
            </div>
            <Spacer/>
            <Box d="flex" textAlign="right" flexDir="column" alignContent="flex-end">
              <EtsStatus ets={ets}/>
              <EtsSiretSiren ets={ets}/>
            </Box>
          </Flex>
        </LinkBox>
      ))}
    </Box>
  )
}

export default EtsList
