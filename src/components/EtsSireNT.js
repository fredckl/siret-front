import { Badge } from '@chakra-ui/react'
import React from 'react'

const EtsSireNT = ({value, label}) => {
  return (<Badge p="0" m="0" textColor="gray" colorScheme="transparent">{label} : {value}</Badge>)
}

export default EtsSireNT
