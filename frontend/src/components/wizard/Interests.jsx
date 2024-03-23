import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Interests = ({ portfolio }) => {

    // This will contain the selected interests by the user
    const [selected, setSelected] = useState({});
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        fetchInterest();
    }, [])


    // fetch all interests
    const fetchInterest = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/interest')
            setInterests(data)
        } catch (error) {
            alert('Error fetching Interests ❌')
            console.log('Error fetching Interests ❌\n', error);
        }
    }

    // append the selected interest index from the interests array to the selected state
    const selectInterest = (index) => {
        setSelected({ ...selected, [index]: 1 })
    }

    // splice the selected interest index from the selected state
    const unselectInterest = (index) => {

        // use the callback method so i won't have to create copy of the state
        // and I can deconstruct it from the parameter
        setSelected(({ ...selected }) => {
            delete selected[index]
            return selected
        })
    }

    // submit interrests list in the database
    const submitInterests = async () => {
        try {
            // map the interest indexes to ids
            const interestIds = Object.keys(selected).map(index => interests[index].id)
            // send them to the endpoint to add them to the related portfolio
            await axios.post('http://127.0.0.1:3000/api/interest/user/' + portfolio.UserId, { interests: interestIds })
            setSelected([])
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="wizard-addons">

            {/* display all selected interests */}
            <div className="wizard-form">
                <div className="wizard-title">
                    Select Your Interrests
                </div>
                <div className="px-3 flex flex-wrap bg-slate-50 py-3">
                    {interests.map((item, i) => (
                        <div
                            onClick={() => {
                                if (selected[i]) unselectInterest(i)
                                else selectInterest(i)
                            }}
                            key={`interests${i}`}
                            className={"interest-tag" + (selected[i] ? '-selected' : '')}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="float-end">
                <Link
                    to={'/wizard'}
                    className="btn btn-primary  ml-5">Prveious</Link>
                <Link
                    onClick={submitInterests}
                    to={'/wizard/contacts'}
                    className="btn btn-primary  ml-5">Next</Link>
            </div>
        </div>
    )
}

export default Interests
