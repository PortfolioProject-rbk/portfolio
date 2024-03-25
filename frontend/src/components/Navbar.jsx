import { useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

    const navItems = [
        { id: 1, title: 'Profile', path: "/profile" },
        { id: 2, title: 'Wizz', path: "/wizard" },
        { id: 3, title: 'Card', path: "/Card" },
        { id: 4, title: 'signup', path: "/register" },
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
            <div className="mx-3 w-[50px] h-[50px] rounded-full bg-black">
            </div>
        </nav>
    )
}

export default Navbar
