import Subscribe from 'components/Subscribe';
import Link from 'next/link';

import menu from 'constants/menu.constants';

import styles from './Footer.module.scss';
import Social from 'components/Social/Social';

const Menu = () => {
    return (
        <div className={styles.menu}>
            {menu.map((item) => (
                <Link href={item.href}>
                    <a>{item.title}</a>
                </Link>
            ))}
        </div>
    );
};



const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Menu />
                <Subscribe />
            </div>
            <div className={styles.title}>By @BuhaiStrikalo | Privacy policy social networks</div>
            <Social />
        </div>
    );
};

export default Footer;
