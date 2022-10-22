import React from 'react';
import {Typography,Box} from '@mui/material';
import CartItem from '../CartItem';
import {useSelector} from 'react-redux'
import {Basket,State} from '../../types/Types'


const Cart = () => {
  const basket:Basket[] = useSelector((state:State)=>state.basket)

  const totalPrice = basket.reduce((currentTotal,item)=> (item.price + currentTotal) *item.quantity,0)
   
  return (
    <Box mt={5.6} position='relative'>
      <Typography variant='h4'> 
          Basket Items
       </Typography>
       <hr />
       { basket && basket.map( (item:Basket,index:number) => (<CartItem
      key={index}  item={item} />))}
      
      <Box bgcolor='#B3824F'
           width='100%' 
           height='11vh'
           left={0} 
           position='fixed' 
           bottom={0}>
      <Typography align='center'
                  variant='h5' mt={2.2} 
                  color='white'>
      Total : $ {totalPrice}
      </Typography>
      
       </Box>
    </Box>
      )
}
export default Cart;