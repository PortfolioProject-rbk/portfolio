import React from "react";

const Card = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Card;
