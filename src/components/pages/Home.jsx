import React from 'react'
import Search from '../layout/Search'
import { useDispatch } from 'react-redux'
import { onModePlay } from '../../store/slices/tracks.slices'
import TrackList from '../layout/TrackList'

const Home = () => {
  const dispatch = useDispatch()

    const handleModeMusic = ()=>{
        dispatch(onModePlay())
    }

  return (
    <div className='bg-zinc-950 w-full min-h-screen text-white ' >
      
     <Search/>
     <TrackList/>
     
   
     
    {/* <button onClick={handleModeMusic}>escuchar music</button> */}
    </div>
  )
}

export default Home