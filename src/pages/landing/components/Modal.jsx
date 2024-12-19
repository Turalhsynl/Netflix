// Modal.js
import React from 'react';

const Modal = ({ item, closeModal }) => {
    if (!item) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-black text-white p-6 rounded-lg w-[500px]">
                <button onClick={closeModal} className="absolute top-2 right-2 text-white font-bold">X</button>
                <h2 className="text-2xl font-bold mb-4">{item.title || item.name}</h2>
                <p className="text-lg mb-4">{item.description}</p>
                <img src={item.image} alt={item.title || item.name} className="w-full rounded-md" />
            </div>
        </div>
    );
};

export default Modal;
