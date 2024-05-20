import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

function NavBar() {

  return (
    <div className="flex">
    <div className="flex-1 min-h-[500px]">
      <Topbar/>
      <div className="flex justify-between  flex-wrap mt-2">
        <Outlet />
      </div>

    </div>
  </div>
  );
}

export default NavBar;
