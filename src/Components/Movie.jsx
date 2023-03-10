import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from "react-icons/fa"

const Movie = ({item}) => {
    const [like, setlike] = useState(false);



  return (
    <>
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] cursor-pointer inline-block relative p-2">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt=""
              />

              <div className="w-full h-full top-0 left-0 absolute text-white hover:bg-black/80 opacity-0 hover:opacity-90">
                <p className="whitespace-normal text-xs sm:text-sm md:text-lg flex justify-center items-center text-center h-full w-full">{item?.title}</p>

                <p>
                    {like? <FaHeart className="top-4 left-4 absolute" onClick={()=>setlike(!like)}/>:<FaRegHeart className="top-4 left-4 absolute" onClick={()=>setlike(!like)}/>}
                </p>

              </div>
            </div>
      
    </>
  )
}

export default Movie
