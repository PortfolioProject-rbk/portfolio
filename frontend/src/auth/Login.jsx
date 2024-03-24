import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { id } = useParams();
  const navigate = useNavigate()

  
  const login = async (username, password) => {
    try {
      const result = await axios.post("http://localhost:3000/api/users/signin", {
        username: username,
        password: password
      })
      const token = result.data.token
      const id = result.data.payload.userId
      localStorage.setItem("token", token)
      localStorage.setItem("userId", id)
      const Portfolio = await axios.get(`http://localhost:3000/api/portfolio/user/${id}`)   // to get the profile  of an user 
      if (!Portfolio.data) {                /// if the user has no profile he needs to  create a profile 
        navigate("/wizard")
      }
      else if (Portfolio.data) {               /// if  the user has a profile he will be directed to it 
        navigate("/OneCard",{state:{data:Portfolio.data}})
      }
    } catch (error) {
      console.log(error)

    }
  }



  return (
    <div    className="  pb-[80px] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ml-[500px] bg-neutral-400">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
       connect your account
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
           onClick={()=>{login(username,password)}}
            
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Log in 
          </button>
       
        </div>
      </form>

   
    </div>

<div>
 <img src="https://img.freepik.com/premium-vector/internet-connection-abstract-sense-science_41981-1384.jpg" alt="" />
</div>

  </div>
  )
  // onChange={(e) => setUsername(e.target.value)}
  // onChange={(e) => setPassword(e.target.value)}
  // onClick={() => { login(username, password) }}
}

export default Login