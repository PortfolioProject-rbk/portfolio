import { Routes, Route } from 'react-router-dom'
import Register from './login&register/Register'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
