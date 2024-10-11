import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddUser=createAsyncThunk("user/AddUser",async(Data,thunkApi)=>{
    const {rejectWithValue}=thunkApi;
    try {
        const newres={...Data,islogged:false}
        const res=await axios.post("http://localhost:9000/User",newres);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const UbdateUser=createAsyncThunk("user/UbdateUser",async({id,islogged},thunkApi)=>{
    const{rejectWithValue}=thunkApi;
    try {
        const res= await axios.patch(`http://localhost:9000/User/${id}`,{islogged})
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const GetUser=createAsyncThunk("user/UserSlice",async(_,thunkApi)=>{
    const{rejectWithValue}=thunkApi;
    try {
        const res= await axios.get("http://localhost:9000/User")
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const UserSlice=createSlice({
    name:"user",
    initialState:{user:{}},
    extraReducers:(builder)=>{
        builder
            .addCase( AddUser.fulfilled,(state,action)=>{
                state.user.puch=(action.payload)
            })
            .addCase(GetUser.fulfilled,(state,action)=>{
                state.user=action.payload
            })
            .addCase(UbdateUser.fulfilled,(state,action)=>{
                const index=state.user.findIndex((item)=>item.id===action.payload.id);
                state.user[index]=action.payload
            })
    }
})

export default UserSlice.reducer;