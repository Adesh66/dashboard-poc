import React from 'react';
import Sidebar from '../components/Sidebar';
import TopNavigation from '../components/TopNavigation';
import Glance from '../modules/glance';
import Insights from '../modules/insights';
import Orders from '../modules/orders';

const Dashboard = () => {
    return (
        <>
            <Sidebar />

            <main className='layout flex flex-col  min-h-screen w-full'>
                <TopNavigation />
                <div className='main-content p-4 md:p-10 lg:p-10'>
                    <div className='border rounded-3xl px-4 py-4 gap-8 flex flex-col w-full md:px-6 md:py-8 lg:px-6 lg:py-8 '>
                        <Glance />
                        <Insights />
                        <Orders />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
