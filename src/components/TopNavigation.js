import React, { useState } from 'react';
import ChartPieSlice from '../assets/icons/ChartPieSlice.svg';
import Tag from '../assets/icons/Tag.svg';
import ChatTeardropText from '../assets/icons/ChatTeardropText.svg';

const TopNavigation = () => {
    const [activeTab, setActiveTab] = useState('summary');

    const tabChangeHandler = (tab) => setActiveTab(tab);
    return (
        <div className='top-nav flex flex-row justify-start items-center px-4 sticky top-0 bg-white md:px-10 lg:px-10'>
            <ul className='flex flex-row gap-3'>
                <li
                    className={
                        'px-4 rounded-full flex flex-row gap-1 justify-center items-center md:p-3 lg:p-3 md:gap-2 lg:gap-2 ' +
                        (activeTab === 'summary' ? 'active' : '')
                    }
                    onClick={() => tabChangeHandler('summary')}
                >
                    <img src={ChartPieSlice} alt='icon' />
                    <span>Summmary</span>
                </li>
                <li
                    className={
                        'p-2 rounded-full flex flex-row gap-1 justify-center items-center md:p-3 lg:p-3 md:gap-2 lg:gap-2 ' +
                        (activeTab === 'sales' ? 'active' : '')
                    }
                    onClick={() => tabChangeHandler('sales')}
                >
                    <img src={Tag} alt='icon' />
                    <span>Sales</span>
                </li>
                <li
                    className={
                        'p-2 rounded-full flex flex-row gap-1 justify-center items-center md:p-3 lg:p-3 md:gap-2 lg:gap-2 ' +
                        (activeTab === 'chats' ? 'active' : '')
                    }
                    onClick={() => tabChangeHandler('chats')}
                >
                    <img src={ChatTeardropText} alt='icon' />
                    <span>Chats</span>
                </li>
            </ul>
        </div>
    );
};

export default TopNavigation;
