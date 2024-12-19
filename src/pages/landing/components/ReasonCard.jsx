import React from 'react'

const ReasonCard = ({item}) => {
  return (
    <div className=''>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <img src={item.img} alt="" />
    </div>
  )
}

export default ReasonCard
