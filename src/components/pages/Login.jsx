import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='bg-teal-950 min-h-screen justify-evenly flex-col md:flex-row flex  items-center'>
    
    
        <img className='w-[75%] max-w-[450px] '  src="/images/login.png" alt="" />
    
    <form className='gap-3  p-2 grow max-w-[450px] grid '>
        <span className='text-3xl font-bold text-white'>INICIA SESION</span>
       <div className='flex flex-col '>
         <label htmlFor="">Name</label>
         <input className='p-2 rounded-md' type="text" />
        </div>  
        <div className='flex flex-col'>
         <label htmlFor="">email</label>
         <input className='p-2 rounded-md ' type="text" />
        </div>  
        <div className='flex flex-col'>
         <label htmlFor="">conrase;a</label>
         <input className='p-2 rounded-md' type="text" />
        </div>  
        <button className='bg-teal-500  mx-auto p-3 py-2 w-[30%] rounded-md '>Iniciar</button>
  
    </form>
    </div>
    </>
  )
}

export default Login