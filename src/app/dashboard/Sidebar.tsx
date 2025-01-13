import { useState } from "react";
import {Home,Calendar,Users,FileText,Settings, Menu,X} from "lucide-react"
import Header from "@/Components/Header";
import Card from "@/Components/Card"
import Showdashboard from "@/Components/Showdashboard";
import DashCalender from "@/Components/Dashboard/DashCalender";
import OTD_Billing from "@/Components/Dashboard/OTD_Billing";
import Appontment from "@/Components/Appontment";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [patientOpen, setPatientOpen] = useState(false); 

  const toggleSidebar = () => setIsOpen(!isOpen);
   

  const navigationItems = [
    { icon: Home, label: 'Home', badge: 3 },
    { icon: Calendar, label: 'Calendar', badge: '2' },
    { icon: Users, label: 'Patients', badge: 12 },
    { icon: FileText, label: 'Records', badge: null },
    { icon: Settings, label: 'Settings', badge: null },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 bg-webbg md:bg-gradient-to-r from-orange-600 to-orange-400">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-[0.15] bg-repeat bg-center"></div>
        <div className="absolute top-0 left-0 right-0 h-96 md:bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      </div>

      {/* Header */}
      <Header />

      <div className="relative flex w-full">
        {/* Sidebar Toggle Button */}
       {
        isOpen?   <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg
                   hover:shadow-xl transition-all duration-300 hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button> :  <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg
                   hover:shadow-xl transition-all duration-300 md:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button> 
       }

   
  return (
    <div
      className={`absolute -top-16 md:top-0 md:relative z-40 h-full w-72 transform transition-transform duration-300 ease-in-out 
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <div className="h-[100vh] bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300 text-white p-6 overflow-y-auto rounded-lg shadow-xl">
        {/* Sidebar Content */}
        <div className="flex items-center gap-3 mb-8">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative h-12 w-12 bg-gradient-to-br from-green-600 to-green-300 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">H</span>
            </div>
          </div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">Healthcare</h2>
          <X onClick={toggleSidebar} className="md:hidden ml-auto cursor-pointer hover:text-blue-200 transition-colors" />
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
          {navigationItems.map(({ icon: Icon, label, badge }) => (
            <div key={label}>
              <button
                onClick={() => {
                  setActiveItem(label);
                  if (label === "Patient") setPatientOpen(!patientOpen); // Toggle patient sub-menu
                }}
                className={`w-full group flex items-center justify-between p-4 rounded-lg transition-all duration-300 
                            ${activeItem === label 
                              ? 'bg-gradient-to-r from-green-600 to-green-700 shadow-lg shadow-blue-500/30' 
                              : 'hover:bg-blue-600 hover:scale-105 transform'}`}
              >
                <div className="flex items-center gap-4">
                  <Icon className={`w-6 h-6 ${activeItem === label ? 'text-white' : 'text-gray-300 group-hover:text-white'}`} />
                  <span className={`font-medium ${activeItem === label ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                    {label}
                  </span>
                </div>
                {badge && (
                  <span className={`px-3 py-1 rounded-full text-xs font-medium 
                               ${activeItem === label 
                                 ? 'bg-white/20 text-white' 
                                 : 'bg-blue-100 text-blue-600'}`}>
                    {badge}
                  </span>
                )}
              </button>

              {/* Sub-menu for Patient */}
              {label === "Patient" && patientOpen && (
                <div className="ml-6 space-y-2 mt-2">
                  <button
                    onClick={() => setActiveItem("Patient Info")}
                    className={`w-full group flex items-center justify-between p-3 rounded-lg transition-all duration-300 
                               ${activeItem === "Patient Info" 
                                 ? 'bg-gradient-to-r from-green-600 to-green-700 shadow-lg shadow-blue-500/30' 
                                 : 'hover:bg-blue-500'}`}
                  >
                    <span className="font-medium text-gray-300 group-hover:text-white">Patient Info</span>
                  </button>
                  <button
                    onClick={() => setActiveItem("Medical History")}
                    className={`w-full group flex items-center justify-between p-3 rounded-lg transition-all duration-300 
                               ${activeItem === "Medical History" 
                                 ? 'bg-gradient-to-r from-green-600 to-green-700 shadow-lg shadow-blue-500/30' 
                                 : 'hover:bg-blue-500'}`}
                  >
                    <span className="font-medium text-gray-300 group-hover:text-white">Medical History</span>
                  </button>
                  <button
                    onClick={() => setActiveItem("Appointments")}
                    className={`w-full group flex items-center justify-between p-3 rounded-lg transition-all duration-300 
                               ${activeItem === "Appointments" 
                                 ? 'bg-gradient-to-r from-green-600 to-green-700 shadow-lg shadow-blue-500/30' 
                                 : 'hover:bg-blue-500'}`}
                  >
                    <span className="font-medium text-gray-300 group-hover:text-white">Appointments</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
{/* }; */}

export default Sidebar;

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4 bg-white/20 ">
          {activeItem === 'Home' && (
            <>
              <div className="cards bg-white/20 h-[auto] flex justify-center  gap-5 sm:flex-row flex-wrap rounded-md shadow-lg p-4">
                <Card width="50%" status="Waiting" number={5} />
                <Card width="30%" status="New" number={4} />
                <Card width="30%" status="Follow-up" number={8} />
              </div>
              <div className="dash w-full">
                <Showdashboard />
              </div>
            </>
          )}
          {activeItem === 'Calendar' && <DashCalender />}
          {activeItem !== 'Home' && activeItem !== 'Calendar' && <Appontment />}
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-30"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
