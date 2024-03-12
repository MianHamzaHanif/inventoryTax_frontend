import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIinstance } from '../axios.config';


export const fetchBills = createAsyncThunk('bills/fetchAll', async ({ page, limit }) => {
  console.log("page",page);
  console.log("limit",limit);

    const response = await APIinstance.get(`bill?page=${page}&limit=${limit}`);
    return response.data;
  });
  
  export const addNewBill = createAsyncThunk('bills/add', async (customerData) => {
    const response = await APIinstance.post('bill', customerData);
    return response.data;
  });
  
  export const updateBill = createAsyncThunk('bills/update', async ({ id ,  billPayload} ) => {
    console.log("ididid",id);
    console.log("billPayloadbillPayload",billPayload);
    const response = await APIinstance.put(`bill/${id}`, billPayload);
    console.log("responseresponseresponse",response);
    return response.data;
  });
  
  export const deleteBill = createAsyncThunk('bills/delete', async (id) => {
    await APIinstance.delete(`bill/${id}`);
    return id;
  });
  
  export const billSlice = createSlice({
    name: 'bill',
    initialState: {
      isLoading: false,
      bill: null,
      bills: [],
      totalPages: 0,
      message: null,
    },
    reducers: {
      // Optionally define reducers here
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchBills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bills = action.payload.bills || []; // Set customers to an empty array if bills is undefined
        state.totalPages = action.payload.params.totalPages || 0; // Set totalPages to 0 if not present
      })      
        // .addCase(addNewBill.fulfilled, (state, action) => {
        //   state.isLoading = false;
        //   state.customers.push(action.payload.customer);
        // })
        .addCase(addNewBill.fulfilled, (state, action) => {
          state.isLoading = false;
          state.bills.push(action.payload.bill); 
        })
        
        .addCase(updateBill.fulfilled, (state, action) => {
          state.isLoading = false;
          // const index = state.customers.findIndex((customer) => customer._id === action.payload._id);
          // if (index !== -1) {
          //   state.customers[index] = action.payload;
          // }
        })
        .addCase(deleteBill.fulfilled, (state, action) => {
          state.isLoading = false;
          state.bills = state.bills.filter((bill) => bill._id !== action.payload);
        })
        
        // Handle other async actions as needed
        .addCase(fetchBills.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchBills.rejected, (state, action) => {
          state.isLoading = false;
          // Handle the error state
        })
        // You can handle more cases for other thunks
    },
  });
  

export default billSlice.reducer;
