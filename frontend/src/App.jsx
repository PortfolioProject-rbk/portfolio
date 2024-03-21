import { Routes, Route,Link } from "react-router-dom";
import AddCardProfile from "./components/AddCardProfile.jsx";
function App() {
  return (
    <>
    <Link to="/profile">Profile </Link>
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/profile" element={<AddCardProfile />} />
      </Routes>
    </>
  );
}

export default App;
