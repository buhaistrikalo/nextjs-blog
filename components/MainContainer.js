import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const MainContainer = ({ children, title }) => {
    return (
        <>
            <Head>
                <meta keywords="next.js" />
                <title>{title}</title>
            </Head>
            <Navbar />
            <div style={{ marginTop: 32 }}>{children}</div>
            <Footer />
        </>
    );
};

export default MainContainer;
