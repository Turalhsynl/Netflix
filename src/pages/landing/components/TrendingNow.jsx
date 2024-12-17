import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';


const TrendingNow = () => {
    const [data, setData] = useState([]);
    const [option, setOption] = useState('Movie');
    const [item, setItem] = useState({});

    const options = ["Movie", "TV"]

    const getData = async () => {
        const response = await fetch(`http://localhost:5001/api/v1/${option.toLowerCase()}/trending`);
        const data = await response.json();
        console.log(data.console);

        setData(data.content);

    }

    useEffect(() => {
        getData();
    }, [option])

    return (
        <div className='bg-black text-white w-full h-full min-h-screen flex px-[18rem] flex-col'>
            <h1 className='text-4xl font-bold mt-[28px] '>Trending Now</h1>
            <select name="" id="" className='w-[265px] h-[40px] bg-gray-950 p-[8px] rounded-[5px] border mt-6'>
                <option value="" selected>Movies</option>
                <option value="">TV Shows</option>
            </select>
            <div className='flex flex-row overflow-scroll overflow-y-hidden gap-10'>
                {data.map((item, index) =>
                    <div className=''>
                        <MovieCard setItem={setItem} item={item} index={index} />
                    </div>
                )}
            </div>

        </div>
    )
}

export default TrendingNow
