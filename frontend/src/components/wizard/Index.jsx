import { useEffect, useState } from "react"
import axios from 'axios'
import { Route, Routes, Link } from "react-router-dom";
import AddCardProfile from "../portfolio/AddCardProfile";
import Interests from "./Interests";
import Contacts from "./Contacts";

const Wizard = () => {

    const [portfolio, setPortfolio] = useState({});

    // fetch all interests on render
    useEffect(() => {
        fetchPortfolio();
    }, [])

    //? set static portfolio for now it'll be dynamic later (pending token handling)
    const fetchPortfolio = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/portfolio/user/10')
            setPortfolio(data)
        } catch (error) {
            alert('Error fetching Portfolio ❌')
            console.log('Error fetching Portfolio ❌\n', error);
        }
    }


    return (
        <Routes>
            <Route path="/" element={
                <div className="flex justify-center bg-slate-400">
                    <div className="p-2 px-5 bg-slate-100">
                        <AddCardProfile />
                        <Link className="btn btn-primary" to={'/wizard/inter'}>Next</Link>
                    </div>
                </div>
            } />

            <Route path="/*" element={
                <div className="grid grid-cols-[1fr_2fr]">

                    {/* // Todo: This will take the initial profile card with basic infos */}
                    <div className="bg-slate-400">
                        <div className="flex justify-center mt-5">
                            <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
                                <div className="relative mx-auto w-36 rounded-full overflow-hidden">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/fr/c/c4/Logo_Avatar_2.png"
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-center text-2xl font-semibold mt-3 outline-none border-b-2 border-gray-300">
                                    {portfolio.fullName}
                                </h2>
                                <h3 className="text-center text-gray-600 mt-1 outline-none border-b-2 border-gray-300">
                                    {portfolio.profession}
                                </h3>
                                <p className="text-gray-600 mt-5 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300">
                                    {portfolio.bio}
                                </p>
                                <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                                    <li className="flex items-center py-3 text-sm">{portfolio.email}</li>
                                    <li className="flex items-center py-3 text-sm">{portfolio.city}</li>
                                </ul>
                                <div>
                                    {portfolio.Interests ? portfolio.Interests.map(item => <div key={item.id} className="bg-[#e0e0e0]">{item.name}</div>) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/inter" element={<Interests portfolio={portfolio} />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>


                </div>
            } />

        </Routes>
    )
}

export default Wizard
