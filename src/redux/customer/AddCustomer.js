import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


// Separate createAsyncThunk for each action
export const getProductContent = createAsyncThunk('/products/contents', async () => {
    const response = await axios.get('/product/read');
    return response.data;
  });
  
  export const addNewProducts = createAsyncThunk('/products/content/add', async (obj) => {
    const response = await axios.post('/product/create', obj);
    return response.data;
  });
  
  export const updateProduct = createAsyncThunk('/products/content/update', async (obj) => {
    const response = await axios.put(`/product/update/${obj.data._id}`, obj.data);
    return response.data;
  });
  
  export const deletedProduct = createAsyncThunk('/products/content/delete', async (_id) => {
    const response = await axios.delete(`/product/remove/${_id}`);
    return response.data;
  });
  
  export const addCustomer = createSlice({
    name: 'addCustomer',
    initialState: {
      isLoading: false,
      products: [],
    },
    reducers: {
      addNewProduct: (state, action) => {
        let { newLeadObj } = action.payload;
        state.products = [...state.products, newLeadObj];
      },
      editDevice: (state, action) => {
        const { index, updatedLead } = action.payload;
        state.products[index] = updatedLead;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getProductContent.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getProductContent.fulfilled, (state, action) => {
          state.products = action.payload;
          state.isLoading = false;
        })
        .addCase(getProductContent.rejected, (state) => {
          state.isLoading = false;
        })
        .addCase(addNewProducts.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addNewProducts.fulfilled, (state, action) => {
          state.products = action.payload;
          state.isLoading = false;
        })
        .addCase(addNewProducts.rejected, (state) => {
          state.isLoading = false;
        })
        .addCase(updateProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
          window.location.href = '/app/product';
          state.isLoading = false;
        })
        .addCase(updateProduct.rejected, (state) => {
          state.isLoading = false;
        })
        .addCase(deletedProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deletedProduct.fulfilled, (state, action) => {
          window.location.href = '/app/product';
          state.isLoading = false;
        })
        .addCase(deletedProduct.rejected, (state) => {
          state.isLoading = false;
        });
    },
  });
  
  export const { addNewProduct, deleteDevice, editDevice } = addCustomer.actions;
  
  export default addCustomer.reducer;
  