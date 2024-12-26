import React from 'react'

const Home = ({visibleItem}) => {
    return (
        visibleItem && <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${visibleItem.backdrop_path})`}}
         className='flex items-center h-screen w-full bg-cover bg-no-repeat bg-center text-white bg-black/50 bg-blend-overlay'>
            <div className='max-w-[400px] text-white'>
                <h2 className='text-7xl'>{visibleItem.title}</h2>
                <p>{visibleItem.overview.slice(0, 150)}...</p>
            </div>
        </div>
    )
}

export default Home