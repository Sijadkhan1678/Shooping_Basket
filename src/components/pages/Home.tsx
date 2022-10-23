import React,{FC,Fragment} from 'react';
import {Box,Typography} from '@mui/material'
import Hero from '../Hero'
import Products from '../products/Products'


const Home:FC = () => {
  
  return (
  <Fragment>
   <Hero />
     <Box>
       <Typography variant='h4' mt={4.2} ml={1.5} fontWeight='300' >
       Products
       </Typography>
       
       <Products />
       
     </Box>
  </Fragment>
    )
  
}
export default Home;