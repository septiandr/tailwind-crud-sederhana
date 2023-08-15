import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, LogoutIcon, TruckIcon } from '../../assets/iconSvg';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../redux/store';
import { createData } from '../../api/Api';
import { setUser } from '../../redux/store';
import {useNavigate} from 'react-router-dom'

function Sidebar() {
    const dispatch = useDispatch();
    const activeTabIndex = useSelector((state:any) => state.activeTabIndex);
    const route = useNavigate()

    const handleMenuClick = (index:number) => {
        dispatch(setActiveTab(index));
    };

    const logout =async()=>{
        const res = await createData("/authetication/logout",null)
        dispatch(setUser({
            name: '',
            address: '',
            phone: '',
            email: '',
            motto: '',
            photo: '',
        })); 
        route('/')
    }

    return (
        <aside className='w-2/12 pt-14 bg-secondary text-white h-full p-4 flex flex-col justify-between absolute left-0'>
            <div>
                {/* Item Sidebar: Dashboard */}
                <Link
                    to='/dashboard'
                    onClick={() => handleMenuClick(0)}
                    className={`flex items-center space-x-2 py-2 px-3 hover:text-primary text-textgray ${
                        activeTabIndex === 0 ? 'border-b-2 border-primary text-primary' : 'border-b-2'
                    }`}
                >
                    <HomeIcon color={activeTabIndex === 0 ? '#2F80ED': '#828282'} />
                    <span>Dashboard</span>
                </Link>
                {/* Item Sidebar: Shipping */}
                <Link
                    to='/shipping'
                    onClick={() => handleMenuClick(1)}
                    className={`flex items-center space-x-2 py-2 px-3 hover:text-primary text-textgray ${
                        activeTabIndex === 1 ? 'text-primary border-b-2 border-primary' : 'border-b-2'
                    }`}
                >
                    <TruckIcon color={activeTabIndex === 1 ? '#2F80ED': '#828282'} />
                    <span>Shipping</span>
                </Link>
            </div>
            {/* Bagian Logout */}
            <div className=' py-4 px-3 hover:bg-gray-700 absolute left-0 bottom-0 w-full bg-blue-500'>
                <button onClick={logout} className='w-full flex justify-center items-center '>
                    <LogoutIcon />
                    <span className='font-bold text-lg ml-1'>Log Out</span>
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;
