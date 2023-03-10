import React from 'react'
import Rows from './Rows'
import request from "./Requests"
import Top from './Top'

const Home = () => {
  return (
    <div>
        <Top/>
        <Rows rowId="1" title="Popular" fetchUrl={request.requestPopular}/>
        <Rows rowId="2" title="Top Rated" fetchUrl={request.requestToprated}/>      
        {/* <Rows title="Horror" fetchUrl={request.requestHorror}/>       */}
        <Rows rowId="3" title="Upcoming" fetchUrl={request.requestUpcoming}/>

        <Rows rowId="4" title="Trending" fetchUrl={request.requestTrending}/>      
    </div>
  )
}

export default Home

