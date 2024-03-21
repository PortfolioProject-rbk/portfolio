import { Routes, Route, Link } from "react-router-dom";
import AddCardProfile from "./components/AddCardProfile.jsx";
import Wizard from "./components/wizard/Index";
import CardView from "./components/CardView.jsx";

function App() {
  return (
    <>
      <Link to="/profile">Profile </Link>
      <Link to={"/wizard"}>Wizz</Link>
      <Link to="/Card">Card</Link>

      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/profile" element={<AddCardProfile />} />
        <Route path="/wizard/*" element={<Wizard />} />
        <Route path="/Card" element={<CardView />} />
      </Routes>
    </>
  );
}

export default App;
