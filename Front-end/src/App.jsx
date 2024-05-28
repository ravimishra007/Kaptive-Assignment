// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useSelector } from 'react-redux'
import './App.css'
import Sidebar from './components/Sidebar'
import { AllRoutes } from './routes/AllRoutes'

function App() {
const {isAuth} = useSelector((state)=>state.auth)
// console.log(selector)
  return (
    <>
        
       {isAuth?<Sidebar />:""}

    <AllRoutes/>
    </>
  )
}

export default App
