import { axiosRequest } from "@/config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLoginPromise = createAsyncThunk(
  "userLoginPromise",
  async (data) => {
    console.log(data);
    return axiosRequest.post(data.userType ? "/vendor/login" : "/user/login", {
      ...data.userData,
    });
  }
);
const userAuthDetails = createSlice({
  name: "userAuth",
  initialState: {
    userData: { jwt: "" },
    requestStatus: false,
    errorText: null,
    isLoading: true,
  },
  extraReducers: {
    [userLoginPromise.pending]: (state, action) => {
      state.productLoading = true;
    },
    [userLoginPromise.fulfilled]: (state, action) => {
      state.productLoading = false;
      if (action.payload.status === 200) {
        console.log(action.payload);
        state.requestStatus = true;
        state.userData.jwt = action.payload.data.authToken;
      } else {
        state.errorText = action.payload.data.statusText;
      }
      console.log(state);
    },
    [userLoginPromise.rejected]: (state, action) => {
      state.productLoading = false;
    },
  },
});

const userAuthDetailsSlice = userAuthDetails.reducer;
export default userAuthDetailsSlice;
