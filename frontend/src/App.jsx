import { Routes, Route, Link } from 'react-router-dom'
import Wizard from './components/wizard/Index'
function App() {

  return (
    <>
      <Link to={'/wizard'}>Wizz</Link>
      <Routes>
        <Route path='/' element={<h1>Welcome</h1>} />
        <Route path='/wizard/*' element={<Wizard />} />
      </Routes>
    </>
  )
}

export default App
