import React,{FC} from 'react'
import {Stack,Box,IconButton,Typography} from '@mui/material'
import  DeleteIcon from '@mui/icons-material/Delete' 
import  AddIcon from '@mui/icons-material/AddCircle' 
import  RemoveCircleIcon from '@mui/icons-material/RemoveCircle' 
import {useDispatch} from 'react-redux'
import {add,remove,increase,decrease} from '../redux/BasketSlice'

const CartItem:FC <any> = ({item}) => {
    const {id,name,img,price,quantity} = item
    
   const dispatch = useDispatch()
    return (
      
     <Stack direction='row' 
            spacing={2.5}
             mt={7} mb={8}>
        <Box>
           <img src={img} 
                alt='item'
                width='180px' />
        </Box>
        <Box width='100%'>
        <Stack direction='row' 
               justifyContent='space-between'>
           <Typography variant='h5'>
            {name}
           </Typography>
          <IconButton 
                    onClick={()=>dispatch(remove(id))}
                   
                    size='large' 
                    color='error'>
           <DeleteIcon /> 
            </IconButton> 
            </Stack>
              <Stack direction='row' justifyContent='space-between' alignItems='center'  mt={3}>
           <Typography variant='h5' >
              $ {price}
            </Typography>
               <Stack direction='row' alignItems='center' spacing={1.7  }>
              <IconButton  onClick={()=>dispatch(increase(id))}
                         
                         size='large'
                          color='primary'>
                    <AddIcon /> 
                </IconButton>
                 <Typography variant='h6'>
                  {quantity}
                 </Typography>
                <IconButton 
                      disabled= {quantity < 2 ? true :false}
                      onClick={()=> dispatch(decrease(id))}
                     
                      size='large'
                      color='secondary'>
                   <RemoveCircleIcon />
                </IconButton>
                </Stack>
                </Stack>
               
             </Box>
      </Stack>
      )  
      
  
}
export default CartItem