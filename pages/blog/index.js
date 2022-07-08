import Center from 'components/Center';
import MainContainer from 'components/MainContainer';
import Posts from 'components/Posts';
import { useRouter } from 'next/router';

const Blog = ({ posts, users, page }) => {
    const router = useRouter();
    return (
        <MainContainer title="Blog">
            <Center>
                <div>
                    <Posts posts={posts} users={users} />
                    <div className="blog-buttons">
                        <button
                            onClick={() => router.push(`/blog?page=${page - 1}`)}
                            disabled={page === 1}>
                            Previous page
                        </button>
                        <button onClick={() => router.push(`/blog?page=${page + 1}`)}>
                            Next page
                        </button>
                    </div>
                </div>
            </Center>
            <style jsx>{`
                .blog-buttons {
                    display: flex;
                    justify-content: space-between;
                }
            `}</style>
        </MainContainer>
    );
};

export default Blog;

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
