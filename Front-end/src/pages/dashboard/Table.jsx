import { Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { CashflowTable } from "../../components/CashflowTable ";
import { BarGraph } from "../../components/BarGraph";

export const Table = () => {
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
