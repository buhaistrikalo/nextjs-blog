import styles from 'styles/Posts.module.scss';
import PostsItem from './PostsItem';

const Posts = ({ posts, users }) => {
    const userName = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user ? user.name : '';
    };

    return (
        <div className={styles.posts__container}>
            <div>
                {posts &&
                    users &&
                    posts.map((post, index) => (
                        <PostsItem
                            post={post}
                            key={post.id}
                            isNew={post.id === 1}
                            author={userName(post.userId)}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Posts;
