import React from 'react'
import "./buttonsStyles.css";
import { PiHouseBold } from "react-icons/pi";
import { BsHouseFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



const ButtonToHome = () => {
  return (
    <Link to={'/'} className="animated-button absolute top-[20px] right-[20px] py-[4px]  ">
  
  <PiHouseBold  className="arr-2 text-xl" />
  <span className="text">Inicio</span>
  <span className="circle"></span>
  
  <BsHouseFill  className="arr-1 text-xl"/>
</Link>
  )
}

const ButtonLoginApp = () => {
    return (
      <div>ded</div>
    )
  }


export  {ButtonToHome,ButtonLoginApp}

