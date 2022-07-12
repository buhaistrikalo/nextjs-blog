import Head from 'next/head';
import Navbar from './Navbar';

const MainContainer = ({ children, title }) => {
    return (
        <>
            <Head>
                <meta keywords="next.js" />
                <title>{title}</title>
            </Head>
            <Navbar />
            <div style={{ marginTop: 32 }}>{children}</div>
        </>
    );
};

export default MainContainer;
