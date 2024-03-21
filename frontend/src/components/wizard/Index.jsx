import { useEffect, useState } from "react"
import axios from 'axios'

const Wizard = () => {

    const [interests, setInterests] = useState([]);
    // This will contain the selected interests by the user
    const [selected, setSelected] = useState([]);

    // fetch all interests on render
    useEffect(() => {
        fetchInterest();
    }, [])

    //? set static portfolio for now it'll be dynamic later (pending token handling)
    const portfolio = {
        "fullName": "Rachel Turner",
        "email": "rachel@example.com",
        "profession": "Chef",
        "bio": "Creating culinary delights that delight the senses and inspire.",
        "city": "Portland",
        "photo": "rachel_photo.jpg",
        "backgroundImage": "background_image.jpg",
        "UserId": 10
    }

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
                    </div>
                </div>
            </div>

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
            </div>
        </div>
    )
}

export default Wizard
