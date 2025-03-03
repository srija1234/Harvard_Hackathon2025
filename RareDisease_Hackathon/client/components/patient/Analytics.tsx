import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useQuery } from '@tanstack/react-query';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Analytics: React.FC = () => {

  const chartData = {
    labels: ["100mg", "125mg", "150mg", "200mg", "250mg", "350mg"],
    datasets: [
      {
        label: "Mild Symptoms",
        data: [56, 78, 120, 98, 125, 130],
        backgroundColor: "rgba(215, 131, 5, 0.6)",
        // borderColor: "rgba(75, 192, 192, 0.6)",
        // fill : true,
        // tension:0.1,

      },
      {
      label: "Moderate Symptoms",
      data: [115, 125, 220, 290, 320],
      backgroundColor: "rgba(23, 79, 222, 0.6)",
      // borderColor:"rgba(255, 159, 64, 0.6)",
      //  fill : false,
      //  tension:0.1,
      },
      {
        label: "Severe Symptoms",
        data: [167, 230, 305, 130],
        backgroundColor: "rgba(236, 45, 7, 0.6)",
        // borderColor: "rgba(255, 99, 132, 0.6)",
        // fill : false,
        // tension:0.1,
      },
      
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Drug Usage vs. Symptoms Severity",
      },
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h1 className="text-lg font-bold text-center mb-4">Clinical Trial Dashboard</h1>
      <Bar data={chartData} options={options} />
    </div>
  );
};
