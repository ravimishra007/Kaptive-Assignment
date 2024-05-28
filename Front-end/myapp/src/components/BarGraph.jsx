import { Box, Heading} from '@chakra-ui/react';
import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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


export const BarGraph = () => {
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
    <Box bg="white" boxShadow="md" p="4px" ml='2px' mb="4"  h='280px'>
      <Heading p='5px' size="md" mb="4">Detailed Cashflow Analysis by Month :-</Heading>
      <Box  display="flex" justifyContent="center" alignItems="center"  ml='5px'>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} style={{padding:"10px"}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" fill="green" />
            <Bar dataKey="COGS" fill="pink" />
            <Bar dataKey="Gross Profit" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};
