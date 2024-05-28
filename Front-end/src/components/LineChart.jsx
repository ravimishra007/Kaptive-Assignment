import { Box} from '@chakra-ui/react';
import { useMemo } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';
import newData from "../data/db.json";

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const calculateTotalRevenue = (data) => {
  const filteredData = data.filter(entry => entry.Overhead.includes("Revenue"));
  const totalRevenue = months.reduce((acc, month) => {
    acc[month] = filteredData.reduce((sum, entry) => sum + entry[month], 0);
    return acc;
  }, {});
  return totalRevenue;
};

const calculateTotalCOGS = (data) => {
  const filteredData = data.filter(entry => entry.Overhead.includes("COGS"));
  const totalCOGS = months.reduce((acc, month) => {
    acc[month] = filteredData.reduce((sum, entry) => sum + entry[month], 0);
    return acc;
  }, {});
  return totalCOGS;
};

const calculateGrossProfit = (revenue, cogs) => {
  return months.reduce((acc, month) => {
    acc[month] = revenue[month] - cogs[month];
    return acc;
  }, {});
};


export const Linechart = () => {
  const revenueData = useMemo(() => calculateTotalRevenue(newData.Sheet1), [newData.Sheet1]);
  const cogsData = useMemo(() => calculateTotalCOGS(newData.Sheet1), [newData.Sheet1]);
  const grossProfitData = useMemo(() => calculateGrossProfit(revenueData, cogsData), [revenueData, cogsData]);

  const chartData = months.map(month => ({
    name: month,
    Revenue: revenueData[month] || 0,
    COGS: cogsData[month] || 0,
    'Gross Profit': grossProfitData[month] || 0
  }));

  console.log('chartData:', chartData); // Log the chart data

  return (
    <Box bg="white" boxShadow="lg" p="4px" ml='2px' mb="4" h='220px'  >
      {/* <Heading size="md" mb="4">Revenue, COGS, and Gross Profit</Heading> */}
      {/* <Box  display="flex" justifyContent="center" alignItems="center"  ml='5px' h='550px'> */}
        <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData} margin={{ top: 1, right: 30, left: 20, bottom: 5 }} style={{padding:"10px"}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Revenue" stroke="green" strokeWidth={3.5} />
            <Line type="monotone" dataKey="COGS" stroke="pink" strokeWidth={3.5} />
            <Line type="monotone" dataKey="Gross Profit" stroke="#ffc658" strokeWidth={3.5} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    // </Box>
  );
};
