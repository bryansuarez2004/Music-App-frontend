import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTracksHome } from '../../store/slices/tracks.slices'
import TrackPreview from './TrackPreview'

const TrackList = () => {
   const dispatch = useDispatch()
    const {tracksHome}=useSelector((store)=>store.tracks)

  useEffect(()=>{
    axios.get('http://localhost:8080/tracks')
    .then(({data})=>{
        dispatch(setTracksHome(data))
    })
    .catch((err)=>console.log(err))
  },[])

  return (
    <div className='grid gap-3 p-5 max-w-[660px]'>
       
        {tracksHome.map((track)=>{
        return <TrackPreview key={track.id} track={track} likeBtn />
        })}
    </div>
  )
}

export default TrackList