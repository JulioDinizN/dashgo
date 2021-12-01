import { Flex, Input, Icon } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

// Controlled components - Declarativo - State
//     const [search, setSearch] = useState("")
//     value={search}
//     onChange={event => setSearch(event.target.value)}

// Uncontrolled components - Imperativo - Ref
//     const searchInputRef = useRef<HTMLInputElement>(null)
//     ref={searchInputRef}
//     console.log(searchInputRef.current.value)

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
