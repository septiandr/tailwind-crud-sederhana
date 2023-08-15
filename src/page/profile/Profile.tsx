import React from 'react'
import Header from '../../components/header/Header'
import avatarImage from '../../assets/image/avatar.jpg';
import { useSelector } from 'react-redux'

export default function Profile() {
    const user = useSelector((state: any) => state.user);
    console.log("🚀 ~ Profile ~ user:", user)

    return (
        <div className='h-screen'>
            <Header active='profile' isLogin={false} />
            <div className='flex flex-col justify-center items-center h-full'>
                <h1 className='text-black font-bold text-3xl mb-3'>Profile</h1>
                <div className='bg-secondary rounded-3xl w-[600px] flex flex-col gap-2 px-16 py-4 border border-gray-300'>
                    <div className='absolute top-48 ml-[400px]'>
                        <img className='w-24 h-24 rounded-full' src={avatarImage} alt='Avatar' />
                    </div>
                    <div>
                        <h2 className='text-textgray font-bold text-xl'>Nama</h2>
                        <p className='font-bold'>{user.name}</p>
                    </div>
                    <div>
                        <h2 className='text-textgray font-bold text-xl'>Alamat</h2>
                        <p className='font-bold'>{user.address}</p>
                    </div>
                    <div>
                        <h2 className='text-textgray font-bold text-xl'>No. Hp</h2>
                        <p className='font-bold'>{user.phone}</p>
                    </div>
                    <div>
                        <h2 className='text-textgray font-bold text-xl'>Email</h2>
                        <p className='font-bold'>{user.email}</p>
                    </div>
                    <div>
                        <h2 className='text-textgray font-bold text-xl'>Motto</h2>
                        <p className='font-bold'>{user.motto}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
