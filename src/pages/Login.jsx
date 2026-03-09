import React from 'react'
import { useState } from 'react'
import styles from '../styles/Login.module.css'
import { useNavigate } from 'react-router-dom';

function Login({setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async(e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });

        if (!res.ok) {
            alert("Invalid Username or Password");
        }

        const data = await res.json();
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        console.log("Login response: ", data);

        if (data.role === "ADMIN") {    
            navigate("/admin");
        }

        if (data.role === "TECHNICIAN") {
            navigate("/technicianDashboard");
        }

        if (data.role === "CUSTOMER") {
            navigate("/customerDashboard");
        }
    };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit' onClick={login}>LOGIN</button>
      </form>
    </div>
  );
}

export default Login