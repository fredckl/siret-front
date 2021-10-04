import { Button, FormControl, HStack, Input, Radio, RadioGroup, Stack, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import useQuery from '../hooks/useQuery';

const FormSearch = ({ onSubmit, isLoading }) => {
  const query = useQuery()
  const { handleSubmit, register, control } = useForm({ defaultValues: query});

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack spacing="10px">
        <FormControl id="q">
          <Input type="text" {...register('q')} placeholder="Nom - siret - siren" />
        </FormControl>
        <FormControl id="postalCode">
          <Input type="number" {...register('postalCode')} placeholder="Département ou code postal" />
        </FormControl>
        <FormControl id="firstname">
          <Input type="text" {...register('firstname')} placeholder="Prénom" />
        </FormControl>
        <Button isLoading={isLoading} colorScheme="teal" size="sm" type="submit">GO</Button>
      </HStack>
      <HStack spacing="10px">
        <Box d="flex" mt="2">
          <Text fontSize="sm" pl="1" mr="3">Etat :</Text>
          <Controller
            control={control}
            name="active"
            render={({ field: { onChange, value } }) => (
              
              <RadioGroup onChange={onChange} value={value}>
                <Stack direction="row">
                  <Radio size="sm" value="">tous</Radio>
                  <Radio size="sm" value="true">actif</Radio>
                  <Radio size="sm" value="false">inactif</Radio>
                </Stack>
              </RadioGroup>
            )}
          />
        </Box>
      </HStack>
    </form>
  )
}

export default FormSearch
