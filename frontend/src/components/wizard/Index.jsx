import { useEffect, useState } from "react"
import axios from 'axios'
import { Route, Routes } from "react-router-dom";
import Interests from "./Interests";
import Contacts from "./Contacts";
import ProfileForm from "./Profile";
import Spinner from "../Spinner";

const Wizard = () => {

    const [portfolio, setPortfolio] = useState(null);

    // fetch portfolio on render
    useEffect(() => {
        fetchPortfolio();
    }, [])

    const fetchPortfolio = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/portfolio/user/' + localStorage.getItem('userId'))
            setPortfolio(data)
        } catch (error) {
            alert('Error fetching Portfolio ❌')
            console.log('Error fetching Portfolio ❌\n', error);
        }
    }


    return (
        <Routes className>

            <Route path="/" element={<ProfileForm setPortfolio={setPortfolio} />} />

            <Route path="/*" element={
                !portfolio ?
                    <Spinner /> :
                    <>
                        <div className="wizard-grid">

                            {/* // Todo: This will take the initial profile card with basic infos */}
                            <div className="px-2 border-2 border-[black]">
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
                                            {portfolio.Interests ? portfolio.Interests.map(item => <div key={'interest' + item.id} className="bg-[#e0e0e0]">{item.name}</div>) : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Routes>
                                <Route path="/inter" element={<Interests portfolio={portfolio} />} />
                                <Route path="/contacts" element={<Contacts portfolio={portfolio} fetchPortfolio={fetchPortfolio} />} />
                            </Routes>

                        </div>
                    </>
            }
            />

        </Routes>
    )
}

export default Wizard
