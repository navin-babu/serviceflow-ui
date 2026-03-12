import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../styles/AdminPages.css";

function AddUser() {
  const { addUser } = useOutletContext();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    role: "CUSTOMER",
  });

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // addUser(form);
    // navigate("/admin/edit-users");
    try {
      const res = await fetch("http://localhost:8080/api/auth/add");
      
    } catch (error) {
      console.log(`Error Adding User: ${error}`)
    }
  };

  return (
    <form className="formGrid" onSubmit={onSubmit}>
      <input
        className="textInput"
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Full name"
        required
      />
      <input
        className="textInput"
        name="username"
        value={form.username}
        onChange={onChange}
        placeholder="Username"
        required
      />
      <input
        className="textInput"
        name="email"
        type="email"
        value={form.email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <select className="selectInput" name="role" value={form.role} onChange={onChange}>
        <option value="CUSTOMER">Customer</option>
        <option value="TECHNICIAN">Technician</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button className="primaryBtn" type="submit">
        Save User
      </button>
    </form>
  );
}

export default AddUser;
