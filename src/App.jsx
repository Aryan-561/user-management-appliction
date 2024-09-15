import React,{ useEffect} from 'react'
import Home from './pages/Home/Home'
import UserDetails from './pages/UserDetails/UserDetails'
import UpdateUserDetails from './pages/UpdateUser/UpdateUser.jsx'
import {BrowserRouter as Router,  Routes,Route, useNavigate } from 'react-router-dom'

import CreateNewUser from './components/CreateNewUser/CreateNewUser.jsx'

function App() {
  
    

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Redirect/>} />
            <Route path='/users' element={<Home/>} />
            <Route path='/user/:id' element={<UserDetails/>} />
            <Route path='/user/update/:id' element={<UpdateUserDetails/>} />
            <Route path='/create-user' element={<CreateNewUser/>} />
        </Routes>
      </Router>
    </>
  )
}


function Redirect(){
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/users')
  })
}

export default App
