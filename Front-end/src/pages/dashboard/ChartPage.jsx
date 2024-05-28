import { Flex, Heading } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { Linechart } from "../../components/LineChart";
import { Composedchart } from "../../components/ComposedChart";
import { Piechart } from "../../components/PieChart";

export const ChartSection = () => {
  return (
    <>
      <Sidebar />
      <Flex
        minHeight="550px"
        w="80%"
        ml="20%"
        mt="-606px"
        flexDirection="column"
      >
        <Heading size="md" mb="4" p="7px">
          Comprehensive Year-End Financial Summary: Revenue, COGS, and Gross
          Profit :-
        </Heading>
        <Linechart />
        <Flex>
          <Composedchart />
          <Piechart />
        </Flex>
      </Flex>
    </>
  );
};
