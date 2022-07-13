import Iconify from 'components/Iconify';

import styles from './Social.module.scss';

import social from 'constants/social.constants';

const Social = () => {
    return (
        <div className={styles.social}>
            {social.map((item) => (
                <a href={item.href} target="_blank">
                    <Iconify icon={item.icon} />
                </a>
            ))}
        </div>
    );
};

export default Social;
