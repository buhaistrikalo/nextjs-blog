import Center from 'components/Center';
import Form from 'components/CommentForm';
import MainContainer from 'components/MainContainer';
import PostsItem from 'components/Posts/PostsItem';
import CommentsBlock from 'components/CommentsBlock';

const Post = ({ post, comments, users }) => {
    const userName = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user ? user.name : '';
    };

    return (
        <MainContainer title={post.title}>
            <Center>
                <div>
                    {post && comments && <PostsItem post={post} author={userName(post.userId)} />}
                    <Form />
                    <CommentsBlock comments={comments} />
                </div>
            </Center>
        </MainContainer>
    );
};

export default Post;

export async function getServerSideProps({ params }) {
    const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await resPost.json();
    const resCom = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
    const comments = await resCom.json();
    const resUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await resUsers.json();

    return { props: { post, comments, users } };
}
