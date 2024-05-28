import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { Table } from '../pages/dashboard/Table'
import { Reports } from '../pages/dashboard/Reports'
import { ForeCast } from '../pages/dashboard/ForeCast'
import { ChartSection } from '../pages/dashboard/ChartPage'

const AllRoutes = () => {
    
  return (
    <Routes>
<Route path='/' element={<LoginPage/>}/>
<Route path='/chartSection' element={<ChartSection/>}/>
<Route path='/table' element={<Table/>}/>
<Route path='/reports' element={<Reports/>}/>
<Route path='/forecast' element={<ForeCast/>}/>

    </Routes>
  )
}

export  {AllRoutes}