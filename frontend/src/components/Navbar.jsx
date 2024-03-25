import { useNavigate } from "react-router-dom"
 import React, {useState} from "react"
const Navbar = () => {
    

    const [hover, setHover] = useState(false)
    const navigate = useNavigate()

    const navItems = [
        { id: 1, title: '👤 Profile', path: "/profile" },
        { id: 2, title: 'Wizz', path: "/wizard" },
        { id: 3, title: 'Card', path: "/Card" },
        { id: 4, title: 'signup', path: "/register" },
        { id: 5, title: 'Edit', path: "/edit" },
        { id: 5 , title:'login', path:"/login" }
    ]

    return (
        <nav className="nav-bar">
            <div className="nav-logo" onClick={() => navigate('/')}>
                ProPlex
            </div>
            <div className="flex mr-[200px]">
                {navItems.map(item => (
                    <div key={item.id}
                        className="nav-item"
                        onClick={() => navigate(item.path)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            <div onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}   
            className="mx-3 w-[50px] h-[50px] rounded-full bg-black">
                {hover ? <button onClick={()=>
                {
                    localStorage.removeItem("token")
                    location.reload()
            }} className="w-[200px] h-[100px] bg-gray-700 absolute right-0 top-[60px]" >logout</button> : "" }
            </div>
        </nav>
    )
}

export default Navbar
