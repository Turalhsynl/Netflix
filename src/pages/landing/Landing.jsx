import React from 'react'
import Entry from './components/Entry'
import TrendingNow from './components/TrendingNow'
import Arch from './components/Arch'
import ReasonsToJoin from './components/ReasonsToJoin'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const Landing = () => {


  return (
    <div className='w-screen bg-black'>
      <Entry/>
      <Arch/>
      <TrendingNow/>
      <ReasonsToJoin/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Landing
