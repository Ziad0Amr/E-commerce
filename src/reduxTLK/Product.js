import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProduct=createAsyncThunk("Product/GetProduct",async (_,thunkApi)=>{
    const {rejectWithValue}=thunkApi;
   try {
    const res=await axios.get("http://localhost:9000/Products");
    return res.data
   } catch (error) {
    return rejectWithValue(error.message)
   }
})

export const UbdateCount=createAsyncThunk("Product/UbdateCount",async({id,count},thunkApi)=>{
    const {rejectWithValue} = thunkApi;
    try {
        const res=await axios.patch(`http://localhost:9000/Products/${id}`,{count})
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const DeleteProduct=createAsyncThunk("Product/DeleteProduct",async(id,thunkApi)=>{
    const {rejectWithValue} = thunkApi;
    try {
        axios.delete(`http://localhost:9000/newProducts/${id}`)
        return id;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const AddProduct=createAsyncThunk("Product/AddProduct",async(dataa,thunkApi)=>{
    const {rejectWithValue}=thunkApi;
    try {
        const newdata={...dataa,count:1}
        const res= await axios.post("http://localhost:9000/newProducts",newdata)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const GetnewProducts=createAsyncThunk("Product/GetnewProducts",async(_,thunkApi)=>{
    const {rejectWithValue}=thunkApi;
    try {
        const res=await axios.get("http://localhost:9000/newProducts");
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const UbdateNewCount=createAsyncThunk("Product/UbdateNewCount",async({id,count},thunkApi)=>{
    const {rejectWithValue} = thunkApi;
    try {
        const res=await axios.patch(`http://localhost:9000/newProducts/${id}`,{count})
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const ProductSlice = createSlice({
    name:"Product",
    initialState:{ product:{} , error:null, newProduct:{} },
    extraReducers:(builder) => {
        builder
            .addCase(GetProduct.fulfilled, (state, action) => {
                state.product = action.payload;
            })
            .addCase(GetProduct.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(UbdateCount.fulfilled , (state , action)=>{
                const index=state.product.findIndex((item)=>item.id===action.payload.id)
                state.product[index]=action.payload
            })
            .addCase(DeleteProduct.fulfilled, (state,action)=>{
                state.newProduct=state.newProduct.filter((item)=>item.id !== action.payload)
            })
            .addCase(AddProduct.fulfilled, (state,action)=>{
                state.newProduct.push(action.payload);
            })
            .addCase(GetnewProducts.fulfilled, (state,action)=>{
                state.newProduct=action.payload;
            })
            .addCase(UbdateNewCount.fulfilled,(state,action)=>{
                const index = state.newProduct.findIndex((item)=>item.id===action.payload.id)
                state.newProduct[index]=action.payload
            })
    },
})

export default ProductSlice.reducer;