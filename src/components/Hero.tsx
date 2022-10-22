import React,{FC} from 'react';
import Box from '@mui/material/Box'
import hero from './banner2.jpg'

const Hero:FC = () => {
  return(
    <Box width='100%'>
    
          <Box width='100%' >
            <img  src={hero} alt='hero' width='100%' height='210'  />
          </Box>
    
    </Box>
    )
}
export default Hero