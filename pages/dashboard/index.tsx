import Head from 'next/head';
import React from 'react';
import SidebarLayout from '../../components/layout/SidebarLayout';

const Dashboard: React.FC = () => {
    return (
        <SidebarLayout title="Dashboard">
            <div>
                <Head>
                    <title>Exit App</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <h1>Dashboard</h1>
            </div>
        </SidebarLayout>
    );
};

export default Dashboard;
