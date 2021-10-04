import React from 'react'
import { Badge } from '@chakra-ui/react';

const EtsHeaderOfficeBadge = ({ets}) => {
  return (ets.isHeadOffice ? <Badge borderRadius="full" fontSize="0.5rem" px="2" colorScheme="blue" title="Ets principal">√</Badge> : null);
}

export default EtsHeaderOfficeBadge
