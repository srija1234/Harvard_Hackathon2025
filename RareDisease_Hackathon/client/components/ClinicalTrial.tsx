import React, { useState } from "react";

export const ClinicalTrial: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Clinical Trials");

  return (
    <div className="flex h-screen flex-col">
      {/* Header Navigation */}
      <nav className="bg-blue-300 p-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <a href="#" className="text-white font-semibold hover:underline">Home</a>
          <a href="#" className="text-white font-semibold hover:underline">Trail Results</a>
          <a href="#" className="text-white font-semibold hover:underline">Notifications</a>
        </div>
        <div className="text-white font-semibold">Last Login: 12 Feb 2025 10:00 AM</div>
        <a href="#" className="text-white font-semibold hover:underline">Logout</a>
      </nav>

    <div className="flex flex-grow h-full">
      <div className="w-1/4 bg-gray-100 p-4 border-r">
        <ul className="space-y-10">
          {["Daily Check-in", "Clinical Trials", "Appointments", "Analytics"].map((item) => (
            <li
              key={item}
              className={`p-2 rounded cursor-pointer ${
                activeTab === item ? "bg-gray-300 font-semibold" : "bg-pink-200"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
     </div>
     <div className="grid grid-cols-1 gap-6 mt-6">
        <h1 className="mt-1 text-xl font-bold">
          Clinical Trial: <span className="text-gray-700">NCT05794139</span> 
   
          Location: <span> <i className= "text-gray-700"> San Diego, California, United States, 92120  </i></span>
          <div className="bg-gray-100 p-4 mt-4 shadow-md rounded-md">
            <div className="flex justify-around text-lg">
              <span>3 months <i className="bi bi-house"></i></span>
              <span>1 year</span>
              <span>2 years <i className="bi bi-pencil"></i></span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="p-4 text-center rounded-md bg-red-300 w-1/3 mx-2">
                <h6 className="font-semibold">Phase 1</h6>
                <p>General Study</p>
              </div>
              <div className="p-4 text-center rounded-md bg-green-300 w-1/3 mx-2">
                <h6 className="font-semibold">Phase 2</h6>
                <p>Safety</p>
              </div>
              <div className="p-4 text-center rounded-md bg-red-400 w-1/3 mx-2">
                <h6 className="font-semibold">Phase 3</h6>
                <p>New Dose</p>
              </div>
            </div>
          </div>
        </h1>
      
        <div className="bg-gray-200 p-4 mt-4 shadow-md rounded-md">
          <h5 className="font-bold">Contact Information</h5>
            <p className="mt-2"><b><i>Investigator Name:</i></b> Anna Hathway</p>
            <p className="mt-2"><b><i>Investigator Contact:</i></b> +1 (567)576-8790</p>
            <p className="mt-2"><b><i>Physician Name:</i></b> Michael Chris</p>
        </div>
        <div className="bg-gray-200 p-4 mt-4 shadow-md rounded-md">
          <h5 className="font-bold">Medication</h5>
            <p className="mt-4"><b><i>Phase 1:</i></b> NMD670 <br /> Vutrisiran (ALN-TTRsc02) <br /> ganaxolone </p>
            <p className="mt-4"><b><i>Phase 2:</i></b> NMD671 <br /> ARO-APOC3 (Plozasiran) </p>
        </div>
      </div>
              
    </div>
  </div>

);
};
