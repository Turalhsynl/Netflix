import React from 'react';

const Modal = ({ item, closeModal }) => {
    if (!item) return null;

    return (
        <div onClick={(e) => {
            e.stopPropagation();
            closeModal();
        }} className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div onClick={(e) => {
                e.stopPropagation();
            }} className="relative text-white border border-gray-700 rounded-lg w-[670px] bg-[#161616]">
                <button onClick={closeModal} className="absolute top-2 right-2 text-white font-bold">X</button>
                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title || item.name} className="w-full rounded-md"/>
                <h2 className="absolute text-2xl font-bold px-8 top-[330px]">{item.title || item.name}</h2>
                <div className='px-8 py-4'>
                    <p className="text-lg mb-4">{item.overview}</p>
                    <button className='w-[175px] h-[45px] bg-[#e50914] rounded-[5px] text-[1.5rem]'>Get Started </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;