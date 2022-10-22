import {createSlice,configureStore}  from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {Initial_State} from './State'
import {State} from '../types/Types'
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