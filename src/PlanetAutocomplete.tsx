import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

interface Planet {
  name: string;
}

const PlanetAutocomplete: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPlanets = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/?search=${query}`);
      setPlanets(response.data.results);
    } catch (error) {
      console.error("Failed to fetch planets:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Wrap the call to `fetchPlanets` in a debounced function
  const debouncedSearch = debounce(fetchPlanets, 500);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      debouncedSearch(searchTerm);
    }
    // Cleanup function to cancel the debounce on component unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search for a planet..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => searchTerm.length >= 2 && fetchPlanets(searchTerm)}
        onBlur={() => setTimeout(() => setPlanets([]), 100)}
      />
      {isLoading && <div>Loading...</div>}
      <ul>
        {planets.map((planet, index) => (
          <li key={index} onClick={() => setSearchTerm(planet.name)}>
            {planet.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetAutocomplete;

