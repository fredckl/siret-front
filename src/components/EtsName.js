import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { getName } from '../helpers/ets';
import EtsHeaderOfficeBadge from './EtsHeaderOfficeBadge';

const EtsName = ({ets}) => {
  return (
    <Box>
      <Text fontWeight="semibold">{getName(ets)} <EtsHeaderOfficeBadge ets={ets} /></Text>
      <Text fontSize="xs">{ets.legalForm}</Text>
    </Box>
  )
}

export default EtsName
