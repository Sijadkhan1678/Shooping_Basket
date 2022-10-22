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
     
     
      dispatch(getProducts())
      setLoading(false)
    
   }

    if(loading){ return <Loading />}
     
     
   
   
   // const {products,brandProducts,selectedBrand} = useContext(context);
      
   // const Products = selectedBrand === 'All' || selectedBrand === 'Home' ? products : brandProducts
    
    return (
      
    <Box width='100%' mt={5} >
      <Grid container justifyContent='space-between' spacing={5}>
      
    { products.map( (product:Product,index:number) =>( 
              <ProductItem key={index}
                 product={product} />
          )
          )
    }
      </Grid>
    </Box>
  
    
      )
}
export default Products;