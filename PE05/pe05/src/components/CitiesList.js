import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function CitiesList({ cities }) {
  return (
    <div className="cities-container">
      <div className="cities-list">
        <h2>Cities List</h2>
        <ul>
          {cities.map(city => (
            <li key={city.id}>
              <Link to={`/cities/${city.id}`}>
                {city.name}, {city.country}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="city-details-container">
        <Outlet />
      </div>
    </div>
  );
}

export default CitiesList;