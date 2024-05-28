import { Box, HStack, Button, } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box bg="white" boxShadow="md" p="4" mb="4">
      {/* <HStack justify="space-between"> */}
        <HStack spacing="4">
          <Button>Summary</Button>
          <Button>Balance Sheet</Button>
          <Button>Income Statement</Button>
          <Button>Cashflow</Button>
        </HStack>
           </Box>
  );
};

