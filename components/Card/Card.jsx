import Image from 'next/image';
import Link from 'next/link';

import profilePic from '../../public/me.jpg';
import Iconify from 'components/Iconify';

import styles from './Card.module.scss';
import Social from 'components/Social';

const Card = () => {
    return (
        <div className={styles.container}>
            <Image src={profilePic} width={300} height={300} />
            <div className={styles.content}>
                <span className={styles.content_title}>Frontend developer</span>
                <span className={styles.content_subtitle}>Kirill Tcoi</span>
                <div className={styles.footer}>
                    <Social />
                </div>
            </div>
        </div>
    );
};

export default Card;
