import { Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { BarGraph } from "../../components/BarGraph";
import { CashflowTable } from "../../components/CashflowTable ";


export const ForeCast = () => {
  return (
    <>
      <Sidebar />
      <Flex
        minHeight="100vh"
        w="80%"
        ml="20%"
        mt="-606px"
        flexDirection="column"
      >
        < BarGraph/>
        <CashflowTable />
      </Flex>
    </>
  );
};
