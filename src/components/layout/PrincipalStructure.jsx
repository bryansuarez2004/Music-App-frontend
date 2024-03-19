import React from 'react'
import { useSelector } from 'react-redux'
import Aside from './Aside'
import Account from './Account'
import { Outlet } from 'react-router-dom'
import ListenTracks from './ListenTracks'

const PrincipalStructure = () => {

    const {modePlay}=useSelector((store)=>store.tracks)
  return (
    <>
     <div className={`${modePlay?'md:w-[75vw]':'w-full'}  md:grid  md:grid-cols-[1fr,4fr] transition-all duration-500 relative`}>
   <Aside/>
    <Account />
    <Outlet/>

    </div>
    <ListenTracks />
    </>
  )
}

export default PrincipalStructure