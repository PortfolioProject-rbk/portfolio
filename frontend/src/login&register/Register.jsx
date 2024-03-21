import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")


 const navigate  = useNavigate()
  

  const create = (username,password)=>{
    axios.post("http://localhost:3000/api/users/signup",{
      username:username,
      password:password
    }).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    
    <div>
      <div className=' flex justify-center '>
        <div  className='w-[400px]   '>

          <h1> create your account  </h1>
          <h2><input onChange={(e)=>setUsername(e.target.value)} className='form-control w-[300px] bg-[#a0a0a0] ' type="text" placeholder='username' /></h2>
          <h2><input onChange={(e)=>setPassword(e.target.value)} className='form-control w-[300px] bg-[#a0a0a0]' type="text" placeholder='password' /></h2>
          <div>
            <button onClick={()=>{create(username,password)}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>sign up </button>
            <button   onClick={()=>{navigate("/login")}}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>sign in </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register