import { useRouter } from 'next/router';

import Card from 'components/Card';
import Center from 'components/Center';
import MainContainer from 'components/MainContainer';
import Posts from 'components/Posts';


const Home = ({ posts, users }) => {
    const router = useRouter();
    return (
        <MainContainer title="Home page">
            <Center>
                <div>
                    <h2 style={{ marginBottom: 24 }}>Posts</h2>
                    <Posts posts={posts} users={users} />
                    <Center>
                        <button onClick={() => router.push(`/blog`)} style={{ marginBottom: 64 }}>
                            Read more...
                        </button>
                    </Center>

                    <h2 style={{ marginBottom: 24 }}>Team</h2>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: 64,
                        }}>
                        <Card />
                        <Card />
                    </div>
                </div>
            </Center>
        </MainContainer>
    );
};

export default Home;

export async function getServerSideProps({ query: { page = 1 } }) {
    const LIMIT_POSTS = 4;
    const startPost = +page === 1 ? 0 : (+page - 1) * LIMIT_POSTS;
    const resPosts = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${startPost}&_limit=${LIMIT_POSTS}`,
    );
    const posts = await resPosts.json();

    const resUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await resUsers.json();

    return { props: { posts, users, page: +page } };
}
