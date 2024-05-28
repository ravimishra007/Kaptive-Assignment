import { Box,Heading, VStack, Text, Avatar, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const navigationChartHandler = ()=>{
    navigate('/chartSection')
    }
    const navigationTablesHandler = ()=>{
        navigate('/table')
        }
        const navigationReportHandler = ()=>{
            navigate('/reports')
            }
            const navigationForeCaseHandler = ()=>{
                navigate('/forecast')
                }
  return (

    <Box bg="purple.700" color="white" w="20%" minHeight="100vh" p="4">
      <VStack align="start" spacing="4">
        <Text fontSize="2xl" fontWeight="bold">PLSE</Text>
        <VStack align="start" spacing="2">
          <Button onClick={navigationChartHandler} variant="ghost" colorScheme="whiteAlpha">Charts</Button>
          <Button onClick={navigationTablesHandler} variant="ghost" colorScheme="whiteAlpha">Tables</Button>
          <Button onClick={navigationReportHandler} variant="ghost" colorScheme="whiteAlpha">Reports</Button>
          <Button onClick={navigationForeCaseHandler} variant="ghost" colorScheme="whiteAlpha">Forecast</Button>
        </VStack>
        <Box mt="150px" pt="6">
          <Avatar name="Ravi Mishra" />
          <Heading as='h5' size='lg' mb='2px'>Ravi Mishra</Heading>
          <Button colorScheme='red' fontWeight="bold" mt="2">Logout</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;
