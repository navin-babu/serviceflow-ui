import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../styles/AdminPages.css";

function AddEmployee() {
  const { addEmployee } = useOutletContext();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    team: "On-site",
  });

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addEmployee(form);
    navigate("/admin/edit-employees");
  };

  return (
    <form className="formGrid" onSubmit={onSubmit}>
      <input
        className="textInput"
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Employee name"
        required
      />
      <input
        className="textInput"
        name="email"
        type="email"
        value={form.email}
        onChange={onChange}
        placeholder="Employee email"
        required
      />
      <select className="selectInput" name="team" value={form.team} onChange={onChange}>
        <option value="On-site">On-site</option>
        <option value="Field Service">Field Service</option>
        <option value="Back Office">Back Office</option>
      </select>
      <button className="primaryBtn" type="submit">
        Save Employee
      </button>
    </form>
  );
}

export default AddEmployee;
