import { Routes, Route, Link } from "react-router-dom";
import AddCardProfile from "./components/AddCardProfile.jsx";
import Wizard from "./components/wizard/Index";
import Home from './components/wizard/Home';

function App() {
  return (
    <>
      <Link to="/profile">Profile </Link>
      <Link to={"/wizard"}>Wizz</Link>
      <Routes>
        <Route path="/profile" element={<AddCardProfile />} />
        <Route path='/' element={<Home />} />
        <Route path='/wizard/*' element={<Wizard />} />
      </Routes>
    </>
  );
}

export default App;
