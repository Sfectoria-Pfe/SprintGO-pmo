
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import LandingPage from '../components/pages/landingPage';





function Router() {
  return (
    <div >
      
      <BrowserRouter>
      
      
        <Routes>
          <Route path='/' element={ <LandingPage/>}/>

        
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default Router


