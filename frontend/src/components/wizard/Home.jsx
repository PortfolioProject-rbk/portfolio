import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [selectedCity, setSelectedCity] = useState("San Francisco");
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [portfolio, setPortfolio] = useState([]);
  // const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchAllCards();
  }, []);

  const fetchAllCards = () => {
    axios
      .get("http://localhost:3000/api/portfolio")
      .then((response) => {
        setPortfolio(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSuggesHandler = (query) => {
    setQuery(query);
    setSuggestions([]); //clear suggestions when suggestion is clicked
  };
  const onChangeHandler = (query) => {
    let matches = []; //array to hold matching result
    if (query.length > 0) {
      matches = portfolio.filter((user) => {
        // console.log(user,'gggg');
        const regex = new RegExp(`${query}`, "gi"); // expression to match the query
        return user.fullName.match(regex); // check if the user fullName matche the experssion
      });
    }
    console.log("matches", matches);
    setSuggestions(matches);
    setQuery(query); // update the query with the current ipnut
  };

  const cities = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/search",
        {
          query,
          city: selectedCity,
        }
      );
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Background image style
  const heroBackgroundStyle = {
    backgroundImage: `url('/images/bgImage.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  // My Trends
  const trends = [
    { id: 1, fullName: "dev", photo: "" },
    { id: 2, fullName: "Chef", photo: "" },
    { id: 3, fullName: "engineer", photo: "" },
    { id: 4, fullName: "Data Scientist", photo: "" },
    { id: 5, fullName: "Content Writer", photo: "" },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-transparent shadow-md py-4">
        <div className="container mx-auto flex justify-center items-center">
          <img
            src="images/pro.png"
            alt="ProPlex Logo"
            className="h-16 md:h-24"
          />
        </div>
      </header>

      {/* Hero Section  */}
      <div
      // style={heroBackgroundStyle}
      // className="query-white flex justify-center items-center h-[500px]"
      >
        <div className="p-6 bg-[#0101018a] rounded-lg">
          <h1 className="query-6xl font-bold mb-6">
            Discover Professionals near you
          </h1>
          {/* Search bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              value={query}
              placeholder="What are you looking for?"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={(e) => onChangeHandler(e.target.value)}
            />
            {suggestions &&
              suggestions.map((suggestion, i) => {
                return (
                  <div
                    onClick={() => {
                      onSuggesHandler(suggestion.fullName);
                    }}
                    key={i}
                  >
                    {suggestion.fullName}
                  </div>
                );
              })}

            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value={""}>...</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <button
              className="px-6 py-2 bg-orange-500 query-white rounded-md hover:bg-orange-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Trend Cards  */}
      <div className="container mx-auto py-16">
        <h2 className="query-3xl font-bold query-center query-black mb-10">
          DISCOVER Trends
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {trends.map((trend) => (
            <div
              key={trend.id}
              className="bg-white rounded-lg shadow-lg p-4 query-center mb-4"
            >
              <img src={trend.photo} className="mx-auto mb-4 h-20 w-20" />
              <h3 className="font-bold query-gray-800">{trend.fullName}</h3>
            </div>
          ))}
        </div>
      </div>

      {/*  Cards */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card, index) => (
            <Link to={`/OneCard/${card.id}`} key={index} state={{ data: card }}>
              <div className="card">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg"
                  alt={card.photo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold query-lg mb-2">{card.fullName}</h3>
                  <p className="query-gray-600 query-sm">{card.city}</p>
                  <p className="query-gray-600 query-sm">{card.email}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
