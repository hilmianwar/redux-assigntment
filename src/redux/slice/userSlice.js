import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userList = createAsyncThunk("user/userList", async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?per_page=12");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error("Error fetching user list: " + error.message);
  }
});

// State awal
const initialState = {
  userList: [],
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(userList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = action.payload;
      })
      .addCase(userList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userSlice.reducer;
