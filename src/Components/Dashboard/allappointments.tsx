"use client"
import { getWaitingroom } from '@/Redux/Slices/Admin/adminSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const allappointments = () => {
    const dispatch = useDispatch();
  const { waitingroom } = useSelector((state)=>state.Doctor);
  console.log("waitingroom",waitingroom[0]);
  

  useEffect(()=>{
    dispatch(getWaitingroom());
  },[]);
  return (
    <div>
      
    </div>
  )
}

export default allappointments
