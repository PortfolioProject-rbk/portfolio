import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import image from '../../assets/images/twitter.png'
import ContactModal from "./ContactModal";

const Contacts = () => {

    // This will contain the selected interests by the user
    // const [values, setValues] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [platform, setPlatform] = useState(null);

    useEffect(() => {
        fetchInterest();
    }, [])


    // fetch all Social Platforms
    const fetchInterest = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/SocialPlatform')
            setPlatforms(data)
        } catch (error) {
            alert('Error fetching Interests ❌')
            console.log('Error fetching Interests ❌\n', error);
        }
    }

    return (
        <div className="bg-slate-200 p-3">
            <ContactModal platform={platform} />
            <div>
                Add Contact
            </div>
            <div className="px-3 flex flex-wrap bg-slate-50 py-3">
                {platforms.map((item, i) => (
                    <div
                        onClick={() => setPlatform(item)}
                        data-bs-toggle="modal"
                        data-bs-target="#contactModal"
                        key={i}>
                        <img className="w-[100px] cursor-pointer rounded-full hover:border-4 m-2" src={image} alt="" />
                    </div>
                ))}
            </div>
            <button
                onClick={null}
                className="btn btn-primary float-end ml-5">Submit</button>
            <Link
                to={'/wizard/contacts'}
                className="btn btn-primary float-end ml-5">Finish</Link>
        </div>
    )
}

export default Contacts
