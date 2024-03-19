import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const [modeAccount, setModeAccount] = useState(false)


    const handleAccount = ()=>{
        console.log('esta dando click a acount');
        setModeAccount(!modeAccount)
    }

  return (
    <div  className=' flex justify-end md:absolute md:right-0 md:top-0 p-2 bg-zinc-950'><div className='relative'>
        <FaUserCircle onClick={handleAccount} className='text-white text-3xl cursor-pointer  ' /> <Options modeAccount={modeAccount} /> </div></div>
  )
}


const Options = ({modeAccount}) => {
    const navigate = useNavigate()
    

  const handleToLogin = ()=>{
    navigate('/login')
  }  
  const handleToRegister = ()=>{
    navigate('/register')

  }

  return (
    <div className={ `${modeAccount ? 'top-[40px] opacity-100' : ' top-[-100px] opacity-0'}   bg-zinc-600 absolute right-0 p-1 rounded-md grid w-[150px] gap-2 text-white transition-all duration-500`}>
   <div onClick={handleToLogin} className=' p-2 rounded-md hover:bg-teal-500  cursor-pointer'>LOGIN</div>
   <div onClick={handleToRegister} className=' p-2 rounded-md hover:bg-zinc-500 cursor-pointer '>REGISTER</div>
 

    </div>
  )
}



export default Account