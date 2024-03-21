import React ,{useState} from 'react'
import axios from 'axios'

function Login() {

    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")

  const login = (username,password)=>{
    axios.post("http://localhost:3000/api/users/signin",{
        username:username,
        password:password
    }).then((result)=>{
        console.log(result)

        const token=result.data.token
        const id = result.data.payload.userId
        console.log(id,token)
      localStorage.setItem("token",token)
      localStorage.setItem("userId",id)
       
    }).catch((error)=>{
        console.log(error)
    })
  }

  return (
    <div>
      <div className=' flex justify-center '>
        <div  className='w-[400px]   '>

          <h1> Log in  </h1>
          <h2><input onChange={(e)=>setUsername(e.target.value)} className='form-control w-[300px] bg-[#a0a0a0] ' type="text" placeholder='username' /></h2>
          <h2><input onChange={(e)=>setPassword(e.target.value)} className='form-control w-[300px] bg-[#a0a0a0]' type="text" placeholder='password' /></h2>
          <div>
            <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>sign up </button>
            <button   onClick={()=>{login(username,password)}}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>sign in </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login