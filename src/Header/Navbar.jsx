import React from 'react'
import Logo from "../images/logos/navbar-logo.svg"

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto px-[130px]">
        <div className="navbar flex justify-between items-center mt-5">
          <div className="navbar__left items-center flex  gap-12 ">
            <img src={Logo} alt="SiteLogo" />

            <ul className='flex gap-6'>
              <li><a className='hover:py-3 hover:px-5 transition-all duration-1000 hover:bg-custom-color rounded-lg text-base font-normal leading-150' href="#">Home</a></li>
              <li><a className='hover:py-3 hover:px-5 transition-all duration-1000 hover:bg-custom-color rounded-lg text-base font-normal leading-150' href="#">Courses</a></li>
              <li><a className='hover:py-3 hover:px-5 transition-all duration-1000 hover:bg-custom-color rounded-lg text-base font-normal leading-150' href="#">About Us</a></li>
              <li><a className='hover:py-3 hover:px-5 transition-all duration-1000 hover:bg-custom-color rounded-lg text-base font-normal leading-150' href="#">Pricing</a></li>
              <li><a className='hover:py-3 hover:px-5 transition-all duration-1000 hover:bg-custom-color rounded-lg text-base font-normal leading-150' href="#">Contact</a></li>
            </ul>
          </div>

          <div className="navbar__right flex gap-7">
            <button>Sign Up</button>
            <button className='bg-orange-400 text-white px-8 py-4 rounded-lg text-base font-normal leading-150'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar