import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import { addPatientAppointmentAPI, CompletePatientAPI, deletePatientsAPI, getPatientAppointmentAPI, getPatients, getPatientsAPI, PatientAPI, patientPrescAPI, updatePatientsAPI } from "../../../APIS/Patient/PatientAPI"
import toast from "react-hot-toast"


export const RegisterPatient = createAsyncThunk("register",async(data)=>{
  try {
    console.log(data)
    const response = await PatientAPI(data)
    if(response.status == 200){
        toast.success("patient registration successfull")
        return response.data
    }else{
        return response.data
    }
  } catch (error) {
   console.log(error)
  }
})

export const getallPatients = createAsyncThunk("getallpatients",async()=>{
    try {
        const response = await getPatientsAPI()
        if(response.status==200){
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
})

export const Addappointment = createAsyncThunk("addappointment",async(data)=>{
    try {
        const response  = await addPatientAppointmentAPI(data);
        if(response.status === 200){
            return response.data
        }else{
            console.log("error while appointment adding",response)
        }
    } catch (error) {
        console.log(error);
        
    }
})

export const getAppointments = createAsyncThunk("getallappointments",async()=>{
    try {
        const response = await getPatientAppointmentAPI();
        if(response.status==200){
            return response.data;
        }else{
            console.log("error while fetching an appointments")
        }
    } catch (error) {
     console.log(error);
             
    }
})

export const patientPrescription = createAsyncThunk("patientsprescription",async()=>{
    try {
        const response = await patientPrescAPI();
        if(response.status==200){
            return response.data;
        }else{
            console.log("error while fetching an appointments")
        }
    } catch (error) {
     console.log(error);
             
    }
})

export const deletePatient = createAsyncThunk("deletepatient",async(data)=>{
    try {
        const response = await deletePatientsAPI(data)
      
        
        if(response.status==200){
            toast.success("patient is deleted");
            return "patient is deleted"
        }else{
            toast.success("patient is deleted");
            return "patient is deleted"
        }
    } catch (error) {
        console.log(error)
    }
})

export const updatePatient = createAsyncThunk("updatepatient",async(data)=>{
    try {
        const response = await updatePatientsAPI(data)
    
        
        if(response.status==200){
            toast.success("patient is updated");
            return "patient is updated"
        }else{
            toast.success("patient is updated");
            return "patient is updated"
        }
    } catch (error) {
        console.log(error)
    }
})



export const completePatient = createAsyncThunk("completePatient",async(data)=>{
    try {
        const response = await CompletePatientAPI(data)
        
        if(response.status==200){
            toast.success("patient consultation is completed");
            return response.data
        }else{
            toast.success("patient consultation is not completed");
        }
    } catch (error) {
        console.log(error)
    }
})












export const PatientSlice = createSlice({
    name:"Patientslice",
    initialState:{
        registerpatient:[],
        allpatients:[],
        deletepatient:[],
        update:[],
        appointment:[],
        getappointments:[],
        prescriptions:[],
        complete:[],
        error:null,
        loader:false
    },
    extraReducers:(builders)=>{
        builders.addCase(RegisterPatient.pending,(state)=>{
            state.loader = true
        })
        .addCase(RegisterPatient.fulfilled,(state,action)=>{
            state.loader = false;
            state.registerpatient = [action.payload]
        })
        .addCase(RegisterPatient.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })

        // getpatientsdata

        builders.addCase(getallPatients.pending,(state)=>{
            state.loader = true
        })
        .addCase(getallPatients.fulfilled,(state,action)=>{
            state.loader = false;
            state.allpatients = [action.payload]
        })
        .addCase(getallPatients.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })
     
         // deletepatient

         
        builders.addCase(deletePatient.pending,(state)=>{
            state.loader = true
        })
        .addCase(deletePatient.fulfilled,(state,action)=>{
            state.loader = false;
            state.deletepatient = [action.payload]
        })
        .addCase(deletePatient.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })

        // addappointments

        builders.addCase(Addappointment.pending,(state)=>{
            state.loader = true
        })
        .addCase(Addappointment.fulfilled,(state,action)=>{
            state.loader = false;
            state.appointment = [action.payload]
        })
        .addCase(Addappointment.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })

        // getallappointments

        builders.addCase(getAppointments.pending,(state)=>{
            state.loader = true
        })
        .addCase(getAppointments.fulfilled,(state,action)=>{
            state.loader = false;
            state.getappointments = [action.payload]
        })
        .addCase(getAppointments.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })

        //pateint Prescriptions

        builders.addCase(patientPrescription.pending,(state)=>{
            state.loader = true
        })
        .addCase(patientPrescription.fulfilled,(state,action)=>{
            state.loader = false;
            state.prescriptions = [action.payload]
        })
        .addCase(patientPrescription.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })


        
        builders.addCase(updatePatient.pending,(state)=>{
            state.loader = true
        })
        .addCase(updatePatient.fulfilled,(state,action)=>{
            state.loader = false;
            state.update = [action.payload]
        })
        .addCase(updatePatient.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })



        builders.addCase(completePatient.pending,(state)=>{
            state.loader = true
        })
        .addCase(completePatient.fulfilled,(state,action)=>{
            state.loader = false;
            state.complete = [action.payload]
        })
        .addCase(completePatient.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })


    }

})











export default PatientSlice.reducer