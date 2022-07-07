import Center from 'components/Center';
import MainContainer from 'components/MainContainer';
import Posts from 'components/Posts';

const Home = ({ posts, users }) => {
    return (
        <MainContainer title="Home page">
            <Center>
                <Posts posts={posts} users={users} />
            </Center>
        </MainContainer>
    );
};

export default Home;

export async function getStaticProps() {
    const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5`);
    const posts = await resPosts.json();

    const resUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await resUsers.json();

    return { props: { posts, users } };
}
