
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';

import Login from '../components/pages/login';
import Signup from '../components/pages/signup';

import Services from '../components/pages/services';
import Navbar from '../components/NavBar/Navbar';
import Home from '../components/pages/Home';

import Contact from '../components/pages/contact';
import Features from '../components/pages/features';
import About from '../components/pages/About';
import { useAuthContext } from '../hooks/useAuthContext';
import Footer from '../components/Footer/footer';
import App from '../App';


function Router() {
  const {user} =useAuthContext()
  return (
    <div >
      
      <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<App/>}>

          <Route index element={<Home/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='features' element={<Features/>}/>
          </Route>

          
          <Route path='/login' element={!user ? <Login/>: <Navigate to="/"/>}/>
          <Route path='/signup' element={!user ? <Signup/>: <Navigate to="/"/>}/>
          


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Router


