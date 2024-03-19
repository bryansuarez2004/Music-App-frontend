import React, { useEffect, useState } from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { IoLibraryOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { offModePlay } from '../../store/slices/tracks.slices';


const Aside = () => {
   const [currentSection, setCurrentSection] = useState(1)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(()=>{
       dispatch(offModePlay())
   },[currentSection])




  return (
    <div className='bg-zinc-900 p-1 fixed  bottom-0 w-full z-20 md:relative md:h-screen'>
    
    <div className='flex justify-around w-full md:justify-stretch  md:grid md:gap-3 md:pt-5'>
    <button onClick={()=>{
        navigate('/')
        setCurrentSection(1)}} className={`${ currentSection === 1 ? 'bg-zinc-700 text-white' :'text-zinc-400'}  p-3 flex hover:bg-zinc-700 items-center gap-3 hover:text-white rounded-md `}><GrHomeRounded className='text-3xl' /> <span className='hidden md:block text-lg font-semibold'>Home</span></button>
    <button onClick={()=>{
        navigate('/playlists')
        setCurrentSection(2)}} className={`${ currentSection === 2 ? 'bg-zinc-700 text-white' :'text-zinc-400'} p-3 flex gap-3 hover:bg-zinc-700 hover:text-white rounded-md `}><IoLibraryOutline className='text-3xl' /> <span className='hidden md:block text-lg font-semibold'>Playlists</span></button>
    <button onClick={()=>{
        navigate('/favorites')
        setCurrentSection(3)}} className={`${ currentSection === 3 ? 'bg-zinc-700 text-white' :'text-zinc-400'} p-3 flex gap-3 hover:bg-zinc-700 hover:text-white rounded-md `}><AiOutlineHeart className='text-3xl'/> <span className='hidden md:block text-lg font-semibold'>Favorites</span></button>
    <div className='p-3 hover:bg-zinc-700 hover:text-white rounded-md flex gap-3 text-zinc-400'><BsBookmarkPlus className='text-3xl'/> <span className='hidden md:block text-lg font-semibold'>Creando</span></div>
    </div>

    </div>
  )
}

export default Aside