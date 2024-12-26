import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Movies from './components/Movies'
import Shows from './components/Shows'
import Home from './components/Home'

const Homepage = () => {
    const [selectedTab, setSelectedTab] = useState({
        title: "Home",
        value: "home"
    },)
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingShows, setTrendingShows] = useState([])

    const tabItems = [
        {
            title: "Home",
            value: "home"
        },
        {
            title: "TV Shows",
            value: "tv"
        },
        {
            title: "Movies",
            value: "movie"
        },

    ]

    const visibleTab = () => {
        switch (selectedTab.value) {
            case "movie":
                return <Movies data={trendingMovies}/>
            case "tv":
                return <Shows data={trendingShows}/>
            default:
                return <Home visibleItem={trendingMovies[0]}/>
        }
    }

    const getMovies = async () => {
        const response = await fetch(`http://localhost:5001/api/v1/movie/trending`);
        const data = await response.json();
        if(response.ok) {
            setTrendingMovies(data.content)
        }
    }

    const getShows = async () => {
        const response = await fetch(`http://localhost:5001/api/v1/tv/trending`);
        const data = await response.json();
        if(response.ok) {
            setTrendingShows(data.content)
        }
    }

    useEffect(() => {
        getMovies()
        getShows
    }, [])

    return (
        <div className='relative min-h-screen bg-black'> 
            <NavBar tabItems={tabItems} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {visibleTab()}
        </div>
    )
}

export default Homepage
