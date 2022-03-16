import { Card } from 'antd';
import React, { useState } from 'react';
import ProfileForm from '../../components/forms/ProfileForm';
import ResetPasswordForm from '../../components/forms/ResetPassword';
import SidebarLayout from '../../components/layout/SidebarLayout';

interface Istate {
    profile: React.ReactNode;
    password: React.ReactNode;
}

const Profile = () => {
    const [activeTabKey, setActiveTabKey] = useState('profile');
    const tabList = [
        {
            key: 'profile',
            tab: 'Profile',
        },
        {
            key: 'password',
            tab: 'Reset Password',
        },
    ];

    const content: Istate = {
        profile: <ProfileForm />,
        password: <ResetPasswordForm />,
    };

    return (
        <div style={{}}>
            <SidebarLayout title="Profile">
                <Card
                    style={{ width: '100%', height: '100vh', padding: '20px' }}
                    tabList={tabList}
                    activeTabKey={activeTabKey}
                    onTabChange={(key) => {
                        setActiveTabKey(key);
                    }}
                >
                    {content[activeTabKey as keyof Istate]}
                </Card>
            </SidebarLayout>
        </div>
    );
};

export default Profile;
