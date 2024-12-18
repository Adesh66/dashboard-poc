import React from 'react';
import Logo from '../assets/logo.svg';
import House from '../assets/icons/House.svg';
import ChatTeardrop2 from '../assets/icons/ChatTeardrop2.svg';
import UsersFour from '../assets/icons/UsersFour.svg';
import Gear from '../assets/icons/Gear.svg';
const Sidebar = () => {
    return (
        <nav className='py-6 sidebar flex  flex-col fixed left-0 top-0 h-screen'>
            <div className='w-full h-full flex justify-between items-center flex-col'>
                <div className='flex flex-col gap-8'>
                    <div className='logo'>
                        <img src={Logo} className='' alt='app-logo' />
                    </div>
                    <div className='border-b w-full border-green-950'></div>
                    <ul className='nav-controls flex flex-col justify-center items-center gap-8 '>
                        <li className='bg-white w-9 h-9 rounded-lg flex justify-center items-center cursor-pointer'>
                            <img src={House} alt='icon-control' />
                        </li>
                        <li className=' rounded-lg flex justify-center items-center cursor-pointer'>
                            <img src={ChatTeardrop2} alt='icon-control' />
                        </li>
                        <li className=' rounded-lg flex justify-center items-center cursor-pointer'>
                            <img src={UsersFour} alt='icon-control' />
                        </li>
                    </ul>
                </div>
                <ul>
                <li className=' rounded-lg flex justify-center items-center cursor-pointer'>
                        <img src={Gear} alt='icon-control' />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
