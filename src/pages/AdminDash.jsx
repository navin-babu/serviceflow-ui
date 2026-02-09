import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import { Children } from 'react';

function AdminDash() {
    const sideBarItems = [
      { label: "Dashboard", icon: "fa-solid fa-grip" },
      { label: "Repair Request", icon: "fa-solid fa-screwdriver-wrench" },

      {
        label: "Add User",
        icon: "fa-solid fa-user-plus",
        path: "/admin/add-user",
      },
      {
        label: "Edit Users",
        icon: "fa-solid fa-user-pen",
        path: "/admin/edit-user",
      },

      {
        label: "Add Employee",
        icon: "fa-solid fa-user-plus",
        path: "/admin/add-employee",
      },
      {
        label: "Edit Employees",
        icon: "fa-solid fa-user-pen",
        path: "/admin/edit-employee",
      },

      { label: "Report", icon: "fa-solid fa-book" },
    ];

    const user = JSON.parse(localStorage.getItem("user"));

    console.log("Data in dash:", user);
    
    if (!user) {
        return <Navigate to="/login"/>
    }
  return (
    <div className="page-layout">
      <Sidebar items={sideBarItems} />
      <div className="page-content">
        <h1>Admin Dashboard</h1>
        <h3>Welcome {user.name}</h3> 
      </div>
    </div>
  );
}

export default AdminDash