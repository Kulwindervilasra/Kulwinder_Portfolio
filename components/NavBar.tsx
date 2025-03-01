import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          KS
        </Link>
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Home
          </Link>
          <Link
            href="/experience"
            className={router.pathname === "/experience" ? styles.active : ""}
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className={router.pathname === "/projects" ? styles.active : ""}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={router.pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
          <a href="/#contact">Contact</a>
          <ThemeToggle />
        </nav>
        <button
          className={styles.mobileMenuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
