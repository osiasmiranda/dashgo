import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}
export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Osias Miranda</Text>
          <Text color='gray.300' fontSize='small'>
            osiasmiranda@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size='md' src='https://github.com/osiasmiranda.png' />
    </Flex>
  );
}
