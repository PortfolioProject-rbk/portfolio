import { useEffect, useState } from "react"
import axios from 'axios'
import { Route, Routes } from "react-router-dom";
import Interests from "./Interests";
import Contacts from "./Contacts";
import ProfileForm from "./Profile";
import Spinner from "../Spinner";
import Profile from "../portfolio/Profile";

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
                            <div className="px-2 border-0 ">
                                <Profile small={true} />
                            </div>
                            <Routes>
                                <Route path="/interests" element={<Interests portfolio={portfolio} />} />
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
