import React,{FC} from 'react';
import {Box,Stack,Badge,IconButton} from '@mui/material'
import basketIcon from './basket.png'
import logo from './logo.jpg'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Basket,State} from '../../types/Types'


const Header:FC = () => {
  
  const basket:Basket[] = useSelector((state:State)=>state.basket)
  
  
   return (
        <Box p={4} px={8} >
           <Stack direction='row' justifyContent='space-between' 
           alignItems='center'>
             <Box width='10px'>
             <img width='40px' src={logo} alt='logo'/>
             </Box>
             <Stack direction='row' spacing={3} width='50%' ml={4}>
             <NavLink to='/' style={style}>Home</NavLink>
             <NavLink to='/about' style={style}>About</NavLink>
             </Stack>
             <Box width='13%' > 

        <IconButton
              aria-label='cart' 
              size='large'
              >
          <NavLink style={{color:'orange'}} to='/cart'>
           <Badge badgeContent={basket.length}
                  color='primary'>
                  
         <img src={basketIcon} 
              alt='basket' width='33' />
      
           </Badge>
           </NavLink>
        </IconButton>
     
             </Box>
            </Stack>
        </Box>
      
        )
}
const style = ({isActive}:any) => {
  console.log('isactive',isActive)
 return { 
  fontWieght: '800px',
  fontSize: '1.3rem',
  textDecoration: 'none',
  color: 'orange',
  borderBottom: isActive ? '3px solid orange' :''
 }
}

export default Header;