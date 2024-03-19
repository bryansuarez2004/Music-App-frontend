import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { offModePlay } from '../../store/slices/tracks.slices'

const ListenTracks = () => {
   const {modePlay}=useSelector((store)=>store.tracks)
    const dispatch = useDispatch()
  
  const handleOffModeMusic = ()=>{
    dispatch(offModePlay())
  }
  
   console.log(modePlay);
  return (
    <div className={`${modePlay ? 'translate-x-0 ' : 'translate-x-[100%]' }  fixed md:w-[25vw] bg-red-50 top-0 right-0 w-screen h-screen transition-all  duration-500 `}>ListenTracks
    
     <button onClick={handleOffModeMusic}>cerrar escuchar musica</button>
    </div>
  )
}

export default ListenTracks