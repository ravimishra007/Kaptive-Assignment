import { Box, Heading, VStack, Text, Avatar, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import "@fortawesome/fontawesome-free/css/all.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const navigationChartHandler = () => {
    navigate("/chartSection");
  };
  const navigationTablesHandler = () => {
    navigate("/table");
  };
  const navigationReportHandler = () => {
    navigate("/reports");
  };
  const navigationForeCaseHandler = () => {
    navigate("/forecast");
  };

  const logoutHandle = () => {
    setTimeout(() => {
      const examplePromise = new Promise((resolve) => {
        setTimeout(() => resolve(200), 2000);
      });
      toast.promise(examplePromise, {
        success: {
          title: "Logout successful 🤗",
          description: "Thankyou so much, Have a nice weekend!",
        },
        error: { title: "Promise rejected", description: "Something wrong" },
        loading: {
          title: "Requesting is on progress ",
          description: "Please wait.",
        },
      });
    }, 500);

    setTimeout(() => {
      navigate("/");
      // toast({
      //   title: 'Success!',
      //   description: "You are Logout successfully.",
      //   status: 'success',
      //   duration: 2000,
      //   isClosable: true,
      // });
    }, 2000);
  };
  return (
    <Box bg="purple.700" color="white" w="20%" minHeight="100vh" p="4">
      <VStack align="start" spacing="4">
        <Text fontSize="2xl" fontWeight="bold">
          PLSE
        </Text>
        <VStack align="start" spacing="4" ml="10px">
          <Button
            w="90px"
            onClick={navigationChartHandler}
            colorScheme="whiteAlpha"
          >
            <i className="fas fa-chart-line" style={{ marginRight: "5px" }}></i>
            Charts
          </Button>
          <Button
            w="90px"
            onClick={navigationTablesHandler}
            colorScheme="whiteAlpha"
          >
            <i className="fas fa-table" style={{ marginRight: "5px" }}></i>
            Tables
          </Button>
          <Button
            w="90px"
            onClick={navigationReportHandler}
            colorScheme="whiteAlpha"
          >
            <i className="fas fa-file-alt" style={{ marginRight: "5px" }}></i>
            Reports
          </Button>
          <Button
            w="90px"
            onClick={navigationForeCaseHandler}
            colorScheme="whiteAlpha"
          >
            <i
              className="fa-brands fa-chromecast"
              style={{ marginRight: "5px" }}
            ></i>
            Forecast
          </Button>
        </VStack>
        <Box mt="150px" pt="6">
          <Avatar name="admin d" />
          <Heading as="h5" size="lg" mb="2px">
            @Admin
          </Heading>
          <Button
            colorScheme="red"
            ml="5px"
            fontWeight="bold"
            mt="2"
            onClick={logoutHandle}
          >
            Logout
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;
