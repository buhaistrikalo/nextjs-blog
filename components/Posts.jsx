import Link from 'next/link';
import Badge from './Badge';
import Iconify from './Iconify';
import styles from 'styles/Posts.module.scss';

const Posts = ({ posts, users }) => {
    const userName = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user.name;
    };

    return (
        <div className={styles.posts__container}>
            <div>
                {posts &&
                    users &&
                    posts.map((post, index) => (
                        <div className={styles.post__container} key={post.id}>
                            <div className={styles.post__header}>
                                {index === 0 && <Badge text="NEW" />}
                                <span className={styles.post__header_title}>
                                    {userName(post.userId)}
                                </span>
                            </div>
                            <Link href={`/posts/${post.id}`}>
                                <a className={styles.post__title}>
                                    <h2 className={styles.post__title_text}>{post.title}</h2>
                                </a>
                            </Link>
                            <span className={styles.post__body}>{post.body}</span>

                            <Link href={`/posts/${post.id}`}>
                                <a className={styles.post__footer}>
                                    <Iconify
                                        icon="icon-park-solid:comments"
                                        className={styles.post__icon}
                                    />
                                    <span className={styles.post__footer_title}>Comments</span>
                                </a>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Posts;
