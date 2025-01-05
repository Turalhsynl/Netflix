import React from 'react'
import top10 from "../../../assets/images/Top10.svg"

const Home = ({visibleItem}) => {
    return (
        visibleItem && <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${visibleItem.backdrop_path})`}}
         className='flex items-center h-screen w-full bg-cover bg-no-repeat bg-center text-white bg-black/50 bg-blend-overlay'>
            <div className='max-w-[600px] text-white mx-[90px]'>
                <h2 className='text-8xl mb-[30px]'>{visibleItem.title}</h2>
                <div className='flex items-center mb-[30px]'>
                    <img className='size-[44px]' src={top10} alt="" />
                    <p className='text-[30px]'>#1 in TV Shows Today</p>
                </div>
                <p className='text-[20px]'>{visibleItem.overview.slice(0, 150)}...</p>
            </div>
        </div>
    )
}

export default Home