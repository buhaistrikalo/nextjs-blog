import Link from 'next/link';

import Center from 'components/Center';

import styles from './Navbar.module.scss';

import menu from 'constants/menu.constants';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Center>
                {menu.map((item) =><Link href={item.href}>
                    <a className={styles.navbar__link}>{item.title}</a>
                </Link> )
                }
            </Center>
        </nav>
    );
};

export default Navbar;
