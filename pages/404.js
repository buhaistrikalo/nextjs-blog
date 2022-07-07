import React from 'react';
import Link from 'next/link';

const Error = () => {
    return (
        <>
            <h1>Страница не найдена 404</h1>
            <Link href="/">
                <a>Вернуться на главную</a>
            </Link>
        </>
    );
};

export default Error;
