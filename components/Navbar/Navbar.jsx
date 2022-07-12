import Link from 'next/link';

import Center from 'components/Center';
import Iconify from 'components/Iconify';

import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Center>
                <Link href="/">
                    <a className={styles.navbar__link}>Home</a>
                </Link> 
                <Link href="/blog">
                    <a className={styles.navbar__link}>Blog</a>
                </Link>
                <Link href="/404">
                    <a className={styles.navbar__link}>404</a>
                </Link>
                <Link href="https://github.com/buhaistrikalo" style={{ color: '#7247ca' }}>
                    <div className={styles.navbar__link}>
                        <Iconify
                            icon="akar-icons:github-fill"
                            style={{ fontSize: '20px', color: '#7247ca', marginRight: '10px' }}
                        />
                        <a
                            style={{
                                color: '#7247ca',
                            }}>
                            Github
                        </a>
                    </div>
                </Link>
            </Center>
        </nav>
    );
};

export default Navbar;
