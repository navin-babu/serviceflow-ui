import React from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/AdminPages.css";

function RepairRequests() {
  const { repairRequests, updateRepairStatus } = useOutletContext();

  return (
    <table className="dataTable">
      <thead>
        <tr>
          <th>Request ID</th>
          <th>Customer</th>
          <th>Issue</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {repairRequests.map((request) => (
          <tr key={request.id}>
            <td>#{request.id}</td>
            <td>{request.customer}</td>
            <td>{request.issue}</td>
            <td>
              <span className="statusPill">{request.status}</span>
            </td>
            <td>
              <select
                className="selectInput"
                value={request.status}
                onChange={(e) => updateRepairStatus(request.id, e.target.value)}
              >
                <option value="OPEN">Open</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="DONE">Done</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RepairRequests;
