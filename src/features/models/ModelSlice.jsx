import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetModels = createAsyncThunk("model", async (_, thunkAPI) => {
    try {
        const res = await axios.get("http://localhost:8080/models")
        return res.data
    }
    catch {
        return thunkAPI.rejectWithValue()
    }
})

export const selectedModels = state => state.models.model

const ModelSlice = createSlice({
    name: "model",
    initialState: {
        model: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetModels.pending, (state) => {
                state.loading = true
            })
            .addCase(GetModels.fulfilled, (state, action) => {
                state.loading = false
                state.error = ""
                state.model = action.payload
            })
            .addCase(GetModels.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

    }
})

export default ModelSlice.reducer