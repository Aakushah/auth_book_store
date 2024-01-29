import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token:JSON.parse(localStorage.getItem('tokens')) || null,
    },
    reducers: {
      setToken: (state, action) => {
        state.token = action.payload;
        localStorage.setItem('tokens', JSON.stringify(state.token));
        
      },
      removeToken:(state,action)=>{
        state.token = action.payload;
        localStorage.setItem('tokens', JSON.stringify(state.token));

        
        
      },

    },

    
})

export const { setToken,removeToken } = authSlice.actions;

export default authSlice.reducer;

