import { useState } from 'react';
import Link from 'next/link';
import Navbar from 'components/Navbar';

const Users = ({ users }) => {
    return (
        <div>
            <Navbar />
            <h1>Список пользователей</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();
    return { props: { users } };
}
