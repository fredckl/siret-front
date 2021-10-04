import React from 'react'
import { getStartAt, getEndAt } from '../helpers/ets';
import { Badge, Box } from '@chakra-ui/react';

const EtsStatus = ({ets}) => {
  return (
    <Box>
      <Badge borderRadius="full" width="auto" fontSize="0.6rem" px="2" colorScheme={ets.isActive ? 'green' : 'red'}>{ets.isActive ? getStartAt(ets) : getEndAt(ets)} </Badge>
    </Box>
  )
}

export default EtsStatus
