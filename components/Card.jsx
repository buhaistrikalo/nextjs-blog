import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import profilePic from '../public/me.jpg';
import Iconify from './Iconify';

import styles from 'styles/Card.module.scss';

const Card = () => {
    return (
        <div className={styles.card__container}>
            <Image src={profilePic} width={300} height={300} />
            <div className={styles.card__content}>
                <span className={styles.card__content_title}>Frontend developer</span>
                <span className={styles.card__content_subtitle}>Kirill Tcoi</span>
                <div className={styles.card__footer}>
                    <Link href="https://github.com/buhaistrikalo">
                        <Iconify
                            icon="akar-icons:github-fill"
                            className={styles.card__footer_social_icons}
                        />
                    </Link>
                    <Link href="https://hh.ru/resume/146af7d1ff08cda9fd0039ed1f3956395a7179">
                        <Iconify
                            icon="carbon:letter-hh"
                            className={styles.card__footer_social_icons}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
