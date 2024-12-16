import React, { useState } from 'react'



const TrendingNow = () => {
    return (
        <div className='bg-black text-white w-full h-full min-h-screen flex px-[18rem] flex-col'>
                <h1 className='text-4xl font-bold mt-[28px] '>Trending Now</h1>
                <select name="" id="" className='w-[265px] h-[40px] bg-gray-950 p-[8px] rounded-[5px] border mt-6'>
                    <option value="" selected>Movies-English</option>
                    <option value="">Movies-Other Languages</option>
                    <option value="">TV Shows-English</option>
                    <option value="">TV Shows-Other Languages</option>
                </select>
        </div>
    )
}

export default TrendingNow
