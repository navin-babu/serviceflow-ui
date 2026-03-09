import "./App.css";
import Header from "./Components/Header";
import AdminDash from "./pages/AdminDash";
import CustomerDash from "./pages/CustomerDash";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import TechnicianDash from "./pages/TechnicianDash";
import { useState } from "react";
import { useEffect } from "react";
import AddUser from "./pages/AddUser";
import AdminLayout from "./layouts/AdminLayout";
import AddEmployee from "./pages/AddEmployee";
import EditUsers from "./pages/EditUsers";
import EditEmployees from "./pages/EditEmployees";
import RepairRequests from "./pages/RepairRequests";
import Report from "./pages/Report";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="app-container">
      <Header user={user} handleLogout={handleLogout} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />

          <Route
            path="/admin"
            element={
              user?.role === "ADMIN" ? <AdminLayout /> : <Navigate to="/login" />
            }
          >
            <Route index element={<AdminDash />} />
            <Route path="repair-requests" element={<RepairRequests />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="edit-users" element={<EditUsers />} />
            <Route path="edit-user" element={<Navigate to="/admin/edit-users" replace />} />
            <Route path="add-employee" element={<AddEmployee />} />
            <Route path="edit-employees" element={<EditEmployees />} />
            <Route
              path="edit-employee"
              element={<Navigate to="/admin/edit-employees" replace />}
            />
            <Route path="report" element={<Report />} />
          </Route>

          <Route
            path="/customerDashboard"
            element={
              user?.role === "CUSTOMER" ? (
                <CustomerDash />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/technicianDashboard"
            element={
              user?.role === "TECHNICIAN" ? (
                <TechnicianDash />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
