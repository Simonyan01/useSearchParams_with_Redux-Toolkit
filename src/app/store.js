import { configureStore } from "@reduxjs/toolkit"
import modelReducer from "../features/models/ModelSlice"
import genderReducer from "../features/gender/GenderSlice"

export const store = configureStore({
  reducer: {
    models: modelReducer,
    gender: genderReducer,
  },
})
