import { useState } from 'react'
import viteLogo from '/vite.svg'
import HeaderTop from './Header/HeaderTop'
import Navbar from './Header/Navbar'
import HeroMain from './Hero/HeroMain'
import HeroCourses from './Hero/HeroCourses'

function App() {
  return (
    <>
      <HeaderTop/>
      <Navbar/>
      <HeroMain/>
      <HeroCourses/>
    </>
  )
}

export default App
