import Link from 'next/link';

import Iconify from 'components/Iconify';

import styles from './Social.module.scss';

import social from 'constants/social.constants';

const Social = () => {
    return (
        <div className={styles.social}>
            {social.map((item) => (
                <Link href={item.href} >
                    <Iconify icon={item.icon} />
                </Link>
            ))}
        </div>
    );
};

export default Social;
