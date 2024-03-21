import { Routes, Route, Link } from "react-router-dom";
import AddCardProfile from "./components/AddCardProfile.jsx";
import Wizard from "./components/wizard/Index";

function App() {
  return (
    <>
      <Link to="/profile">Profile </Link>
      <Link to={"/wizard"}>Wizz</Link>
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/profile" element={<AddCardProfile />} />
        <Route path="/wizard/*" element={<Wizard />} />
      </Routes>
    </>
  );
}

export default App;
