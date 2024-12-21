import { configureStore } from '@reduxjs/toolkit'
import  cartslice  from './slices/cartslice'

export default configureStore({
  reducer: {
    cartslice,
  }
})