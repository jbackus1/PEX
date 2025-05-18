import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ addCity }) {
  const navigate = useNavigate();
  const [cityData, setCityData] = useState({
    name: '',
    country: '',
    population: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCityData(prevData => ({
      ...prevData,
      [name]: name === 'population' ? (value ? parseInt(value) : '') : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCityId = addCity(cityData);
    // Redirect to the cities list page after adding
    navigate(`/cities/${newCityId}`);
  };

  return (
    <div className="add-city-container">
      <h2>Add New City</h2>
      <form onSubmit={handleSubmit} className="city-form">
        <div className="form-group">
          <label htmlFor="name">City Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={cityData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={cityData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="population">Population:</label>
          <input
            type="number"
            id="population"
            name="population"
            value={cityData.population}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={cityData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;