import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Exit App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <button className="btn-secondary mr-2">hello</button>
            <button className="btn-primary">hello</button>
        </div>
    );
};

export default Home;
