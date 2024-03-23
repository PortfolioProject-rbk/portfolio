import React, { useEffect, useState } from "react";
import axios from "axios";
const CardView = () => {
  const [Cards, setCards] = useState([]);
  const [sucess, setSucess] = useState(false);

  useEffect(() => {
    fetchAllCards();
  }, [sucess]);
  const fetchAllCards = () => {
    axios
      .get("http://localhost:3000/api/portfolio")
      .then((response) => {
        setCards(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(Cards);
  return (
    <div>
      {Cards.map((card, key) => {
        return (
          <div className="flex flex-wrap justify-between px-10 pb-10">
            <div className="max-w-xl mx-auto my-10 rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105">
              <div className="flex justify-center items-center h-24 bg-gray-100">
                <img
                  src={card.photo}
                  alt=""
                  className="object-cover w-20 h-20 rounded-full"
                />
              </div>
              <div className="p-6">
          <h2 className="text-center text-2xl mt-3 text-orange-400 font-bold">{card.fullName}</h2>
          <h3 className="text-center text-gray-600 mt-1 font-medium">{card.profession}Profession</h3>
          <p className="text-gray-600 mt-3">{card.bio}</p>
          <div className="mt-4">
            <ul>
            <div className="flex items-center">
              
              <li className="text-gray-600"> {card.email}</li> 
            </div>
            <div className="flex items-center mt-2">
              <li className="text-gray-600"> {card.city}</li> 
            </div>
            </ul>
           
          </div>
        </div>
      </div>
    </div>
        );
      })}
    </div>
  );
};

export default CardView;
