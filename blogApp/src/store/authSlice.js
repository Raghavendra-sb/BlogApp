import { createSlice } from "@reduxjs/toolkit";
//authentication ko track karnae kae liyae and store in a global state using Redux toolkit

const initialState = {
    status:false,
    userDate:null
}

const authSlice = createSlice({//creates a slice of the redux store in the name of auth 
    name:'auth',//auth is just a label for the slice 
    initialState,//initilal state of the slice

    reducers:{//state is the current state of the slice and action is the action that is dispatched to the slice
         //login and logout are the actions that will be dispatched to the slice
         login:(state,action)=>{//action is the payload of the login action
                   state.status=true,
                   state.userDate = action.payload.userDate;
         },
         logout:(state)=>{
            state.status = false,
            state.userDate= null
         }
    }
})

export const {login,logout} = authSlice.actions;

export default authSlice.reducer;