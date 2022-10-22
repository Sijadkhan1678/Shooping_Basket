import React,{FC,Fragment,useEffect} from 'react';
import {Box,Typography} from '@mui/material'
import Hero from '../Hero'
import Products from '../products/Products'


const Home:FC = () => {
  
  //const {changeBrand} = useContext(context);
  useEffect( () =>{
   //changeBrand('Home');
   //eslint-disable-next-line
  },[])
  
  return (
  <Fragment>
   <Hero />
     <Box>
    
       <Typography variant='h3' mt={4.2} ml={1.5} fontWeight='300' >
       Products
       </Typography>
       
       <Products />
       
     </Box>
  </Fragment>
    )
  
}
export default Home;