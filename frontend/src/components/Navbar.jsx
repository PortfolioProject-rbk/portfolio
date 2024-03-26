import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {

    const [portfolio, setPortfolio] = useState(null)
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        if (userId) {
            fetchPortfolio();
        }
    }, [])

    const fetchPortfolio = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/portfolio/user/' + userId)
            setPortfolio(data)
        } catch (error) {
            alert('Error fetching Portfolio ❌')
            console.log('Error fetching Portfolio ❌\n', error);
        }
    }

    const navItems = [
        { id: 0, title: '🏠 Home', path: "/" },
        { id: 1, title: '👤 Login', path: "/login" },
        { id: 1, title: '👤 Register', path: "/register" },
    ]

    const authNavItems = [
        { id: 0, title: '🏠 Home', path: "/" },
        { id: 1, title: 'Profile', path: "/profile" },
        { id: 1, title: 'Contacts', path: "/wizard/contacts" },
        { id: 1, title: 'Interests', path: "/wizard/interests" },
        { id: 1, title: 'Interests', path: "/wizard/interests" },
    ]

    return (
        <nav className="nav-bar">
            <div className="nav-logo" onClick={() => navigate('/')}>
                ProPlex
            </div>
            <div className="flex mr-auto ml-[200px]">
                {userId ?
                    authNavItems.map(item => (
                        <div key={item.id}
                            className="nav-item"
                            onClick={() => navigate(item.path)}
                        >
                            {item.title}
                        </div>
                    )) :
                    navItems.map(item => (
                        <div key={item.id}
                            className="nav-item"
                            onClick={() => navigate(item.path)}
                        >
                            {item.title}
                        </div>
                    ))
                }
            </div>

            {portfolio && <div
                style={{ backgroundImage: `url(${portfolio.photo})`, backgroundSize: 'cover' }}
                className="nav-bubble mr-11">

                <div onClick={null} className="nav-drop" >
                    <div
                        onClick={() => {
                            navigate('/edit')
                        }}
                        className="drop-item">👤 Edit Profile</div>
                    <div
                        onClick={() => {
                            localStorage.removeItem("token")
                            localStorage.removeItem("userId")
                            location.reload()
                        }}
                        className="drop-item">↪  Lougout</div>
                </div>
            </div>}
        </nav>
    )
}

export default Navbar
