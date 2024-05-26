import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
// import { Dashboard } from '../pages/Dashboard'
import {Chart0} from '../components/dashboard/Chart0'
import { Table } from '../components/dashboard/Table'
import { Reports } from '../components/dashboard/Reports'
import { ForeCast } from '../components/dashboard/ForeCast'

const AllRoutes = () => {
    
  return (
    <Routes>
<Route path='/' element={<LoginPage/>}/>
<Route path='/chart0' element={<Chart0/>}/>
<Route path='/table' element={<Table/>}/>
<Route path='/reports' element={<Reports/>}/>
<Route path='/forecast' element={<ForeCast/>}/>

    </Routes>
  )
}

export  {AllRoutes}