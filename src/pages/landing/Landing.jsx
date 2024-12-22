import React from 'react'
import Entry from './components/Entry'
import TrendingNow from './components/TrendingNow'
import Arch from './components/Arch'
import ReasonsToJoin from './components/ReasonsToJoin'
import FAQ from './components/FAQ'

const Landing = () => {


  return (
    <div className='w-screen bg-black'>
      <Entry/>
      <Arch/>
      <TrendingNow/>
      <ReasonsToJoin/>
      <FAQ/>
    </div>
  )
}

export default Landing
