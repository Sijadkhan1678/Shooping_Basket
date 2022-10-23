import React,{useEffect,useState} from 'react';
import {Grid,Box} from '@mui/material'
import ProductItem from './ProductItem'
import Loading from '../layout/Loading'
import {getProducts} from '../../redux/ProductSlice'
import {useSelector,useDispatch} from 'react-redux'
import {Product,State} from '../../types/Types'

const Products = () => {
  const [loading,setLoading] = useState <boolean>(true)
  const dispatch = useDispatch()
   const products:Product[] = useSelector((state:State)=>state.products)
   
   useEffect(()=>{
     getPrododucts()
     // eslint-disable-next-line
   },[])
   
   const getPrododucts =  () => {
     
     setTimeout( () => {
     dispatch(getProducts())
      setLoading(false)
     }
       ,5)
   }

    if(loading){ return <Loading />}
    
    return (
      
    <Box width='100%' mt={3.3} >
      <Grid container justifyContent='space-between' spacing={5}>
      
    { products.map( (product:Product,index:number) =>( 
              <ProductItem key={index}
                 product={product} /> )  
                 ) }
      </Grid>
    </Box>
  
    
      )
}
export default Products;