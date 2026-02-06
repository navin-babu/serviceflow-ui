import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function AdminDash() {
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("Data in dash:", user);
    
    if (!user) {
        return <Navigate to="/login"/>
    }
  return (
    <div>
        <h1>Admin Dashboard</h1>
        <h3>Welcome {user.name}</h3>
    </div>
  )
}

export default AdminDash