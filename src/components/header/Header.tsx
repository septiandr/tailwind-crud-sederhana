import React from 'react';
import avatarImage from '../../assets/image/avatar.jpg';
import { useSelector } from 'react-redux'


interface HeaderProps {
    active: string,
    isLogin:boolean
}

const Header = ({ active, isLogin }: HeaderProps) => {
    const user = useSelector((state: any) => state.user);

    return (
        <div className='absolute z-20 top-0 w-full bg-primary h-14 flex items-center justify-between px-8'>
            <div>
                <h1 className='text-white font-bold text-2xl'>KLEDO TEST</h1>
            </div>
            {isLogin ? 
            <div className='flex gap-2 items-center'>
                <img src={avatarImage} className='rounded-full w-10 h-10'/>
                <h1 className='text-white'>{user.name}</h1>
            </div>
            :
            <div className='flex h-full items-center'>
                <div className={`${active == "profile" ? 'bg-black' : 'bg-transparent'} text-white h-full px-3`}>
                    <a className ="h-full flex items-center" href='/profile'>Profile</a>
                </div>
                <div className={`${active == "login" ? 'bg-black' : 'bg-transparent'} text-white h-full px-3`}>
                    <a className ="h-full flex items-center" href='/'>Login</a>
                </div>
            </div>
        }
        </div>
    );
};

export default Header;
