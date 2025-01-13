"use client";
import { useState, useEffect } from "react";
import { Presentation, Printer } from "lucide-react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { patientPrescription } from "@/Redux/Slices/Patient/patientSlices";

const Prescription = () => {
let [prescription, setPrescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { prescriptions } = useSelector((state)=>state.Patient);
  const { id } = useParams();

      const stringdata = prescriptions[0]?.prescriptions[0];
      let dob = (stringdata?.appointment?.patient.dob.slice(0,4));
      
      
      

  prescription = prescriptions[0]?.prescriptions?.find((element)=>{
      if(element.appointment_id == id){
        return element.prescription_details
      }
    
  })

  let appointmentData;
  
   if(prescription){
     appointmentData = JSON.parse(prescription?.prescription_details);
    // console.log(appointmentData);
   }
    
  

  useEffect(()=>{
   dispatch(patientPrescription());
  },[])

  setTimeout(() => {
    setLoading(false)
  }, 2000);

 
 
  
  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!prescription) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No prescriptions found.
      </div>
    );
  }

 

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-[800px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative bg-emerald-100 p-8">
          <div className="flex items-start gap-8">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-emerald-200 rounded-full"></div>
            </div>
            <div className="flex-grow">
              <h1 className="text-xl font-bold text-gray-800">
                Digitech <span className="text-emerald-500">CHOICE</span>{" "}
                CLINIC
              </h1>
              <div className="mt-1 flex justify-between">
               <div>
               <h2 className="text-lg font-semibold text-gray-800">
                 Dr {appointmentData["Doctor Name"]} </h2>
               </div>
               <div>
                <p><strong>Phone</strong>: 913454456567</p>
               </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 pt-5">
          {/* Patient Information */}
          <div className="space-y-4 mb-8">
  {/* Flex Container for Single-Line Fields */}
  <div className="flex flex-wrap md:flex-nowrap gap-4">
    {/* Name of Patient */}
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-500">
        NAME OF PATIENT
      </label>
      <div className="mt-1 p-2 w-full bg-emerald-50 rounded">
        {appointmentData["Patient Name"]}
      </div>
    </div>

    {/* RUT */}
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-500">
        Apponitmanent Id
      </label>
      <div className="mt-1 p-2 w-full bg-emerald-50 rounded">
        {appointmentData["Appointment ID"]}
      </div>
    </div>

    {/* Age */}
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-500">
        AGE
      </label>
      <div className="mt-1 p-2 w-full bg-emerald-50 rounded">
        { new Date().getFullYear()  - dob}
       </div>
    </div>
  </div>

  {/* Address Field (Full Width) */}
  <div>
    <label className="block text-sm font-medium text-gray-500">
      ADDRESS
    </label>
    <div className="mt-1 p-2 w-full bg-emerald-50 rounded">
      {appointmentData["Patient Address"]}
    </div>
  </div>
</div>


          {/* Diagnosis */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-500">
              {/* DIAGNOSIS */}
            </label>
            <div className="mt-1 p-4 w-full min-h-[80px] bg-white   rounded">
              {/* {prescription["medications"] || "No diagnosis provided"} */}
            </div>
          </div>

          {/* Prescription */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-500">
              {/* PRESCRIPTION */}
            </label>
            <div className="mt-1 p-4 w-full min-h-[80px] rounded ">
              {/* {prescription.instructions} */}
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-5 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-500">
                DATE
              </label>
              <div className="mt-1 p-2 border-b border-gray-300 w-1/2">
               {prescription?.appointment.appointment_date}
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-500">
                Signature
              </label>
              <div className="mt-4 p-2 border-b border-gray-300 w-1/2">
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 pt-8 border-t border-emerald-100 text-center text-gray-600">
            <p className="flex justify-start"><strong>Address</strong>: {appointmentData["Patient Address"]}</p>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white font-semibold px-4 py-1 rounded-md flex gap-0.5 cursor-pointer"
              onClick={handlePrint}
            >
              <Printer className="w-8 h-5" />
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
