import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Main = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:5001/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            navigate('/login');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='text-white w-full h-screen bg-cover bg-black/50 bg-blend-overlay bg-[url("https://s3-alpha-sig.figma.com/img/65d0/ec42/0eef6e40381c1fcbba4717ff8909c3cf?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRo8ZZkdV9uAdF4d58k4UwqvdUolE6ZwYhL39QZeGN3CdobZkXWm7QlmSdBxSoNA9aiwveytQNzeTLDpZnXo0oCFlUa7rTXbSmhGRyOlN94ITTejy89zpB7Hp1dde-V-69LIFnGVXNu1sciF9owLukDdkiuRykNupHekrIB0XHqW8Uza-7AwpeqRz909NlIsbTaNAiSstmQvdngmW0HJfs8CCsoS4tVgEkp9HwnbQ1K9eV0LMwdMczZm17K00GfnuajUUWUboTLmeRVnTETcxHLaKJTAKU2wCxHp8sQCQ7tOdiYvDgNDBrLtxv34evzPPimbN-CXjVg3~qpqPYP6TQ__")] flex justify-center items-center'>
            <div className='pl-[168px] pt-6 absolute top-0 left-0'>
                <img
                    className='w-[9.9rem] h-[3rem]'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                    alt='logoNetflix'
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className='w-[450px] h-[551px] flex flex-col justify-center items-center bg-black/70 border-none rounded-[5px]'
            >
                <h1 className='text-[32px] self-start ml-[67px] font-bold'>Sign Up</h1>
                <div className='mt-[29px] items-center flex flex-col gap-[15px] w-[314px] h-[365px]'>
                    <input
                        className='bg-transparent border border-gray-600 rounded-[4px] p-2 text-[1rem] w-[314px] h-[56px]'
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        className='bg-transparent border border-gray-600 rounded-[4px] p-2 text-[1rem] w-[314px] h-[56px]'
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        className='bg-transparent border border-gray-600 rounded-[4px] p-2 text-[1rem] w-[314px] h-[56px]'
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                        className='text-[16px] font-bold w-[314px] h-[50px] bg-[#E50914] rounded-[4px]'
                    >
                        Sign Up
                    </button>
                    {error && <p className='text-red-500'>{error}</p>}
                    <h1 className='text-[#FFFFFFB2] mt-[43px]'>
                        Already Have an Account?{' '}
                        <a className='text-white font-bold' href='login'>
                            Sign in
                        </a>
                    </h1>
                </div>
            </form>
        </div>
    );
};

export default Main;