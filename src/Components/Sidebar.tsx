import { useState } from "react";
import {Home,Calendar,Users,FileText,Settings, Menu,X} from "lucide-react"
import Header from "./Header";
import Card from "./Card"
import Showdashboard from "./Showdashboard";
import DashCalender from "./Dashboard/DashCalender";
import OTD_Billing from "./Dashboard/OTD_Billing";
import Appontment from "./Appontment";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

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

        {/* Sidebar */}
        <div
          className={`absolute -top-16 md:top-0 md:relative z-40 h-full w-60 transform transition-transform duration-300 ease-in-out  
           ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <div className="h-[100vh] bg-white/40 backdrop-blur-xl shadow-xl border-r border-white/20 p-6 overflow-y-auto">
            {/* Sidebar Content */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r fromgreene-600 to-green-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative h-10 w-10 bg-gradient-to-br from-green-600 to-green-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
              </div>
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">Healthcare</h2>
              <X onClick={toggleSidebar} className="md:hidden ml-auto cursor-pointer hover:text-blue-600 transition-colors" />
            </div>

            {/* Navigation */}
            <nav className="space-y-4">
              {navigationItems.map(({ icon: Icon, label, badge }) => (
                <button
                  key={label}
                  onClick={() => setActiveItem(label)}
                  className={`w-full group flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 
                           ${activeItem === label 
                             ? 'bg-gradient-to-r from-green-600 to-green-700 shadow-lg shadow-blue-500/30' 
                             : 'hover:bg-blue-50'}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${activeItem === label ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'}`} />
                    <span className={`font-medium ${activeItem === label ? 'text-white' : 'text-gray-700 group-hover:text-blue-600'}`} onClick={toggleSidebar}>
                      {label}
                    </span>
                  </div>
                  {badge && (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium 
                                 ${activeItem === label 
                                   ? 'bg-white/20 text-white' 
                                   : 'bg-blue-100 text-blue-600'}`}>
                      {badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4 bg-white/20 lg:p-4">
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
