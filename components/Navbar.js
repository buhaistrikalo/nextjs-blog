import React from 'react';
import Link from 'next/link';
import styles from 'styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navbar__link} href="/">
                <a className={styles.navbar__link}>Home</a>
            </Link>
            <Link className={styles.navbar__link} href="/users">
                <a className={styles.navbar__link}>Users</a>
            </Link>
        </nav>
    );
};

export default Navbar;
