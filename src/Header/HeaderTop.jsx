import React from 'react'
import Arrow from "../images/icons/right-vector.svg"

const HeaderTop = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="header__top bg-orange-400 flex justify-center items-center gap-6 py-3 mt-5 rounded-lg">
          <h1 className='text-white'>Free Courses 🌟 Sale Ends Soon, Get It Now</h1>
          <img className='' src={Arrow} alt="Right Arrow" />
        </div>
      </div>
    </div>
  )
}

export default HeaderTop