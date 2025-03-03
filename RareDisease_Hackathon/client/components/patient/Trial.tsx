import React, { useState } from "react";

export const Trial = () => {
    return (
        <div>
            <h1 className="mt-1 text-xl font-bold">
            Clinical Trial: <span className="text-gray-700">NCT05794139</span> <pre>
            Location: <span className= "text-gray-700"> San Diego, California, United States, 92120  </span></pre>
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
                <div className="p-4 text-center rounded-md bg-orange-400 w-1/3 mx-2">
                    <h6 className="font-semibold">Phase 3</h6>
                    <p>New Dose</p>
                </div>
                </div>
            </div>
            </h1>
        
            <div className="bg-gray-200 p-4 mt-4 shadow-md rounded-md">
            <h5 className="font-bold">  Contact Information</h5> 
                <p className="mt-2"><b><i>Company Name:</i></b> NMD Pharma A/S </p>
                <p className="mt-2"><b><i>Investigator Name:</i></b> Anna Hathway</p>
                <p className="mt-2"><b><i>Investigator Contact:</i></b> +1 (567)576-8790</p>
                <p className="mt-2"><b><i>Physician Name:</i></b> Michael Chris</p>
            </div>
            <div className="bg-gray-200 p-4 mt-4 shadow-md rounded-md">
            <h5 className="font-bold">Medication</h5>
                <p className="mt-5"><b><i>DrugName : </i></b> NMD670 <br /> </p>
                <p className="mt-4"><b><i>Phase 1:</i></b> NMD670 <br /> &emsp; &emsp; &emsp; Vutrisiran (ALN-TTRsc02) <br /> &emsp; &emsp; &emsp; ganaxolone </p>
                <p className="mt-4"><b><i>Phase 2:</i></b> NMD671 <br /> &emsp; &emsp; &emsp; ARO-APOC3 (Plozasiran) </p>
            </div>
        </div>
    )
}