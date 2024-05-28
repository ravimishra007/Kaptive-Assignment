import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const data = [
  {
    "Overhead": "Sales - Products",
    "Jan": 567035172.9808396,
    "Feb": 709704421.7821583,
    "March": 943775905.6076958,
    "April": 1700146.9885902232,
    "May": 834902424.9488207,
    "June": 832586982.1314108,
    "July": 537888560.5971923,
    "August": 617635903.8054163,
    "September": 766114253.5959474,
    "October": 855211514.2058038,
    "November": 850249970.9165924,
    "December": 947909624.3220406
  },
  {
    "Overhead": "Sales - Services",
    "Jan": 515752387.51213104,
    "Feb": 429052323.4804421,
    "March": 942654273.2901741,
    "April": 200762134.67035854,
    "May": 573720906.4642819,
    "June": 674469218.7193083,
    "July": 716453645.2322466,
    "August": 705537122.9692943,
    "September": 234992718.34521195,
    "October": 298426476.74447066,
    "November": 913695820.1939114,
    "December": 586691153.4634258
  },
  {
    "Overhead": "Sales - Other",
    "Jan": 11244167.557242779,
    "Feb": 445233358.64961666,
    "March": 427498967.076958,
    "April": 39368503.13126505,
    "May": 102869190.72857492,
    "June": 733111419.096846,
    "July": 790125110.686183,
    "August": 628138966.1296043,
    "September": 30056894.875963412,
    "October": 134691696.9677342,
    "November": 428375223.87598395,
    "December": 74872510.17183939
  },
  {
    "Overhead": "COGS - Labour",
    "Jan": 132399924.02336487,
    "Feb": 458922161.19426346,
    "March": 335075326.0179907,
    "April": 225394481.82437527,
    "May": 560224968.0816487,
    "June": 244347607.624133,
    "July": 744689944.3271205,
    "August": 580837930.7712618,
    "September": 7871348.739916017,
    "October": 247919324.1420471,
    "November": 373294963.0285755,
    "December": 217766091.69010895
  },
  {
    "Overhead": "COGS - Raw Material",
    "Jan": 588536801.3768619,
    "Feb": 311369486.4775666,
    "March": 429998503.23873425,
    "April": 610765393.6396236,
    "May": 296240924.6574175,
    "June": 590107870.4865721,
    "July": 873754711.5547166,
    "August": 221234351.45733216,
    "September": 287643164.41375136,
    "October": 219951221.83941606,
    "November": 892368389.7995952,
    "December": 863598706.9373208
  },
  {
    "Overhead": "COGS - Freight",
    "Jan": 816686748.3492924,
    "Feb": 771042479.0697472,
    "March": 729610538.4168249,
    "April": 7461712.925589503,
    "May": 196866589.55600688,
    "June": 186426865.5382061,
    "July": 202761536.52506846,
    "August": 110171340.88300452,
    "September": 570743428.8549161,
    "October": 604181975.658926,
    "November": 255488693.97379005,
    "December": 40743598.11051875
  },
  {
    "Overhead": "COGS - Overheads",
    "Jan": 59936014.259128086,
    "Feb": 397275553.85612047,
    "March": 810035771.9140238,
    "April": 386812807.78438365,
    "May": 625647127.3398395,
    "June": 811299856.3191109,
    "July": 81501494.29273179,
    "August": 707679650.653618,
    "September": 744117672.555367,
    "October": 73334680.52647562,
    "November": 65614826.55674489,
    "December": 991694956.2719547
  },
  {
    "Overhead": "COGS - Other",
    "Jan": 768714961.5603263,
    "Feb": 191132395.7156975,
    "March": 668529344.1648098,
    "April": 185320295.29459816,
    "May": 493104258.7537013,
    "June": 702825521.2589918,
    "July": 101580027.06486602,
    "August": 537200896.281259,
    "September": 773047453.6507803,
    "October": 827421215.4886398,
    "November": 41654656.51784084,
    "December": 482694139.6992658
  }
];

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const calculateTotal = (data, filter) => {
  return months.reduce((acc, month) => {
    acc[month] = data.filter(entry => entry.Overhead.includes(filter)).reduce((sum, entry) => sum + entry[month], 0);
    return acc;
  }, {});
};

const calculateGrossProfit = (revenue, cogs) => {
  return months.reduce((acc, month) => {
    acc[month] = revenue[month] - cogs[month];
    return acc;
  }, {});
};

export const Report = () => {
  const totalRevenue = calculateTotal(data, "Sales");
  const totalCOGS = calculateTotal(data, "COGS");
  const grossProfit = calculateGrossProfit(totalRevenue, totalCOGS);

  return (
    <Box bg="white" boxShadow="md" p="2" h="289px" overflowY="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th bg="gray.200">Metric</Th>
            {months.map(month => (
              <Th key={month} bg={month === "Jan" ? "green.200" : "green.200"}>{month}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td bg="gray.100">Total Revenue</Td>
            {months.map(month => (
              <Td key={month} bg={month === "Jan" ? "green.100" : "green.100"}>{totalRevenue[month].toFixed(2)}</Td>
            ))}
          </Tr>
          <Tr>
            <Td bg="gray.100">Total COGS</Td>
            {months.map(month => (
              <Td key={month} bg={month === "Jan" ? "green.100" : "green.100"}>{totalCOGS[month].toFixed(2)}</Td>
            ))}
          </Tr>
          <Tr>
            <Td bg="gray.100">Gross Profit</Td>
            {months.map(month => (
              <Td key={month} bg={month === "Jan" ? "green.100" : "green.100"}>{grossProfit[month].toFixed(2)}</Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
