
import { HStack, Button, Spacer, Text } from "@chakra-ui/react";

const FPagination = ({ onNext, currentPage, onPrevious, total, perPage, isLoading }) => {

  if (currentPage === undefined || total < perPage) return null;
  const totalPages = Math.floor(total / perPage) + 1;
  

  return (
    <HStack>  
      <Button isLoading={isLoading} size="xs" onClick={onPrevious} disabled={currentPage === 0}>{'<<'}</Button>
      <Spacer />
      <Text>{currentPage + 1}/{totalPages}</Text>
      <Spacer/>
      <Button isLoading={isLoading} size="xs" onClick={onNext} disabled={currentPage + 1 === totalPages}>{'>>'}</Button> 
    </HStack>
  )

}

export default FPagination;