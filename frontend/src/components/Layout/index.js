import React from 'react'
import styles from './styles.module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <img src={logo} alt="Nutcache" />
        <h2>Nutcache</h2>
      </header>

      <nav className={styles.navbar}>
        <div className={styles.navitem}>
          <Link to="/export-table-csv">
            Export table CSV
          </Link>
        </div>
        <div className={styles.navitem}>
          <Link to="export-table-json">
            Export table JSON
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout;
