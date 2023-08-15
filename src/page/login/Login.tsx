import React from 'react';
import Header from '../../components/header/Header';
import { createData, fetchData } from '../../api/Api';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/store';

type LoginFormInputs = {
    email: string;
    password: string;
};

function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    const dispatch = useDispatch();

    const handleLogin = async (data: LoginFormInputs) => {
        try {
            // const response = await createData('authetication/login', data);
            const response = await fetchData('/login');
            if(response.data.status){
                dispatch(setUser(response.data.data)); 
                navigate('/dashboard');
            }
        } catch (error) {
            // Handle error, display error message, etc.
        }
    };

    return (
        <div className='h-screen'>
            <Header active='login' isLogin={false} />
            <div className='flex flex-col justify-center items-center h-full'>
                <h1 className='text-black font-bold text-3xl mb-3'>Login</h1>
                <div className='w-[500px] h- bg-secondary rounded-3xl px-10 py-10 border border-gray-300'>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className=''>
                            <h2 className='text-textgray font-bold text-xl'>Email</h2>
                            <input
                                type='email'
                                {...register('email', { required: 'Email is required.' })}
                                className='w-full rounded-lg mt-2 h-11 border border-gray-300 text-textgray px-2'
                            />
                            {errors.email && <p className='text-red-500 mt-2'>{errors.email.message}</p>}
                        </div>
                        <div className='mt-5'>
                            <h2 className='text-textgray font-bold text-xl'>Password</h2>
                            <input
                                type='password'
                                {...register('password', { required: 'Password is required.' })}
                                className='w-full rounded-lg mt-2 h-11 border border-gray-300 text-textgray px-2'
                            />
                            {errors.password && <p className='text-red-500 mt-2'>{errors.password.message}</p>}
                        </div>
                        <div className='flex justify-center items-center mt-10'>
                            <button
                                type='submit'
                                className='bg-primary w-[502px] h-[52px] rounded-3xl font-bold text-2xl text-white'
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
