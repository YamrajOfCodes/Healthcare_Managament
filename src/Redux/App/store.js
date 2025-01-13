import { configureStore } from "@reduxjs/toolkit";
import PatientSice from "../Slices/Patient/patientSlices"
import doctorSlice from "../Slices/Admin/adminSlice"

export const store = configureStore({
    reducer:{
      Patient: PatientSice,
      Doctor: doctorSlice
    }
})
 