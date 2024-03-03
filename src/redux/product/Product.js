import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIinstance } from '../../axios.config';


// Separate createAsyncThunk for each action

export const fetchAllProducts = createAsyncThunk('productss/fetchAll', async ({ page, limit }) => {
  const response = await APIinstance.get(`product?page=${page}&limit=${limit}`);
  console.log("responseresponse",response?.data?.data);
  return response.data;
});
export const getProductById = createAsyncThunk('products/getById', async (productId) => {
  const response = await APIinstance.get(`product/${productId}`);
  return response.data;
});

// Async thunk for adding a new product
export const addNewProduct = createAsyncThunk('products/add', async (productData) => {
  console.log("productDataproductData",productData);
  const response = await APIinstance.post('product', productData);
  return response.data;
});

// Async thunk for updating a product by ID
export const updateProduct = createAsyncThunk('products/update', async ({_id, ...data}) => {
  const response = await APIinstance.put(`product/${_id}`, data);
  return response.data;
});

// Async thunk for deleting a product by ID
export const deleteProduct = createAsyncThunk('products/delete', async (productId) => {
  const response = await APIinstance.delete(`product/${productId}`);
  return response.data;
});
  
export const productSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    product: null, 
    products: [], 
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

    .addCase(fetchAllProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products; // Make sure this matches your API response
      state.totalPages = action.payload.totalPages; // Make sure this matches your API response
    })
    .addCase(fetchAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    })
      // Handle addNewProduct
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload.product); // Assuming the added product is returned
        state.message = action.payload.message;
      })
      .addCase(addNewProduct.rejected, (state) => {
        state.isLoading = false;
      })
      // Handle getProductById
      .addCase(getProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      // Handle updateProduct
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.products.findIndex(product => product._id === action.payload.product._id);
        if (index !== -1) {
          state.products[index] = action.payload.product;
        }
        state.message = action.payload.message;
      })
      // Handle deleteProduct
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = state.products.filter(product => product._id !== action.meta.arg);
        state.message = action.payload.message;
      });
  },
});

export default productSlice.reducer;
