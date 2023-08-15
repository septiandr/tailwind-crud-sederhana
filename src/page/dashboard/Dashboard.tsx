import React from 'react'
import Base from '../../components/base/Base'
import { useSelector } from 'react-redux'

function Dashboard() {
    const user = useSelector((state: any) => state.user);

    return (
        <Base>
            <div className='bg-[#BDBDBD] w-full h-full px-9 py-9'>
                <div className='rounded-2xl bg-white h-full w-full px-20 py-20'>
                    <h1 className='text-2xl font-bold z-20 absolute top-28 left-16'>Dashboard</h1>
                    <div className=' mx-20 h-full rounded-lg flex flex-col justify-center items-center text-center bg-[#F2F2F2]'>
                        <h1 className='text-[#828282] text-4xl'>Selamat Datang</h1>
                        <h2 className='text-[#BDBDBD] font-bold text-2xl mt-2'>{user.name}</h2>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Dashboard