import React,{Fragment} from 'react'
import Container from '@mui/material/Container'
import Header from './components/layout/Header'
import Home from './components/pages/Home';
import About from './components/pages/About'
import Cart  from './components/pages/Cart'
import NotFound from './components/pages/NotFound'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const  App = () => {
  
  return (
   
   <Router>
     <Fragment>
      <Header />
    
    <Container maxWidth="md">
      <Routes>
    
      <Route path="/"    element={<Home />} />
      
      <Route path="about" element={<About />} />
      <Route path="cart"  element={<Cart />} />
      <Route path="*"     element={<NotFound />} />
    </Routes>
   </Container>
  
    </Fragment>
   </Router>
    
  );
}

export default App;
