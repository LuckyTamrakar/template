import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  access_token: null,
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserToken:(state,action)=>{
        state.access_token=action.payload.access_token
    },
    unSetUserToken:(state,action)=>{
        state.access_token=action.payload.access_token
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserToken,unSetUserToken } = authSlice.actions

export default authSlice.reducer