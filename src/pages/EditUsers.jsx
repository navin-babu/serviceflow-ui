import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/AdminPages.css";

function EditUsers() {
  const { users, updateUser, removeUser } = useOutletContext();
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({ name: "", username: "", email: "", role: "CUSTOMER" });

  const startEdit = (user) => {
    setEditingId(user.id);
    setDraft({
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  };

  const saveEdit = () => {
    updateUser(editingId, draft);
    setEditingId(null);
  };

  return (
    <table className="dataTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              {editingId === user.id ? (
                <input className="textInput" value={draft.name} onChange={(e) => setDraft((prev) => ({ ...prev, name: e.target.value }))} />
              ) : (
                user.name
              )}
            </td>
            <td>
              {editingId === user.id ? (
                <input className="textInput" value={draft.username} onChange={(e) => setDraft((prev) => ({ ...prev, username: e.target.value }))} />
              ) : (
                user.username
              )}
            </td>
            <td>
              {editingId === user.id ? (
                <input className="textInput" value={draft.email} onChange={(e) => setDraft((prev) => ({ ...prev, email: e.target.value }))} />
              ) : (
                user.email
              )}
            </td>
            <td>
              {editingId === user.id ? (
                <select className="selectInput" value={draft.role} onChange={(e) => setDraft((prev) => ({ ...prev, role: e.target.value }))}>
                  <option value="CUSTOMER">Customer</option>
                  <option value="TECHNICIAN">Technician</option>
                  <option value="ADMIN">Admin</option>
                </select>
              ) : (
                user.role
              )}
            </td>
            <td>
              <div className="actionRow">
                {editingId === user.id ? (
                  <button className="actionBtn" type="button" onClick={saveEdit}>
                    Save
                  </button>
                ) : (
                  <button className="actionBtn" type="button" onClick={() => startEdit(user)}>
                    Edit
                  </button>
                )}
                <button
                  className="actionBtn dangerBtn"
                  type="button"
                  onClick={() => removeUser(user.id)}
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

export default EditUsers;
