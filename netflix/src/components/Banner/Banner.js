import React, { useEffect } from 'react'
import {API_KEY} from '../../constants/constant'
import axios from '../../axios'
import './Banner.css';
useEffect(()=>{
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)

},[])
function Banner() {
  return (
    <div className='banner'> 
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</h1>
      </div>
      <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
