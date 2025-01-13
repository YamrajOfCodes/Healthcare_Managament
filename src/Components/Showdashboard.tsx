import React, { useEffect, useState } from 'react';
import { Search, Filter, Plus, UserPlus } from 'lucide-react';
import ProfileCard from './Profile';
import { getallPatients } from '@/Redux/Slices/Patient/patientSlices';
import { useDispatch, useSelector } from 'react-redux';

const Showdashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getallPatients())
  },[])
  

  const {allpatients} = useSelector((state)=>state.Patient)
  console.log("data",allpatients)
  

  

  const profiles = [
    {
      id: 1,
      name: "MR Shounak Dey - VJNSPTH",
      age: 41,
      gender: "Male",
      address: "Mahindra, flat no 4, Pimpri, PUNE",
      phone: "+91 2323 323 3232",
      addedBy: "super admin by no doctor",
      visits: 9,
      entryTime: "1:00pm",
      waitingTime: "2 mins",
    },
    {
      id: 2,
      name: "MR Shounak Dey - VJNSPTH",
      age: 41,
      gender: "Male",
      address: "Mahindra, flat no 4, Pimpri, PUNE",
      phone: "+91 2323 323 3232",
      addedBy: "super admin by no doctor",
      visits: 9,
      entryTime: "1:00pm",
      waitingTime: "2 mins",
    },
    {
      id: 3,
      name: "MR Shounak Dey - VJNSPTH",
      age: 41,
      gender: "Male",
      address: "Mahindra, flat no 4, Pimpri, PUNE",
      phone: "+91 2323 323 3232",
      addedBy: "super admin by no doctor",
      visits: 9,
      entryTime: "1:00pm",
      waitingTime: "2 mins",
    },
    // ... other profiles
  ];

  return (
    <div className="h-full">
      <div className="h-full rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-xl">
        {/* Header Actions  */}
        {/* <div className="p-4 md:p-6 border-b border-gray-100">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    
    Add Patient Button 
    <button className="relative group w-auto">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 
                   rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r 
                   from-emerald-500 to-green-600 rounded-xl text-white">
        <UserPlus className="h-5 w-5" />
        <span className="text-sm font-medium hidden md:block">Add to F/W Patient</span>
        <span className="text-xs md:hidden">Add Patient</span>  Smaller label for mobile 
      </div>
    </button>

    Filter Button
    <button
      onClick={() => setIsFilterOpen(!isFilterOpen)}
      className="px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium 
               flex items-center gap-2 transition-all duration-300 group w-auto"
    >
      <Filter className="h-5 w-5 text-gray-500 group-hover:text-blue-500" />
      <span className="hidden md:block">Filter</span>
      <span className="text-xs md:hidden">Filters</span> Smaller label for mobile 
    </button>
  </div>

   Search Section 
  <div className="mt-4 flex flex-col md:flex-row gap-4">
    <div className="relative flex-grow group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                   rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 
                         group-hover:text-blue-500 transition-colors" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search patients..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-100 bg-white/50 
                   backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                   focus:border-blue-500 transition-all duration-300
                   group-hover:shadow-lg group-hover:bg-white/80"
        />
      </div>
    </div>

    Filter Text Button
     <button className="relative group w-auto mt-4 md:mt-0">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 
                   rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r 
                   from-blue-500 to-cyan-600 rounded-xl text-white">
        <Filter className="h-5 w-5" />
        <span className="text-sm font-medium hidden md:block">Filter Text</span>
        <span className="text-xs md:hidden">Filters</span>  Smaller label for mobile 
      </div>
    </button> 
  </div>
</div> */}


        {/* Cards Container */}
        <div className="p-6">
        <p className="text-sm sm:text-lg border font-semibold text-black sm:text-white bg-white/40 w-fit rounded-lg px-6 py-2 mb-4 transition-colors duration-300">
    Recently Added
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
    {allpatients?.[0]?.slice(-4).map((profile) => (
      <div
        key={profile.id}
        className="groupshadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105  cursor-pointer flex justify-center sm:justify-start"
      >
        <ProfileCard {...profile} entryTime={profile.created_at} />
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  );
};

export default Showdashboard;