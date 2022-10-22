import {
  createSlice,}  from '@reduxjs/toolkit'
import type {
  PayloadAction
} from '@reduxjs/toolkit'
import {
  Initial_State,
} from './State'


const basketSlice = createSlice({
  name: 'basket',
  initialState: Initial_State.basket,
  reducers: {
    add (state, action: PayloadAction <any>) {
      const item = state.map((item, index)=>
        item.id === action.payload.id ? action.payload.id: null
      );
    
        if (item.includes(action.payload.id)) {
      state.filter(item=> item.id !== action.payload.id ? item: item.quantity++)
        } else {
          state.push(action.payload)
        }

      
    },
    remove (state, action: PayloadAction < string >) {
      return  state.filter(item=> item.id !== action.payload)

    },

    increase  (state, action: PayloadAction < string >) {
  
       state.filter(item=> item.id !== action.payload ? item: item.quantity++)
    },

    decrease (state, action: PayloadAction < string >) {
      increase('hi')
       state.filter(item=> item.id !== action.payload ? item: item.quantity--)
    }

  }
})

const {
  actions, reducer
} = basketSlice
export const {add,remove,increase,decrease} = actions
export default reducer