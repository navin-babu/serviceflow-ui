import React from 'react'
import styles from '../styles/Header.module.css'

function Header({ user, handleLogout, theme, toggleTheme }) {
    console.log("Login user: ", user);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.iconName}>
          <i className="fa-brands fa-shopware"></i>
          <h2>ServiceFlow</h2>
        </div>
        <nav className={styles.navContainer}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </button>
          
          {user ? (
            <div className={styles.userInfo}>
              <h4>👤 {user.name}</h4>
              <button id='logout-button' className={styles.sideButtons} onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i></button>
            </div>
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