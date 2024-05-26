import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export const CashflowTable = () => {
  return (
    <Box bg="white" boxShadow="md" p="2">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Cashflow</Th>
            <Th>January</Th>
            <Th>February</Th>
            <Th>March</Th>
            <Th>April</Th>
            <Th>May</Th>
            <Th>June</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Operating Activities</Td>
            <Td>150,000</Td>
            <Td>2,562,362</Td>
            <Td>2,562,362</Td>
            <Td>2,562,362</Td>
            <Td>2,562,362</Td>
            <Td>2,562,362</Td>
          </Tr>
          <Tr>
            <Td>Investing Activities</Td>
            <Td>8,546,142</Td>
            <Td>8,546,142</Td>
            <Td>8,546,142</Td>
            <Td>8,546,142</Td>
            <Td>8,546,142</Td>
            <Td>8,546,142</Td>
          </Tr>
          <Tr>
            <Td>Financing Activities</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
          </Tr>
          {/* <Tr>
            <Td>Opening Cash</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
          </Tr> */}
          <Tr>
            <Td>Net Change in Cash</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
            <Td>5,620,000</Td>
          </Tr>
          <Tr>
            <Td>Ending Cash</Td>
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

