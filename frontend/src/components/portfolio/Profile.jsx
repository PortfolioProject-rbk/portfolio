import axios from "axios";
import { useEffect, useState } from "react";

import '../../assets/style/particles.scss'

const Profile = () => {

    const particles = new Array(100).fill(null);

    const [portfolio, setPortfolio] = useState(null)
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        fetchPortfolio();
    }, [])

    const fetchPortfolio = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/portfolio/user/' + userId)
            setPortfolio(data)
        } catch (error) {
            alert('Error fetching Portfolio ❌')
            console.log('Error fetching Portfolio ❌\n', error);
        }
    }

    return (
        <div
            className="flex justify-center mt-2 mx-auto font-[Overpass]">
            <div id="particle-container">
                {particles.map((_, index) => (
                    <div key={index} className="particle"></div>
                ))}
            </div>
            {portfolio ?
                <div className="w-[700px] mx-auto my-3 rounded border-2 overflow-hidden shadow-md bg-white">
                    <div
                        style={{ backgroundImage: `url(${portfolio.backgroundImage})`, backgroundSize: 'cover' }}
                        className="flex justify-center items-center bg-gray-100">
                        <img
                            src={portfolio.photo}
                            alt=""
                            className="w-36 h-36 rounded-full translate-y-[50px]"
                        />
                    </div>
                    <div className="p-3 mt-[50px]">
                        <h2 className="text-center text-2xl mt-3 text-orange-400 font-bold">{portfolio.fullName}</h2>
                        <h3 className="text-center text-gray-600 mt-1 font-medium">{portfolio.profession}</h3>
                        {/* <p className="text-gray-600 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, lacus a euismod tincidunt, dui est efficitur quam, in venenatis ligula ex id urna. Nunc nec eleifend libero. Nam tincidunt dui id justo aliquet, id dictum urna laoreet. Nam nec ante et nulla egestas posuere ut ac risus. Nullam gravida ipsum vel tristique feugiat. Nam sed fermentum ligula. Vivamus fermentum, nulla et sodales condimentum, elit arcu pharetra magna, nec vehicula mi lorem et ex.</p> */}
                        <div className="grid grid-cols-2 mt-2 divide-x">
                            <div className="mt-4 px-3 text-[18px]">
                                <ul className="divide-y">
                                    <div className="flex items-center">

                                        <li className="text-gray-700">📧 {portfolio.email}</li>
                                    </div>
                                    <div className="flex items-center mt-2 pt-3">
                                        <li className="text-gray-600">📍 {portfolio.city}</li>
                                    </div>
                                </ul>
                            </div>
                            <div className="px-3 flex flex-wrap py-3">
                                {portfolio.Interests.map((item, i) => (
                                    <div
                                        key={`interests${i}`}
                                        className={"interest-tag"}>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid gap-1 grid-cols-2 mt-2 divide-x">

                            <p className="text-gray-600 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300">
                                {portfolio.bio}
                            </p>
                            <div className="user-socials py-3">
                                {portfolio.Contacts && portfolio.Contacts.map(item => (
                                    <div key={item.id} className="user-social">
                                        <img src={`http://127.0.0.1:3000/socials/${item.icon}`} alt="" />
                                        <div className="user-contact">{item.Contact.value}</div>
                                    </div>
                                )
                                )}
                            </div>
                        </div>
                    </div>
                </div> : ''
            }
        </div >
    );
}

export default Profile
