import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Modal from './Modal';

const TrendingNow = () => {
    const [data, setData] = useState([]);
    const [option, setOption] = useState('Movie');
    const [item, setItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const options = ["Movie", "TV"];

    const getData = async () => {
        const response = await fetch(`http://localhost:5001/api/v1/${option.toLowerCase()}/trending`);
        const data = await response.json();
        setData(data.content);
    }

    useEffect(() => {
        getData();
    }, [option]);

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "scroll"
    }, [isModalOpen])

    const openModal = (item) => {
        setItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setItem(null);
    };

    return (
        <div className='bg-black text-white w-full h-full flex px-[18rem] flex-col'>
            <h1 className='text-4xl font-bold mt-[28px] '>Trending Now</h1>
            <select
                value={option}
                onChange={(e) => {
                    setOption(e.target.value);
                }}
                className='w-[265px] h-[40px] bg-gray-950 p-[8px] rounded-[5px] border mt-6'>
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>

            <div className='flex flex-row overflow-scroll overflow-y-hidden gap-10 p-5'>
                {data.map((item, index) => (
                    <div key={index} onClick={() => openModal(item)}>
                        <MovieCard item={item} index={index} />
                    </div>
                ))}
            </div>

            {isModalOpen && <Modal item={item} closeModal={closeModal} />}
        </div>
    );
}

export default TrendingNow;
