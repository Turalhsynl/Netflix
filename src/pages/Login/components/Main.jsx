import React from 'react'

const Main = () => {
    return (
        <div className='text-white w-full h-full min-h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg")] bg-black/40 bg-blend-overlay'>
            <div className='flex justify-between px-[18rem] py-[28px]'>
                <img className='w-[150px] h-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflixLogo" />
            </div>
            <div className='flex justify-center items-center w-full min-h-[800px]'>
                <div className='bg-black/70 flex flex-col w-[480px] h-[500px] p-[50px] gap-4 rounded-[5px]'>
                    <h2 className='text-[32px] ml-[18px] font-bold'>Sign In</h2>
                    <div className='flex flex-col gap-4 items-center'>
                        <input className='w-[350px] h-[56px] bg-zinc-900/50 border border-zinc-500 rounded-[5px] p-5' type="email" placeholder='Email' />
                        <input className='w-[350px] h-[56px] bg-zinc-900/50 border border-zinc-500 rounded-[5px] p-5' type="password" placeholder='Password' />
                        <button className='w-[350px] h-[40px] bg-[#E50914] rounded-[5px]'>Sign In</button>
                        <p className='text-[#FFFFFFB2]'>New to Netflix?<a href="" className='font-semibold text-white ml-2'>Sign up now</a></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main
