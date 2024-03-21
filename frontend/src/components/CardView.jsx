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
          <div className="flex justify-center mt-5">
            <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
              <div className="relative mx-auto w-36 rounded-full overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/fr/c/c4/Logo_Avatar_2.png"
                  alt=""
                />
              </div>
              <h2 className="text-center text-2xl font-semibold mt-3 outline-none border-b-2 border-gray-300">
                {card.fullName}
              </h2>
              <h3 className="text-center text-gray-600 mt-1 outline-none border-b-2 border-gray-300">
                {card.profession}
              </h3>
              <p className="text-gray-600 mt-5 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300">
                {card.bio}
              </p>
              <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                <li className="flex items-center py-3 text-sm">{card.email}</li>
                <li className="flex items-center py-3 text-sm">{card.city}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardView;
