import { configureStore } from '@reduxjs/toolkit'
import productSlice from './product/Product'
import itemSlice from './itemSlice'
import departmentSlice from './departmentSlice'
import customerSlice  from './addCustomer'


export const store = configureStore({
  reducer: {
    productSlice: productSlice,
    itemHead: itemSlice,
    department: departmentSlice,
    customer: customerSlice,
  },
})
