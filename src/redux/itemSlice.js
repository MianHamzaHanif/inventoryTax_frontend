import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIinstance } from '../axios.config';


// Separate createAsyncThunk for each action
export const fetchItemHeads = createAsyncThunk('itemHead/fetchAll', async ({ page, limit }) => {
    const response = await APIinstance.get(`item?page=${page}&limit=${limit}`);
    return response.data;
  });
  
  export const addItemHead = createAsyncThunk('itemHead/add', async (itemData) => {
    const response = await APIinstance.post('item', itemData);
    return response.data;
  });
  
  export const updateItemHead = createAsyncThunk('itemHead/update', async ({ id, ...data }) => {
    console.log("idididididid",id);
    const response = await APIinstance.put(`item/${id}`, data);
    return response.data;
  });
  
  export const deleteItemHead = createAsyncThunk('itemHead/delete', async (id) => {
    const response = await APIinstance.delete(`item/${id}`);
    return response.data;
  });
  
export const itemSlice = createSlice({
    name: 'itemHead',
    initialState: {
      itemHeads: [],
      totalPages: 0,
      isLoading: false,
      error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemHeads.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItemHeads.fulfilled, (state, action) => {
        state.isLoading = false;
        state.itemHeads = action.payload.items; // Adjust depending on your API response
        state.totalPages = action.payload.totalPages; // Adjust depending on your API response
      })
      .addCase(fetchItemHeads.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(addItemHead.fulfilled, (state, action) => {
        state.isLoading = false;
        // Ensure you're correctly accessing the nested item object
        state.itemHeads.push(action.payload.item); // Use action.payload.item based on your API response
      })
      
      .addCase(updateItemHead.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.itemHeads.findIndex(itemHead => itemHead._id === action.payload._id); // Assuming the updated itemHead is returned at the root of the payload
        if (index !== -1) {
          state.itemHeads[index] = action.payload; // Assuming the updated itemHead is returned at the root of the payload
        }
      })
      
      .addCase(deleteItemHead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.itemHeads = state.itemHeads.filter(itemHead => itemHead._id !== action.meta.arg); // Adjust depending on your API response
      });
  }
  
});

export default itemSlice.reducer;
