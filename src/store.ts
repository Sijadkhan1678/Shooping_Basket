import {configureStore} from '@reduxjs/toolkit'
import productReducer from './redux/ProductSlice'
import BasketReducer from './redux/BasketSlice'
const store = configureStore({
  reducer:{
  products:productReducer,
  basket : BasketReducer
  
}
  
})
export default store