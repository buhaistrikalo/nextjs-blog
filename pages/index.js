import Center from 'components/Center';
import MainContainer from 'components/MainContainer';
import Posts from 'components/Posts/Posts';
import { useRouter } from 'next/router';

const Home = ({ posts, users }) => {
    const router = useRouter();
    return (
        <MainContainer title="Home page">
            <Center>
                <div>
                    <Posts posts={posts} users={users} />
                    <Center>
                        <button onClick={() => router.push(`/blog`)}>Read more...</button>
                    </Center>
                </div>
            </Center>
        </MainContainer>
    );
};

export default Home;

export async function getStaticProps() {
    const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4`);
    const posts = await resPosts.json();

    const resUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await resUsers.json();

    return { props: { posts, users } };
}
