import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

function Sidebar({ items }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>Admin Console</div>
      <nav className={styles.nav}>
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
