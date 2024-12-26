import React from 'react'

const NavBar = ({tabItems, selectedTab, setSelectedTab}) => {
    return (
        <div className='w-full absolute text-[22px] top-0 left-0 flex items-center gap-[67px] py-[30px] px-[90px]'>
            <img className='w-[150px] h-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflixLogo" />
            <div className='flex items-center gap-[28px]'>
                {
                    tabItems.map(item => <button className={`${selectedTab.value === item.value ? "text-white font-bold" : "text-zinc-300"} `} onClick={() => {
                        setSelectedTab(item)
                    }}>{item.title}</button>)
                }
            </div>

        </div>
    )
}

export default NavBar
