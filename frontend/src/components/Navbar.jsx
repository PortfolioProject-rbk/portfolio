import { useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

    const navItems = [
        { id: 1, title: 'Profile', path: "/profile" },
        { id: 2, title: 'Wizz', path: "/wizard" },
        { id: 3, title: 'Card', path: "/Card" },
        { id: 4, title: 'signup', path: "/register" },
        { id: 5, title: 'OneCard', path: "/OneCard" },
    ]

    return (
        <nav className="flex px-1 py-2 justify-between flex-wrap bg-slate-100 border-2">
            <div className="font-[900] text-[30px] ml-4 duration-75 text-[#E24724] cursor-pointer hover:text-[#A22F15]">
                ProPlexus
            </div>
            <div className="flex mr-[200px]">
                {navItems.map(item => (
                    <div key={item.id}
                        className="bg-[#6819E7] mx-3 shadow pt-3 px-3 text-[18px] text-[#f0f0f0] duration-75 font-[500] rounded-sm cursor-pointer hover:bg-slate-200 hover:text-[#101010]"
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
