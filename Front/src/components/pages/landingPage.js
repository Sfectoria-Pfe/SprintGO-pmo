import * as React from 'react';

import NavBar from '../NavBar/Navbar'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//import SvgMaterialDesign from './landingPage/SvgMaterialDesign';


import Hero from './landingPage/Hero';
import LogoCollection from './landingPage/logoCollection';
import Highlights from './landingPage/Highlights';
import Pricing from './landingPage/Pricing';
import Features from './landingPage/Features';
import Testimonials from './landingPage/Testimonials';
import FAQ from './landingPage/FAQ';
import Footer from '../Footer/footer';
import getLPTheme from './getLPtheme';

const defaultTheme = createTheme({});





export default function LandingPage() {
  const [mode, setMode] = React.useState('dark');
  const [showCustomTheme ] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ bgcolor: 'background.default' }}>
       
      <Hero />
     
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
      
    </ThemeProvider>
  );
}