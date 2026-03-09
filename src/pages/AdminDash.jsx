import React from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/AdminPages.css";

function AdminDash() {
  const { summary } = useOutletContext();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h3>Welcome {user?.name || "Admin"}</h3>
      <p>Track and manage daily service operations from one place.</p>

      <div className="cardsGrid">
        <div className="metricCard">
          <h4>Total Users</h4>
          <p>{summary.usersCount}</p>
        </div>
        <div className="metricCard">
          <h4>Total Employees</h4>
          <p>{summary.employeesCount}</p>
        </div>
        <div className="metricCard">
          <h4>Open Repairs</h4>
          <p>{summary.openRepairs}</p>
        </div>
        <div className="metricCard">
          <h4>Completed Repairs</h4>
          <p>{summary.completedRepairs}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
