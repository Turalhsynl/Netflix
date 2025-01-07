import React from 'react'
import { Navigate, useNavigate } from 'react-router'

const Entry = () => {
    const Navigate = useNavigate()

    return (
        <div className='text-white w-full h-full min-h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg")] bg-black/70 bg-blend-overlay'>
            <div className='flex justify-between px-[18rem] py-[28px]'>
                <img className='w-[150px] h-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflixLogo" />
                <div>
                    <select className='w-[90px] h-[35px] mr-5 bg-black/60 border rounded-[5px]'>
                        <option value="" selected>English</option>
                        <option value="">Russian</option>
                    </select>
                    <button onClick={() => {
                        Navigate('/login')
                    }} className='w-[75px] h-[35px] bg-[#e50914] rounded-[5px]'>Sign In</button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center min-h-[80vh] w-full'>
                <h1 className='text-[3.5rem] w-[588px] h-[140px] mb-8 text-center font-bold'>
                    Unlimited movies, TV shows, and more
                </h1>
                <p className='text-[1.25rem] mb-8 font-bold'>
                    Starts at EUR 7.99. Cancel anytime.
                </p>
                <p className='text-[1rem] font-semibold mb-4'>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className='flex gap-2'>
                    <input className='bg-black/60 border w-[366px] h-[56px] p-4 rounded-[5px]' type="email" placeholder='Email address' />
                    <button onClick={() => {
                        Navigate('/register')
                    }} className='w-[213px] h-[56px] bg-[#e50914] rounded-[5px] text-[1.5rem] '>Get Started </button>
                </div>
            </div>
        </div>
    )
}

export default Entry
