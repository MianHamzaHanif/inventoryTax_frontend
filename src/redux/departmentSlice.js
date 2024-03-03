import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIinstance } from '../axios.config';


// Separate createAsyncThunk for each action
export const fetchDepartment = createAsyncThunk('department/fetchAll', async ({ page, limit }) => {
    const response = await APIinstance.get(`department?page=${page}&limit=${limit}`);
    return response.data;
  });
  
  export const addItemHead = createAsyncThunk('department/add', async (itemData) => {
    const response = await APIinstance.post('department', itemData);
    return response.data;
  });
  
  export const updateItemHead = createAsyncThunk('department/update', async ({ id, ...data }) => {
    console.log("idididididid",id);
    const response = await APIinstance.put(`department/${id}`, data);
    return response.data;
  });
  
  export const deleteItemHead = createAsyncThunk('department/delete', async (id) => {
    const response = await APIinstance.delete(`department/${id}`);
    return response.data;
  });
  
export const departmentSlice = createSlice({
    name: 'department',
    initialState: {
      itemHeads: [],
      totalPages: 0,
      isLoading: false,
      error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.itemHeads = action.payload.departments; // Make sure this matches the structure of your API response
        state.totalPages = action.payload.totalPages;
      })      
      .addCase(fetchDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
    //   .addCase(addItemHead.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     // Ensure you're correctly accessing the nested item object
    //     state.itemHeads.push(action.payload.item); // Use action.payload.item based on your API response
    //   })
    .addCase(addItemHead.fulfilled, (state, action) => {
        state.isLoading = false;
        // Assuming the API response includes the newly added department
        state.itemHeads.push(action.payload.department);
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

export default departmentSlice.reducer;
