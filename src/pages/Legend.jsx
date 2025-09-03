import React from "react";
import Sidebar from "../components/sections/sidebar"
import { Outlet } from "react-router-dom";


const Legend = () => {
  return (
    <div className="flex gap-6">
      <Sidebar/>
      <div className="flex-1">
          <Outlet />
      </div>
    </div>
  )
};

export default Legend;
