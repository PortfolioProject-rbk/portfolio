import { useState } from "react";
import axios from "axios";

function Home() {
    const [query, setQuery] = useState('');
    const [cities] = useState(["San Francisco", "New York", "Chicago"]);
    const [selectedCity, setSelectedCity] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/portfolio/search', {
                query: query,
                city: selectedCity
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />

            <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Home;
