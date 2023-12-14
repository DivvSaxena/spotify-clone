import React from 'react'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import LogIn from './routes/LogIn/LogIn.jsx'
import SignUp from './routes/SignUp/SignUp.jsx'
// import PannelOne from './components/PannelOne.jsx'
// import SideBar from './components/SideBar.jsx'
import SideBar from './components/SideBar.jsx'
import Joiner from './components/Joiner.jsx'

const App = () => {
  return (
    <>
      <Joiner />
      <Router>
        <Routes>
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path='/log-in' element={<LogIn />}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App