import { Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Bar, Area, ComposedChart } from 'recharts';
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

export const Composedchart = () => {
  const revenueData = useMemo(() => calculateTotalRevenue(newData.Sheet1), [newData.Sheet1]);
  const cogsData = useMemo(() => calculateTotalCOGS(newData.Sheet1), [newData.Sheet1]);
  const grossProfitData = useMemo(() => calculateGrossProfit(revenueData, cogsData), [revenueData, cogsData]);

  const chartData = months.map(month => ({
    name: month,
    Revenue: revenueData[month] || 0,
    COGS: cogsData[month] || 0,
    'Gross Profit': grossProfitData[month] || 0
  }));

  return (
    <Box bg="white" boxShadow="lg" p="4px" ml='2px' mb="2" h='310px'  width="50%">
        <ResponsiveContainer width="100%" height={310} >
          <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ padding: "8px" }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" barSize={20} fill="#8884d8" />
            <Line type="monotone" dataKey="COGS" stroke="#ff7300" />
            <Area type="monotone" dataKey="Gross Profit" fill="#82ca9d" stroke="#82ca9d" />
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
  );
};
