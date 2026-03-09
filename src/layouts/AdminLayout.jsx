import React, { useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import "../styles/AdminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Nila Thomas",
      username: "nila.customer",
      email: "nila@email.com",
      role: "CUSTOMER",
    },
    {
      id: 2,
      name: "Ravi Menon",
      username: "ravi.tech",
      email: "ravi@email.com",
      role: "TECHNICIAN",
    },
  ]);

  const [employees, setEmployees] = useState([
    { id: 1, name: "Karan V", email: "karan@serviceflow.com", team: "On-site" },
    { id: 2, name: "Maya J", email: "maya@serviceflow.com", team: "Field Service" },
  ]);

  const [repairRequests, setRepairRequests] = useState([
    { id: 1001, customer: "Nila Thomas", issue: "AC not cooling", status: "OPEN" },
    { id: 1002, customer: "Rahul Das", issue: "Water leakage", status: "IN_PROGRESS" },
    { id: 1003, customer: "Sonia M", issue: "Noisy motor", status: "DONE" },
  ]);

  const menuItems = [
    { label: "Dashboard", to: "/admin", end: true, icon: "fa-solid fa-grip" },
    {
      label: "Repair Request",
      to: "/admin/repair-requests",
      icon: "fa-solid fa-screwdriver-wrench",
    },
    { label: "Add User", to: "/admin/add-user", icon: "fa-solid fa-user-plus" },
    { label: "Edit Users", to: "/admin/edit-users", icon: "fa-solid fa-user-pen" },
    {
      label: "Add Employee",
      to: "/admin/add-employee",
      icon: "fa-solid fa-user-plus",
    },
    {
      label: "Edit Employees",
      to: "/admin/edit-employees",
      icon: "fa-solid fa-user-pen",
    },
    { label: "Report", to: "/admin/report", icon: "fa-solid fa-book" },
  ];

  const currentLabel =
    menuItems.find((item) => {
      if (item.end) {
        return location.pathname === item.to;
      }
      return location.pathname.startsWith(item.to);
    })?.label || "Dashboard";

  const dataApi = useMemo(
    () => ({
      users,
      employees,
      repairRequests,
      addUser: (payload) => {
        setUsers((prev) => [
          ...prev,
          { id: Date.now(), ...payload },
        ]);
      },
      updateUser: (id, payload) => {
        setUsers((prev) => prev.map((user) => (user.id === id ? { ...user, ...payload } : user)));
      },
      removeUser: (id) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
      },
      addEmployee: (payload) => {
        setEmployees((prev) => [
          ...prev,
          { id: Date.now(), ...payload },
        ]);
      },
      updateEmployee: (id, payload) => {
        setEmployees((prev) =>
          prev.map((employee) => (employee.id === id ? { ...employee, ...payload } : employee)),
        );
      },
      removeEmployee: (id) => {
        setEmployees((prev) => prev.filter((employee) => employee.id !== id));
      },
      updateRepairStatus: (id, status) => {
        setRepairRequests((prev) =>
          prev.map((request) => (request.id === id ? { ...request, status } : request)),
        );
      },
      summary: {
        usersCount: users.length,
        employeesCount: employees.length,
        openRepairs: repairRequests.filter((request) => request.status !== "DONE").length,
        completedRepairs: repairRequests.filter((request) => request.status === "DONE").length,
      },
    }),
    [users, employees, repairRequests],
  );

  const onLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="adminShell">
      <Sidebar items={menuItems} />
      <div className="adminMain">
        <div className="adminTopBar">
          <h2>{currentLabel}</h2>

        </div>
        <div className="adminOutlet">
          <Outlet context={dataApi} />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
