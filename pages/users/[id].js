import { useRouter } from 'next/router';
import styles from 'styles/User.module.scss';

export default function User() {
    const { query } = useRouter();

    return (
        <div className={styles.user}>
            <h1>User #{query.id}</h1>
        </div>
    );
}
