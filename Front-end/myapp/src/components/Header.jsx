import { Box, HStack, Button, Input, Select } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box bg="white" boxShadow="md" p="4" mb="4">
      <HStack justify="space-between">
        <HStack spacing="4">
          <Button>Summary</Button>
          <Button>Balance Sheet</Button>
          <Button>Income Statement</Button>
          <Button>Cashflow</Button>
        </HStack>
        <HStack spacing="4">
          <Input placeholder="Period From" type="date" />
          <Input placeholder="Period To" type="date" />
          <Button>Normal View</Button>
          <Button>Growth View</Button>
          <Select placeholder="EUR">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </Select>
        </HStack>
      </HStack>
    </Box>
  );
};

