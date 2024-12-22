import React from 'react'

const ReasonCard = ({item}) => {
  return (
    <div className='w-full h-[300px] bg-gradient-to-br from-[#192247] to-[#210E17] rounded-[16px] px-4 py-4 relative'>
      <h3 className='text-[24px]'>{item.title}</h3>
      <p className='text-white/70 mt-4'>{item.desc}</p>
      <img className='size-[72px] absolute right-4 bottom-4' src={item.img} alt="" />
    </div>
  )
}

export default ReasonCard
