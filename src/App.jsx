import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home,About,Projects,Contact,Examples } from './pages';


export const App = () => {
  return (
    <div>
    <main className='bg-white'>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/Projects' element={<Projects/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/Examples' element={<Examples/>} />
            </Routes> 
        </Router>
    </main>
    </div>
  )
}
