import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Júlio Diniz</Text>
          <Text color="gray.300" fontSize="small">
            juliocesardiniznogueira@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Julio Diniz"
        src="https://github.com/JulioDinizN.png"
      />
    </Flex>
  );
}
