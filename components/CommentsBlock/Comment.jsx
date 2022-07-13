import { useState } from 'react';
import Iconify from 'components/Iconify';
import styles from './Comment.module.scss';

const Comment = ({ name, email, text }) => {
    const [like, setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
    };

    return (
        <div className={styles.comment__container}>
            <img src="https://via.placeholder.com/50" alt="avatar" className={styles.avatar} />
            <div>
                <div className={styles.title__container}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.secondary}>{email}</span>
                </div>
                <div className={styles.text}>{text}</div>
                <button type="button" onClick={handleLike}>
                    <Iconify
                        icon="icon-park-solid:like"
                        fontSize={14}
                        className={styles.icon}
                        color={like ? '#ff0000' : '#000'}
                    />
                    Like
                </button>
            </div>
        </div>
    );
};

export default Comment;
