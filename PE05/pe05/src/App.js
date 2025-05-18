import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CitiesList from './components/CitiesList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';

function App() {
  // State to store cities data
  const [cities, setCities] = useState([
    { id: 1, name: 'New York', country: 'USA', population: 8419000, description: 'The largest city in the United States, known for its iconic skyline.' },
    { id: 2, name: 'Tokyo', country: 'Japan', population: 13960000, description: 'The capital of Japan, known for its blend of traditional and modern culture.' },
    { id: 3, name: 'Paris', country: 'France', population: 2161000, description: 'Famous for the Eiffel Tower, art, and cuisine.' }
  ]);

  // Function to add a new city
  const addCity = (newCity) => {
    // Create a new ID by finding the maximum ID and adding 1
    const newId = Math.max(...cities.map(city => city.id), 0) + 1;
    const cityWithId = { ...newCity, id: newId };
    setCities([...cities, cityWithId]);
    return newId; // Return the new ID for redirection
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CitiesList cities={cities} />} />
          <Route path="cities" element={<CitiesList cities={cities} />}>
            <Route path=":cityId" element={<CityDetails cities={cities} />} />
          </Route>
          <Route path="add-city" element={<AddCity addCity={addCity} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;