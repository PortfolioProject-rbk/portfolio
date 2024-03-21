import { useState } from 'react';
import axios from 'axios';

function Home() {
  const [query, setQuery] = useState('');
  const [cities] = useState(['San Francisco', 'New York', 'Chicago'])
  const [selectedCity, setSelectedCity] = useState('San Francisco')
  const [cards, setCards] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/portfolio/search', {
        query: query,
        city: selectedCity,
      });
      console.log(response.data);
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type='text'
        value={query}
        placeholder='Search...'
        onChange={(e) => setQuery(e.target.value)}
      />

      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">...</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      <button onClick={handleSearch}>Search</button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '16px' }}>
        {cards.map((card, index) => (
          <div key={index}  style={{ width: '200px', padding: '16px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', textAlign: 'center', borderRadius: '8px' }} >
            <p>{card.photo}</p>
            <p>{card.fullName}</p>
            <p>{card.city}</p>
            <p>{card.email}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
