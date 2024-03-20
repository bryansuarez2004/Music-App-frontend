import React from 'react'
import { ButtonToHome } from '../ui/Buttons'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Bounce, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <>
    <div className='bg-teal-950 min-h-screen justify-evenly flex-col md:flex-row flex  items-center pt-12'>
    
      
        <img className='w-[75%] max-w-[450px] '  src="/images/login.png" alt="" />
        <ButtonToHome />
    <FormLogin />
    </div>
    </>
  )
}



const FormLogin = () => {
 
   const {register,handleSubmit,formState} = useForm()
    const {errors} = formState



   const submitLogin = handleSubmit((data)=>{
      console.log(data);

      toast.promise(
        axios.post('http://localhost:8080/users/login',data)
      .then(({data})=>{
        localStorage.setItem('token',data.token)
          console.log(data);
      })
      .catch((err)=>console.log(err)),
        {
          pending: 'logueando ...',
          success: 'te logueaste 👌',
          error: 'ocurrio un error',
          
        }
    );


      
   })

  return (
    <form onSubmit={submitLogin} className='gap-3  p-2 grow max-w-[450px] grid '>
        <span className='text-3xl font-bold text-white'>INICIA SESION</span>
      
        <div className='flex flex-col'>
         <label htmlFor="">email</label>
         <input className='p-2 rounded-md '  {...register('email',{
          required:{
            value:true,
            message:'email es requerido'
          },

         })} type="text" />
         {errors.email && <span className='text-red-500 text-lg'>{errors.email.message}</span> }
        </div>  
        <div className='flex flex-col'>
         <label htmlFor="">conrase;a</label>
         <input className='p-2 rounded-md' {...register('password',{
          required:{
            value:true,
            message:'password es requerido'
          },

         })} type="text" />
         {errors.password && <span className='text-red-500 text-lg'>{errors.password.message}</span> }
        </div>  

        <div className=' text-gray-400'>si no tienes una cuenta creada, creala en <Link to={'/register'} className='hover:underline text-lg text-orange-400'>register</Link> </div>
        <button className='bg-teal-500  mx-auto p-3 py-2 w-[30%] rounded-md '>Iniciar</button>
    </form>
  )
}


export default Login