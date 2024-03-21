import { Routes, Route, Link } from 'react-router-dom'
import Wizard from './components/wizard/Index'
import Home from './components/wizard/Home'
function App() {

  return (
    <>
      <Link to={'/wizard'}>Wizz</Link>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wizard/*' element={<Wizard />} />
      </Routes>
    </>
  )
}

export default App
