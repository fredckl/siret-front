import { Box } from '@chakra-ui/react';
import React from 'react';
import EtsSireNT from './EtsSireNT';

const EtsSiretSiren = ({ ets }) => {
  return (
    <Box mt="auto" d="flex" flexDir="column" alignContent="flex-end">
      <EtsSireNT label="siren" value={ets.siren}/>
      <EtsSireNT label="siret" value={ets.siret}/>
    </Box>
  )
}

export default EtsSiretSiren
