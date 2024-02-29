import { configureStore } from '@reduxjs/toolkit'
import addCustomer from './customer/AddCustomer'


export const store = configureStore({
  reducer: {
    addCustomer: addCustomer,
  },
})
