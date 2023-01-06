import { createSlice, configureStore , createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  value : []
}

const userSlice = createSlice({
  name: 'users',
  
  initialState,
  // initialState: {
  //   value : ["abhi"]
  // },

  reducers: {
    displayAllUsers: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
     
     
     
     state.value=action.payload
     console.log(state.value)
      // const t = action.payload.data.map(e=>{
      //   return state.value.push(e)
      //   // console.log(e)
      // })
      // console.log(state.value)
      
      
    }
  }
})

export const { displayAllUsers  } = userSlice.actions

export default userSlice.reducer;
