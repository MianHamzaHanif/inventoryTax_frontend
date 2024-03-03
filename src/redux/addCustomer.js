import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIinstance } from '../axios.config';


export const fetchCustomers = createAsyncThunk('customers/fetch', async ({ page, limit }) => {
    const response = await APIinstance.get(`customer?page=${page}&limit=${limit}`);
    return response.data;
  });
  
  export const addNewCustomer = createAsyncThunk('customers/add', async (customerData) => {
    const response = await APIinstance.post('customer', customerData);
    return response.data;
  });
  
  export const updateCustomer = createAsyncThunk('customers/update', async ({ id, ...data }) => {
    const response = await APIinstance.put(`customer/${id}`, data);
    return response.data;
  });
  
  export const deleteCustomer = createAsyncThunk('customers/delete', async (id) => {
    await APIinstance.delete(`customer/${id}`);
    return id;
  });
  
  export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
      isLoading: false,
      customer: null,
      customers: [],
      totalPages: 0,
      message: null,
    },
    reducers: {
      // Optionally define reducers here
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCustomers.fulfilled, (state, action) => {
          state.isLoading = false;
          state.customers = action.payload.customers;
          state.totalPages = action.payload.params.totalPages;
        })
        .addCase(addNewCustomer.fulfilled, (state, action) => {
          state.isLoading = false;
          state.customers.push(action.payload.customer);
        })
        .addCase(updateCustomer.fulfilled, (state, action) => {
          state.isLoading = false;
          const index = state.customers.findIndex((customer) => customer._id === action.payload._id);
          if (index !== -1) {
            state.customers[index] = action.payload;
          }
        })
        .addCase(deleteCustomer.fulfilled, (state, action) => {
          state.isLoading = false;
          state.customers = state.customers.filter((customer) => customer._id !== action.payload);
        })
        // Handle other async actions as needed
        .addCase(fetchCustomers.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchCustomers.rejected, (state, action) => {
          state.isLoading = false;
          // Handle the error state
        })
        // You can handle more cases for other thunks
    },
  });
  

export default customerSlice.reducer;
