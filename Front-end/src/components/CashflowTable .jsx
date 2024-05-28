import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export const CashflowTable = () => {
  return (
    <Box bg="white" boxShadow="md" p="2" h='306px' >
      <Table variant="simple" >
        <Thead>
          <Tr>
            <Th>Cashflow</Th>
            <Th color="blue.500">January</Th>
            <Th color="green.500">February</Th>
            <Th color="yellow.500">March</Th>
            <Th color="orange.500">April</Th>
            <Th color="teal.500">May</Th>
            <Th color="purple.500">June</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td color="red.500">Operating Activities</Td>
            <Td>150,000</Td>
            <Td>2,562,362</Td>
            <Td>2,562,362</Td>
            <Td>2,562,362</Td>
            <Td>2,562,362</Td>
            <Td>2,562,362</Td>
          </Tr>
          <Tr>
            <Td color="red.500">Investing Activities</Td>
            <Td>8,546,142</Td>
            <Td>8,546,142</Td>
            <Td>8,546,142</Td>
            <Td>8,546,142</Td>
            <Td>8,546,142</Td>
            <Td>8,546,142</Td>
          </Tr>
          <Tr>
            <Td color="red.500">Financing Activities</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
          </Tr>
          <Tr>
            <Td color="red.500">Net Change in Cash</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
          </Tr>
          <Tr>
            <Td color="red.500">Ending Cash</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
