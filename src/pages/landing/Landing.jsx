import React from 'react'
import Entry from './components/Entry'
import TrendingNow from './components/TrendingNow'
import Arch from './components/Arch'
import ReasonsToJoin from './components/ReasonsToJoin'

const Landing = () => {


  return (
    <div className='w-screen'>
      <Entry/>
      <Arch/>
      <TrendingNow/>
      <ReasonsToJoin/>
    </div>
  )
}

export default Landing
