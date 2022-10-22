import React,{FC} from 'react';
import {Grid,Typography,Box,Rating,Button,Stack} from '@mui/material'
import {add} from '../../redux/BasketSlice'
import {useDispatch} from 'react-redux'
import {Product} from '../../types/Types'



const ProductItem:FC <any> = ({product}) => {
  
  const {name,img,price,rating,brand} =product
  const dispatch = useDispatch()
  const  addToBasket = (product:any) => {
    dispatch(add({...product,quantity:1}))
  }
  //const {addToCart} = useContext(context);
  let shoeName = name.slice(0,14)
    return (
      
     <Grid item  >
        
      <img src={img} alt='shoe' width='166px' height='123px' style={style} />
            <Stack 
          direction='column'
          justifyContent='space-evenly'
          mt={0.8}>
        
         <Box sx={sx}>
              <Typography variant='h6' fontWeight='300'
                fontSize='1rem'>
                 {shoeName }
                 </Typography>
 
                  <Typography
                  variant='body1' 
                  color ='primary'>
                   $ {price}
                   </Typography>
             </Box>
             
            <Box sx={sx}>
                   <Rating value={rating}  precision={0.5} readOnly/>
                <Typography variant='body1'  fontSize='12px' fontWeight='390' >
                    {brand}
                 </Typography>
                 </Box>
          {/*Add product into cart */}       
             <Box mt={1}>
         <Button 
               onClick={()=>addToBasket(product)}
                 variant='contained' 
                 size='small' 
                 style={{backgroundColor:'orange',
                   width:'100%'}}>
                Add to cart
           </Button>
           </Box>
           </Stack>
  
     </Grid>
        
      )
}
const sx = {
   mt: '0.4rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between'
}
const style={
  borderRadius: '0.8rem'
}

export default ProductItem;