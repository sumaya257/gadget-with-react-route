import React, { useState } from 'react';
import Heading from '../components/Heading';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            {/* Heading with Tabs for buttons */}
            <Heading title="Dashboard" subtitle="Explore the latest gadgets...">
                <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                    <TabList className="flex space-x-4 justify-center mt-5">
                        <Tab
                            className={activeTab === 0 ? 'text-[#9538E2] bg-white rounded px-3 py-2' : 'bg-[#9538E2] text-white border-2 rounded px-3 py-2'}
                            onClick={() => setActiveTab(0)}
                        >
                            Cart
                        </Tab>
                        <Tab
                            className={activeTab === 1 ? 'text-[#9538E2] bg-white rounded px-3 py-2' : 'bg-[#9538E2] text-white border-2 rounded px-3 py-2'}
                            onClick={() => setActiveTab(1)}
                        >
                           WishList
                        </Tab>
                    </TabList>
                </Tabs>
            </Heading>

            {/* Tab Content outside Heading */}
            <div className="mt-6 text-center">
                {activeTab === 0 && <h2 className='font-bold'>Cart</h2>}
                {activeTab === 1 && <h2 className='font-bold'>WishList</h2>}
            </div>
        </div>
    );
};

export default Dashboard;
