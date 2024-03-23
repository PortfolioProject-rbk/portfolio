import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import ContactModal from "./ContactModal";

const Contacts = ({ portfolio }) => {

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
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="wizard-addons">
            <div className="wizard-form">

                <ContactModal platform={platform} submitContact={submitContact} />
                <div className="wizard-title">
                    Add Contact
                </div>
                <div className="px-3 flex flex-wrap bg-slate-50 py-3">
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
            <div className="float-end">
                <Link
                    to={'/OneCard'}
                    className="btn btn-primary  ml-5">Finish</Link>
            </div>
        </div>
    )
}

export default Contacts
