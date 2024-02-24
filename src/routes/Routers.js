
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../components/pages/login';
import Signup from '../components/pages/signup';

import Services from '../components/pages/services';
import Navbar from '../components/NavBar/Navbar';
import Home from '../components/pages/Home';

import Contact from '../components/pages/contact';
import Features from '../components/pages/features';
import About from '../components/pages/About';

function Router() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/nav' element={<Navbar/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/features' element={<Features/>}/>


        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default Router


