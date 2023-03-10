import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import request from './Requests';

const Top = () => {
    const [movies,setMovies]=useState([]);

    const movie=movies[Math.floor(Math.random()*movies.length-1)];
    

    useEffect(()=>{
        axios.get(request.requestPopular).then((response) => {
            setMovies(response.data.results);
          });
    },[])
    // console.log(movie)

  return (
    <div>
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute h-[550px] w-full bg-gradient-to-r from-black'></div>
                <img  className="h-full w-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />

                <div className=' absolute w-full top-[20%] p-4 md:p-8'>
                    <p className='my-3 font-bold text-2xl sm:text-3xl md:text-5xl'>{movie?.title}</p>
                    <button className='bg-gray-300 text-black border border-spacing-0  px-3'>Play</button>
                    <button className='bg-black text-white border border-gray-400 ml-4 px-2'>Watch Later</button>
                    <p className='text-gray-400 mt-4'>Released  {movie?.release_date}</p>
                    <p className='mt-2'>{movie?.overview}</p>
                </div>
            </div>
        </div>
        

      
    </div>
  )
}

export default Top

