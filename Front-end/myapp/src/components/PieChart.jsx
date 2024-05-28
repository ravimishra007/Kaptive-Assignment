import { Box} from '@chakra-ui/react';
import { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import newData from "../data/db.json";

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const calculateTotalRevenue = (data) => {
  const filteredData = data.filter(entry => entry.Overhead.includes("Revenue"));
  return filteredData.reduce((sum, entry) => {
    return sum + months.reduce((monthSum, month) => monthSum + entry[month], 0);
  }, 0);
};

const calculateTotalCOGS = (data) => {
  const filteredData = data.filter(entry => entry.Overhead.includes("COGS"));
  return filteredData.reduce((sum, entry) => {
    return sum + months.reduce((monthSum, month) => monthSum + entry[month], 0);
  }, 0);
};

const calculateGrossProfit = (revenue, cogs) => revenue - cogs;

export const Piechart = () => {
  const totalRevenue = useMemo(() => calculateTotalRevenue(newData.Sheet1), [newData.Sheet1]);
  const totalCOGS = useMemo(() => calculateTotalCOGS(newData.Sheet1), [newData.Sheet1]);
  const totalGrossProfit = useMemo(() => calculateGrossProfit(totalRevenue, totalCOGS), [totalRevenue, totalCOGS]);

  const chartData = [
    { name: 'Revenue', value: totalRevenue },
    { name: 'COGS', value: totalCOGS },
    { name: 'Gross Profit', value: totalGrossProfit }
  ];

  const COLORS = ['#0088FE', '#FF8042', '#FFBB28'];

  return (
    <Box bg="white"  w='47%' boxShadow="lg"  ml='2px' mb="2" h='310px' >
      {/* <Heading size="md" mb="4">Total Revenue, COGS, and Gross Profit for the Year</Heading> */}
      {/* <Box display="flex" justifyContent="center" alignItems="center" ml='5px' h='550px'> */}
        <ResponsiveContainer width="100%" height={310}>
        <PieChart style={{ padding: "10px", zIndex: "1" }}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={111}
              fill="#8884d8"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    // </Box>
  );
};
