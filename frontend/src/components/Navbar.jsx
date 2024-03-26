import { useNavigate } from "react-router-dom"
import { useState } from "react"
const Navbar = () => {

    const navigate = useNavigate()

    const navItems = [
        { id: 0, title: '🏠 Home', path: "/" },
        { id: 1, title: '👤 Profile', path: "/profile" },
    ]

    const dropItems = [
        { id: 1, title: '👤 Profile', path: "/profile" },
        { id: 0, title: '🏠 Lougout', path: "/" },
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
                className="nav-bubble">
                <div onClick={null} className="nav-drop" >
                    <div
                        onClick={() => {
                        }}
                        className="drop-item">Edit Profile</div>
                    <div
                        onClick={() => {
                            localStorage.removeItem("token")
                            location.reload()
                        }}
                        className="drop-item">Lougout</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
