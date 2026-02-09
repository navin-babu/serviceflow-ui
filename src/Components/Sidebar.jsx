import React from "react";
import styles from "../styles/Sidebar.module.css";
import { useState } from "react";

function Sidebar({ items }) {
    const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.sidebar}>
      {items.map((item, index) => (
        <div>
          <div className="menuItems" onClick={item.path}>
            <i className={`${item.icon} ${styles.icon}`}></i>
            <div key={index} className={styles.sidebarItems}>
              <b>{item.label}</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
