import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Rows = ({ rowId,title, fetchUrl }) => {
  // console.log(fetchUrl)

  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setmovies(response.data.results);
    });
  }, [fetchUrl]);
  //   console.log(movies);
 

  const left=(()=>{
    const sliderthing=document.getElementById("slider"+rowId) ;
    sliderthing.scrollLeft=sliderthing.scrollLeft-500
  })
  const right=(()=>{
    const sliderthing=document.getElementById("slider"+rowId) ;
    sliderthing.scrollLeft=sliderthing.scrollLeft+500
  })

  return (
    <>
      <h2 className="text-white font-bold text-xl md:text-3xl">{title}</h2>

      <div
        className="flex relative
         items-center group"
      >
        <MdChevronLeft onClick={left}
          className="left-0 rounded-full bg-white absolute  opacity-50 hover:opacity-100 cursor-pointer z-[10] hidden group-hover:block"
          size={40}
        />
        
        <div
          id={"slider"+rowId}
          className="w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        
        <MdChevronRight onClick={right}
          className="right-0 rounded-full bg-white absolute opacity-50 hover:opacity-100 cursor-pointer z-[10] hidden group-hover:block "
          size={40}
        />
      </div>
    </>
  );
};

export default Rows;
