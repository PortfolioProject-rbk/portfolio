import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Interests = ({ portfolio }) => {

    // This will contain the selected interests by the user
    const [selected, setSelected] = useState([]);
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
        setSelected([...selected, index])
    }

    // splice the selected interest index from the selected state
    const unselectInterest = (index) => {

        // use the callback method so i won't have to create copy of the state
        // and I can deconstruct it from the parameter
        setSelected(([...selected]) => {
            selected.splice(index, 1)
            return selected
        })
    }

    // submit interrests list in the database
    const submitInterests = async () => {
        try {
            // map the interest indexes to ids
            const interestIds = selected.map(index => interests[index].id)
            // send them to the endpoint to add them to the related portfolio
            await axios.post('http://127.0.0.1:3000/api/interest/user/' + portfolio.UserId, { interests: interestIds })
            setSelected([])
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-slate-200 p-3">

            <div>
                Selected Interests Box
            </div>
            {/* display all selected interests */}
            <div className="px-3 flex flex-wrap bg-slate-50 py-3">
                {/* 
                        since i have an array (selected) containing the index of the selected interests from the interests list/steate,
                        I can map on it and display item from the interest list of the corresponding index
                    */}
                {selected.map((index, i) => (
                    <div
                        onClick={() => (unselectInterest(i))}
                        key={`selected${i}`}
                        className="py-1 px-3 m-1 rounded-xl cursor-pointer bg-orange-200 hover:bg-orange-300">
                        {interests[index].name}
                        <span className="font-[900]"> +</span>
                    </div>
                ))}
            </div>

            <div>
                Interests List Box
            </div>
            <div className="px-3 flex flex-wrap bg-slate-50 py-3">
                {interests.map((item, i) => (
                    selected.includes(i) ?
                        '' :
                        <div
                            onClick={() => (selectInterest(i))}
                            key={`interests${i}`}
                            className="py-1 px-3 m-1 rounded-xl cursor-pointer bg-orange-200 hover:bg-orange-300">
                            {item.name}
                            <span className="font-[900]"> +</span>
                        </div>
                ))}
            </div>
            <button
                onClick={submitInterests}
                className="btn btn-primary float-end ml-5">Submit</button>
            <Link
                to={'/wizard/contacts'}
                className="btn btn-primary float-end ml-5">Next</Link>
        </div>
    )
}

export default Interests
