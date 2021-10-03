import { Button, FormControl, HStack, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

const FormSearch = ({ onSubmit }) => {
  const {handleSubmit, register} = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack spacing="10px">
        <FormControl id="q">
          <Input type="text" {...register('q')} placeholder="Nom - siret - siren" />
        </FormControl>
        <FormControl id="postalCode">
          <Input type="text" {...register('postalCode')} placeholder="Département ou code postal" />
        </FormControl>
        <FormControl id="firstname">
          <Input type="text" {...register('firstname')} placeholder="Prénom" />
        </FormControl>
        <Button colorScheme="teal" size="sm" type="submit">GO</Button>
      </HStack>
    </form>
  )
}

export default FormSearch
