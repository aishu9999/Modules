
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Admin from './module_1/Admin'
import Nav from './module_1/Nav'
import Home from './module_1/Home'
import Login from './module_1/Login'
import Profile from './module_1/Profile'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from './module_1/Signin'
import Userdashboard from './usermodule/Userdashboard'
import Browserjob from './usermodule/Browserjob'
import Viewappliedjob from './usermodule/Viewappliedjob'
import Updateprofile from './usermodule/Updateprofile'
import Navuser from './usermodule/Navuser'
import Navadmin from './adminmodule/Navadmin'
import Admindashboard from './adminmodule/Admindashboard'
import Fulluserappl from './adminmodule/Fulluserappl'
import Managejob from './adminmodule/Managejob'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
  
 
  
    <Routes>
      <Route path='/admin'element={<Admin />}></Route>
      <Route path='/'element={<Home />}></Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/profile'element={<Profile />}></Route>
      <Route path='/signin'element={<Signin />}></Route>
      </Routes>
     

      <Routes>
      <Route path='/userdash'element={<Userdashboard/>}></Route>
      <Route path='/browser'element={<Browserjob/>}></Route>
      <Route path='/viewappjob'element={<Viewappliedjob />}></Route>
      <Route path='/updateprof'element={<Updateprofile/>}></Route>
      </Routes>
    
   
        <Routes>
        <Route path='/admindash'element={<Admindashboard/>}></Route>
      <Route path='/fulluser'element={<Fulluserappl/>}></Route>
      <Route path='/manjob'element={<Managejob />}></Route>
        </Routes>
    
     
     
      
  
  </div>
       
    </>
  )
}

export default App