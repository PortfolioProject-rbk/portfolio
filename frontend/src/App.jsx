import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


import AddCardProfile from "./components/portfolio/AddCardProfile.jsx";
import Wizard from "./components/wizard/Index";
import Home from './components/wizard/Home';
import Register from "./auth/Register.jsx"
import Login from "./auth/Login.jsx";
import CardView from "./components/portfolio/CardView.jsx";
import Card from "./components/portfolio/Card.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  // console.log(token)

  axios.interceptors.request.use(config => {

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });


  useEffect(() => {
    check()
  }, [])

  const check = () => {
    if (!token) {
      navigate("/login")
    }
    else if (token) {
      axios.get("http://localhost:3000/api/users/").then((result) => {
        console.log(result)

      }).catch((error) => {
        navigate("/login")
        console.log(error)

      })
    }
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<AddCardProfile />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wizard/*' element={<Wizard />} />
        <Route path="/Card" element={<CardView />} />
        <Route path="/OneCard" element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
