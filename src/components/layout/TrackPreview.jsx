import React, { useState } from 'react'
import { toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Bounce } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { onModePlay } from '../../store/slices/tracks.slices';

const TrackPreview = ({track, likeBtn = false }) => {
  const dispatch = useDispatch()

  const handleModeMusic = ()=>{
    dispatch(onModePlay())
  }

  return (
    <div className='text-white bg-slate-400 p-2 rounded-md flex  justify-between'>
        {track?.name}
      <div className='flex'>
         {likeBtn && <Like />}
         <button onClick={handleModeMusic}>abrir music</button>
      </div>
     
    </div>
  )
}

const Like = () => {
  const [isLiked, setIsLiked] = useState(false)
 
  const handleLikeChange = (e)=>{
    toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });

    console.log(e.target  )
    setIsLiked(!isLiked)
  }
  return (
    <div className="heart-container " title="Like">
        <input onChange={handleLikeChange} checked={isLiked} type="checkbox" className="checkbox " id="Give-It-An-Id" />
            <div className="svg-container">
                <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                </svg>
                <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                </svg>
                <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
            </div>

           
        </div>
  )
}


export default TrackPreview