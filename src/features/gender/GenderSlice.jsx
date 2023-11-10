import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetGender = createAsyncThunk("gender", async (_, thunkAPI) => {
    try {
        const res = await axios.get("http://localhost:8080/gender")
        return res.data
    }
    catch {
        return thunkAPI.rejectWithValue()
    }
})

export const selectedGenders = state => state.gender.gender

const Genderlice = createSlice({
    name: "gender",
    initialState: {
        gender: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetGender.pending, (state) => {
                state.loading = true
            })
            .addCase(GetGender.fulfilled, (state, action) => {
                state.loading = false
                state.error = ""
                state.gender = action.payload
            })
            .addCase(GetGender.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

    }
})

export default Genderlice.reducer