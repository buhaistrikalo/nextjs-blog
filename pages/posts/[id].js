import Center from 'components/Center';
import MainContainer from 'components/MainContainer';
import PostsItem from 'components/Posts/PostsItem';

const Post = ({ post, comments }) => {
    return (
        <MainContainer title={post.title}>
            <Center>
                <>{post && comments && <PostsItem post={post} />}
                
                </>
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
