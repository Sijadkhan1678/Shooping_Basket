import {createSlice}  from '@reduxjs/toolkit'
import {Initial_State} from './State'
import shoesList from './ShoesData'

const productSlice = createSlice({
   name:'products',
   initialState:Initial_State.products,
  reducers:{
    getProducts (state){
  
    return state = shoesList 
     
    }
  }
})
  
 const {actions,reducer} = productSlice
 export const {getProducts} = actions
 export default reducer