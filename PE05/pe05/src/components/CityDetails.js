import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetails({ cities }) {
  const { cityId } = useParams();
  const city = cities.find(c => c.id === parseInt(cityId));

  if (!city) {
    return <div className="city-details">City not found</div>;
  }

  return (
    <div className="city-details">
      <h2>City Details</h2>
      <div className="details-card">
        <h3>{city.name}</h3>
        <p><strong>Country:</strong> {city.country}</p>
        <p><strong>Population:</strong> {city.population.toLocaleString()}</p>
        <p><strong>Description:</strong> {city.description}</p>
      </div>
    </div>
  );
}

export default CityDetails;