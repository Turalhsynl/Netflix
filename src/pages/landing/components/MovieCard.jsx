const MovieCard = ({item,index,setItem}) => {
  return (
    <div onClick={() => {
        setItem(item)
    }} className='w-[180px] h-[252px] relative hover:scale-110 transition duration-150 ease-in'>
        <p className="absolute -left-7 bottom-4 text-[100px] drop-shadow-[0_0_4px_#fff] font-bold text-black">{index + 1}</p>
        <img className="w-full h-full rounded-lg object-cover" src={` https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
    </div>
  )
}

export default MovieCard
