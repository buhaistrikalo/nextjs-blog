import Link from 'next/link';
import Badge from './Badge';
import Iconify from '../Iconify';
import styles from './Posts.module.scss';

const PostsItem = ({ post, isNew, author, showComments }) => {
    return (
        <div className={styles.post__container}>
            <div className={styles.post__header}>
                {isNew && <Badge text="NEW" />}
                <span className={styles.post__header_title}>{author ? author : ''}</span>
            </div>

            <Link href={`/posts/${post.id}`}>
                <a className={styles.post__title}>
                    <h2 className={styles.post__title_text}>{post.title}</h2>
                </a>
            </Link>
            <span className={styles.post__body}>{post.body}</span>

            {showComments && (
                <Link href={`/posts/${post.id}`}>
                    <a className={styles.post__footer}>
                        <Iconify icon="icon-park-solid:comments" className={styles.post__icon} />
                        <span className={styles.post__footer_title}>Comments</span>
                    </a>
                </Link>
            )}
        </div>
    );
};

export default PostsItem;
