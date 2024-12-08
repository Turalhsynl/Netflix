import React from 'react'
import { NavLink } from "react-router";

const SearchBar = ({SearchBar,setSearchTerm}) => {
  return (
    <div className='flex justify-center items-center p-4 border-b border-zinc-400 gap-5'>
      <h3>Search</h3>
      <input placeholder='Enter' className='border pl-3' onChange={(e) => {
        setSearchTerm(e.target.value)
      }} type="text" />
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  )
}

export default SearchBar
