import React, { useState } from "react";

export const Testlogin = () => {
  const [activeTab, setActiveTab] = useState<"investigator" | "patient">("investigator");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in as", activeTab, "with", formData);
    try {
      // **Making the fetch request to submit the login data**
      const response = await fetch("/login");

      // **Check if the login was successful**
      if (response.ok) {
        // **Redirect based on the role (investigator or patient)**
        if (activeTab === "patient") {
          window.location.href = "/patient"; // Redirect to patient 
        } else {
          window.location.href = "/investigator"; // Redirect to investigator 
        }
      } else {
        setStatusMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again.");
    }
  };
 
  return (
   
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
    >
      <nav className="bg-gray-800 bg-opacity-75 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-bold">My ZebraHub</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    <div className="flex justify-center items-center min-h-screen bg-gray-200" style={{
          backgroundImage: `url(https://i.imgur.com/9UUV0NL.png)`,
          backgroundSize: "cover"
        }}>
      <div className="bg-gray-300 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">Login As</h2>
        
        <div className="flex mb-4">
          <button
            className={`flex-1 p-2 border rounded-t-md ${
              activeTab === "investigator" ? "bg-gray-500 text-white font-semibold" : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab("investigator")}
          >
            Investigator
          </button>
          <button
            className={`flex-1 p-2 border ${
              activeTab === "patient" ? "bg-gray-500 text-white font-semibold" : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab("patient")}
          >
            Patient
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="test-lg font-semibold text-center">
            {activeTab == "investigator" ? "InvestigatorLogin" : "PatientLogin" }
          </h2>

          <div>
            <label className="block text-sm">Username</label>
            <input
              type="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>

          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-700"
          >
            Submit
          </button>
        </form>
      <div className="text-center mt-4 text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
          <p className="mt-2">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </div>
        </div>
      </div>
    </div>
 
  );
};

export default Testlogin;


