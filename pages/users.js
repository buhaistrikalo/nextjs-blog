import { useState } from 'react';
import Link from 'next/link';
import Navbar from 'components/Navbar';

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Vincent Van Gogh' },
    ]);

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
