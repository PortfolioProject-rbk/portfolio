import React from 'react'

function Register() {
  return (
    <div>
    <div className=' flex justify-center '>
      <h1> create your account  </h1>
      <h2><input className='form-control w-[300px] bg-[#a0a0a0] ' type="text" placeholder='username' /></h2>
      <h2><input className='form-control w-[300px] bg-[#a0a0a0]' type="text" placeholder='password' /></h2>
      <div>
        <button>sign in </button>
        <button>sign up </button>
      </div>
    </div>
</div>
  )
}

export default Register