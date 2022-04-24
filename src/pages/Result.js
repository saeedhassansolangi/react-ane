import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export const Result = function (props) {
  const location = useLocation();

  return (
    <div className="result-page">
      <div className='navlink'>
        <Link to="/">Go back to Home Page</Link>
      </div>

      <h2>
        Welcome!, to <span className="page">{location.state.search}</span>
      </h2>
    </div>
  );
};
