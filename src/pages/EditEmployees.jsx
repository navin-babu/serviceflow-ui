import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/AdminPages.css";

function EditEmployees() {
  const { employees, updateEmployee, removeEmployee } = useOutletContext();
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({ name: "", email: "", team: "On-site" });

  const startEdit = (employee) => {
    setEditingId(employee.id);
    setDraft({
      name: employee.name,
      email: employee.email,
      team: employee.team,
    });
  };

  const saveEdit = () => {
    updateEmployee(editingId, draft);
    setEditingId(null);
  };

  return (
    <table className="dataTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Team</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>
              {editingId === employee.id ? (
                <input className="textInput" value={draft.name} onChange={(e) => setDraft((prev) => ({ ...prev, name: e.target.value }))} />
              ) : (
                employee.name
              )}
            </td>
            <td>
              {editingId === employee.id ? (
                <input className="textInput" value={draft.email} onChange={(e) => setDraft((prev) => ({ ...prev, email: e.target.value }))} />
              ) : (
                employee.email
              )}
            </td>
            <td>
              {editingId === employee.id ? (
                <select className="selectInput" value={draft.team} onChange={(e) => setDraft((prev) => ({ ...prev, team: e.target.value }))}>
                  <option value="On-site">On-site</option>
                  <option value="Field Service">Field Service</option>
                  <option value="Back Office">Back Office</option>
                </select>
              ) : (
                employee.team
              )}
            </td>
            <td>
              <div className="actionRow">
                {editingId === employee.id ? (
                  <button className="actionBtn" type="button" onClick={saveEdit}>
                    Save
                  </button>
                ) : (
                  <button className="actionBtn" type="button" onClick={() => startEdit(employee)}>
                    Edit
                  </button>
                )}
                <button
                  className="actionBtn dangerBtn"
                  type="button"
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EditEmployees;
