// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import DataTable from "../../UI/DataTable";
import * as XLSX from "xlsx";
import DownloadIcon from "@mui/icons-material/Download";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ); // Example API
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    // Convert data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "UserData");
    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "UserData.xlsx");
  };
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User Data</h1>

        {/* Responsive Button Section */}
        <div className="flex justify-between items-center mb-4">
          <div></div> {/* Empty div to maintain space on the left */}
          <button
            onClick={handleDownload}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 sm:ml-auto"
          >
            <DownloadIcon className="mr-2" />
            Download as Excel
          </button>
        </div>

        {/* Table Component */}
        <DataTable data={data} />
      </div>
    </>
  );
};

export default Home;
