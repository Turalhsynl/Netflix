import React from 'react'
import { useLocation } from 'react-router'

const Details = () => {

    const {token} = useStore(themeStore)
    const {id, type} = useLocation().state

    const getDetails = async () => {
        const response = await fetch("http://localhost:5001/api/v1/movie/:id/details", {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        } )
    }

    return (
    <div>
      
    </div>
  )
}

export default Details