import Center from 'components/Center';
import Form from 'components/Form';
import MainContainer from 'components/MainContainer';
import PostsItem from 'components/Posts/PostsItem';

const Post = ({ post, comments }) => {
    return (
        <MainContainer title={post.title}>
            <Center>
                <div>
                    {post && comments && <PostsItem post={post} />}
                    <Form />
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

    return { props: { post, comments } };
}
