import React from 'react'

const ProductCard = ({product}) => {
    return (
        <>
            <div className='justify-self-center'>
                <img className='size-[250px] object-scale-down' src={product.gallery[0]} alt="" />
                <h3 className='text-lg font-semibold'>{product.title}</h3>
                <p>{product.currency}{product.price}</p>
            </div>
        </>
    )
}

export default ProductCard