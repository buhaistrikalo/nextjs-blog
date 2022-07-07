import React from 'react';
import styles from 'styles/Posts.module.scss';

const Badge = ({ text }) => {
    return (
        <div className={styles.badge}>
            {text}
        </div>
    );
};

export default Badge;
