import styles from "../styles/Navbar.module.css"; 
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   
    <nav className={styles.navbar}>
      {/* Logo & Title */}
      <div className={styles.logoContainer}>
        <img src="/assets/logo.png" alt="Plant Care Logo" className={styles.logo} />
        <div>
          <h1 className={styles.title}>PLANT CARE</h1>
          <p className={styles.subtitle}>Bring Life to Your Home</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ""}`}>
        <Link to="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/my-plants" className={styles.navLink} onClick={() => setMenuOpen(false)}>MY PLANTS</Link>
        <Link to="/watering-schedule" className={styles.navLink} onClick={() => setMenuOpen(false)}>WATERING SCHEDULE</Link>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>

  )
}

export default NavBar;
