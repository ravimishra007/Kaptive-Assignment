// import { CashflowTable } from "../CashflowTable "
// import Chart from "../Chart"
// import { Header } from "../Header"


export const Chart0 = () => {
  return (
<>
{/* <Flex minHeight="100vh" border='2px solid green' w='80%'  ml='20%' mt='-606px' flexDirection="column">

<Header/>
<Chart/>
<CashflowTable/>
</Flex> */}
</>
  )
}

// import { Container, Grid, Paper, Typography } from '@mui/material';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   StackedBarChart,
//   LineSeries,
//   BarSeries,
//   PieSeries
// } from '@mui/x-charts';

// const data = [
//   // Example data, replace this with your actual data
//   { month: 'Jan', totalIncome: 5000, cogs: 2000, grossProfit: 3000, payroll: 1500 },
//   { month: 'Feb', totalIncome: 6000, cogs: 2500, grossProfit: 3500, payroll: 1600 },
//   // Add more data as needed
// ];

// export const Chart0 = () => {
//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>Company Financial Dashboard</Typography>
      
//       {/* Key Metrics */}
//       <Grid container spacing={3}>
//         <Grid item xs={3}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <Typography variant="h6">Total Income</Typography>
//             <Typography variant="h4">$11000</Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <Typography variant="h6">Total COGS</Typography>
//             <Typography variant="h4">$4500</Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <Typography variant="h6">Gross Profit</Typography>
//             <Typography variant="h4">$6500</Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <Typography variant="h6">Total Payroll Expenses</Typography>
//             <Typography variant="h4">$3100</Typography>
//           </Paper>
//         </Grid>
//       </Grid>
      
//       {/* Sales Section */}
//       <Typography variant="h5" gutterBottom>Sales</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <LineChart height={300}>
//               <LineSeries dataKey="month" data={data} valueKey="totalIncome" />
//               <LineSeries dataKey="month" data={data} valueKey="grossProfit" />
//             </LineChart>
//           </Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <PieChart height={300}>
//               <PieSeries dataKey="month" data={data} valueKey="totalIncome" />
//             </PieChart>
//           </Paper>
//         </Grid>
//       </Grid>
      
//       {/* Income Section */}
//       <Typography variant="h5" gutterBottom>Income</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <BarChart height={300}>
//               <BarSeries dataKey="month" data={data} valueKey="totalIncome" />
//               <BarSeries dataKey="month" data={data} valueKey="grossProfit" />
//             </BarChart>
//           </Paper>
//         </Grid>
//       </Grid>
      
//       {/* COGS Section */}
//       <Typography variant="h5" gutterBottom>Cost of Goods Sold (COGS)</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <StackedBarChart height={300}>
//               <BarSeries dataKey="month" data={data} valueKey="cogs" />
//             </StackedBarChart>
//           </Paper>
//         </Grid>
//         <Grid item xs={12}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <LineChart height={300}>
//               <LineSeries dataKey="month" data={data} valueKey="totalIncome" />
//               <LineSeries dataKey="month" data={data} valueKey="cogs" />
//             </LineChart>
//           </Paper>
//         </Grid>
//       </Grid>
      
//       {/* R&D Section */}
//       <Typography variant="h5" gutterBottom>Research and Development (R&D)</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <LineChart height={300}>
//               <LineSeries dataKey="month" data={data} valueKey="cogs" />
//             </LineChart>
//           </Paper>
//         </Grid>
//       </Grid>
      
//       {/* Payroll Section */}
//       <Typography variant="h5" gutterBottom>Payroll and Employee Costs</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <StackedBarChart height={300}>
//               <BarSeries dataKey="month" data={data} valueKey="payroll" />
//             </StackedBarChart>
//           </Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <PieChart height={300}>
//               <PieSeries dataKey="month" data={data} valueKey="payroll" />
//             </PieChart>
//           </Paper>
//         </Grid>
//       </Grid>
      
//       {/* Deductions Section */}
//       <Typography variant="h5" gutterBottom>Sales Deductions</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <BarChart height={300}>
//               <BarSeries dataKey="month" data={data} valueKey="totalIncome" />
//             </BarChart>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

