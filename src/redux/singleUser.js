import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  user : ''
}

const userSlice = createSlice({
  name: 'singleUser',
  
  initialState,
  // initialState: {
  //   value : ["abhi"]
  // },

  reducers: {

    displaySingleUser: (state,action) => {
       console.log(action.payload)
     
       state.user = action.payload;
       
    }
  }
})

export const { displaySingleUser } = userSlice.actions

export default userSlice.reducer;
