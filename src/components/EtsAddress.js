import React from 'react'
import { Box, Text } from '@chakra-ui/react';

const EtsAddress = ({address}) => {
  return (
    <Box mt="2">
      <Text fontSize="xs">{address.streetNumber} {address.street}</Text>
      <Text fontSize="xs">{address.postalCode} {address.city}</Text>
    </Box>
  )
}

EtsAddress.defaultProps = {
  address: {}
}

export default EtsAddress
