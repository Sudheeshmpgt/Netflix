import React, { useState } from 'react'
import "./Banner.css"
import {useEffect} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className="fade">
        </div>
    </div>
  )
}

export default Banner