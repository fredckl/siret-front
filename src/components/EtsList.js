import { Badge, Box, Divider, Flex, Spacer, Text } from '@chakra-ui/react';
import { anyPass, complement, compose, find, isEmpty, isNil, prop, when } from 'ramda';
import React from 'react';
import { dateToFr } from '../helpers/date';

const isNilOrEmpty = anyPass([isNil, isEmpty]);
const isNotNilOrEmpty = complement(isNilOrEmpty);

const getStartAt = compose(
  when(isNotNilOrEmpty, compose(dateToFr, prop('startDate'))),
  find(compose(isNilOrEmpty, prop('endDate'))),
  prop('periods')
)

const getEndAt = compose(
  dateToFr,
  prop('etsUpdatedAt'),
)


const EtsList = ({ ets }) => {
  if (!ets || !ets.length) return null
  return (
    <Box mt="3">
      {ets.map(ets => (
        <Box borderWidth="1px" borderRadius="lg" marginBottom="10px" p="4" overflow="hidden" key={ets.siret}>
          <Flex>
            <div>
              <Box>
                <Text fontWeight="semibold">{ets.name} {ets.isHeadOffice && <Badge borderRadius="full" fontSize="0.5rem" px="2" colorScheme="blue" title="Ets principal">√</Badge>}</Text>
                <Text fontSize="xs">{ets.legalForm}</Text>
                <Text fontSize="xs">{ets.firstname} {ets.lastname}</Text>
              </Box>
              <Box mt="1">
                <Divider />
                <Box mt="2">
                  <Text fontSize="xs">{ets.address.streetNumber} {ets.address.street}</Text>
                  <Text fontSize="xs">{ets.address.postalCode} {ets.address.city}</Text>
                </Box>
              </Box>
            </div>
            <Spacer/>
            
            <Box d="flex" textAlign="right" flexDir="column" alignContent="flex-end">
              <Box>
                <Badge borderRadius="full" width="auto" fontSize="0.6rem" px="2" colorScheme={ets.isActive ? 'green' : 'red'}>{ ets.isActive ? `Actif au ${getStartAt(ets)}` : `Inactif au ${getEndAt(ets)}`} </Badge>
              </Box>


              <Box mt="auto" d="flex" flexDir="column" alignContent="flex-end">
                <Badge p="0" m="0" textColor="gray" colorScheme="transparent">siren : {ets.siren}</Badge>
                <Badge p="0" m="0" textColor="gray" colorScheme="transparent">siret : {ets.siret}</Badge>
              </Box>

            </Box>
          
          </Flex>
        </Box>
      ))}
    </Box>
  )
}

export default EtsList
