import React from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/AdminPages.css";

function Report() {
  const { summary, users, employees, repairRequests } = useOutletContext();

  return (
    <div>
      <div className="cardsGrid">
        <div className="metricCard">
          <h4>Users</h4>
          <p>{summary.usersCount}</p>
        </div>
        <div className="metricCard">
          <h4>Employees</h4>
          <p>{summary.employeesCount}</p>
        </div>
        <div className="metricCard">
          <h4>Open Workload</h4>
          <p>{summary.openRepairs}</p>
        </div>
      </div>

      <div className="reportBox">
        <h4>Quick Snapshot</h4>
        <p>Most recent user: {users[users.length - 1]?.name || "N/A"}</p>
        <p>Most recent employee: {employees[employees.length - 1]?.name || "N/A"}</p>
        <p>Total repair tickets tracked: {repairRequests.length}</p>
      </div>
    </div>
  );
}

export default Report;
