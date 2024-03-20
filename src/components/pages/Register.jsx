import React from 'react'
import { ButtonToHome } from '../ui/Buttons'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  return (
    <>
    <div className='bg-teal-950 min-h-screen justify-evenly flex-col md:flex-row flex  items-center pt-12'>
    
      
        <img className='w-[75%] max-w-[450px] '  src="/images/registerfot.png" alt="" />
        <ButtonToHome />
    <FormRegister />
    </div>
    </>
  )
}



const FormRegister = () => {
 
   const {register,handleSubmit,formState} = useForm()
    const {errors} = formState
   const submitRegister = handleSubmit((data)=>{
      axios.post('http://localhost:8080/users',{...data,age:19})
      .then(({data})=>{
          console.log('se creo un usuario');
      })
      .catch((err)=>console.log(err))


   })

  return (
    <form onSubmit={submitRegister} className='gap-3  p-2 grow max-w-[450px] grid '>
        <span className='text-3xl font-bold text-white'>Registrate</span>
      
        <div className='flex flex-col'>
         <label htmlFor="">Nombre</label>
         <input className='p-2 rounded-md '  {...register('name',{
          required:{
            value:true,
            message:'nombre es requerido'
          },

         })} type="text" />
         {errors.name && <span className='text-red-500 text-lg'>{errors.name.message}</span> }
        </div>       
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

        <div className=' text-gray-400'>si ya tienes una cuenta creada, has login en <Link to={'/login'} className='hover:underline text-lg text-orange-400'>Login</Link> </div>
        <button className='bg-teal-500  mx-auto p-3 py-2 w-[30%] rounded-md '>Registrarte</button>
    </form>
  )
}
export default Register