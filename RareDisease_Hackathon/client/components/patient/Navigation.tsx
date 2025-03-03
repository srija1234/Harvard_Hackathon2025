import React from "react";

export const Navigation = () => {
    return (
        <nav className="bg-blue-300 p-4 flex justify-between items-center">
            <div className="flex space-x-6">
            <a href="#" className="text-white font-semibold hover:underline">Home</a>
            <a href="#" className="text-white font-semibold hover:underline">Trial Results</a>
            <a href="#" className="text-white font-semibold hover:underline">Notifications</a>
            </div>
            <div className="text-white font-semibold">Last Login: 12 Feb 2025 10:00 AM</div>
            <a href="#" className="text-white font-semibold hover:underline">Logout</a>
        </nav>
    )
}