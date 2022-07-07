import { useRouter } from 'next/router';
import styles from 'styles/User.module.scss';

export default function User({ user }) {
    return (
        <div className={styles.user}>
            <h1>
                {user.username} - {user.name}
            </h1>
            <li>id: {user.id}</li>
            <li>email: {user.email}</li>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    return { props: { user } };
}
