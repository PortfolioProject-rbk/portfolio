import React from "react";
import { useLocation,useParams } from "react-router-dom";
const Card = () => {
  const { state } = useLocation();
  const { id } = useParams()
  const { porfolio } = state;
  console.log(state)
  return (
    <div className="flex justify-center mt-5">
      <div className="max-w-xl mx-auto my-10 rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105">
        <div className="flex justify-center items-center h-24 bg-gray-100">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pVWhgXilxQ894sH6mDq-V-oDhoPLEYWUd7m-fh4f0lZIzzGeLaUEObGOsMouGlRA0XM&usqp=CAU"
            alt=""
            className="object-cover w-20 h-20 rounded-full"
          />
        </div>
        <div className="p-6">
          <h2 className="text-center text-2xl mt-3 text-orange-400 font-bold">Full Name</h2>
          <h3 className="text-center text-gray-600 mt-1 font-medium">Profession</h3>
          {/* <p className="text-gray-600 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, lacus a euismod tincidunt, dui est efficitur quam, in venenatis ligula ex id urna. Nunc nec eleifend libero. Nam tincidunt dui id justo aliquet, id dictum urna laoreet. Nam nec ante et nulla egestas posuere ut ac risus. Nullam gravida ipsum vel tristique feugiat. Nam sed fermentum ligula. Vivamus fermentum, nulla et sodales condimentum, elit arcu pharetra magna, nec vehicula mi lorem et ex.</p> */}
          <div className="mt-4">
            <ul>
              <div className="flex items-center">

                <li className="text-gray-600"> Email</li>
              </div>
              <div className="flex items-center mt-2">
                <li className="text-gray-600"> City</li>
              </div>
            </ul>
          </div>
          <h2 className="text-center text-2xl font-semibold mt-3 outline-none border-b-2 border-gray-300">
            {state.data.fullName}
          </h2>
          <h3 className="text-center text-gray-600 mt-1 outline-none border-b-2 border-gray-300">
            {state.data.profession}
          </h3>
          <p className="text-gray-600 mt-5 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300">
            {state.data.bio}
          </p>
          <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li className="flex items-center py-3 text-sm">{state.data.email}</li>
            <li className="flex items-center py-3 text-sm">{state.data.city}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
