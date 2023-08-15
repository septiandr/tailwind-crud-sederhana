import React, { ReactNode } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

interface BaseProps {
    children: ReactNode;
}

function Base({ children }: BaseProps) {
    return (
        <div className='h-screen'>
            <Header isLogin={true} active='' />
            <div className='flex h-full'>
                <Sidebar />
                <div className='w-10/12 pt-14 absolute right-0 h-full'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Base;
