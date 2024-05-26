import {  Flex } from '@chakra-ui/react'
// import Chart0 from '../components/dashboard/Chart0'
import { AllRoutes } from '../routes/AllRoutes'
// import Header from '../components/Header'
// import Chart from '../components/Chart'
// import CashflowTable from '../components/CashflowTable '

export const Dashboard = () => {
  return (
    <Flex minHeight="100vh" bg="gray.50">
   <AllRoutes/>
  </Flex>
  )
}

