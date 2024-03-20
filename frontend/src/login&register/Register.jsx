import React from 'react'

function Register() {
  return (
    <div>
    <div className='Card'>
      <h1> create your account  </h1>
      <h2><input type="text" placeholder='username' /></h2>
      <h2><input type="text" placeholder='password' /></h2>
      <div>
        <button>sign in </button>
        <button>sign up </button>
      </div>
    </div>
</div>
  )
}

export default Register