import * as React from 'react';
import {Box ,Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import Create from './Create';



export default function Home() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
  {/* Header */}
  <div className="bg-gradient-to-r from-sky-700 to-slate-800 text-white py-6 shadow-md">
    <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-3xl font-bold text-center sm:text-left mb-4 sm:mb-0">
        🧑‍💼 Employer Dashboard
      </h1>
      <Link
        to="/"
        className="bg-white text-sky-700 font-semibold px-5 py-2 rounded-md border border-sky-700 hover:bg-sky-100 transition duration-300"
      >
        Home
      </Link>
    </div>
  </div>

  {/* Tabs Container */}
  <div className="max-w-4xl mx-auto px-4 mt-10">
    <div className="bg-slate-50 shadow-xl rounded-xl p-6 border border-gray-200">
      <TabContext value={value}>
        <div className="border-b border-slate-300 mb-4">
          <TabList onChange={handleChange} aria-label="dashboard tabs">
            <Tab
              label="Create Post"
              value="1"
              className="text-sky-700 font-medium"
            />
          </TabList>
        </div>
        <TabPanel value="1">
          <Create />
        </TabPanel>
      </TabContext>
    </div>
  </div>
</>
  );
}