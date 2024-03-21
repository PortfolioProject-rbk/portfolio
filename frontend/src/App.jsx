import { Routes, Route, Link ,useNavigate } from "react-router-dom";
import axios from "axios";


import AddCardProfile from "./components/AddCardProfile.jsx";
import Wizard from "./components/wizard/Index";
import Home from './components/wizard/Home';
import CardView from "./components/CardView.jsx";
import Register from "./auth/Register.jsx"
import Login from "./auth/Login.jsx";
import { useEffect } from "react";

 
function App() {
  const navigate = useNavigate()
   const token = localStorage.getItem("token");
   console.log(token,"ohrob ye taher ")
   useEffect(()=>{
    check()
   },[])

   const check = ()=>{
    if(!token){
     navigate("/login")
    }
  else if (token){
    axios.get("http://localhost:3000/api/users/" ,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((result)=>{
      console.log(result)

    }).catch((error)=>{
      navigate("/login")
      console.log(error)
      
    })
  }
   }
  return (
    <>
      <Link to="/profile">Profile </Link>
      <Link to={"/wizard"}>Wizz</Link>
      <Link to="/Card">Card</Link>
      <Link to={'/register'}>signup</Link>

      <Routes>
        <Route path="/profile" element={<AddCardProfile />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/wizard/*' element={<Wizard />} />
        <Route path="/Card" element={<CardView />} />
      </Routes>
    </>
  );
}

export default App;
