import React from 'react'
import { getStartAt, getEndAt } from '../helpers/ets';
import { Badge, Box } from '@chakra-ui/react';

const EtsStatus = ({ets}) => {
  return (
    <Box>
      <Badge borderRadius="full" width="auto" fontSize="0.6rem" px="2" colorScheme={ets.etsClosed ? 'red' : 'green'}>{ets.etsClosed ? getEndAt(ets) : getStartAt(ets)} </Badge>
    </Box>
  )
}

export default EtsStatus
