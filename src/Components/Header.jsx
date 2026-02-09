import React from 'react'
import styles from '../styles/Header.module.css'

function Header() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("Login user: ", user);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.iconName}>
          <i className="fa-brands fa-shopware"></i>
          <h2>ServiceFlow</h2>
        </div>
        <nav>
          {user ? (
            <>
              <h4>👤 {user.name}</h4>
            </>
          ) : (
            <div className={styles.sideButtonsContainer}>
              <button className={styles.sideButtons}>Log in</button>
              <button className={styles.sideButtons}>Sign up</button>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header