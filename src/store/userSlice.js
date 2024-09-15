import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    usersInfo:[]
}

const userSlice = createSlice({
    name:'usersInfo',
    initialState,
    reducers:{
        getData: (state,action)=>{
            state.usersInfo = [...action.payload]
        },
        createUser:(state,action)=>{
            const newUser = {...action.payload,id:nanoid()}
            state.usersInfo= [...state.usersInfo,newUser]
        },
        updateUser: (state,action)=>{
           state.usersInfo = state.usersInfo.map(user=>
                user.id == action.payload.id?action.payload:user
            )
        },
        deleteUser: (state,action)=>{
            state.usersInfo = state.usersInfo.filter(user=> user.id != action.payload)
        }
    }
})


export const {getData,updateUser,createUser,deleteUser} = userSlice.actions 

export default userSlice.reducer