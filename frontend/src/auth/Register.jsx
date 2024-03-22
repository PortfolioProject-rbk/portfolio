import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")

  console.log(username,password)

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
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Create account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                onChange={(e)=>setUsername(e.target.value)}
                  
                 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  
                </div>
              </div>
              <div className="mt-2">
                <input
                onChange={(e)=>setPassword(e.target.value)}
                 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
               onClick={()=>{create(username,password)}}
                
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
           
            </div>
          </form>

       
        </div>
      </div>
  )
}
// onChange={(e)=>setUsername(e.target.value)}
// onChange={(e)=>setPassword(e.target.value)}
// onClick={()=>{create(username,password)}}
// onClick={()=>{navigate("/login")}
export default Register


