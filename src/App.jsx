import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AdminDash from "./pages/AdminDash";
import CustomerDash from "./pages/CustomerDash";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import TechnicianDash from "./pages/TechnicianDash";

function App() {

    const user = JSON.parse(localStorage.getItem("user"));
    
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/login" element={<Login/>} />

          <Route path="/adminDashboard" element={
            user?.role === "ADMIN" ? <AdminDash/> : <Navigate to="/login" />
          } />

          <Route path="/customerDashboard" element={
            user?.role === "CUSTOMER" ? <CustomerDash/> : <Navigate to="/login" />
          }/>

          <Route path="/technicianDashboard" element={
            user?.role === "TECHNICIAN" ? <TechnicianDash/> : <Navigate to="/login" />
          } />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
