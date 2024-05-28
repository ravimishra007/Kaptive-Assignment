import { Flex } from "@chakra-ui/react";
// import { CashflowTable } from "../CashflowTable "
// import Chart from "../Bar"
// import { Header } from "../Header"
import Sidebar from "../../components/Sidebar";
import { Report } from "../../components/Visualization ";
import { ReportBar } from "../../components/ReportSection";

export const Reports = () => {
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
        <ReportBar />
        <Report/>
      </Flex>
    </>
  );
};
