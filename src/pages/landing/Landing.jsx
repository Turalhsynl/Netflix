import React from 'react'
import Entry from './components/Entry'
import TrendingNow from './components/TrendingNow'
import Arch from './components/Arch'
import MovieCard from './components/MovieCard'

const Landing = () => {


  return (
    <div >
      <Entry/>
      <Arch/>
      <TrendingNow/>
    </div>
  )
}

export default Landing
