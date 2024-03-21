
import Register from './login&register/Register'
import Login from './login&register/Login'
import { Routes, Route, Link } from 'react-router-dom'
import Wizard from './components/wizard/Index'
function App() {

  

  return (
    <>
      <Link to={'/wizard'}>Wizz</Link>
      <Link to={'/register'}>signup</Link>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<h1>Welcome</h1>} />
        <Route path='/wizard/*' element={<Wizard />} />
      </Routes>
    </>

  )
}

export default App
