import { useEffect, useState } from "react"
import axios from 'axios'

const Wizard = () => {

    const [interests, setInterests] = useState([]);
    const [selected, setSelected] = useState({});

    useEffect(() => {
        fetchInterest();
    }, [])

    const fetchInterest = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/interest')
            setInterests(data)
        } catch (error) {
            alert('Error fetching Interests ❌')
            console.log('Error fetching Interests ❌\n', error);
        }
    }

    const selectInterest = (index) => {
        setSelected({ ...selected, [index]: interests[index].name })
    }

    return (
        <div className="grid grid-cols-[1fr_2fr]">

            {/* // Todo: This will take the initial profile card with basic infos */}
            <div className="bg-slate-400">

            </div>

            <div className="bg-slate-200 p-3">

                Selected Interests Box
                <div className="px-3 flex flex-wrap bg-slate-50 py-3">
                    {Object.entries(selected).map(([index, name]) => (
                        <div key={index} className="py-1 px-3 m-1 rounded-xl cursor-pointer bg-orange-200 hover:bg-orange-300">
                            {name}
                            <span className="font-[900]"> +</span>
                        </div>
                    ))}
                </div>

                Interests List Box
                <div className="px-3 flex flex-wrap bg-slate-50 py-3">
                    {interests.map((item, i) => (
                        selected[i] ?
                            <></> :
                            <div
                                onClick={() => (selectInterest(i))}
                                key={i}
                                className="py-1 px-3 m-1 rounded-xl cursor-pointer bg-orange-200 hover:bg-orange-300">
                                {item.name}
                                <span className="font-[900]"> +</span>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wizard
