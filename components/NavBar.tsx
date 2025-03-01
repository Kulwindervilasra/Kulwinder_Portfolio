
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const router = useRouter();
  
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          KS
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
            Home
          </Link>
          <Link href="/experience" className={router.pathname === '/experience' ? styles.active : ''}>
            Experience
          </Link>
          <Link href="/projects" className={router.pathname === '/projects' ? styles.active : ''}>
            Projects
          </Link>
          <Link href="/#contact" className={router.pathname === '/#contact' ? styles.active : ''}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
