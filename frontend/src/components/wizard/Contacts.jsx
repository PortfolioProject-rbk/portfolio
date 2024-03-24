import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import ContactModal from "./ContactModal";

const Contacts = ({ portfolio, fetchPortfolio }) => {

    const [platforms, setPlatforms] = useState([]);
    const [platform, setPlatform] = useState(null);

    useEffect(() => {
        fetchContacts();
    }, [])


    // fetch all Social Platforms
    const fetchContacts = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/SocialPlatform')
            setPlatforms(data)
        } catch (error) {
            alert('Error fetching Interests ❌')
            console.log('Error fetching Interests ❌\n', error);
        }
    }

    // submit contact to database
    const submitContact = async (platformId, value) => {
        try {
            await axios.post('http://127.0.0.1:3000/api/SocialPlatform/user/' + portfolio.UserId, { platformId, value })
            fetchPortfolio()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="wizard-addons">
            <div className="wizard-form bg-slate-100">

                <ContactModal platform={platform} submitContact={submitContact} />
                <div className="border-2 rounded bg-white min-h-[60px] py-[5px] px-3 flex flex-wrap">
                    {portfolio.Contacts && portfolio.Contacts.map(item => (
                        <div key={item.id} className="rounded-full mx-2 w-[50px] h-[50px">
                            <img src={`http://127.0.0.1:3000/socials/${item.icon}`} alt="" />
                        </div>
                    )
                    )}
                </div>
                <div className="wizard-title">
                    Add Contact
                </div>
                <div className="px-3 flex flex-wrap py-3 overscroll-contain overflow-y-scroll rounded bg-white max-h-[400px]">
                    {platforms.map((item) => (
                        <div
                            className="wizard-social"
                            onClick={() => setPlatform(item)}
                            data-bs-toggle="modal"
                            data-bs-target="#contactModal"
                            key={'platform' + item.id}>
                            <img className="wizard-social-image" src={`http://127.0.0.1:3000/socials/${item.icon}`} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="float-end mx-3 my-4 text-[18px] shadow-lg">
                <Link
                    to={'/OneCard'}
                    className="primary-button">Finish ✅</Link>
            </div>
        </div>
    )
}

export default Contacts
