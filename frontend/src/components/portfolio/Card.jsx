import React from "react";

const Card = () => {
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <div className="relative mx-auto w-36 rounded-full overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pVWhgXilxQ894sH6mDq-V-oDhoPLEYWUd7m-fh4f0lZIzzGeLaUEObGOsMouGlRA0XM&usqp=CAU"
              alt=""
            />
          </div>
          <h2 className="text-center text-2xl font-semibold mt-3 outline-none border-b-2 border-gray-300">
            fullName
          </h2>
          <h3 className="text-center text-gray-600 mt-1 outline-none border-b-2 border-gray-300">
            profession
          </h3>
          <p className="text-gray-600 mt-5 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300">
            bio
          </p>
          <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li className="flex items-center py-3 text-sm">email</li>
            <li className="flex items-center py-3 text-sm">city</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
